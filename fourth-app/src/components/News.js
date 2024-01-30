import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

// dab0f9b4b8574e2b9ad482360fe4f7c8
const News = (props)=>{

  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page, setPage] = useState(1)
  const [totalResults,setTotalResults] = useState(0)

  const capitalizaFirstLetter =(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const updateNews=async ()=>{
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(()=>{
    document.title=`${capitalizaFirstLetter(props.category)} - NewsMonkey`
    updateNews();
  },[])
  
  const fetchMoreData=async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  }
    return (
      <>
        <h1 className='text-center' style={{margin:"35px 0", marginTop:"90px"}}>NewsMonkey - Top {capitalizaFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
          <div className="row">
          {articles.map((element) => {
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

News.defaultProps={
  country:'in',
  pageSize:8,
  category:'general'
}
News.propTypes={
  country: PropTypes.string,
  pageSize:PropTypes.number,
  category: PropTypes.string
}

export default News
