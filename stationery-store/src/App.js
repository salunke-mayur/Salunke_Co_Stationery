import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CartProvider, useCart } from "./context/CartContext";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import About from "./pages/About";
import Contact from "./pages/Contact";
import logo from "./assets/salunke_co_logo.jpg";

function Header() {
  const { itemCount } = useCart();

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.25rem 3rem',
    backgroundColor: '#f5f2ed',
    borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    textDecoration: 'none'
  };

  const logoTextStyle = {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#2c2c2c',
    letterSpacing: '0.02em'
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '2.5rem',
    alignItems: 'center'
  };

  const linkStyle = {
    color: '#2c2c2c',
    textDecoration: 'none',
    fontSize: '0.8rem',
    fontWeight: '500',
    letterSpacing: '0.1em',
    textTransform: 'uppercase'
  };

  const cartLinkStyle = {
    ...linkStyle,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    position: 'relative'
  };

  return (
    <header style={headerStyle}>
      <Link to="/" style={logoContainerStyle}>
        <img
          src={logo}
          alt="Salunke & Co. Logo"
          style={{
            height: '40px',
            width: 'auto',
            borderRadius: '4px'
          }}
        />
        <span style={logoTextStyle}>Salunke & Co.</span>
      </Link>
      <nav style={navLinksStyle}>
        <Link to="/" style={linkStyle}>
          Shop
        </Link>
        <Link to="/about" style={linkStyle}>
          Our Story
        </Link>
        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
        <Link to="/cart" style={cartLinkStyle}>
          Cart
          {itemCount > 0 && (
            <span style={{
              backgroundColor: '#8b7355',
              color: '#fff',
              fontSize: '0.65rem',
              fontWeight: 600,
              minWidth: '18px',
              height: '18px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '0.25rem'
            }}>
              {itemCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
