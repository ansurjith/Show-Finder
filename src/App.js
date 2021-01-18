import React, { Component, createRef  } from 'react';
import Header from './components/header'
import Search from './components/searchBox'
import ShowCard from './components/showCard'
import {TrimHtml} from './components/trim.html'
import ShowDetails from './components/showDetails'

import { searchShow, fetchShowDetails } from './store/actions'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props){
    super(props);
    this.moveToTop = createRef()
  }
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
    this.setState({
      showDataInformation:''
    })
    this.moveToTop.current.scrollIntoView()
    this.props.getShowDetails(data.value)
    let item = this.props.searchResult.find((item)=>{
      if(item.show.id == data.value){
        return item
      }
    })
    this.setState({
      showDataInformation:item
    })
  }

  render() {
    //console.log(this.props.showInfo)
    return (
      <div >
        <Header/>
        <div className="container-wrap container">
          <div className="search-container">
              <Search find={this.searchShow} focusOnTop={this.moveToTop}/>
          </div>
          <div className="show-details-container" ref={this.moveToTop}>
            {this.state.showDataInformation !== '' && this.props.showInfo !== ''?<ShowDetails data={this.props.showInfo}  
            itemInfo={this.state.showDataInformation === ''?'':this.state.showDataInformation}/>:''}
            
          </div>
          <div className="result-wrap">
            {this.props.searchResult === ''?'':
            this.props.searchResult.map((item,index) =><ShowCard 
            key={index}
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