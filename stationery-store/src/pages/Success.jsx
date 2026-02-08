import { Link, useLocation } from "react-router-dom";

export default function Success() {
  const location = useLocation();
  const name = location.state?.name || 'Guest';
  const orderNumber = location.state?.orderId || `SC${Math.floor(Math.random() * 90000) + 10000}`;

  return (
    <div style={{
      backgroundColor: '#faf9f7',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '500px'
      }}>
        {/* Success Icon */}
        <div style={{
          width: '80px',
          height: '80px',
          backgroundColor: '#6b8f71',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 2rem',
          fontSize: '2.5rem',
          color: '#fff'
        }}>
          ✓
        </div>

        <p style={{
          color: '#8b7355',
          fontSize: '0.75rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          marginBottom: '0.75rem'
        }}>
          Order Confirmed
        </p>

        <h1 style={{
          fontSize: '2rem',
          fontWeight: 400,
          color: '#2c2c2c',
          marginBottom: '1rem'
        }}>
          Thank You, {name}!
        </h1>

        <p style={{
          color: '#5a5a5a',
          lineHeight: 1.7,
          marginBottom: '2rem',
          fontSize: '0.95rem'
        }}>
          Your order has been successfully placed. Please save your confirmation code below for your records.
        </p>

        {/* Order Confirmation Box */}
        <div style={{
          backgroundColor: '#fff',
          padding: '2rem',
          marginBottom: '2rem',
          border: '1px solid rgba(0,0,0,0.08)',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '0.75rem',
            color: '#8b8b8b',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginBottom: '0.75rem'
          }}>
            Your Confirmation Code
          </p>
          <p style={{
            fontSize: '2rem',
            fontWeight: 600,
            color: '#2c2c2c',
            letterSpacing: '0.1em',
            fontFamily: 'monospace',
            backgroundColor: '#f5f2ed',
            padding: '1rem',
            borderRadius: '4px'
          }}>
            {orderNumber}
          </p>
          <p style={{
            fontSize: '0.8rem',
            color: '#8b7355',
            marginTop: '1rem',
            fontStyle: 'italic'
          }}>
            Please keep this code safe for reference
          </p>
        </div>

        {/* Order Details */}
        <div style={{
          backgroundColor: '#fff',
          padding: '1.5rem',
          marginBottom: '2rem',
          border: '1px solid rgba(0,0,0,0.08)',
          textAlign: 'left'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '0.75rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid rgba(0,0,0,0.06)'
          }}>
            <span style={{ fontSize: '0.85rem', color: '#8b8b8b' }}>Customer Name</span>
            <span style={{ fontSize: '0.85rem', color: '#2c2c2c', fontWeight: 500 }}>
              {name}
            </span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '0.75rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid rgba(0,0,0,0.06)'
          }}>
            <span style={{ fontSize: '0.85rem', color: '#8b8b8b' }}>Order Date</span>
            <span style={{ fontSize: '0.85rem', color: '#2c2c2c', fontWeight: 500 }}>
              {new Date().toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <span style={{ fontSize: '0.85rem', color: '#8b8b8b' }}>Status</span>
            <span style={{
              fontSize: '0.85rem',
              color: '#6b8f71',
              fontWeight: 500
            }}>
              ✓ Confirmed
            </span>
          </div>
        </div>

        <Link
          to="/"
          style={{
            display: 'inline-block',
            backgroundColor: '#2c2c2c',
            color: '#fff',
            padding: '1rem 2.5rem',
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}
        >
          Continue Shopping
        </Link>

        <p style={{
          marginTop: '1.5rem',
          fontSize: '0.8rem',
          color: '#8b8b8b'
        }}>
          Questions? Contact us at{' '}
          <a href="mailto:hello@salunkeco.com" style={{ color: '#8b7355' }}>
            hello@salunkeco.com
          </a>
        </p>
      </div>
    </div>
  );
}
