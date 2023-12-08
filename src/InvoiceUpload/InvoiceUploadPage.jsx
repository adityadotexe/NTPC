import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InvoiceUploadPage = () => {
    const navigate = useNavigate();
  const [poFile, setPoFile] = useState(null);
  const [invoiceFile, setInvoiceFile] = useState(null);

  const handlePoFileChange = (event) => {
    const file = event.target.files[0];
    setPoFile(file);
  };

  const handleInvoiceFileChange = (event) => {
    const file = event.target.files[0];
    setInvoiceFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform file submission logic here, e.g., sending files to a server

    // For demonstration purposes, log the selected files
    console.log('PO File:', poFile);
    console.log('Invoice File:', invoiceFile);

    // You can also use FormData to send the files to a server
    // const formData = new FormData();
    // formData.append('poFile', poFile);
    // formData.append('invoiceFile', invoiceFile);
    // performSubmission(formData);
  };
  const handleReviewClick = () => {
    navigate('/review');
  };

  return (
    <div style={{ backgroundColor: 'skyblue', minHeight: '100vh', padding: '20px' }}>
      <div style={{ textAlign: 'center', position: 'relative' }}>
        <img
          src="https://hindubabynames.info/wp-content/themes/hbn_download/download/indian-government/ntpc-logo.png" // Replace with the actual path to your logo
          alt="Company Logo"
          style={{
            position: 'absolute',
            top: '-60px', // Adjust the top property as needed
            left: '0',
            width: '100px', // Adjust the width as needed
            height: 'auto', // Maintain aspect ratio
            marginBottom: '20px',
          }}
        />
        <h1>Invoice Upload</h1>
        <div
          style={{
            border: '1px solid #333',
            backgroundColor: 'white', // Change to the background color of the box
            color: '#333', // Change to the text color of the box
            padding: '20px',
            borderRadius: '8px',
            maxWidth: '400px',
            margin: '0 auto',
          }}
        >
          <form onSubmit={handleSubmit}>
            <div style={{ textAlign: 'left', marginBottom: '10px' }}>
              <label style={{ display: 'inline-block', width: '150px' }}>Purchase Order (PO):</label>
              <input type="file" onChange={handlePoFileChange} />
            </div>
            <div style={{ textAlign: 'left', marginBottom: '10px' }}>
              <label style={{ display: 'inline-block', width: '150px' }}>Invoice:</label>
              <input type="file" onChange={handleInvoiceFileChange} />
            </div>
            <button type="submit">Submit</button>
            <button type="button" style={{ marginLeft: '10px' }} onClick={handleReviewClick}>Review</button>
          </form>
          <div>
            {poFile && (
              <p>
                PO File Format: <strong>{poFile.type}</strong>
              </p>
            )}
            {invoiceFile && (
              <p>
                Invoice File Format: <strong>{invoiceFile.type}</strong>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceUploadPage;