import React , {useState, useEffect}from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";



const Updatewish = () => {
   const {id} = useParams()
   const [item_name, setItem_name] = useState()
    const [description, setDescription] = useState()
    const [link, setLink] = useState()
    const [priority, setPriority] = useState()
    const [date, setDate] = useState()
    const navigate = useNavigate()
    
     useEffect(() => {
        axios
          .get("http://localhost:3001/getUser/"+id)
          .then(result => {console.log(result)
            setItem_name(result.data.item_name)
            setDescription(result.data.description)
            setLink(result.data.link)
            setPriority(result.data.priority)
            setDate(result.data.date)
          })
          .catch(err => console.log(err));
      }, []);

      const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/"+id, {item_name, description, link,priority,date})
        .then(result =>{ console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
      }
   
    return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4"> Update</h2>

      <form className="space-y-4 bg-white p-4 rounded shadow " onSubmit={Update}>
        <div>
          <label className="block font-medium">Item Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter item name"
            value={item_name} onChange={(e) => setItem_name(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            rows="3"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter description"
            value={description} onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label className="block font-medium">Purchase Link (optional)</label>
          <input
            type="url"
            className="w-full p-2 border rounded mt-1"
            placeholder="https://example.com"
            value={link} onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium">Priority</label>
          <select className="w-full p-2 border rounded mt-1"
          value={priority} onChange={(e) => setPriority(e.target.value)}
         >
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
           value={date} onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Updatewish;
