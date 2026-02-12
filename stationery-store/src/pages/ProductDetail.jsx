import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import productNotebook from "../assets/product-notebook.jpg";
import productPens from "../assets/product-pens.jpg";
import productCards from "../assets/product-cards.jpg";
import productSeals from "../assets/product-seals.jpg";

const products = {
  1: {
    id: 1,
    name: "Linen Journal",
    price: 36,
    image: productNotebook,
    description: "A beautifully crafted linen-bound journal perfect for capturing your thoughts, sketches, and daily reflections. Features 192 pages of premium cream-colored paper with a subtle dot grid pattern.",
    details: [
      "192 pages of 100gsm acid-free paper",
      "Subtle dot grid pattern",
      "Linen hardcover with rounded corners",
      "Lay-flat binding",
      "Ribbon bookmark included",
      "Dimensions: 5.5\" x 8.25\""
    ]
  },
  2: {
    id: 2,
    name: "Calligraphy Set",
    price: 52,
    image: productPens,
    description: "Begin your calligraphy journey with this comprehensive starter set. Includes high-quality nibs, a comfortable pen holder, and rich archival ink in classic black.",
    details: [
      "1 ergonomic pen holder",
      "5 interchangeable nibs (various sizes)",
      "30ml bottle of archival black ink",
      "Practice guide booklet included",
      "Presented in a keepsake box",
      "Suitable for beginners and intermediate"
    ]
  },
  3: {
    id: 3,
    name: "Floral Card Collection",
    price: 24,
    image: productCards,
    description: "A curated collection of botanical-inspired greeting cards, letterpress printed on luxurious cotton paper. Perfect for heartfelt notes and special occasions.",
    details: [
      "Set of 12 cards with envelopes",
      "6 unique floral designs (2 of each)",
      "Letterpress printed",
      "220gsm cotton paper",
      "Blank interior for personal messages",
      "Packaged in a reusable box"
    ]
  },
  4: {
    id: 4,
    name: "Wax Seal Kit",
    price: 45,
    image: productSeals,
    description: "Add a touch of elegance to your correspondence with our artisan wax seal kit. Features a brass seal stamp with a timeless botanical design and premium sealing wax.",
    details: [
      "Solid brass seal stamp (25mm)",
      "Botanical wreath design",
      "8 sticks of premium sealing wax",
      "Colors: burgundy, forest green, gold, navy",
      "Wooden handle with brass fittings",
      "Instructions and tips included"
    ]
  }
};

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch, itemCount, total } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showCartPopup, setShowCartPopup] = useState(false);

  const product = products[id];

  // Google Analytics: Track view_item event when product page loads
  // Meta Pixel: Track ViewContent event when product page loads
  useEffect(() => {
    if (product) {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', 'view_item', {
          currency: 'GBP',
          value: product.price,
          items: [{
            item_id: `${product.id}`,
            item_name: product.name,
            item_brand: 'Salunke & Co.',
            item_category: 'Stationery',
            price: product.price,
            quantity: 1
          }]
        });
      }

      // Meta Pixel
      if (window.fbq) {
        window.fbq('track', 'ViewContent', {
          content_ids: [`${product.id}`],
          content_name: product.name,
          content_type: 'product',
          content_category: 'Stationery',
          value: product.price,
          currency: 'GBP'
        });
      }
    }
  }, [product]);

  if (!product) {
    return (
      <div style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        backgroundColor: '#faf9f7',
        minHeight: '60vh'
      }}>
        <h1 style={{ color: '#2c2c2c', marginBottom: '1rem' }}>Product Not Found</h1>
        <button
          onClick={() => navigate('/')}
          style={{
            backgroundColor: '#2c2c2c',
            color: '#fff',
            padding: '0.75rem 2rem',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({
      type: "ADD",
      payload: { id: product.id, name: product.name, price: product.price, quantity: quantity }
    });

    // Google Analytics: Track add to cart event
    if (window.gtag) {
      window.gtag('event', 'add_to_cart', {
        currency: 'GBP',
        value: product.price * quantity,
        items: [{
          item_id: `${product.id}`,
          item_name: product.name,
          item_brand: 'Salunke & Co.',
          item_category: 'Stationery',
          price: product.price,
          quantity: quantity
        }]
      });
    }

    // Meta Pixel: Track AddToCart event
    if (window.fbq) {
      window.fbq('track', 'AddToCart', {
        content_ids: [`${product.id}`],
        content_name: product.name,
        content_type: 'product',
        value: product.price * quantity,
        currency: 'GBP'
      });
    }

    setShowCartPopup(true);
  };

  const closePopup = () => {
    setShowCartPopup(false);
    setQuantity(1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div style={{ backgroundColor: '#faf9f7', minHeight: '100vh' }}>
      {/* Cart Added Popup/Modal */}
      {showCartPopup && (
        <>
          {/* Overlay */}
          <div
            onClick={closePopup}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 100
            }}
          />

          {/* Popup */}
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
            zIndex: 101,
            width: '90%',
            maxWidth: '450px'
          }}>
            {/* Close Button */}
            <button
              onClick={closePopup}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#8b8b8b',
                lineHeight: 1
              }}
            >
              ×
            </button>

            {/* Success Icon */}
            <div style={{
              width: '50px',
              height: '50px',
              backgroundColor: '#6b8f71',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              color: '#fff',
              fontSize: '1.5rem'
            }}>
              ✓
            </div>

            <h2 style={{
              textAlign: 'center',
              fontSize: '1.25rem',
              fontWeight: 500,
              color: '#2c2c2c',
              marginBottom: '1.5rem'
            }}>
              Added to Cart!
            </h2>

            {/* Product Added */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              padding: '1rem',
              backgroundColor: '#faf9f7',
              borderRadius: '4px',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                backgroundColor: '#f0ebe3',
                overflow: 'hidden',
                flexShrink: 0,
                borderRadius: '4px'
              }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: '#2c2c2c',
                  marginBottom: '0.25rem'
                }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#8b7355', marginBottom: '0.25rem' }}>
                  Qty: {quantity}
                </p>
                <p style={{ fontSize: '0.9rem', color: '#2c2c2c', fontWeight: 500 }}>
                  £{product.price * quantity}.00
                </p>
              </div>
            </div>

            {/* Cart Summary */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '1rem 0',
              borderTop: '1px solid rgba(0,0,0,0.08)',
              borderBottom: '1px solid rgba(0,0,0,0.08)',
              marginBottom: '1.5rem'
            }}>
              <span style={{ fontSize: '0.9rem', color: '#5a5a5a' }}>
                Cart Total ({itemCount} {itemCount === 1 ? 'item' : 'items'})
              </span>
              <span style={{ fontSize: '1rem', fontWeight: 500, color: '#2c2c2c' }}>
                £{total}.00
              </span>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link
                to="/cart"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  backgroundColor: '#2c2c2c',
                  color: '#fff',
                  padding: '1rem',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  borderRadius: '4px'
                }}
              >
                View Cart
              </Link>
              <button
                onClick={closePopup}
                style={{
                  backgroundColor: 'transparent',
                  color: '#2c2c2c',
                  padding: '1rem',
                  border: '1px solid #2c2c2c',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  borderRadius: '4px'
                }}
              >
                Continue Shopping
              </button>
              <Link
                to="/#products"
                onClick={closePopup}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  color: '#8b7355',
                  padding: '0.5rem',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                  fontSize: '0.85rem'
                }}
              >
                Browse More Products
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Breadcrumb */}
      <div style={{
        padding: '1rem 3rem',
        fontSize: '0.8rem',
        color: '#8b8b8b'
      }}>
        <span
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
        >
          Home
        </span>
        <span style={{ margin: '0 0.5rem' }}>/</span>
        <span
          onClick={() => navigate('/#products')}
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
        >
          Shop
        </span>
        <span style={{ margin: '0 0.5rem' }}>/</span>
        <span style={{ color: '#2c2c2c' }}>{product.name}</span>
      </div>

      {/* Product Content */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        padding: '2rem 3rem 4rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Product Image */}
        <div style={{
          aspectRatio: '1',
          backgroundColor: '#f0ebe3',
          overflow: 'hidden'
        }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Product Info */}
        <div style={{ paddingTop: '1rem' }}>
          <p style={{
            color: '#8b7355',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem'
          }}>
            Salunke & Co.
          </p>

          <h1 style={{
            fontSize: '2rem',
            fontWeight: 400,
            color: '#2c2c2c',
            marginBottom: '0.75rem'
          }}>
            {product.name}
          </h1>

          <p style={{
            fontSize: '1.25rem',
            color: '#2c2c2c',
            marginBottom: '1.5rem'
          }}>
            £{product.price}.00
          </p>

          <p style={{
            color: '#5a5a5a',
            lineHeight: 1.7,
            marginBottom: '1.5rem',
            fontSize: '0.95rem'
          }}>
            {product.description}
          </p>

          {/* Product Details */}
          <div style={{ marginBottom: '2rem' }}>
            <p style={{
              fontSize: '0.85rem',
              fontWeight: 500,
              color: '#2c2c2c',
              marginBottom: '0.75rem'
            }}>
              Details:
            </p>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {product.details.map((detail, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: '0.85rem',
                    color: '#6b6b6b',
                    marginBottom: '0.4rem',
                    paddingLeft: '1rem',
                    position: 'relative'
                  }}
                >
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: '#8b7355'
                  }}>•</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          {/* Quantity Selector */}
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{
              fontSize: '0.85rem',
              fontWeight: 500,
              color: '#2c2c2c',
              marginBottom: '0.75rem'
            }}>
              Quantity:
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #ddd',
              width: 'fit-content'
            }}>
              <button
                onClick={decrementQuantity}
                style={{
                  width: '40px',
                  height: '40px',
                  border: 'none',
                  backgroundColor: 'transparent',
                  fontSize: '1.25rem',
                  cursor: 'pointer',
                  color: '#2c2c2c'
                }}
              >
                −
              </button>
              <span style={{
                width: '50px',
                textAlign: 'center',
                fontSize: '0.95rem',
                color: '#2c2c2c'
              }}>
                {quantity}
              </span>
              <button
                onClick={incrementQuantity}
                style={{
                  width: '40px',
                  height: '40px',
                  border: 'none',
                  backgroundColor: 'transparent',
                  fontSize: '1.25rem',
                  cursor: 'pointer',
                  color: '#2c2c2c'
                }}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            style={{
              width: '100%',
              backgroundColor: '#2c2c2c',
              color: '#fff',
              padding: '1rem 2rem',
              border: 'none',
              fontSize: '0.85rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              marginBottom: '1rem'
            }}
          >
            Add to Cart
          </button>

          {/* Continue Shopping */}
          <button
            onClick={() => navigate('/')}
            style={{
              width: '100%',
              backgroundColor: 'transparent',
              color: '#2c2c2c',
              padding: '1rem 2rem',
              border: '1px solid #2c2c2c',
              fontSize: '0.85rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer'
            }}
          >
            Continue Shopping
          </button>

          {/* Shipping Info */}
          <div style={{
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(0,0,0,0.08)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '0.75rem'
            }}>
              <span style={{ fontSize: '1rem' }}>📦</span>
              <span style={{ fontSize: '0.85rem', color: '#5a5a5a' }}>
                Free shipping on orders over £50
              </span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <span style={{ fontSize: '1rem' }}>↩️</span>
              <span style={{ fontSize: '0.85rem', color: '#5a5a5a' }}>
                30-day returns for unused items
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
