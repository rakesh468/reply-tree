import React, { useState } from "react";
import "./Input.css";

function Input() {
  const [message, setMessage] = useState("");
  const [list, setlist] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(message);
    const data = { message };
    if (message) {
      setlist((li) => [...li, data]);
      setMessage("");
    }
  };
  return (
    <div className="main-container container">
      <form onSubmit={handleSubmit}>
        <div className="sub-container mt-3">
          <div class="input-group input-group-lg">
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              value={message}
              placeholder="Type Something...."
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        </div>
        <div className="list-item">
          <h4>
            <label className="mt-3">Hello Everyone</label>
          </h4>
          <button className="btn btn-primary my-3 btn-lg" value="submit">
            Reply
          </button>
        </div>
        {list.map((a, index) => (
          <div key={index} className="list-item mt-3">
            <h4>{a.message}</h4>
            <button className="btn btn-primary btn-lg mb-3" value="submit">
              Reply
            </button>
          </div>
        ))}
      </form>
    </div>
  );
}

export default Input;
