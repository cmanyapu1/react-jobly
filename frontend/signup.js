import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../common/Alert";


function SignupForm({ signup }) {
    const history = useHistory();
    const [formData, setFormData] = useState({
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: "",
    });
    const [formErrors, setFormErrors] = useState([]);
  
    console.debug(
        "SignupForm",
        "signup=", typeof signup,
          "formData=", formData,
        "formErrors", formErrors,
    );
  
    /** Handle form submit:
     *
     * Calls login func prop and, if successful, redirect to /companies.
     */
  
    async function handleSubmit(evt) {
      evt.preventDefault();
      let result = await signup(formData); //what is signup here
      if (result.success) {
        history.push("/companies");
      } else {
        setFormErrors(result.errors);
      }
    }
  
    /** Update form data field */
    function handleChange(evt) {
      const { name, value } = evt.target;
      setFormData(l => ({ ...l, [name]: value }));
    }
  
    return (
        <div className="SignupForm">
          <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <h3 className="mb-3">Sign Up</h3>
  
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                        name="username"
                        className="form-control"
                        value={formData.username}
                        onChange={handleChange}
                        autoComplete="username"
                        required
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                        required
                    />
                  </div>
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="first_name"
                        name="first_name"
                        className="form-control"
                        value={formData.first_name}
                        onChange={handleChange}
                        autoComplete="current-first_name"
                        required
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                        type="last_name"
                        name="last_name"
                        className="form-control"
                        value={formData.last_name}
                        onChange={handleChange}
                        autoComplete="current-last_name"
                        required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                        type="Email"
                        name="Email"
                        className="form-control"
                        value={formData.Email}
                        onChange={handleChange}
                        autoComplete="current-Email"
                        required
                    />
                  </div>
                  {formErrors.length
                      ? <Alert type="danger" messages={formErrors} />
                      : null}
  
                  <button
                      className="btn btn-primary float-right"
                      onSubmit={handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
  
  export default SignupForm;
  