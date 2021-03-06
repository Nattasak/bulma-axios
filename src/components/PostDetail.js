import React from 'react'
import Auxx from '../hoc/Auxx'

const PostDetail = () => (
  <Auxx>
    <div className="container">
      <div className="content">
        <div className="columns is-mobile">
          <div className="column is-4 is-offset-4">
            <figure className="image is-4by3">
              <img src="https://loremflickr.com/450/350/building?random=1" alt="" />
            </figure>
          </div>
        </div>
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="" />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Barbara Middleton</strong>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                <br />
                <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
              </p>
            </div>
            <article className="media">
              <figure className="media-left">
                <p className="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="" />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Sean Brown</strong>
                    <br />
                    Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                    <br />
                    <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                  </p>
                </div>
                <article className="media">
                  Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
                </article>
                <article className="media">
                  Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
                </article>
              </div>
            </article>
            <article className="media">
              <figure className="media-left">
                <p className="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="" />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Kayli Eunice </strong>
                    <br />
                    Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                    <br />
                    <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </article>
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="" />
            </p>
          </figure>
          <div className="media-content">
            <div className="field">
              <p className="control">
                <textarea className="textarea" placeholder="Add a comment..."></textarea>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button">Post comment</button>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </Auxx>
)

export default PostDetail
