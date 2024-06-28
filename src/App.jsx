import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

// import components
import Home from './components/Home';
import CreateInvoice from './components/CreateInvoice';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreateInvoice" element={<CreateInvoice />}/>      
     </Routes>
    </div>
  );
}

export default App;
