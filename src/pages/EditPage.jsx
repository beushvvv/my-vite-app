import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchItemById, updateItem } from '../api/api';
import { AppContext } from '../context/AppContext';
import './EditPage.css';

function EditPage() {
  const { id: originalId } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    description: '',
    imageUrl: ''
  });
  const [errors, setErrors] = useState({});
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadItem = async () => {
      try {
        dispatch({ type: 'START_LOADING' });
        const response = await fetchItemById(originalId);
        
        if (!response?.data) {
          setNotFound(true);
          return;
        }
        
        setFormData({
          id: response.data.id,
          title: response.data.title || '',
          description: response.data.description || '',
          imageUrl: response.data.image || ''
        });
      } catch (err) {
        dispatch({ type: 'SET_ERROR', payload: 'Ошибка загрузки данных' });
        setNotFound(true);
      } finally {
        dispatch({ type: 'FINISH_LOADING' });
      }
    };
    
    loadItem();
  }, [originalId, dispatch]);

  const validate = () => {
    const newErrors = {};
    
    if (!formData.id) newErrors.id = 'ID обязателен';
    if (!formData.title.trim()) newErrors.title = 'Название обязательно';
    if (formData.title.length > 100) newErrors.title = 'Слишком длинное название';
    if (formData.imageUrl && !/^https?:\/\/.+\..+/.test(formData.imageUrl)) {
      newErrors.imageUrl = 'Некорректный URL изображения';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      dispatch({ type: 'START_LOADING' });
      
      const updatedItem = {
        id: formData.id,
        title: formData.title.trim(),
        description: formData.description,
        image: formData.imageUrl || null,
        updatedAt: new Date().toISOString()
      };

      await updateItem(originalId, updatedItem);
      navigate(`/items/details/${formData.id}`);
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: 'Ошибка сохранения' });
    } finally {
      dispatch({ type: 'FINISH_LOADING' });
    }
  };

  if (notFound) {
    return (
      <div className="not-found">
        <h2>Элемент не найден</h2>
        <button onClick={() => navigate('/items')}>Вернуться к списку</button>
      </div>
    );
  }

  return (
    <div className="edit-page">
      <h1>Редактировать элемент</h1>
      
      {state.error && (
        <div className="global-error">
          {state.error}
          <button onClick={() => dispatch({ type: 'CLEAR_ERROR' })}>×</button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className={`form-group ${errors.id ? 'has-error' : ''}`}>
          <label>ID *</label>
          <input
            type="text"
            value={formData.id}
            onChange={(e) => setFormData({...formData, id: e.target.value})}
            disabled={state.isLoading}
          />
          {errors.id && <span className="error-text">{errors.id}</span>}
        </div>

        <div className={`form-group ${errors.title ? 'has-error' : ''}`}>
          <label>Название *</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            disabled={state.isLoading}
          />
          {errors.title && <span className="error-text">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label>Описание</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            disabled={state.isLoading}
          />
        </div>

        <div className={`form-group ${errors.imageUrl ? 'has-error' : ''}`}>
          <label>URL изображения</label>
          <input
            type="url"
            value={formData.imageUrl}
            onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
            disabled={state.isLoading}
            placeholder="https://example.com/image.jpg"
          />
          {errors.imageUrl && <span className="error-text">{errors.imageUrl}</span>}
        </div>

        <button type="submit" disabled={state.isLoading}>
          {state.isLoading ? 'Сохранение...' : 'Сохранить изменения'}
        </button>
      </form>
    </div>
  );
}

export default EditPage;