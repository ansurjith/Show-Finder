import React from 'react'

const ShowDetails = (props) =>{
    
    console.log("props here")
    //let length = props.data[props.data.length-1].season
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
                    <select>
                        { 
                            props.data.map((item,index)=>{
                            let temp = index === 0 ? props.data[index]:props.data[index-1]
                            if(index === 0){
                                return <option value={item.season}>Season {item.season}</option>
                            }else{
                                if(item.season !== temp.season)
                            return <option value={item.season}>Season {item.season}</option>
                                else
                                    return ''
                            }
                            })  
                        }
                    </select>  
                </div>
            </div>
        </div>
        
        
    )
}

export default ShowDetails;