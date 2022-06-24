import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spin from './Spin'
import PropTypes from 'prop-types'





export class News extends Component {
  static defaultProps = {
    country:'in',
    pageSize:8,
    category: 'general',
  }
 static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
 }
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0aba46ada859493a9bdfaab9469df458&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,
    loading:false})
  }
  handleNextClick= async ()=>{
       console.log("Next");
       if(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize) ){

       }
       else{
       let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0aba46ada859493a9bdfaab9469df458&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
       this.setState({loading:true});
       let data = await fetch(url);
       let parsedData = await data.json()
       
       this.setState({articles: parsedData.articles})

       this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }
     }
  
 handlePreviousClick = async ()=>{
      console.log("Previous");
      console.log("Next");
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0aba46ada859493a9bdfaab9469df458&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({articles: parsedData.articles})

      this.setState({
       page: this.state.page - 1,
       articles: parsedData.articles,
       loading:false
     })
     

  }
  render() {
    return (
      <div className="container my-3"  >
        <h2>News-Today</h2>
        {this.state.loading && <Spin/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className = "col-md-4"  key={element.url}> 
               <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):""} ImageUrl= {element.urlToImage} newsUrl={element.url} />
          </div>
        })}
        
       
           </div>
           < div className="container my-3 d-flex justify-content-between">
           <button type="button" className="btn btn-dark" onClick=
           {this.handleNextClick}>Next &rarr;</button>

           <button disabled={this.state.page<=1}  type="button" className="btn btn-dark" onClick=
           {this.handlePreviousClick}> &larr; Previous</button>
           </div>
      </div>
    )
  }
}

export default News
