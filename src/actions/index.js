const CREATE_BOOK  ="CREATE BOOK"
const REMOVE_BOOK ="REOVE BOOK"
const CreateBook = (book)=>{
  return{
    type: CREATE_BOOK,
    payload: book
  }
}
const RemoveBook = (book)=>{
  return{
    type: REMOVE_BOOK,
    payload: id

  }
}
export {CreateBook,RemoveBook,CREATE_BOOK,REMOVE_BOOK}