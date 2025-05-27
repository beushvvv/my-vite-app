import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchItemById, updateItem } from "../api/api";
import ItemForm from "../components/ItemForm";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: "", description: "" });

  useEffect(() => {
    const loadItem = async () => {
      const response = await fetchItemById(id);
      setFormData(response.data);
    };
    loadItem();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateItem(id, formData);
    navigate("/");
  };

  return (
    <div>
      <h1>Редактировать элемент</h1>
      <ItemForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default EditPage;