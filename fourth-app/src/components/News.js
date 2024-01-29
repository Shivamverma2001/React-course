import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

// dab0f9b4b8574e2b9ad482360fe4f7c8
export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:8,
    category:'general'
  }
  static propTypes={
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string
  }

  capitalizaFirstLetter =(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  constructor(props) {
    super(props);
    console.log("Hello I am a constructor");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    }
    document.title=`${this.capitalizaFirstLetter(this.props.category)} - NewsMonkey`
  }
  async updateNews(){
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({
      loading:true
    })
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      parseResult: parsedData.totalResults,
      loading:false
    })
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews()
  }
  fetchMoreData=async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      parseResult:  parsedData.totalResults,
      loading:false
    })
  }
  render() {
    return (
      <>
        <h1 className='text-center' style={{margin:"35px 0"}}>NewsMonkey - Top {this.capitalizaFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
          <div className="row">
          {this.state.articles.map((element) => {
            if (element.title != null && element.description != null && element.urlToImage != null) {
              return <div className="col-md-4" key={element.url}>
                <NewsItem myTitle={element.title.slice(0, 45)} myDesc={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            }
          })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
  }
}

export default News
