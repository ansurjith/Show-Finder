import axios from 'axios'


export const searchShow = (payload) =>{
    return dispatch => {
        axios.get('https://api.tvmaze.com/search/shows?q='+payload)
        .then((response)=>{
            dispatch({
                type:'SEARCH',
                data:response.data
            })
        })
    }
}

export const fetchShowDetails = (payload) =>{
    return dispatch => {
        axios.get('http://api.tvmaze.com/shows/'+payload+'/episodes')
        .then((response)=>{
            dispatch({
                type:'DETAILS',
                data:response.data
            })
        })
    }
}