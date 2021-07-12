import React from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../redux/actions/user";
import { connect } from "react-redux";

class register extends React.Component {
  state = {
    fullName: "",
    username: "",
    email: "",
    password: "",
  };

  inputHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Register now!</h1>
            <p className="lead">
              Register now and start shopping in the most affordable ecommerce
              platform
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-4 offset-4">
            <div className="card">
              <div className="card-body">
                <h5 className="font-weight-bold mb-3">Register</h5>
                <input
                  name="fullname"
                  onChange={this.inputHandler}
                  className="form-control my-2"
                  type="text"
                  placeholder="Full Name"
                />
                <input
                  name="username"
                  onChange={this.inputHandler}
                  className="form-control my-2"
                  type="text"
                  placeholder="Username"
                />
                <input
                  name="email"
                  onChange={this.inputHandler}
                  className="form-control my-2"
                  type="text"
                  placeholder="Email"
                />
                <input
                  name="password"
                  onChange={this.inputHandler}
                  className="form-control my-2"
                  type="password"
                  placeholder="Password"
                />
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <button
                    onClick={() => this.props.registerUser(this.state)}
                    className="btn btn-primary mt-2"
                  >
                    Register
                  </button>
                  <Link to="/login">Or Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(register);
