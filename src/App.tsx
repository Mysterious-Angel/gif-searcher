import { useState } from "react";
import "./App.css";

const SEARCH_URL =
  "https://api.giphy.com/v1/gifs/search?type=gifs&limit=10&api_key=Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g&q=";

function App() {
  const [gif, setGif] = useState(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e.currentTarget);

    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get("gif");
    console.log(searchQuery);

    fetch(SEARCH_URL + searchQuery)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // losowy gif
        const randomGif = Math.floor(Math.random() * 10);
        const gifUrl = data.data[randomGif].images.original.url;
        setGif(gifUrl);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="search" name="gif" id="gif" />
        <button type="reset">Clear</button>
      </form>
      {gif && <img src={gif} alt="gif" />}
    </>
  );
}

export default App;
