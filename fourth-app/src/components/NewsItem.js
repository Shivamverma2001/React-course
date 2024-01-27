import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {myTitle,myDesc}=this.props;
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{myTitle}</h5>
          <p className="card-text">{myDesc}</p>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
