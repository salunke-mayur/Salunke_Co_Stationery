import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const SECRET_CODE = "SALUNKE2026";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, dispatch, total } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    secretCode: ''
  });
  const [error, setError] = useState('');

  const shipping = total >= 50 ? 0 : 5;
  const finalTotal = total + shipping;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  function submit(e) {
    e.preventDefault();

    if (formData.secretCode !== SECRET_CODE) {
      setError('Invalid secret code. Please try again.');
      return;
    }

    dispatch({ type: "CLEAR" });
    navigate("/success", { state: { name: formData.name } });
  }

  const inputStyle = {
    width: '100%',
    padding: '0.875rem 1rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '0.9rem',
    outline: 'none',
    backgroundColor: '#fff',
    boxSizing: 'border-box'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: 500,
    color: '#2c2c2c',
    marginBottom: '0.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };

  if (cart.length === 0) {
    return (
      <div style={{
        backgroundColor: '#faf9f7',
        minHeight: '100vh',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#2c2c2c', marginBottom: '1rem' }}>Your cart is empty</h1>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            backgroundColor: '#2c2c2c',
            color: '#fff',
            padding: '1rem 2rem',
            textDecoration: 'none',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#faf9f7', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        borderBottom: '1px solid rgba(0,0,0,0.06)'
      }}>
        <p style={{
          color: '#8b7355',
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '0.5rem'
        }}>
          Complete Your Order
        </p>
        <h1 style={{ fontSize: '2rem', fontWeight: 400, color: '#2c2c2c' }}>
          Checkout
        </h1>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 400px',
        gap: '3rem',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '2rem 3rem 4rem'
      }}>
        {/* Checkout Form */}
        <form onSubmit={submit}>
          {/* Your Details */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{
              fontSize: '1rem',
              fontWeight: 500,
              color: '#2c2c2c',
              marginBottom: '1.25rem',
              paddingBottom: '0.75rem',
              borderBottom: '1px solid rgba(0,0,0,0.08)'
            }}>
              Your Details
            </h2>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={labelStyle}>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={labelStyle}>Secret Code</label>
              <input
                type="password"
                name="secretCode"
                value={formData.secretCode}
                onChange={handleChange}
                placeholder="Enter secret code"
                required
                style={{
                  ...inputStyle,
                  border: error ? '1px solid #d32f2f' : '1px solid #ddd'
                }}
              />
              {error && (
                <p style={{
                  color: '#d32f2f',
                  fontSize: '0.8rem',
                  marginTop: '0.5rem'
                }}>
                  {error}
                </p>
              )}
              <p style={{
                color: '#8b8b8b',
                fontSize: '0.75rem',
                marginTop: '0.5rem',
                fontStyle: 'italic'
              }}>
                Enter the secret code to complete your order
              </p>
            </div>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#2c2c2c',
              color: '#fff',
              padding: '1.125rem 2rem',
              border: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer'
            }}
          >
            Place Order • £{finalTotal}.00
          </button>

          <p style={{
            textAlign: 'center',
            marginTop: '1rem',
            fontSize: '0.8rem',
            color: '#8b8b8b'
          }}>
            🔒 Your order is protected
          </p>
        </form>

        {/* Order Summary Sidebar */}
        <div style={{
          backgroundColor: '#fff',
          padding: '1.5rem',
          height: 'fit-content',
          border: '1px solid rgba(0,0,0,0.08)'
        }}>
          <h2 style={{
            fontSize: '1rem',
            fontWeight: 500,
            color: '#2c2c2c',
            marginBottom: '1.25rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid rgba(0,0,0,0.08)'
          }}>
            Order Summary
          </h2>

          {/* Cart Items */}
          <div style={{ marginBottom: '1.5rem' }}>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  marginBottom: '1rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid rgba(0,0,0,0.04)'
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#f0ebe3',
                  overflow: 'hidden',
                  flexShrink: 0,
                  position: 'relative'
                }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '-6px',
                    right: '-6px',
                    backgroundColor: '#8b7355',
                    color: '#fff',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    fontSize: '0.7rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {item.quantity}
                  </span>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: '#2c2c2c',
                    marginBottom: '0.25rem'
                  }}>
                    {item.name}
                  </h3>
                  <p style={{ fontSize: '0.75rem', color: '#8b8b8b' }}>
                    Qty: {item.quantity}
                  </p>
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#2c2c2c',
                  fontWeight: 500
                }}>
                  £{item.price * item.quantity}.00
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div style={{ fontSize: '0.9rem' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '0.5rem',
              color: '#5a5a5a'
            }}>
              <span>Subtotal</span>
              <span>£{total}.00</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '0.5rem',
              color: '#5a5a5a'
            }}>
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `£${shipping}.00`}</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '1rem',
              marginTop: '0.5rem',
              borderTop: '1px solid rgba(0,0,0,0.08)',
              fontWeight: 500,
              color: '#2c2c2c'
            }}>
              <span>Total</span>
              <span style={{ fontSize: '1.1rem' }}>£{finalTotal}.00</span>
            </div>
          </div>

          {/* Back to Cart Link */}
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link
              to="/cart"
              style={{
                color: '#8b7355',
                fontSize: '0.8rem',
                textDecoration: 'underline',
                textUnderlineOffset: '3px'
              }}
            >
              ← Back to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
