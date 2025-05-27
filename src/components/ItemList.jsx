import { Link } from "react-router-dom";

function ItemList({ items, onDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Link to={`/details/${item.id}`}>{item.title}</Link>
          <button onClick={() => onDelete(item.id)}>Удалить</button>
          <Link to={`/edit/${item.id}`}>Редактировать</Link>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;