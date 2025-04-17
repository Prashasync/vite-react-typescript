import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NotesForEmotions = () => {
  const [formData, setFormData] = useState("");
  const navigate = useNavigate();

  const handleTextareaChange = (event) => {
    setFormData(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/symptoms/log/notes`,
        { formData },
        {
          headers: {
            "Content-Type": "application/json",
          },
          // withCredentials: truerue,
        }
      );
      if (response.status === 200) {
        navigate("/symptom-tracker/questionare/4");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        navigate("/login");
        return;
      }
      console.error("Error submitting note:", error);
    }
  };

  const handleSkip = () => {
    navigate("/symptom-tracker/questionare/4");
  };

  return (
    <div className="note-container">
      <form>
        <h1>Would you like to add a note?</h1>
        <label htmlFor="note">Quick Note</label>
        <textarea
          placeholder="Write your note here..."
          rows="4"
          cols="50"
          className="note-textarea"
          value={formData}
          onChange={handleTextareaChange}
        ></textarea>
      </form>
      <div className="notes-btn">
        <button onClick={handleSkip}>Skip</button>
        <button onClick={handleSubmit} className="note-submit-button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default NotesForEmotions;
