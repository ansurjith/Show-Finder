import React, {useEffect, useRef, useState} from 'react'
import Episode from './episode'

const ShowDetails = (props) =>{

    const selectedItem = useRef(1)
    const [season, selectSeason] = useState(1)
    
    const listEpisodes = () =>{
        selectSeason(selectedItem.current.value)
    }
    useEffect(()=>{
        selectSeason(1)
    },[props.data])
    return(
        <div className="show-detail-item">
            <div className="show-info">
                <div className="show-image">
                    <img alt={props.itemInfo.show.name} src={props.itemInfo.show.image.medium} />
                    <div className="show-description-info">
                    <div dangerouslySetInnerHTML={{__html:props.itemInfo.show.summary}} />
                </div>
                </div>
            </div>
            <div className="show-episodes">
                <div className="select-episodes">
                    <select ref={selectedItem} onChange={listEpisodes}>
                        { 
                            props.data.map((item,index)=>{
                                let temp = index === 0 ? props.data[index]:props.data[index-1]
                                if(index === 0){
                                    return <option key={index} value={item.season}>Season {item.season}</option>
                                }else{
                                    if(item.season !== temp.season)
                                        return <option key={index} value={item.season}>Season {item.season}</option>
                                    else
                                        return ''
                                }
                            })  
                        }
                    </select> 
                    <div>
                        {
                            props.data.map((item,index)=>{
                                if(item.season == season){
                                    return <Episode key={index} name={item.name} date={item.airdate} number={item.number}/>
                                }else{
                                    return ''
                                }
                            })
                        }
                    </div> 
                </div>
            </div>
        </div>
        
        
    )
}

export default ShowDetails;