import React, { Component } from "react";
import { createProject } from "../../store/actions/projectActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white login">
          <h5 className="grey-text form-title text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">title</label>
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
              id="title"
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              value={this.state.content}
              className="materialize-textarea"
              onChange={this.handleChange}
              id="content"
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depht-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
