import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll('.nav-link');

    const handleMouseEnter = (e) => {
      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; // Light background on hover
      e.target.style.color = '#FF9800'; // Change text color on hover
    };

    const handleMouseLeave = (e) => {
      e.target.style.backgroundColor = 'transparent'; // Reset background
      e.target.style.color = '#fff'; // Reset text color
    };

    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup function to remove event listeners
    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []); // Empty dependency array to run only on mount and unmount

  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Helmet & Plate Detection</h1>
      <div style={styles.links}>
        <Link to="/" style={styles.link} className="nav-link">Home</Link>
        <Link to="/live-feed" style={styles.link} className="nav-link">Live Feed</Link>
        <Link to="/upload-image" style={styles.link} className="nav-link">Upload Image</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', // Center items vertically
    padding: '0.5rem 2rem', // Reduced height with less padding
    background: '#333', // Simple solid background color
    color: '#fff', 
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
  },
  logo: { 
    fontSize: '1.5rem', // Slightly larger font size
    fontWeight: 'bold', // Bold font
  },
  links: { 
    display: 'flex', 
    gap: '1.5rem', // Gap between links
  },
  link: { 
    color: '#fff', 
    textDecoration: 'none', 
    fontSize: '1.1rem', // Slightly smaller font size
    padding: '0.4rem 0.8rem', // Padding around links
    borderRadius: '5px', // Rounded corners
    transition: 'background-color 0.3s, color 0.3s', // Smooth transition
  },
};

export default Navbar;
