function ItemForm({ formData, setFormData, onSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Название"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Описание"
      />
      <button type="submit">Сохранить</button>
    </form>
  );
}

export default ItemForm;