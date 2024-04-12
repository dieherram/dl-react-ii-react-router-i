import { Link } from "react-router-dom";
import homeImage from "../assets/img/home.png"
import cakeImage from "../assets/img/cake-logo.png"
import contactFormImage from "../assets/img/contact-form.png"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-danger navbar-container">
      <div className="container d-flex flex-row-reverse">
        <Link className="navbar-brand text-white" to="/">Happy Cake <img src={cakeImage} alt="" /></Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home <img src={homeImage} alt="" /></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contacto">Contacto <img src={contactFormImage} alt="" /></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar