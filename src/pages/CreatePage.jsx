import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../api/api";
import ItemForm from "../components/ItemForm";

function CreatePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: "", description: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createItem(formData);
    navigate("/");
  };

  return (
    <div>
      <h1>Создать элемент</h1>
      <ItemForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default CreatePage;