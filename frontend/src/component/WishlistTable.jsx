import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const WishlistTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/deleteUser/'+id)
    .then(res => {console.log(res)
        window.location.reload()
    })
    .catch(errr => console.log(errr))
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Wishlist Items</h2>
        <Link
          to="/wish"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add New
        </Link>
      </div>

      {
        users.map((item, index) => (
            
        <div
          key={index}
          className="bg-white rounded-xl shadow-md border border-gray-200 p-6"
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                {item.item_name}
              </h2>
              <p className="text-gray-600 mt-1">{item.description}</p>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-2 block"
                >
                  View Purchase Link
                </a>
              )}
            </div>

            <span
  className={`text-sm font-medium px-3 py-1 rounded-full ${
    item.priority?.toLowerCase().trim() === "high"
      ? "bg-red-100 text-red-700"
      : item.priority?.toLowerCase().trim() === "medium"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700"
  }`}
>
  {item.priority}
</span>

          </div>

          <p className="text-sm text-gray-500 mt-4">
            Added on: {new Date(item.date).toLocaleString()}
          </p>

          <div className="flex gap-4 mt-4">
            <Link to={`/update/${item._id}`} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Update
            </Link>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={(e) => handleDelete(item._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishlistTable;
