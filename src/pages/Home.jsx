import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./main.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Elevate Your Style with AxeWear
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover premium fashion for women with elegance, comfort, and
            confidence in every outfit. Curated collections for the modern aesthetic.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="btn-primary" onClick={() => navigate('/products')}>Shop Collection</button>
            <button className="btn-glass" onClick={() => navigate('/about')}>Our Story</button>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Collection */}
      <section className="featured-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Collection
        </motion.h2>

        <div className="featured-cards">
          <motion.div
            className="featured-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={() => navigate('/products')}
          >
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop"
              alt="Luxury Dresses"
            />
            <div className="card-overlay">
              <h3>Luxury Dresses</h3>
            </div>
          </motion.div>

          <motion.div
            className="featured-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => navigate('/products')}
          >
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop"
              alt="Casual Wear"
            />
            <div className="card-overlay">
              <h3>Casual Wear</h3>
            </div>
          </motion.div>

          <motion.div
            className="featured-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => navigate('/products')}
          >
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop"
              alt="Party Collection"
            />
            <div className="card-overlay">
              <h3>Party Collection</h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About AxeWear</h2>
          <p>
            AxeWear brings modern fashion with timeless elegance. We believe
            every woman deserves to feel powerful, stylish, and confident.
            Our collections are carefully curated to ensure the highest quality
            materials and the most striking designs.
          </p>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us
        </motion.h2>
        <div className="why-cards">
          <motion.div 
            className="why-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="why-icon">✨</div>
            <h3>Premium Quality</h3>
            <p>Carefully crafted fashion with premium fabrics that feel as good as they look.</p>
          </motion.div>

          <motion.div 
            className="why-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="why-icon">🔥</div>
            <h3>Latest Trends</h3>
            <p>Stay updated with the newest fashion collections curated by top designers.</p>
          </motion.div>

          <motion.div 
            className="why-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="why-icon">🚀</div>
            <h3>Fast Delivery</h3>
            <p>Quick, reliable, and secure shipping directly to your doorstep worldwide.</p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Join Our Newsletter</h2>
          <p>Get updates about new arrivals, exclusive offers, and early access to sales.</p>
          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe Now</button>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;