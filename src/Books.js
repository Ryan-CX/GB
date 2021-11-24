import React from "react";
import axios from "axios";
import { useState } from "react";
import Display from "./Display";
import Header from "./Header";
import Search from "./Search";

const Books = () => {
  const googleAPI = process.env.REACT_APP_GOOGLE_API;

  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);

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

      setResult(data.data.items);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Search handleChange={handleChange} handleSubmit={handleSubmit} />
      <Display result={result} book={book} />
    </div>
  );
};
export default Books;
