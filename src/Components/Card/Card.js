import React, { Component } from 'react';
import axios from 'axios';

class Card extends Component {
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
      const posts = res.data.slice(0, 12).map(post => post);
      //console.log(posts);
      this.setState({ posts });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="Card">
        <div className="columns is-multiline">
          { this.state.posts.map(post =>
            <div className="column is-one-third" key={post.id}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={`https://loremflickr.com/450/350/building?random=${post.id}`} alt="" />
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
                      <p className="title is-4">{post.title}</p>
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
    );
  }
}

export default Card;
