import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//APP JS fro routing setup
import StoryBooks from "./pages/StoryBooks";
import ProgrammingBooks from "./pages/ProgrammingBooks";
import Novels from "./pages/Novels";
import Movies from "./pages/Movies";
import Order from "./pages/Order";
import Settings from "./pages/Settings";
import React, { useState } from "react";
import Navbar from "./Components/Navbar"
import Mainpage from "./Components/Mainpage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ImageData from "./pages/ImgData";
import UploadBook from "./pages/UploadBook";
import MyCarousel from "./pages/MyCarousel";
import Sortby from "./pages/Sortby";
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";
import Footer from "./Components/Footer";
import GigForm from "./pages/GigForm";
import Bidding from "./pages/Bidding";
import LandP from "./pages/LandP";
import Stories from "./pages/Stories";
import BookPage from './pages/BookPage';
import SearchForm from "./pages/SearchForm";
import SearchResults from "./pages/SearchResults";
import AuthorLand from "./pages/AuthorLand";
import SentimentAnalysis from "./pages/SentimentAnalysis";
import ProfileForm from "./pages/ProfileForm";
import PaymentForm from "./pages/PaymentForm";
import Chatbox from "./pages/Chatbox";
import ImageUploadForm from "./pages/ImageUploadForm";
import DarklightMode from "./pages/DarklightMode";
import GigPage from "./pages/GigPage";


const App = () => {
  
  const [results, setResults] = useState([]);

  const searchByName = (name) => {
    fetch(`http://localhost:8800/search/${name}`) 
      .then((response) => response.json())
      .then((data) => {
        setResults(data)
      })
      .catch((error) => console.error("Error searching: ", error));
    };
  const data = [
    { id: 1, name: "Test Product 1", image: "/image/2.jpg", price: "100" },
    { id: 2, name: "Test Product 2", image: "/image/3.jpg", price: "60" },
    { id: 3, name: "Test Product 3", image: "/image/4.jpg", price: "200" },
];
const movie = [

  { id: 1, name: "Test Product 1", image: "/image/10.jpg", price: "100" },
  { id: 2, name: "Test Product 2", image: "/image/11.jpg", price: "60" },
  { id: 3, name: "Test Product 3", image: "/image/12.jpg", price: "200" },
];
const novel = [
  { id: 1, name: "Test Product 1", image: "/image/4.jpg", price: "100" },
  { id: 5, name: "Test Product 5", image: "/image/8.jpg", price: "195" },
  { id: 6, name: "Test Product 6", image: "/image/10.jpg", price: "30" },
];

const [login, setLogin] = useState(false);
const handleLoginStateUpdate = (isLoggedIn) => {
  setLogin(isLoggedIn);
};
  
  return (
    
    <BrowserRouter>
       {/* <SearchForm onSearch={searchByName} /> */}
      <Navbar onSearch={searchByName} isLoggedIn={login} />
      <Sidebar>
        
        <Routes>
          <Route path="/storybook" element={<StoryBooks Data={data}/>} />
          <Route path="/Programming-Books" element={<ProgrammingBooks />} />
          <Route path="/Movies" element={<Movies/>} />
          <Route path="/Mainpage" element={<Mainpage/>} />
          <Route path="/novels" element={<Novels />} />
          <Route path="/order" element={<Order />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/Sortby" element={<Sortby />} />
          <Route path="/login" element={<Login loginStateUpdater={handleLoginStateUpdate}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Bidding/:useremail" element={<Bidding />} />
          <Route path="/MyCarousel" element={<MyCarousel />} />
          <Route path="*" element={<></>} />
          <Route path="/add" element={<Add />} />
          <Route path="/books" element={<Books />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/getdata/:id" element={<ImageData Data={data} />}>  </Route>  
          <Route path="/uploadbook" element={<UploadBook />}>  </Route>
          <Route path="/GigForm" element={<GigForm />}>  </Route>
          <Route path="/" element={<LandP />}>  </Route>
          <Route path="/stories" element={<Stories />}>  </Route>
          <Route path="/bookpage" element={<BookPage />}>  </Route>
          <Route path="/senti" element={<SentimentAnalysis />}>  </Route>
          <Route path="/profile" element={<ProfileForm />}>  </Route>
          {/* <Route path="/SearchForm" element={<SearchForm onSearch={searchByName} />}></Route> */}
          <Route path="/search" element={<SearchResults results={results} />}> </Route>
          <Route path="/AuthorLand" element={<AuthorLand/>}>  </Route>
          <Route path="/paymentForm" element={<PaymentForm/>}>  </Route>
          <Route path="/chatbox" element={<Chatbox/>}>  </Route>
          <Route path="/imageupload" element={<ImageUploadForm/>}>  </Route>
          <Route path="/GigPage" element={<GigPage/>}>  </Route>
          
        </Routes>
      </Sidebar>
      <Footer />   
    </BrowserRouter>
    
  );
}
export default App;