import Form from "../components/Form"

const ContactPage = () => {
  return (
    <section>
      <div className="container contact-page-container d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-center">Cuentanos, ¿en que te podemos ayudar?</h1>
        <Form />
      </div>
    </section>
  )
}

export default ContactPage