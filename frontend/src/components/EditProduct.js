import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();
  const { id } = useParams();

  const updateProduct = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/products/${id}`, {
      title: title,
      price: price,
    });
    history.push("/");
  };

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setTitle(response.data.title);
    setPrice(response.data.price);
  };

  return (
    <div>
      <form onSubmit={updateProduct}>
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
          <button className="button is-primary">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
