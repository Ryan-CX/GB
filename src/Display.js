import React from "react";
const Display = ({ result, book }) => {
  return (
    <div className="display">
      {result.map((element) => (
        <div className="card-container">
          <a
            href={element.volumeInfo.previewLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={element.volumeInfo.imageLinks.thumbnail}
              alt={book.title}
            />
          </a>
          <div className="desc">
            <h2>{element.volumeInfo.title}</h2>
            <h3>{element.volumeInfo.authors}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Display;
