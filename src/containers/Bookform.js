const BookForm =()=>{
  const bookCataegories =["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]
  return(
    <div>
  <form>
    <label> book name:</label>
    <input type="input" id="bkname"></input>
    <label> book number:</label>
    <input type="input" id="bknumber"></input>
    <label> number of pages:</label>
    <input type="input" id="pages"></input>
    <select>
     {bookCattaegories.each(cat=>{
       <option key={cat} value= {cat}> </option>
     })}
    </select>
    <button type="submit"></button>
  </form>
</div>
  )

}
export  default BookForm