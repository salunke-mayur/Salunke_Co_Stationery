import { Link } from "react-router-dom";

export default function About() {
  return (
    <div style={{ backgroundColor: '#faf9f7', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        borderBottom: '1px solid rgba(0,0,0,0.06)'
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
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 400,
          color: '#2c2c2c',
          marginBottom: '1rem'
        }}>
          Crafted with Intention
        </h1>
        <p style={{
          color: '#5a5a5a',
          fontSize: '1rem',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: 1.7
        }}>
          The art of beautiful writing, preserved for generations to come.
        </p>
      </section>

      {/* Story Content */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 500,
            color: '#2c2c2c',
            marginBottom: '1rem'
          }}>
            How It All Began
          </h2>
          <p style={{
            color: '#5a5a5a',
            lineHeight: 1.8,
            marginBottom: '1rem'
          }}>
            Salunke & Co. was born from a simple belief: that in our digital age, the act of
            putting pen to paper carries more meaning than ever. Founded in 2020, we set out
            to create stationery that inspires people to slow down, reflect, and connect
            through handwritten words.
          </p>
          <p style={{
            color: '#5a5a5a',
            lineHeight: 1.8
          }}>
            What started as a small collection of handcrafted journals has grown into a
            curated selection of premium stationery, each piece designed with care and
            intention.
          </p>
        </div>

        <div style={{
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 500,
            color: '#2c2c2c',
            marginBottom: '1rem'
          }}>
            Our Philosophy
          </h2>
          <p style={{
            color: '#5a5a5a',
            lineHeight: 1.8,
            marginBottom: '1rem'
          }}>
            We believe that beautiful stationery can transform the everyday act of writing
            into something special. Every product in our collection is thoughtfully sourced
            and selected to bring joy to your desk and meaning to your words.
          </p>
        </div>

        <div style={{
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 500,
            color: '#2c2c2c',
            marginBottom: '1rem'
          }}>
            Sustainability
          </h2>
          <p style={{
            color: '#5a5a5a',
            lineHeight: 1.8
          }}>
            We're committed to sustainability in everything we do. From responsibly sourced
            materials to eco-friendly packaging, we strive to minimize our environmental
            footprint while maximizing the beauty and quality of our products.
          </p>
        </div>

        {/* Values */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          marginTop: '3rem',
          paddingTop: '3rem',
          borderTop: '1px solid rgba(0,0,0,0.08)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>✨</div>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: 500,
              color: '#2c2c2c',
              marginBottom: '0.5rem'
            }}>
              Quality
            </h3>
            <p style={{
              fontSize: '0.85rem',
              color: '#6b6b6b',
              lineHeight: 1.6
            }}>
              Premium materials and exceptional craftsmanship in every piece.
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🌿</div>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: 500,
              color: '#2c2c2c',
              marginBottom: '0.5rem'
            }}>
              Sustainable
            </h3>
            <p style={{
              fontSize: '0.85rem',
              color: '#6b6b6b',
              lineHeight: 1.6
            }}>
              Responsibly sourced materials and eco-friendly practices.
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>💝</div>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: 500,
              color: '#2c2c2c',
              marginBottom: '0.5rem'
            }}>
              Thoughtful
            </h3>
            <p style={{
              fontSize: '0.85rem',
              color: '#6b6b6b',
              lineHeight: 1.6
            }}>
              Every detail considered, every product curated with care.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        backgroundColor: '#f5f2ed'
      }}>
        <h2 style={{
          fontSize: '1.75rem',
          fontWeight: 400,
          color: '#2c2c2c',
          marginBottom: '1rem'
        }}>
          Discover Our Collection
        </h2>
        <p style={{
          color: '#5a5a5a',
          marginBottom: '1.5rem'
        }}>
          Explore our carefully curated selection of premium stationery.
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
          Shop Now
        </Link>
      </section>
    </div>
  );
}
