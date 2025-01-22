import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const formInput = e.target;
    const name = formInput.name.value;
    const chef = formInput.chef.value;
    const supplier = formInput.supplier.value;
    const taste = formInput.taste.value;
    const category = formInput.category.value;
    const details = formInput.details.value;
    const photo = formInput.photo.value;
    const newCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log("newCoffee", newCoffee);

    fetch(`http://localhost:5000/api/v1/coffes/${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("put", data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated Successfully",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Coffee Updated to MongoDB Successfully",
          });
        }

        console.log("json data", data);
      });
  };
  return (
    <div>
      <h1 className="text-4xl font-semibold text-purple-800">Update Coffee</h1>
      <form onSubmit={handleUpdateCoffee}>
        {/* Name & Chef Input */}
        <div className="flex space-x-2 w-full">
          <div className="form-control w-1/2">
            <label className="label ">
              <span className="label-text text-xl font-semibold">Name</span>
            </label>
            <input
              placeholder="Name"
              type="text"
              name="name"
              defaultValue={name}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold">Chef</span>
            </label>
            <input
              placeholder="Chef"
              defaultValue={chef}
              type="text"
              name="chef"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        {/* Supplier & taste Input */}
        <div className="flex space-x-2 w-full">
          <div className="form-control w-1/2">
            <label className="label ">
              <span className="label-text text-xl font-semibold">Supplier</span>
            </label>
            <input
              placeholder="Supplier"
              defaultValue={supplier}
              type="text"
              name="supplier"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold">Taste</span>
            </label>
            <input
              placeholder="Taste"
              defaultValue={taste}
              type="text"
              name="taste"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        {/* Category & Details Input */}
        <div className="flex space-x-2 w-full">
          <div className="form-control w-1/2">
            <label className="label ">
              <span className="label-text text-xl font-semibold">Category</span>
            </label>
            <input
              placeholder="Category"
              defaultValue={category}
              type="text"
              name="category"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold">Details</span>
            </label>
            <input
              placeholder="Details"
              defaultValue={details}
              type="text"
              name="details"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        {/* Name & Chef Input */}
        <div className=" space-x-2 w-full">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Photo</span>
            </label>
            <input
              placeholder="Enter Photo Url"
              defaultValue={photo}
              type="text"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className=" mt-3 space-x-2 w-full">
          <div className="form-control">
            <input
              placeholder="Enter Photo Url"
              type="submit"
              className=" btn btn-outline btn-success "
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
