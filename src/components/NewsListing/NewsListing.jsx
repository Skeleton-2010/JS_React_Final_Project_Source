import { React, useState, useEffect } from "react";
import { fetchNews } from "../../services/dataSearch";
import "./NewsListing.css";

const NewsElement = ({ data }) => {
  const { title, description, url, image } = data;
  return (
    <li className="news-element-main">
      <img src={image} alt="" className="article-img" />
      <div className="article-txt">
        <h3 className="article-title">{title}</h3>
        <p className="article-desc">{description}</p>
        <a className="article-url" href={url} target="_blank" rel="noreferrer">
          More
        </a>
      </div>
    </li>
  );
};

export const NewsListing = () => {
  const [articleN, setArticleN] = useState(5);
  const [newsInfo, setNewsInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleGetNews = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchNews("technology", "search", articleN);
      setNewsInfo(data.articles);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetNews();
  }, [articleN]);

  if (loading) return <div>Loading news...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!newsInfo || newsInfo.length === 0) return <div>No news available</div>;

  return (
    <div className="news-main">
      <ul className="news-list">
        {newsInfo.map((art, idx) => (
          <NewsElement key={idx} data={art} />
        ))}
      </ul>
      <button
        className="news-more-btn fc-btn"
        onClick={() => setArticleN(prev => prev + 5)}
        disabled={loading}
      >
        {loading ? "Loading..." : "More Articles"} 
      </button>
    </div>
  );
};
