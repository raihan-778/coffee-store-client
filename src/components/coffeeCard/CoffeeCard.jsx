import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ singleCoffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } =
    singleCoffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `
                  http://localhost:5000/api/v1/coffees/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted Successfully.",
                icon: "warning",
              });

              const remainingCoffees = coffees.filter((cfe) => cfe._id != _id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
    console.log(_id);
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full">
        <div>
          {" "}
          <h2 className="card-title">{name}</h2>
          <p>{supplier}</p>
          <p>{chef}</p>
          <p>{taste}</p>
          <p>{category}</p>
          <p>{details}</p>
        </div>
        <div className="card-actions justify-">
          <div className="join join-vertical end space-y-4">
            <button className="btn ">View</button>
            <Link to={`update-coffee/${_id}`}>
              <button className="btn ">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-orange-500 "
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
