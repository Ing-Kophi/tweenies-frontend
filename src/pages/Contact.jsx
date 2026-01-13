function Contact() {
  return (
    <>
      <section className="py-5">
        <h2 className="fw-bold mb-4">Contact Us</h2>

        <p className="text-muted">
          We’d love to hear from you! Reach out to us using the details below.
        </p>

        <div className="row mt-4">
          <div className="col-md-6 mb-4">
            <h5 className="fw-bold">Location</h5>
            <p className="text-muted">
              22 Freedom Street <br />
              Community 25, Tema <br />
              GPS Code: GN-0602-8123
            </p>

            <h5 className="fw-bold mt-3">Opening Hours</h5>
            <p className="text-muted">
              Monday – Saturday: 9:00 AM – 9:00 PM <br />
              Sunday: 12:00 PM – 10:00 PM
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
              tweenies.eatery@gmail.com
            </p>

            <h5 className="fw-bold mt-3">WhatsApp</h5>
            <a
              href="https://wa.me/23324419523"
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
