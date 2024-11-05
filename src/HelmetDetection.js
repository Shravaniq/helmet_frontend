import React from 'react';

const HelmetDetection = () => {
    return (
        <div>
            <h2>Helmet and License Plate Detection Live Feed</h2>
            <img src="http://127.0.0.1:5000/video_feed" alt="Live Feed" style={{ width: '100%', height: 'auto' }} />
        </div>
    );
};

export default HelmetDetection;
