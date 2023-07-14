

import react, { useState } from 'react'
import Card from '../Components/Card';
import axios from 'axios';

const Movies = () => {
  const [bookData, setData] = useState([]);
  
    axios.get('https://www.googleapis.com/books/v1/volumes?q=Movies &key=AIzaSyBR96McXGF-pgtJNpDmD_otIKGR4vF6ibE' + '&maxResults=2')
    .then(res => setData(res.data.items))
      .catch(err => console.log(err))
  


  return (
    <div className="row">
    
    <div className='bookContainer'>
        
          <Card book={bookData} />
      </div>
      </div>
    

  )
}

export default Movies 