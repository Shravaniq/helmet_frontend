import React, { useState } from 'react';
import axios from 'axios';

const UploadImage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [result, setResult] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const uploadImage = async () => {
        if (!selectedFile) {
            alert("Please select a file to upload.");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await axios.post('http://127.0.0.1:5000/detect', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setResult(response.data);
        } catch (error) {
            console.error("There was an error processing the file!", error);
            alert("Error uploading image.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        uploadImage(); // Call the uploadImage function on form submission
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Upload Image for Helmet and License Plate Detection</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input type="file" onChange={handleFileChange} style={styles.fileInput} />
                <button type="submit" style={styles.button}>Upload and Detect</button>
            </form>
            {result && (
                <div style={styles.resultContainer}>
                    <h3 style={styles.resultTitle}>Results:</h3>
                    <p style={styles.resultText}>Helmet Detected: {result.helmet_detected ? "Yes" : "No"}</p>
                    <p style={styles.resultText}>License Plates (if no helmet detected): {result.license_plates.join(', ')}</p>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: { 
        textAlign: 'center', 
        marginTop: '50px', 
        background: '#f4f4f4', // Light gray background
        padding: '20px', // Padding for spacing
        borderRadius: '10px', // Rounded corners
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow
    },
    title: { 
        fontSize: '2rem', 
        color: '#FF9800', // Vibrant title color
        marginBottom: '20px', // Spacing below the title
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center items in the form
    },
    fileInput: { 
        marginBottom: '20px', 
        padding: '10px', 
        border: '2px solid #FF9800', // Border for the file input
        borderRadius: '5px', // Rounded corners
        fontSize: '1rem', // Font size
    },
    button: {
        padding: '10px 20px', 
        border: 'none', 
        borderRadius: '5px', 
        background: '#FF9800', // Button background color
        color: '#fff', 
        fontSize: '1rem', 
        cursor: 'pointer', // Pointer on hover
        transition: 'background 0.3s ease', // Smooth background transition
    },
    buttonHover: {
        background: '#e68a00', // Slightly darker shade on hover
    },
    resultContainer: { 
        marginTop: '30px', 
        textAlign: 'left', // Align results to the left
        padding: '10px', 
        background: '#fff', // White background for results
        borderRadius: '5px', 
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Shadow for results
    },
    resultTitle: { 
        fontSize: '1.5rem', 
        color: '#333', // Dark color for result title
    },
    resultText: { 
        fontSize: '1.1rem', 
        color: '#555', // Slightly lighter color for result text
    },
};

export default UploadImage;
