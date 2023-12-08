// App.js
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import InvoiceUploadPage from './InvoiceUpload/InvoiceUploadPage';
import ReviewStatusPage from './Review/ReviewStatusPage';

function App() {
  return (
   <Routes>
    <Route path='/' element={<InvoiceUploadPage/>}/>
    <Route path='/review' element={<ReviewStatusPage/>}/>
   </Routes>
  );
}

export default App;
