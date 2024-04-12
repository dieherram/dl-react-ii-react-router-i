import errorImage from "../assets/img/error-404.png"

const NotFound = () => {
  return (
    <section>
      <div className="text-center not-found-container d-flex flex-column align-items-center justify-content-center">
        <h1>Página no encontrada en Happy Cake</h1>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <img src={errorImage} alt="" />
      </div>
    </section>
  )
}

export default NotFound