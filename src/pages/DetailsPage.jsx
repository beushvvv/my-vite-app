import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'; // Добавлен Link
import { fetchItemById } from '../api/api';
import { AppContext } from '../context/AppContext';
import './DetailsPage.css';

function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);
  const [item, setItem] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadItem = async () => {
      try {
        dispatch({ type: 'START_LOADING' });
        const response = await fetchItemById(id);
        
        if (!response?.data) {
          setNotFound(true);
          return;
        }
        
        setItem({
          id: response.data.id,
          title: response.data.title || 'Без названия',
          description: response.data.description || 'Нет описания',
          image: response.data.image || null,
          createdAt: response.data.createdAt || new Date().toISOString(),
          updatedAt: response.data.updatedAt || null
        });
      } catch (err) {
        dispatch({ type: 'SET_ERROR', payload: 'Ошибка загрузки данных' });
        setNotFound(true);
      } finally {
        dispatch({ type: 'FINISH_LOADING' });
      }
    };
    
    loadItem();
  }, [id, dispatch]);

  if (notFound) {
    return (
      <div className="not-found">
        <h2>Элемент не найден</h2>
        <button onClick={() => navigate('/items')}>Вернуться к списку</button>
      </div>
    );
  }

  if (!item) {
    return <div className="loading-spinner">Загрузка...</div>;
  }

  return (
    <div className="details-page">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Назад
      </button>
      
      <div className="details-card">
        <div className="details-header">
          <h2>{item.title}</h2>
          <span className="item-id">ID: {item.id}</span>
        </div>
        
        {item.image && (
          <div className="item-image">
            <img src={item.image} alt={item.title} />
          </div>
        )}

        <div className="details-content">
          <h3>Описание</h3>
          <p>{item.description}</p>
          
          <div className="meta-data">
            <span>Создано: {new Date(item.createdAt).toLocaleDateString()}</span>
            {item.updatedAt && (
              <span>Обновлено: {new Date(item.updatedAt).toLocaleDateString()}</span>
            )}
          </div>
        </div>

        <div className="details-actions">
          <Link to={`/items/edit/${item.id}`} className="edit-button">
            Редактировать
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;