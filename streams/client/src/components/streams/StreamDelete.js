import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  actions = () => {
    const id = this.props.match.params.id; // fetching the id from the url
    return (
      <React.Fragment>
        <button
          onClick={() => {
            this.props.deleteStream(id);
          }}
          className="ui button negative"
        >
          Delete
        </button>
        <Link className="ui button" to="/">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete thos stream?";
    }

    return `Are you sure you want to delet stream: ${this.props.stream.title}`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.actions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
