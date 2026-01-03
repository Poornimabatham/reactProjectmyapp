function Form() {
  return (
    <div
      className="container mt-5"
      style={{
        backgroundColor: "#f8f9fa",
        padding: "30px",
        border: "2px solid #007bff",
      }}
    >
      <h2 className="text-center mb-4" style={{ color: "#007bff" }}>
        Contact Form
      </h2>
      <div className="row">
        <div className="col-12">
          <form>
            <div className="row mb-4">
              {" "}
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{ textAlign: "left", display: "block" }}
                >
                  Email address
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{ textAlign: "left", display: "block" }}
                >
                  Password
                </label>
                <input type="password" className="form-control" id="password" />
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
