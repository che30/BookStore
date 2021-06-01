/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { CreateBook} from '../actions';

const BookForm = () => {
  const bookCataegories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [bookInfo, setBookInfo] = useState({
    title: '',
    category: '',
  });
  const handleChange =(e) =>{
    if(e.target.id==='title-input'){
      setBookInfo({ ...bookInfo, title: e.target.value });
    } else {
      setBookInfo({ ...bookInfo, category: e.target.value });
    }
    
  
  }
  const handleClick =(e)=>{
      if (bookInfo.title !== '' && bookInfo.category !== '') {
        CreateBook(bookInfo);
        // setBookInfo({ title: '', category: '' });
      } else {
        setBookInfo({ ...bookInfo });
      }
    
  }
  return (
    <div>
      <form>
        <label>
          Book title:
          <input type="text" id="title-input" onChange= {handleChange} value={bookInfo.title}/>
        </label>
        <label>
          Select the Category:
          <select id="cateSelect" onChange={handleChange} value={bookInfo.category}>
            {bookCataegories.map((cat) => (
              <option key={cat} value={cat} >
                {cat}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" onClick= {handleClick}  >Add a book</button>
      </form>
    </div>
  );
};
export default BookForm;
