import React, { useState } from "react";
import "./Add.css";
import { assets, url } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Classic Pizza",
  });

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!image) {
      toast.error("Image not selected");
      return null;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/pizza/add`, formData);
    if (response.data.success) {
      toast.success(response.data.message);
      setData({
        name: "",
        description: "",
        price: "",
        category: data.category,
      });
      setImage(false);
    } else {
      toast.error(response.data.message);
    }
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload image</p>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
              e.target.value = "";
            }}
            type="file"
            accept="image/*"
            id="image"
            hidden
          />
          <label htmlFor="image">
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt=""
            />
          </label>
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            name="name"
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            placeholder="Type here"
            required
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            name="description"
            onChange={onChangeHandler}
            value={data.description}
            type="text"
            rows={6}
            placeholder="Write content here"
            required
          />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select name="category" onChange={onChangeHandler}>
              <option value="Classic Pizza">Classic Pizza</option>
              <option value="Signature Pizza">Signature Pizza</option>
              <option value="Gourmet Pizza">Gourmet Pizza</option>
              <option value="Diet-Friendly Pizza">Diet-Friendly Pizza</option>
              <option value="Vegan Pizza">Vegan Pizza</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              type="Number"
              name="price"
              onChange={onChangeHandler}
              value={data.price}
              placeholder="25"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
