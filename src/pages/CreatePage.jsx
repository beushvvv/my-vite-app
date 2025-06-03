import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { createItem } from '../api/api';
import { AppContext } from '../context/AppContext';
import './CreatePage.css';

function CreatePage() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);
  const [formData, setFormData] = useState({ 
    id: '',
    title: '',
    description: '',
    imageUrl: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!formData.id.trim()) {
      newErrors.id = 'ID обязателен';
    } else if (!/^[a-zA-Z0-9-_]+$/.test(formData.id)) {
      newErrors.id = 'ID может содержать только буквы, цифры, дефисы и подчеркивания';
    }

    if (!formData.title.trim()) {
      newErrors.title = 'Название обязательно';
    } else if (formData.title.length > 100) {
      newErrors.title = 'Не более 100 символов';
    }

    if (formData.description.length > 500) {
      newErrors.description = 'Не более 500 символов';
    }

    if (formData.imageUrl && !/^https?:\/\/.+\..+/.test(formData.imageUrl)) {
      newErrors.imageUrl = 'Некорректный URL изображения';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_ERROR' });
    
    if (!validate()) return;

    try {
      dispatch({ type: 'START_LOADING' });
      
      const newItem = {
        id: formData.id.trim(),
        title: formData.title.trim(),
        description: formData.description,
        image: formData.imageUrl || null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      await createItem(newItem);
      navigate(`/items/details/${formData.id}`);
    } catch (err) {
      dispatch({ 
        type: 'SET_ERROR', 
        payload: err.response?.data?.message || 'Ошибка при создании элемента' 
      });
    } finally {
      dispatch({ type: 'FINISH_LOADING' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Опционально: валидация при вводе
    if (errors[name]) {
      validate();
    }
  };

  return (
    <div className="create-page">
      <h1>Создать новый элемент</h1>
      
      {state.error && (
        <div className="server-error">
          {state.error}
          <button onClick={() => dispatch({ type: 'CLEAR_ERROR' })}>×</button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className={`form-group ${errors.id ? 'error' : ''}`}>
          <label>ID *</label>
          <input
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="Укажите уникальный ID"
            disabled={state.isLoading}
          />
          {errors.id && (
            <span className="error-message">{errors.id}</span>
          )}
          <div className="hint">
            ID может содержать буквы, цифры, дефисы и подчеркивания
          </div>
        </div>

        <div className={`form-group ${errors.title ? 'error' : ''}`}>
          <label>Название *</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Введите название"
            disabled={state.isLoading}
          />
          {errors.title && (
            <span className="error-message">{errors.title}</span>
          )}
        </div>

        <div className={`form-group ${errors.description ? 'error' : ''}`}>
          <label>Описание</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Введите описание"
            rows="4"
            disabled={state.isLoading}
          />
          <div className="char-counter">
            {formData.description.length}/500
          </div>
          {errors.description && (
            <span className="error-message">{errors.description}</span>
          )}
        </div>

        <div className={`form-group ${errors.imageUrl ? 'error' : ''}`}>
          <label>URL изображения</label>
          <input
            name="imageUrl"
            type="url"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            disabled={state.isLoading}
          />
          {errors.imageUrl && (
            <span className="error-message">{errors.imageUrl}</span>
          )}
        </div>

        <button 
          type="submit" 
          disabled={state.isLoading}
          className={state.isLoading ? 'submitting' : ''}
        >
          {state.isLoading ? 'Создание...' : 'Создать элемент'}
        </button>
      </form>
    </div>
  );
}

export default CreatePage;