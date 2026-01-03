function Card() {
  const cardData = [
    {
      id: 1,
      title: "Card Title 1",
      text: "Some quick example text to build on the card title.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Card Title 2",
      text: "Some quick example text to build on the card title.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Card Title 3",
      text: "Some quick example text to build on the card title.",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {cardData.map((card) => (
            <div key={card.id} className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div
                    className="rounded-circle bg-dark text-white d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "40px", height: "40px" }}
                  >
                    {card.id}
                  </div>
                  <h6>Connect with an expert at Unsplash.</h6>
                  <p className="text-muted">
                    Tell us about your project—what you need, your vision,
                    budget, and timeline
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
