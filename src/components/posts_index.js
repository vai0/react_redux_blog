import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    let nodes = [];
    var posts = this.props.posts;
    for (var postId in posts) {
      nodes.push(
        <li className="list-group-item" key={postId}>
          <Link to={`/posts/${postId}`}>
            <h5>{posts[postId].title}</h5>
          </Link>
          <p>{posts[postId].content}</p>
        </li>
      );
    }
    return nodes;
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add Post
          </Link>
        </div>
        <h1>Posts</h1>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
