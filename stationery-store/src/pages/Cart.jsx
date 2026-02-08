import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, dispatch, total, itemCount } = useCart();
  const navigate = useNavigate();

  const updateQuantity = (id, newQuantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity: newQuantity } });
  };

  const removeItem = (id) => {
    const item = cart.find(item => item.id === id);
    
    // Google Analytics: Track remove from cart event
    if (window.gtag && item) {
      window.gtag('event', 'remove_from_cart', {
        currency: 'GBP',
        value: item.price * item.quantity,
        items: [{
          item_id: item.id,
          item_name: item.name,
          price: item.price,
          quantity: item.quantity
        }]
      });
    }
    
    dispatch({ type: "REMOVE", payload: { id } });
  };

  const handleCheckout = () => {
    // Google Analytics: Track begin checkout event
    if (window.gtag) {
      window.gtag('event', 'begin_checkout', {
        currency: 'GBP',
        value: total >= 50 ? total : total + 5,
        items: cart.map(item => ({
          item_id: item.id,
          item_name: item.name,
          price: item.price,
          quantity: item.quantity
        }))
      });
    }
    
    navigate('/checkout');
  };

  const containerStyle = {
    backgroundColor: '#faf9f7',
    minHeight: '100vh',
    padding: '2rem 3rem'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '3rem'
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 400,
    color: '#2c2c2c',
    marginBottom: '0.5rem'
  };

  const subtitleStyle = {
    color: '#8b7355',
    fontSize: '0.8rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase'
  };

  if (cart.length === 0) {
    return (
      <div style={containerStyle}>
        <div style={{
          textAlign: 'center',
          paddingTop: '4rem',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          <p style={subtitleStyle}>Your cart</p>
          <h1 style={titleStyle}>Your Cart is Empty</h1>
          <p style={{ color: '#6b6b6b', marginBottom: '2rem', lineHeight: 1.6 }}>
            Looks like you haven't added any items to your cart yet.
            Explore our collection and find something you love.
          </p>
          <Link
            to="/"
            style={{
              display: 'inline-block',
              backgroundColor: '#2c2c2c',
              color: '#fff',
              padding: '1rem 2rem',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <p style={subtitleStyle}>{itemCount} {itemCount === 1 ? 'item' : 'items'}</p>
        <h1 style={titleStyle}>Your Cart</h1>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 350px',
        gap: '3rem',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {/* Cart Items */}
        <div>
          {/* Table Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr auto',
            gap: '1rem',
            padding: '0 0 1rem',
            borderBottom: '1px solid rgba(0,0,0,0.1)',
            marginBottom: '1.5rem'
          }}>
            <span style={{ fontSize: '0.75rem', color: '#8b8b8b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Product</span>
            <span style={{ fontSize: '0.75rem', color: '#8b8b8b', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center' }}>Price</span>
            <span style={{ fontSize: '0.75rem', color: '#8b8b8b', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center' }}>Quantity</span>
            <span style={{ fontSize: '0.75rem', color: '#8b8b8b', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'right' }}>Total</span>
            <span style={{ width: '24px' }}></span>
          </div>

          {/* Cart Items */}
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1fr auto',
                gap: '1rem',
                alignItems: 'center',
                padding: '1.5rem 0',
                borderBottom: '1px solid rgba(0,0,0,0.06)'
              }}
            >
              {/* Product Info */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Link to={`/product/${item.id}`}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#f0ebe3',
                    overflow: 'hidden',
                    flexShrink: 0
                  }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </Link>
                <div>
                  <Link
                    to={`/product/${item.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <h3 style={{
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: '#2c2c2c',
                      marginBottom: '0.25rem'
                    }}>
                      {item.name}
                    </h3>
                  </Link>
                  <p style={{ fontSize: '0.8rem', color: '#8b7355' }}>Flourish & Co.</p>
                </div>
              </div>

              {/* Price */}
              <div style={{ textAlign: 'center', color: '#2c2c2c', fontSize: '0.95rem' }}>
                £{item.price}.00
              </div>

              {/* Quantity */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid #ddd',
                  backgroundColor: '#fff'
                }}>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    style={{
                      width: '32px',
                      height: '32px',
                      border: 'none',
                      backgroundColor: 'transparent',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      color: '#2c2c2c'
                    }}
                  >
                    −
                  </button>
                  <span style={{
                    width: '36px',
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    color: '#2c2c2c'
                  }}>
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    style={{
                      width: '32px',
                      height: '32px',
                      border: 'none',
                      backgroundColor: 'transparent',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      color: '#2c2c2c'
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Line Total */}
              <div style={{ textAlign: 'right', color: '#2c2c2c', fontSize: '0.95rem', fontWeight: 500 }}>
                £{item.price * item.quantity}.00
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#8b8b8b',
                  fontSize: '1.25rem',
                  padding: '0.25rem',
                  lineHeight: 1
                }}
                title="Remove item"
              >
                ×
              </button>
            </div>
          ))}

          {/* Continue Shopping Link */}
          <div style={{ marginTop: '2rem' }}>
            <Link
              to="/"
              style={{
                color: '#2c2c2c',
                fontSize: '0.85rem',
                textDecoration: 'underline',
                textUnderlineOffset: '3px'
              }}
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div style={{
          backgroundColor: '#fff',
          padding: '2rem',
          height: 'fit-content',
          border: '1px solid rgba(0,0,0,0.08)'
        }}>
          <h2 style={{
            fontSize: '1.1rem',
            fontWeight: 500,
            color: '#2c2c2c',
            marginBottom: '1.5rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid rgba(0,0,0,0.08)'
          }}>
            Order Summary
          </h2>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '0.75rem',
              fontSize: '0.9rem',
              color: '#5a5a5a'
            }}>
              <span>Subtotal</span>
              <span>£{total}.00</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '0.75rem',
              fontSize: '0.9rem',
              color: '#5a5a5a'
            }}>
              <span>Shipping</span>
              <span>{total >= 50 ? 'Free' : '£5.00'}</span>
            </div>
            {total < 50 && (
              <p style={{
                fontSize: '0.8rem',
                color: '#8b7355',
                marginTop: '0.5rem',
                marginBottom: '0.75rem'
              }}>
                Add £{50 - total}.00 more for free shipping!
              </p>
            )}
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(0,0,0,0.08)',
            marginBottom: '1.5rem'
          }}>
            <span style={{ fontSize: '1rem', fontWeight: 500, color: '#2c2c2c' }}>Total</span>
            <span style={{ fontSize: '1.1rem', fontWeight: 500, color: '#2c2c2c' }}>
              £{total >= 50 ? total : total + 5}.00
            </span>
          </div>

          <button
            onClick={handleCheckout}
            style={{
              width: '100%',
              backgroundColor: '#2c2c2c',
              color: '#fff',
              padding: '1rem',
              border: 'none',
              fontSize: '0.85rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              marginBottom: '1rem'
            }}
          >
            Proceed to Checkout
          </button>

          {/* Payment Methods */}
          <div style={{
            textAlign: 'center',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(0,0,0,0.08)'
          }}>
            <p style={{ fontSize: '0.75rem', color: '#8b8b8b', marginBottom: '0.5rem' }}>
              Secure checkout powered by
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', color: '#8b8b8b', fontSize: '0.8rem' }}>
              <span>💳 Visa</span>
              <span>💳 Mastercard</span>
              <span>💳 PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
