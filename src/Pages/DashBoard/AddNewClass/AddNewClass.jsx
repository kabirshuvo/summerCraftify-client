import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const AddNewClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { className, instructorName, classDuration, courseDuration, fees, categoryName, categoryId, totalSeats, description } = data;
       
          const newClass = {
            className,
            instructorName,
            fees: parseFloat(fees),
            categoryName,
            categoryId: parseFloat(categoryId),
            classDuration: parseFloat(classDuration),
            courseDuration: parseFloat(courseDuration),
            totalSeats: parseFloat(totalSeats),
            description,
            image: imgURL,
          };

          axiosSecure.post("/summerclasses", newClass).then((data) => {
            console.log("after posting new class", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "New Class Added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  console.log(errors);

  return (
    <div className="w-full justify-center items-center flex flex-col my-16">
      <div className="w-full mb-16">
        <SectionTitle
          heading="Add A New Class"
          title="Whats new"
        ></SectionTitle>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text font-semibold">Class Name*</span>
          </label>
          <input
            type="text"
            placeholder="Class Name"
            {...register("className", { required: true, maxLength: 30 })}
            className="input input-bordered w-full max-w-xs mb-4"
          />{" "}
        </div>

        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text font-semibold">Instructor Name*</span>
          </label>
          <input
            type="text"
            placeholder="Instructor Name"
            {...register("instructorName", { required: true, maxLength: 30 })}
            className="input input-bordered w-full max-w-xs mb-4"
          />
        </div>
        </div>

<div className="flex gap-7">
{/* Category Sellection */}
<div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">
                Please Sellect A Category*
              </span>
            </label>
            <select
              defaultValue="Pick one"
              {...register("categoryName", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick one</option>
              <option>adventure</option>
              <option>artistry</option>
              <option>crafting</option>
              <option>creations</option>
              <option>sunshine</option>
              <option>explorations</option>
              <option>paperparadise</option>
            </select>
          </div>

          {/*  */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">
              Sellect Class Duration*
              </span>
            </label>
            <select
              defaultValue="Pick one"
              {...register("classDuration", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick one</option>
              <option>1 hour</option>
              <option>2 hours</option>
              <option>3 hours</option>
              <option>4 hours</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">
               Sellect Course Duration*
              </span>
            </label>
            <select
              defaultValue="Pick one"
              {...register("courseDuration", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick one</option>
              <option>2 weeks</option>
              <option>3 weeks</option>
              <option>4 weeks</option>
              <option>5 weeks</option>
              <option>6 weeks</option>
              <option>7 weeks</option>
              <option>8 weeks</option>
            </select>
          </div>

       
</div>
        <div className="flex gap-7">
          {/* Category Sellection */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">
                Please Sellect A CategoryId*
              </span>
            </label>
            <select
              defaultValue="Pick one"
              {...register("categoryId", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick one</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </select>
          </div>
          {/* fess Section */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Fess*</span>
            </label>
            <input
              type="number"
              placeholder="Input the Fees"
              {...register("fees", { required: true })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">total Seats*</span>
            </label>
            <input
              type="number"
              placeholder="Input the total seat"
              {...register("totalSeats", { required: true })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* Text Area : Class Details */}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description*</span>
          </label>
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered h-40"
            placeholder="Add Class Details"
          ></textarea>
        </div>
        {/* Add File  */}
        <div className="flex items-center">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Cover Image</span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <input
            className="btn btn-sm mt-9 ms-4 "
            type="submit"
            value="Add New Class"
          />
        </div>
      </form>
    </div>
  );
};

export default AddNewClass;
