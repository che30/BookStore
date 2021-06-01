import {CREATE_BOOK,REMOVE_BOOK} from './actions/index'
// const initialState = {books: []}
const BookReducer =(state=[], action)=>{

  switch(action.type){
    case CREATE_BOOK:
    return{
      ...state,
      payload: action.payload
    }
    break
    case REMOVE_BOOK:
      return state.filter((books) => books.id !== action.payload.id);
      break
      default:
        return state
  }
}
export default BookReducer