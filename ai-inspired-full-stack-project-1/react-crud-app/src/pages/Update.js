import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchItems, updateItem } from "../services/api";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    const loadItem = async () => {
      const result = await fetchItems();
      const item = result.data.find((i) => i.id === parseInt(id));
      setName(item.name);
    };
    loadItem();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateItem(id, { name });
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h1>Update Item</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Update
        </button>
      </form>
    </div>
  );
}

export default Update;
