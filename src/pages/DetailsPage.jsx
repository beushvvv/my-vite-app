import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchItemById } from "../api/api";

function DetailsPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const loadItem = async () => {
      const response = await fetchItemById(id);
      setItem(response.data);
    };
    loadItem();
  }, [id]);

  if (!item) return <div>Загрузка...</div>;

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <Link to="/">Назад</Link>
    </div>
  );
}

export default DetailsPage;