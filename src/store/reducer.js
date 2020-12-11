
const initialState = {
    searchResult:'',
    showDetails:''
}

const reducer = (state=initialState, action) => {
    if(action.type === 'SEARCH'){
        return{
            showDetails:'',
            searchResult:action.data 
        }
    }
    if(action.type === 'DETAILS'){
        return{
            ...state,
            showDetails:action.data 
        }
    }
    return state
}
  
export default reducer