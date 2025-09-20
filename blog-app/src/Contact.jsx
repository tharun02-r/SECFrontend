/*import React, { useState } from "react";
//import "./Contact.css"; // create this file (contents below)

function Contact() {
  const [form, setForm] = useState({
    fullname: "",
    branch: "",
    year: "",
    email: "",
    phone: "",
    gender: "",
  });

  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
    // clear the form after submit
    setForm({
      fullname: "",
      branch: "",
      year: "",
      email: "",
      phone: "",
      gender: "",
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1>Contact Us</h1>

        <section className="college-info">
          <h2>SRIT College Details</h2>
          <p>
            <strong>College Name:</strong> Srinivasa Ramanujan Institute of
            Technology (SRIT)
          </p>
          <p>
            <strong>Address:</strong> Rotarypuram, Anantapur
          </p>
          <p>
            <strong>Phone:</strong> +91 422 1234567
          </p>
          <p>
            For any queries:{" "}
            <a href="mailto:244g5a3315@srit.ac.in">244g5a3315@srit.ac.in</a>
          </p>
        </section>

        <hr/>

        <h2>Student Registration Form</h2>
        <form className="reg-form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={form.fullname}
            onChange={handleChange}
            required
          />

          <input
            className="input"
            type="text"
            name="branch"
            placeholder="Branch"
            value={form.branch}
            onChange={handleChange}
            required
          />

          <input
            className="input"
            type="text"
            name="year"
            placeholder="Year of Study"
            value={form.year}
            onChange={handleChange}
            required
          />

          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            className="input"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={form.gender === "Male"}
                onChange={handleChange}
                required
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={form.gender === "Female"}
                onChange={handleChange}
                required
              />
              Female
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={form.gender === "Other"}
                onChange={handleChange}
                required
              />
              Other
            </label>
          </div>

          <button className="btn" type="submit">
            Register
          </button>
        </form>

        {submitted && (
          <div className="success">
            <h3>Registration submitted</h3>
            <div className="submitted-data">
              <strong>Name:</strong> {submitted.fullname} <br />
              <strong>Branch:</strong> {submitted.branch} <br />
              <strong>Year:</strong> {submitted.year} <br />
              <strong>Email:</strong> {submitted.email} <br />
              <strong>Phone:</strong> {submitted.phone} <br />
              <strong>Gender:</strong> {submitted.gender}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;*/
