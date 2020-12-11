import React from 'react'
import Button from 'react-bootstrap/Button'

const SearchResult = (props) =>{
    return(
        <div className="search-result-item">
            <div className="search-result-card">
                <div className="image-wrap">
                    <img src={props.img} alt={props.title}   />
                </div>
                <div className="result-text-content">
                    <h3>{props.title}</h3>   
                    <p>{props.description}...</p>
                    <div>
                    <Button href={props.link} value={props.id} className="show-details btn btn-primary" onClick={(e)=>props.show(e.target)}>Show Episodes</Button> 
                    </div>
                </div>
                     
            </div>
        </div>
        
        
    )
}

export default SearchResult;