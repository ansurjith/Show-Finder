import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchShow = (props) =>{

    const searchTerm = useRef(null)

    return(
        <div className="search">
            <div className="search-input">
                <FontAwesomeIcon icon={faSearch}/>
                <input type="text" ref={searchTerm} className="search-input" />
            </div>
            <div><Button variant="primary" className="search-button" onClick={()=>props.find(searchTerm.current.value)}>Search</Button></div>
            
        </div>
        
    )
}

export default SearchShow;