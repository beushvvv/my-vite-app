import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { fetchItems, deleteItem } from '../api/api';
import { AppContext } from '../context/AppContext';
import './HomePage.css';

function HomePage() {
  const { state, dispatch } = useContext(AppContext);
  const [items, setItems] = useState([]);
  const [localError, setLocalError] = useState(null);

  useEffect(() => {
    const loadItems = async () => {
      try {
        dispatch({ type: 'START_LOADING' });
        const response = await fetchItems();
        setItems(response.data || []); // Гарантируем массив, даже если data undefined
      } catch (err) {
        setLocalError(err.message || 'Ошибка загрузки данных');
        dispatch({ type: 'SET_ERROR', payload: 'Не удалось загрузить данные' });
      } finally {
        dispatch({ type: 'FINISH_LOADING' });
      }
    };
    loadItems();
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      dispatch({ type: 'START_LOADING' });
      await deleteItem(id);
      setItems(prevItems => prevItems.filter(item => item?.id !== id));
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: 'Ошибка при удалении' });
    } finally {
      dispatch({ type: 'FINISH_LOADING' });
    }
  };

  if (state.isLoading && items.length === 0) {
    return <div className="loading-spinner">Загрузка...</div>;
  }

  if (localError) {
    return <div className="error-message">{localError}</div>;
  }

  return (
    <div className="home-page">
      <h1>Список элементов</h1>
      <Link to="/items/create" className="create-button">
        Добавить новый
      </Link>
      
      {state.error && (
        <div className="global-error">
          {state.error}
          <button onClick={() => dispatch({ type: 'CLEAR_ERROR' })}>×</button>
        </div>
      )}

      <div className="items-grid">
        {items.map(item => (
          <div key={item?.id} className="item-card">
            <h3>{item?.title || 'Без названия'}</h3>
            <p>{(item?.description || '').substring(0, 100)}...</p>
            <div className="item-actions">
              <Link to={`/items/details/${item?.id}`} className="action-button">
                Подробнее
              </Link>
              <Link to={`/items/edit/${item?.id}`} className="action-button">
                Редактировать
              </Link>
              <button 
                onClick={() => item?.id && handleDelete(item.id)}
                className="delete-button"
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;