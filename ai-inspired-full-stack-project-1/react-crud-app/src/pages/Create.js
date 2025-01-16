import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../services/api";

function Create() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createItem({ name });
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h1>Create Item</h1>
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
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
