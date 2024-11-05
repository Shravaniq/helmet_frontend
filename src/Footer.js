import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Helmet & License Plate Detection | All Rights Reserved</p>
    </footer>
  );
};

const styles = {
  footer: { textAlign: 'center', padding: '1rem', background: '#333', color: '#fff', marginTop: 'auto' }
};

export default Footer;
