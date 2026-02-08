import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import heroImage from "../assets/hero-stationery.jpg";
import productNotebook from "../assets/product-notebook.jpg";
import productPens from "../assets/product-pens.jpg";
import productCards from "../assets/product-cards.jpg";
import productSeals from "../assets/product-seals.jpg";

const featuredProducts = [
  { id: 1, name: "Linen Journal", price: 36, image: productNotebook },
  { id: 2, name: "Calligraphy Set", price: 52, image: productPens },
  { id: 3, name: "Floral Card Collection", price: 24, image: productCards },
  { id: 4, name: "Wax Seal Kit", price: 45, image: productSeals },
];

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#products') {
      const element = document.getElementById('products');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src={heroImage}
            alt="Beautiful stationery collection with notebooks, pens, and wax seals"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)' }} />
        </div>

        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 1.5rem',
          maxWidth: '42rem'
        }}>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '0.875rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            Handcrafted with care
          </p>
          <h1 style={{
            fontSize: '3rem',
            color: '#ffffff',
            marginBottom: '1.5rem',
            lineHeight: 1.1,
            fontWeight: 'bold'
          }}>
            The Art of Beautiful Writing
          </h1>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1.125rem',
            marginBottom: '2rem',
            fontWeight: 300,
            lineHeight: 1.6
          }}>
            Premium stationery for those who believe in the power of pen and paper.
          </p>
          <a
            href="#products"
            style={{
              display: 'inline-block',
              backgroundColor: '#5e0202ff',
              color: '#f6f1f1ff',
              padding: '0.75rem 2rem',
              fontSize: '0.875rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 500,
              textDecoration: 'none',
              borderRadius: '2px',
              transition: 'opacity 0.2s'
            }}
          >
            Explore Collection
          </a>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section id="products" style={{
        padding: '5rem 2rem',
        backgroundColor: '#faf9f7',
        textAlign: 'center'
      }}>
        <p style={{
          color: '#8b7355',
          fontSize: '0.75rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          marginBottom: '0.75rem'
        }}>
          Curated for you
        </p>
        <h2 style={{
          fontSize: '2.25rem',
          color: '#2c2c2c',
          marginBottom: '3rem',
          fontWeight: 400
        }}>
          Featured Collection
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {featuredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              style={{ textAlign: 'left', textDecoration: 'none' }}
            >
              <div style={{
                aspectRatio: '1',
                overflow: 'hidden',
                marginBottom: '1rem',
                backgroundColor: '#f0ebe3'
              }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <h3 style={{
                fontSize: '0.95rem',
                fontWeight: 500,
                color: '#2c2c2c',
                marginBottom: '0.25rem'
              }}>
                {product.name}
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: '#6b6b6b'
              }}>
                £{product.price}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section style={{
        padding: '5rem 2rem',
        backgroundColor: '#faf9f7',
        textAlign: 'center',
        borderTop: '1px solid rgba(0,0,0,0.06)'
      }}>
        <p style={{
          color: '#8b7355',
          fontSize: '0.75rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          marginBottom: '0.75rem'
        }}>
          Our Story
        </p>
        <h2 style={{
          fontSize: '2.25rem',
          color: '#2c2c2c',
          marginBottom: '1.5rem',
          fontWeight: 400
        }}>
          Crafted with Intention
        </h2>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          color: '#5a5a5a',
          lineHeight: 1.8,
          fontSize: '0.95rem'
        }}>
          <p style={{ marginBottom: '1.5rem' }}>
            At Salunke & Co., we believe every mark on paper carries meaning. Our collections are
            thoughtfully designed for those who treasure the tactile beauty of handwritten notes,
            sketched ideas, and sealed letters.
          </p>
          <p>
            Each piece is crafted from sustainably sourced materials, blending timeless design with
            modern sensibility. From our studio to your desk, we invite you to slow down and
            rediscover the joy of putting pen to paper.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: '#faf9f7',
        textAlign: 'center',
        borderTop: '1px solid rgba(0,0,0,0.06)'
      }}>
        <p style={{
          color: '#8b7355',
          fontSize: '0.75rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          marginBottom: '0.75rem'
        }}>
          Stay in Touch
        </p>
        <h2 style={{
          fontSize: '1.75rem',
          color: '#2c2c2c',
          marginBottom: '0.75rem',
          fontWeight: 400
        }}>
          Join Our Letter Club
        </h2>
        <p style={{
          color: '#6b6b6b',
          fontSize: '0.875rem',
          marginBottom: '1.5rem'
        }}>
          Be the first to know about new collections, behind-the-scenes stories, and exclusive offers.
        </p>
        <form style={{
          display: 'flex',
          gap: '0.5rem',
          maxWidth: '400px',
          margin: '0 auto',
          justifyContent: 'center'
        }} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email address"
            style={{
              flex: 1,
              padding: '0.75rem 1rem',
              border: '1px solid #ddd',
              borderRadius: '2px',
              fontSize: '0.875rem',
              outline: 'none',
              backgroundColor: '#fff'
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#8b7355',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '2px',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer'
            }}
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 3rem',
        backgroundColor: '#faf9f7',
        borderTop: '1px solid rgba(0,0,0,0.08)'
      }}>
        <span style={{
          fontSize: '1rem',
          fontWeight: 500,
          color: '#2c2c2c'
        }}>
          Salunke & Co.
        </span>
        <span style={{
          fontSize: '0.75rem',
          color: '#8b8b8b'
        }}>
          © 2026 Salunke & Co. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
