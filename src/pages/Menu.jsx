import { useEffect, useState } from "react";
import api from "../services/api";

function Menu() {
  useEffect(() => {
    document.title = "Menu | Twinnies Eatery - Local and Continental Dishes";
  }, []);
  
  const [groupedMenu, setGroupedMenu] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("/menu")
      .then(res => {
        const grouped = res.data.reduce((acc, item) => {
          const category = item.category || "Others";
          if (!acc[category]) acc[category] = [];
          acc[category].push(item);
          return acc;
        }, {});

        setGroupedMenu(grouped);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to load menu");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading menu...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <>
      <h1 className="mb-4">Our Menu</h1>

      {Object.keys(groupedMenu).map(category => (
        <div key={category} className="mb-5">
          <h4 className="mb-3 text-uppercase fw-bold text-secondary">
            {category}
          </h4>

          <div className="row">
            {groupedMenu[category].map(item => (
              <div className="col-md-4 mb-4" key={item.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={item.image_url && item.image_url.trim() !== "" ? item.image_url : "https://via.placeholder.com/400x250"}
                    className="card-img-top"
                    alt={item.name}
                    loading="lazy"
                    style={{height:'250px', objectFit: 'cover', width: '100%'}}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text text-muted">
                      {item.description}
                    </p>
                    <div className="mt-auto fw-bold">
                      GHS {item.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Menu;
