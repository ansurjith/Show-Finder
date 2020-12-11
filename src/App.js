import React, { Component } from 'react';
import Header from './components/header'
import Search from './components/searchBox'
import ShowCard from './components/showCard'
import {TrimHtml} from './components/trim.html'
import ShowDetails from './components/showDetails'

import { searchShow, fetchShowDetails } from './store/actions'
import { connect } from 'react-redux'

class App extends Component {

  state = {
    showData:false,
    showDataInformation:''
  }
  
  searchShow = (value) => {
    this.setState({
      showDataInformation:''
    })
    this.props.findShows(value)
  }

  showdDetails = (data) =>{
    this.props.getShowDetails(data.value)
    let item = this.props.searchResult.find((item)=>{
      return item.show.id == data.value
    })
    this.setState({
      showDataInformation:item
    })
  }

  render() {
    console.log(this.props.showInfo)
    return (
      <div >
        <Header/>
        <div className="container-wrap container">
          <div className="search-container">
              <Search find={this.searchShow}/>
          </div>
          <div className="show-details-container">
            {this.state.showDataInformation !== '' && this.props.showInfo !== ''?<ShowDetails data={this.props.showInfo}  
            itemInfo={this.state.showDataInformation === ''?'':this.state.showDataInformation}/>:''}
            
          </div>
          <div className="result-wrap">
            {this.props.searchResult === ''?'':
            this.props.searchResult.map((item) =><ShowCard 
            img={item.show.image !== null?item.show.image.medium:""} 
            title={item.show.name} 
            description={item.show.summary !== null?<TrimHtml data={item.show.summary}/>:''}
            show={this.showdDetails}
            id={item.show.id}/>)
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      findShows : (data) => dispatch(searchShow(data)),
      getShowDetails : (data) => dispatch(fetchShowDetails(data))
  }
}

const mapStateToProps = (state) => {
  return{
      searchResult:state.searchResult,
      showInfo:state.showDetails
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);