import React from 'react' 

const Episode = (props) =>{
    return(
        <div className="episode-wrap">
            <div className="episode-number">{props.number}</div>
            <div className="name-date-wrap">
                <div className="episode-name">{props.name}</div>
                <div className="episode-date">{props.date}</div>
            </div>
            
        </div>
    )
}
export default Episode;