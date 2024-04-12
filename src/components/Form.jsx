
const Form = () => {
  return (
    <form className="text-center w-75">
      <div className="mb-3">
        <label for="mailInput" className="form-label">Correo</label>
        <input type="email" className="form-control" id="mailInput" aria-describedby="emailHelp" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label for="descriptionInput" className="form-label">Descripción</label>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
      <button type="submit" className="btn btn-danger">Enviar</button>
    </form>
  )
}

export default Form