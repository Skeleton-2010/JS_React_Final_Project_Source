import { React, useState, useEffect } from "react";
import { fetchImages } from "../../services/dataSearch";
import "./ImageDisplay.css";

export const ImageDisplay = () => {
  const [articleN, setArticleN] = useState(5);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const handleGetImages = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchImages("nature", page);
      console.log(data);
      setImages(data.hits);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNewPage = (x) => {
    const newPage = page + x;
    if (1 <= newPage && newPage <= 20) {
      console.log(newPage);
      setPage(newPage);
    }
  };

  useEffect(() => {
    handleGetImages();
  }, [page]);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="gallery-main">
      <button
        type="button"
        className="fc-btn"
        onClick={() => {
          handleNewPage(-1);
        }}
      >
        Before
      </button>
      <ul className="gallery-list">
        {images.map(({ largeImageURL, user }, idx) => (
          <li className="gallery-el">
            <img src={largeImageURL} alt="image" className="gallery-image" />
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="fc-btn"
        onClick={() => {
          handleNewPage(1);
        }}
      >
        More
      </button>
    </div>
  );
};
