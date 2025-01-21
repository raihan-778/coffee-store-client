import Swal from "sweetalert2";
const AddCoffee = () => {
  const handleAddCoffee = (e) => {
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

    fetch("http://localhost:5000/api/v1/addCoffee", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          Swal.fire({
            title: "Success",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Post Data to MongoDB Successfully",
          });
        }

        console.log("json data", data);
      });
  };
  return (
    <div>
      <h1 className="text-4xl font-semibold text-purple-800">Add New Coffee</h1>
      <form onSubmit={handleAddCoffee}>
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

export default AddCoffee;
