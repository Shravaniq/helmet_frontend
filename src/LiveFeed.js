import React from 'react';

const LiveFeed = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Helmet and License Plate Detection - Live Feed</h2>
      <div style={styles.videoContainer}>
        <img 
          src="http://127.0.0.1:5000/video_feed" 
          alt="Live Feed" 
          style={styles.video} 
        />
      </div>
    </div>
  );
};

const styles = {
  container: { 
    textAlign: 'center', 
    marginTop: '50px', 
    background: '#f4f4f4', // Light gray background for the container
    padding: '20px', // Padding around the container
    borderRadius: '10px', // Rounded corners
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow
  },
  title: { 
    fontSize: '2rem', 
    color: '#FF9800', // Vibrant title color
    marginBottom: '20px', // Spacing below the title
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', // Text shadow for depth
  },
  videoContainer: { 
    maxWidth: '800px', 
    margin: '0 auto', 
    borderRadius: '10px', // Match container style
    overflow: 'hidden', // Prevents overflow
    border: '2px solid #333', // Border around the video container
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Slight shadow
  },
  video: { 
    width: '100%', 
    height: 'auto' 
  },
};

export default LiveFeed;
