import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Profile from './components/Profile';
import Links from './components/Links';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Home from './pages/Home';
import './App.css'

function App() {
  return (
    <div className='font-link'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact/>} />
       
      </Routes>
      </BrowserRouter>
    {/* <Contacts/> */}
    </div>
  );
}

export default App;
