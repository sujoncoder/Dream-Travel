import React from "react";
import { useForm } from "react-hook-form";
import "./addPlace.css";
const AddPlace = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://frozen-scrubland-07900.herokuapp.com/places", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          alert("Tour item added successfully");
        }
      });
  };
  return (
    <div>
      <div className="form-container">
        <div>
          <h1>add your Tour Spot</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} required placeholder="name" />
            <input {...register("img")} required placeholder="photo URL" />
            <input
              {...register("price")}
              required
              placeholder="Price"
              type="number"
            />
            <input {...register("desc")} required placeholder="description" />

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPlace;
