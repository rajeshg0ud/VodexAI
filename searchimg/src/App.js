import './App.css';
import SearchBar from './components/SearchBar';
import ImageList from './components/imageList';
import searchImages  from './Api';
import {useState} from 'react';

function App() {
  const [images, setImages]=useState([]);

  const handleSubmit= async (term)=>{
    const result= await searchImages(term);
    setImages(result);
    console.log(result);
  };

  return (
  <div className="App">
    <SearchBar searchprop={handleSubmit} />
    <hr />
    <ImageList images={images} />
  </div>
  );
} 
export default App;
