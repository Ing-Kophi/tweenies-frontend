function About() {
  return (
    <>
      {/* About Intro */}
      <section className="py-5">
        <h2 className="fw-bold mb-4">
          About Twinnies Eatery and Events Center
        </h2>

        <p className="text-muted lead">
          Twinnies Eatery is dedicated to serving delicious meals made with
          care, quality ingredients, and a passion for great taste.
        </p>

        <p className="text-muted">
          We believe food is more than just a meal — it is an experience that
          brings people together. Whether you are dining in with family,
          meeting friends, or grabbing a quick meal, Twinnies is committed to
          making every visit memorable.
        </p>

        <p className="text-muted">
          Our menu combines local favorites with continental options, carefully
          prepared to satisfy a wide range of tastes. We pride ourselves on
          consistency, affordability, and friendly service.
        </p>
      </section>

      {/* Image Gallery (3 images) */}
      <section className="py-4">
        <div className="row g-3">
          <div className="col-md-4">
            <img
              src="https://res.cloudinary.com/dwgkkc0ee/image/upload/v1769564967/IMG-20260123-WA0005_av7v8g.jpg"
              alt="Twinnies_compound_1"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://res.cloudinary.com/dwgkkc0ee/image/upload/v1768869697/1001064149_jvfimc.jpg"
              alt="Twinnies_compound_2"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://res.cloudinary.com/dwgkkc0ee/image/upload/v1768869674/1001064143_frivkh.jpg"
              alt="Twinnies_compound_3"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Feature Image (1 wide image) */}
      <section className="py-5">
        <img
          src="https://res.cloudinary.com/dwgkkc0ee/image/upload/v1769558858/IMG-20260123-WA0007_pgfkct.jpg"
          alt="Twinnies Building"
          className="img-fluid rounded shadow w-100"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-5 bg-light rounded">
        <div className="row align-items-center text-center">
          
          {/* Optional supporting image */}
          <div className="col-md-4 mb-4 mb-md-0">
            <img
              src="https://res.cloudinary.com/dwgkkc0ee/image/upload/v1769558844/IMG-20260123-WA0002_peowah.jpg"
              alt="staff"
              className="img-fluid rounded shadow-sm"
            />
          </div>

          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4 mb-3">
                <h5 className="fw-bold">Our Mission</h5>
                <p className="text-muted">
                  To deliver quality meals that bring comfort, joy, and
                  satisfaction to every customer.
                </p>
              </div>

              <div className="col-md-4 mb-3">
                <h5 className="fw-bold">Our Vision</h5>
                <p className="text-muted">
                  To become a trusted restaurant brand known for great food and
                  excellent service.
                </p>
              </div>

              <div className="col-md-4 mb-3">
                <h5 className="fw-bold">Our Values</h5>
                <p className="text-muted">
                  Quality, honesty, hospitality, and continuous improvement.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default About;
