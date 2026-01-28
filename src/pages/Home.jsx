import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-5 text-light text-center rounded" style={{backgroundColor:"#ce6b1a"}}>
        <div className="container">
          <h1 className="display-5 fw-bold mb-3">
            Welcome to Twinnies Eatery and Events Center
          </h1>
          <p className="lead mb-4">
            Delicious local and continental dishes, freshly prepared
          </p>
          <Link to="/menu" className="btn btn-light btn-lg fw-bold">
            View Our Menu
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3">
            <h2 className="fw-bold" style={{backgroundColor:"#ce6b1a"}}>Good Food, Great Moments</h2>
            <p className="text-muted fs-5">
              At Twinnies Eatery, we believe food brings people together.
              Our meals are prepared with care, using quality ingredients to
              give you a satisfying dining experience every time.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://res.cloudinary.com/dwgkkc0ee/image/upload/v1769561836/home_page_cpqqjm.jpg"
              alt="Restaurant food"
              className="img-fluid rounded shadow-sm"
              style={{ height:'490px', width: '100%', objectFit: "contain"}}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-light rounded"
      style={{background: "linear-gradient(135deg, #fff3e6, #f7c59f)"}}>
        <div className="container">
          <h3 className="text-center fw-bold mb-4">Why Choose Twinnies?</h3>
          <div className="row text-center">
            <div className="col-md-4 mb-3">
              <h5 className="fw-bold">Fresh Ingredients</h5>
              <p className="text-muted">
                We prepare our meals with fresh and carefully selected ingredients.
              </p>
            </div>
            <div className="col-md-4 mb-3">
              <h5 className="fw-bold">Affordable Prices</h5>
              <p className="text-muted">
                Enjoy delicious meals without breaking the bank.
              </p>
            </div>
            <div className="col-md-4 mb-3">
              <h5 className="fw-bold">Friendly Service</h5>
              <p className="text-muted">
                Our team is always ready to serve you with a smile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 text-center">
        <h3 className="fw-bold mb-3">Hungry Already?</h3>
        <p className="text-muted mb-4">
          Explore our menu and discover your next favorite meal.
        </p>
        <Link to="/menu" className="btn btn-lg text-light fw-fold" style={{backgroundColor:"#ce6b1a"}}>
          Explore Menu
        </Link>
      </section>
    </>
  );
}

export default Home;
