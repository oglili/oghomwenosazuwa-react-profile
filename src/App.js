import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ChiSono from './pages/ChiSono';
import ContactForm from './pages/ContactForm';
import Error from './pages/Error';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='chi_sono' element={<ChiSono />} />
          <Route path='contatto' element={<ContactForm />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
