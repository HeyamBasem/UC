// import { Dropdown } from 'bootstrap'
import React, { Component } from 'react'
export default class Home extends Component {
  render() {
    return (
        <div className="auth-inner">
        <form>
          <h3>Your Uni Compass</h3>
          <h6>Fill ur semester courses</h6>
          <div className="mb-3">
            <label>Semester Type</label>
            {/* <Dropdown>
                <option label='First'>first</option>
                <option label='Second'>second</option> */}
            {/* <select name="cars" id="cars">
    <optgroup label="Swedish Cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
    </optgroup>
    <optgroup label="German Cars">
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </optgroup>
  </select> */}
            {/* </Dropdown> */}
            {/* <input
              type="text"
              className="form-control"
              placeholder="First name"
            /> */}
          </div>
          <div className="mb-3">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    )
  }
}
