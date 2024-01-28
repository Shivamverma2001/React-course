import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { myTitle, myDesc, imageUrl, newsUrl } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{myTitle}...</h5>
            <p className="card-text">{myDesc}...</p>
            <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
