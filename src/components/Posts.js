import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Auxx from '../hoc/Auxx'
import axios from 'axios'

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      //console.log(res);
      const posts = res.data.slice(0, 6).map(post => post);
      //console.log(posts);
      this.setState({ posts });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <Auxx>
        <div className="container">
          <div className="Card">
            <div className="columns is-multiline">
              { this.state.posts.map(post =>
                <div className="column is-one-third" key={post.id}>
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <Link to='/postdetail'><img src={`https://loremflickr.com/450/350/building?random=${post.id}`} alt="" /></Link>
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48">
                            <img src={`https://loremflickr.com/96/96/dog?random=${post.id}`} alt="" />
                          </figure>
                        </div>
                        <div className="media-content">
                          <Link to='/postdetail'><p className="title is-4 has-text-black-ter">{post.title}</p></Link>
                          <p className="subtitle is-6">User id : {post.userId}</p>
                        </div>
                      </div>
                      <div className="content">
                        {post.body}
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              ) }
            </div>
          </div>
          <br /><br />
          <nav className="pagination is-centered" aria-label="pagination">
            <a className="pagination-previous">Previous</a>
            <a className="pagination-next">Next page</a>
            <ul className="pagination-list">
              <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
              <li><span className="pagination-ellipsis">&hellip;</span></li>
              <li><a className="pagination-link" aria-label="Goto page 45">45</a></li>
              <li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
              <li><a className="pagination-link" aria-label="Goto page 47">47</a></li>
              <li><span className="pagination-ellipsis">&hellip;</span></li>
              <li><a className="pagination-link" aria-label="Goto page 86">86</a></li>
            </ul>
          </nav>
        </div>
      </Auxx>
    );
  }
}

export default Posts;
