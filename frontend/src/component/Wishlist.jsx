import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
    const [item_name, setItem_name] = useState()
    const [description, setDescription] = useState()
    const [link, setLink] = useState()
    const [priority, setPriority] = useState()
    const [date, setDate] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/wish", {item_name, description, link,priority,date})
        .then(result =>{ console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add to Wishlist</h2>

      <form className="space-y-4 bg-white p-4 rounded shadow " onSubmit={Submit}>
        <div>
          <label className="block font-medium">Item Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter item name"
            onChange={(e) => setItem_name(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            rows="3"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label className="block font-medium">Purchase Link (optional)</label>
          <input
            type="url"
            className="w-full p-2 border rounded mt-1"
            placeholder="https://example.com"
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium">Priority</label>
          <select className="w-full p-2 border rounded mt-1"
         value={priority} onChange={(e) => setPriority(e.target.value)}>
             <option discable >Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>

          </select>
        </div>

        <div>
          <label className="block font-medium">Date & Time</label>
          <input
            type="datetime-local"
            className="w-full p-2 border rounded mt-1"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default Wishlist;
