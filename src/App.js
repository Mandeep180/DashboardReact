import React from 'react';

import './App.css';
import{BrowserRouter, Route, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import ApproveAccommodation from './pages/ApproveAccommodation.jsx';
import RequestAccommodation from './pages/RequestAccommodation.jsx';
import ViewDocuments from './pages/ViewDocuments.jsx';
import CompleteProfile from './pages/CompleteProfile.jsx';





const App =()=> {
   
    return (
      
      <BrowserRouter>
          
      <Sidebar>
      <Routes>
        <Route path="/"element={<Dashboard/>}/>
        <Route path="/dashboard"element={<Dashboard/>}/>
        <Route path="/approveAccommodation"element={<ApproveAccommodation/>}/>
        <Route path="/requestAccommodation"element={<RequestAccommodation/>}/>
        <Route path="/viewDocuments"element={<ViewDocuments/>}/>
        <Route path="/completeProfile"element={<CompleteProfile/>}/>
       
      </Routes>
      </Sidebar>
      
      </BrowserRouter>
    );
  
};

export default App;

