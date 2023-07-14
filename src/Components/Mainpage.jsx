import react, { useState } from 'react'
import Card from './Card'
import axios from 'axios';
function Mainpage() {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key == "Enter") {
      axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + ' &key=AIzaSyBR96McXGF-pgtJNpDmD_otIKGR4vF6ibE' + '&maxResults=12')
        .then(res => setData(res.data.items))
        .catch(err => console.log(err))
    }

  }
  return (
  
    <div className="title">
    <>
      <div className="search">
      <input class="input" type="text" placeholder="Book  Search by name.... "
          value={search} onChange={e => setSearch(e.target.value)}
          onKeyPress={searchBook} />
        <button><i className='fas fa-search'></i></button>

    </div>
   
    <div className='bookContainer'>
        
        <Card book={bookData} />
        
      </div>
      

     
    </>
  </div>

    
  )
}
export default Mainpage