import './App.css'
import { Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar'

import HomePage from './views/HomePage'
import ContactPage from './views/ContactPage';
import NotFound from './views/NotFound';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"
          element={<HomePage />}
        />
        <Route path="/contacto"
          element={<ContactPage />}
        />
        <Route path="*"
          element={<NotFound />}
        />
      </Routes>
    </>
  )
}

export default App
