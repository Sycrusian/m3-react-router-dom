import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fakeNews } from "../../services/api";

export const News = () => {
  const [ news, setNews ] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadNews = async () => {
      try {
        const { data } = await fakeNews.get("/news");
        setNews(data);
      } catch (error) {
        console.error(error.message);
        navigate("/");
      }
    }
    loadNews();
  }, []);

  return (
    <>
      <ul>
        {news && news.map(newspiece => <li key={newspiece.id}><Link to={`/news/${newspiece.id}`}>{newspiece.title}</Link></li>)}
      </ul>
    </>
  );
}