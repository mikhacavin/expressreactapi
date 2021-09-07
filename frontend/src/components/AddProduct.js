import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/products", {
      title: title,
      price: price,
    });
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={saveProduct}>
        <div className="field">
          <label htmlFor="">Title</label>
          <input
            type="text"
            className="input"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="">Price</label>
          <input
            type="text"
            className="input"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="field">
          <button className="button is-primary">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
