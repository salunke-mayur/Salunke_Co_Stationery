import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

  if (submitted) {
    return (
      <div style={{
        backgroundColor: '#faf9f7',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '500px' }}>
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
          <h1 style={{
            fontSize: '2rem',
            fontWeight: 400,
            color: '#2c2c2c',
            marginBottom: '1rem'
          }}>
            Message Sent!
          </h1>
          <p style={{
            color: '#5a5a5a',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            Thank you for reaching out. We'll get back to you as soon as possible.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', subject: '', message: '' });
            }}
            style={{
              backgroundColor: '#2c2c2c',
              color: '#fff',
              padding: '1rem 2rem',
              border: 'none',
              fontSize: '0.85rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer'
            }}
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#faf9f7', minHeight: '100vh' }}>
      {/* Header */}
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
          Get in Touch
        </p>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 400,
          color: '#2c2c2c',
          marginBottom: '1rem'
        }}>
          Contact Us
        </h1>
        <p style={{
          color: '#5a5a5a',
          fontSize: '1rem',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: 1.7
        }}>
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </section>

      {/* Contact Content */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem'
      }}>
        {/* Contact Form */}
        <div>
          <h2 style={{
            fontSize: '1.25rem',
            fontWeight: 500,
            color: '#2c2c2c',
            marginBottom: '1.5rem'
          }}>
            Send a Message
          </h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                required
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={labelStyle}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
                rows={5}
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <button
              type="submit"
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
                cursor: 'pointer'
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h2 style={{
            fontSize: '1.25rem',
            fontWeight: 500,
            color: '#2c2c2c',
            marginBottom: '1.5rem'
          }}>
            Contact Information
          </h2>

          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '1.5rem',
              alignItems: 'flex-start'
            }}>
              <span style={{ fontSize: '1.25rem' }}>📧</span>
              <div>
                <h3 style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: '#2c2c2c',
                  marginBottom: '0.25rem'
                }}>
                  Email
                </h3>
                <a
                  href="mailto:hello@salunkeco.com"
                  style={{
                    color: '#8b7355',
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}
                >
                  hello@salunkeco.com
                </a>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '1.5rem',
              alignItems: 'flex-start'
            }}>
              <span style={{ fontSize: '1.25rem' }}>📍</span>
              <div>
                <h3 style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: '#2c2c2c',
                  marginBottom: '0.25rem'
                }}>
                  Address
                </h3>
                <p style={{
                  color: '#5a5a5a',
                  fontSize: '0.9rem',
                  lineHeight: 1.6
                }}>
                  123 Stationery Lane<br />
                  London, UK<br />
                  SW1A 1AA
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start'
            }}>
              <span style={{ fontSize: '1.25rem' }}>🕐</span>
              <div>
                <h3 style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: '#2c2c2c',
                  marginBottom: '0.25rem'
                }}>
                  Business Hours
                </h3>
                <p style={{
                  color: '#5a5a5a',
                  fontSize: '0.9rem',
                  lineHeight: 1.6
                }}>
                  Monday - Friday: 9am - 6pm<br />
                  Saturday: 10am - 4pm<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Box */}
          <div style={{
            backgroundColor: '#f5f2ed',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: 500,
              color: '#2c2c2c',
              marginBottom: '0.75rem'
            }}>
              Frequently Asked Questions
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: '0.85rem',
              color: '#5a5a5a',
              lineHeight: 1.8
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                • How long does shipping take?
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                • What is your return policy?
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                • Do you ship internationally?
              </li>
              <li>
                • Can I track my order?
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
