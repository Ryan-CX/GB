import { useState } from "react";
import "./styles.css";
import axios from "axios";
import Header from "./Header";

export default function App() {
  const googleAPI = process.env.REACT_APP_GOOGLE_API;

  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [api, setApi] = useState(googleAPI);

  const handleChange = (e) => {
    const inputBook = e.target.value;
    setBook(inputBook);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}
          &key=
          ${googleAPI} 
          &maxResults=24`
      );
      console.log(data.data.items);
      setResult(data.data.items);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div class="container">
      <Header />
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <input
            onChange={handleChange}
            type="text"
            className="form-control mt-10"
            placeholder="Search books"
            autoComplete="off"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>

      {result.map((element) => (
        <a href={element.volumeInfo.infoLink}>
          <img src={element.volumeInfo.imageLinks.thumbnail} alt={book.title} />
        </a>
      ))}
      <div></div>
    </div>
  );
}
