import axios from 'axios'


export const searchShow = (payload) =>{
    return dispatch => {
        axios.get('https://api.tvmaze.com/search/shows?q='+payload)
        .then((response)=>{
            console.log(response)
            dispatch({
                type:'SEARCH',
                data:response.data
            })
        })
    }
}

export const fetchShowDetails = (payload) =>{
    console.log("click here")
    return dispatch => {
        axios.get('http://api.tvmaze.com/shows/'+payload+'/episodes')
        .then((response)=>{
            console.log(response)
            dispatch({
                type:'DETAILS',
                data:response.data
            })
        })
    }
}