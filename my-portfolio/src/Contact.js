import React from "react";

const Contact = () => {
    const [firstName, setFirstName] = firstName();
    const [lastName, setLastName] = lastName();
    const [email, setEmail] = email();
    const [comments, setComments] = comments();
      
    const handleSubmit = (event) => {
     event.preventDefault();
          // Handle form submission logic here
     console.log("Form submitted:", { firstName, lastName, email, comments });
 };
 return (
    <article>
      <header>
        <h1>Contact</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="row"></div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>

          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          <label htmlFor="floatingInput">Last Name</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: 100 }}
            value={comments}
            onChange={(event) => setComments(event.target.value)}
          />
          <label htmlFor="floatingTextarea2">Comments</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </article>
  );
};

export default Contact;
