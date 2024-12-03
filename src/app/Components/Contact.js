import React from "react";

const ContactPage = () => {
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", color: "white", padding: "50px" }}>
      <div className="">
        <h1 className="text-center mb-4">Contact Us</h1>
        <form>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" required />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="projectLocation" className="form-label">Project Location</label>
              <input type="text" className="form-control" id="projectLocation" placeholder="Project Location" />
            </div>
            <div className="col-md-6">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" className="form-control" id="city" placeholder="City" />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="state" className="form-label">State</label>
              <input type="text" className="form-control" id="state" placeholder="State" />
            </div>
            <div className="col-md-4">
              <label htmlFor="zipcode" className="form-label">Zipcode</label>
              <input type="text" className="form-control" id="zipcode" placeholder="Zipcode" />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="form-label">Tell Us More</label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Share more details about your project..."
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
