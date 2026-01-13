function About() {
  return (
    <>
      <section className="py-5">
        <h2 className="fw-bold mb-4">About Tweenies Restaurant</h2>

        <p className="text-muted lead">
          Tweenies Restaurant is dedicated to serving delicious meals made with
          care, quality ingredients, and a passion for great taste.
        </p>

        <p className="text-muted">
          We believe food is more than just a meal — it is an experience that
          brings people together. Whether you are dining in with family,
          meeting friends, or grabbing a quick meal, Tweenies is committed to
          making every visit memorable.
        </p>

        <p className="text-muted">
          Our menu combines local favorites with continental options, carefully
          prepared to satisfy a wide range of tastes. We pride ourselves on
          consistency, affordability, and friendly service.
        </p>
      </section>

      <section className="py-5 bg-light rounded">
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Our Mission</h5>
            <p className="text-muted">
              To deliver quality meals that bring comfort, joy, and satisfaction
              to every customer.
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
      </section>
    </>
  );
}

export default About;
