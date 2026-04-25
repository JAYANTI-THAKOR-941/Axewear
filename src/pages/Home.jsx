import React from "react";
import { motion } from "framer-motion";
import "./main.css";

const Home = () => {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Elevate Your Style with AxeWear</h1>
          <p>
            Discover premium fashion for women with elegance, comfort, and
            confidence in every outfit.
          </p>
          <button>Shop Now</button>
        </motion.div>
      </section>

      {/* Featured Collection */}
      <section className="featured-section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Featured Collection
        </motion.h2>

        <div className="featured-cards">
          <motion.div
            className="card"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
              alt="Dress"
            />
            <h3>Luxury Dresses</h3>
          </motion.div>

          <motion.div
            className="card"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
              alt="Casual"
            />
            <h3>Casual Wear</h3>
          </motion.div>

          <motion.div
            className="card"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
              alt="Party"
            />
            <h3>Party Collection</h3>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>About AxeWear</h2>
          <p>
            AxeWear brings modern fashion with timeless elegance. We believe
            every woman deserves to feel powerful, stylish, and confident.
          </p>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <h2>Why Choose Us</h2>
        <div className="why-cards">
          <motion.div whileHover={{ y: -10 }} className="why-card">
            <h3>Premium Quality</h3>
            <p>Carefully crafted fashion with premium fabrics.</p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="why-card">
            <h3>Latest Trends</h3>
            <p>Stay updated with the newest fashion collections.</p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="why-card">
            <h3>Fast Delivery</h3>
            <p>Quick and reliable shipping at your doorstep.</p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Join Our Newsletter</h2>
          <p>Get updates about new arrivals and exclusive offers.</p>
          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;