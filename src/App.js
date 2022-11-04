import axios from "axios";
import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import NewsContent from "./components/NewsContent";
import "./index.css"
import Footer from "./components/Footer";

function App() {

  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsresults] = useState();
  const [loadMore, setLoadMore] = useState(10);
  
  const newsApi = async () =>{
    try{
        const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}&pageSize=${loadMore}`);
      setNewsArray(news.data.articles);
      setNewsresults(news.data.totalResults)
    } catch(error){
      console.log(error);
    }
  };

  useEffect(() =>{
    newsApi();
  }, [category,newsResults,loadMore]);

  return (
    <div style={{
      backgroundColor: "#ffffff",
      backgroundImage: "url(https://www.transparenttextures.com/patterns/beige-paper.png)"
    }}>
      <Navbar
        setCategory={setCategory}
      />

      <NewsContent
        newsArray={newsArray}
        newsResults={newsResults}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
      />
      <Footer/>

    </div>
  );
}

export default App;
