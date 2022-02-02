import React from "react";

const BModal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title w-100" id="exampleModalLabel">
                Add New Member
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <div className="d-flex">
                    <span className>Gender</span>
                    <div className="form-check mx-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Male"
                        id="Male"
                      />
                      <label className="form-check-label" htmlFor="Male">
                        Male
                      </label>
                    </div>
                    <div className="form-check mx-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Male"
                        id="Male"
                      />
                      <label className="form-check-label" htmlFor="female">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control form-control-sm"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="mb-3">
                  <select className="form-control form-control-sm">
                    <option value="S">State Of Origin</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                </div>
                <div className="mb-3 d-grid">
                  <button className="btn btn-dark" onClick={null}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BModal;
