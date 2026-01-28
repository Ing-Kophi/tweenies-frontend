function Contact() {
  return (
    <>
      <section className="py-5">
        <h2 className="fw-bold mb-4">Contact Us</h2>

        <p className="text-muted">
          We’d love to hear from you! Reach out to us using the details below. <br />
          We take orders for any event - weddings, funerals, engagements, parties...
        </p>

        <div className="row mt-4">
          <div className="col-md-6 mb-4">
            <h5 className="fw-bold">Location</h5>
            <p className="text-muted">
              22 Freedom Street <br />
              Community 25, Tema <br />
              GPS Code: GN-0602-8123
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=P2VJ%2B266,Tema"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none fw-semibold"
              style={{ color: "#ce6b1a" }}
            >
              📍 Click here for Google Maps Direction
            </a>

            <h5 className="fw-bold mt-3">Opening Hours</h5>
            <p className="text-muted">
              Tuesday – Sunday: 10:00 AM – 9:00 PM <br />
              Monday: Closed
            </p>
          </div>

          <div className="col-md-6 mb-4">
            <h5 className="fw-bold">Phone</h5>
            <p className="text-muted">
              +233 59 290 8053 <br />
              +233 59 495 7722 <br />
              +233 27 660 8930
            </p>

            <h5 className="fw-bold mt-3">Email</h5>
            <p className="text-muted">
              twinnieseatery@gmail.com
            </p>

            <h5 className="fw-bold mt-3">WhatsApp</h5>
            <a
              href="https://wa.me/+233592908053"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
