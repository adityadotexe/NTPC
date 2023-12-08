import React from 'react';


const ReviewStatusPage = ({ status }) => {
  return (
    <div style={{ backgroundColor: 'lightgreen', minHeight: '100vh', padding: '20px' }}>
      <h2>Review Status</h2>
      <p>Status: {status}</p>
    </div>
  );
};


export default ReviewStatusPage;
