import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './images/download (3).jpeg';  // Adjust the path according to your file structure

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.overlay} /> {/* Overlay for background opacity */}
      <h2 style={styles.title}>Welcome to Helmet & License Plate Detection</h2>
      <p style={styles.subtitle}>Select an option below:</p>
      <div style={styles.buttonContainer}>
        <button style={{ ...styles.button, ...styles.liveFeedButton }} onClick={() => navigate('/live-feed')}>
          Live Feed Detection
        </button>
        <button style={{ ...styles.button, ...styles.uploadImageButton }} onClick={() => navigate('/upload-image')}>
          Upload Image for Detection
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: { 
    position: 'relative', // Set relative position for the overlay
    textAlign: 'center', 
    marginTop: '50px', 
    backgroundImage: `url(${backgroundImage})`, 
    backgroundSize: 'cover',  
    backgroundPosition: 'center',  
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    height: '100vh',
    color: 'white',  
    overflow: 'hidden', // Prevent content overflow
    border: '10px solid rgba(255, 255, 255, 0.8)', // White border for visibility
    maxWidth: '100%', // Set maximum width
    boxSizing: 'border-box', // Include padding and border in element's total width and height
    margin: '0 auto', // Center the container
    display: 'flex', // Flex display to allow centered content
    flexDirection: 'column', // Stack elements vertically
    justifyContent: 'center', // Center elements vertically
    alignItems: 'center', // Center elements horizontally
  },
  overlay: {
    position: 'absolute', // Position the overlay absolutely
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay with 50% opacity
    zIndex: 1, // Ensure it stays behind the text
    borderRadius: '10px', // Match border radius of the container
  },
  title: { 
    fontSize: '2.5rem', 
    color: 'red', 
    textDecoration: 'underline',
    textDecorationColor: 'orange',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
    marginBottom: '20px',
    position: 'relative', // Make title position relative to stay above overlay
    zIndex: 2, // Bring title above overlay
  },
  subtitle: { 
    fontSize: '1.2rem', 
    color: '#fff', 
    position: 'relative', // Make subtitle position relative to stay above overlay
    zIndex: 2, // Bring subtitle above overlay
  },
  buttonContainer: { 
    display: 'flex', 
    justifyContent: 'center', 
    flexDirection: 'column', 
    alignItems: 'center',
    position: 'relative', // Make button container position relative to stay above overlay
    zIndex: 2, // Bring buttons above overlay
  },
  button: { 
    padding: '15px 30px', 
    margin: '10px', 
    fontSize: '1.2rem', 
    cursor: 'pointer', 
    border: 'none', 
    borderRadius: '5px',
    transition: 'background-color 0.3s, transform 0.2s',
    color: '#fff', // Set button text color
  },
  liveFeedButton: {
    backgroundColor: '#2196F3',
  },
  uploadImageButton: {
    backgroundColor: '#2196F3',
  },
};

export default Home;
