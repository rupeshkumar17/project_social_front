
import React, { Component } from "react";
import { isAuthenticated } from "../auth/index";
import { Redirect, Link } from "react-router-dom";
import { read } from "./apiUser";
import DefaultProfile from "../images/avatar.jpg";
import DeleteUser from "./DeleteUser";
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      redirectTosignin: false,
    };
  }

  init = (userId) => {
    const token = isAuthenticated().token;
    read(userId, token).then((data) => {
      if (data.error) {
        this.setState({ redirectTosignin: true });
      } else {
        this.setState({ user: data });
      }
    });
  };

  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.init(userId);
  }
  componentWillReceiveProps(props) {
    const userId = props.match.params.userId;
    this.init(userId);
  }

  render() {
    const { redirectTosignin, user } = this.state;
    if (redirectTosignin) {
      return <Redirect to="/signin" />;
    }

    return (
      <div className="container">
        <h2 className="mt-5 mb-5">Profile</h2>

        <div className="row">
          <div className="col-md-6">
            <img
              src={DefaultProfile}
              className="card-img-top"
              alt={user.name}
              style={{ width: "100", height: "14vw", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6">
            <div className="lead mt-2 ">
              <p> Hello {user.name} </p>
              <p> Email: {user.email} </p>
              <p>{`Joined ${new Date(user.created).toDateString()}`}</p>
            </div>
            {isAuthenticated().user && isAuthenticated().user._id === user._id && (
              <div className="d-inline-block">
                <Link
                  className="btn btn-raised btn-success mr-5"
                  to={`/user/edit/${user._id}`}
                >
                  Edit Profile
                </Link>
                <DeleteUser userId={user._id} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;