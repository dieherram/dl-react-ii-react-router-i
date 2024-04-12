import cakeHomeImage from "../assets/img/cake-home.png"

const ContactPage = () => {
  return (
    <main>
      <div className="container text-center home-container d-flex flex-column align-items-center justify-content-center">
        <h1>Bienvenido a Happy Cake</h1>
        <p>El lugar de los pasteles felices</p>
        <img src={cakeHomeImage} alt="Logo de Happy Cake" />
      </div>
    </main>
  )
}

export default ContactPage