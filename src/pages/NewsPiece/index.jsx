import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fakeNews } from "../../services/api";

export const NewsPiece = () => {
  const [ news, setNews ] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getNews = async () => {
      try {
        const { data } = await fakeNews.get(`/news/${id}`);
        setNews(data);
      } catch (error) {
        console.error(error.message);
        navigate("/news");
      }
    }
    getNews();
  }, []);

  return (
    <>
    {news &&
      <>
        <h1>{news.title}</h1>
        <h2>Autor: {news.author}</h2>
        <h2>Categoria: {news.category}</h2>
        <p>{news.content}</p>
      </>
      }
      <Link to="/news">Retornar</Link>
    </>
  );
}