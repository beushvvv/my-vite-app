import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchItems, deleteItem } from "../api/api";
import ItemList from "../components/ItemList";

function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      const response = await fetchItems();
      setItems(response.data);
    };
    loadItems();
  }, []);

  const handleDelete = async (id) => {
    await deleteItem(id);
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Список элементов</h1>
      <Link to="/create">Добавить новый</Link>
      <ItemList items={items} onDelete={handleDelete} />
    </div>
  );
}

export default HomePage;