import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useTitle from "../../../hooks/useTitle";
import SocialLogin from "../../../shared/SocialLogIn/SocialLogIn";

const UserRegistration = () => {
  useTitle("Registration || summerCraftify");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        // const loggedUser = result.user;
        updateUserProfile(data.name, data.photoURL).then(() => {
          const saveUser = {
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
          };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                let timerInterval;
                Swal.fire({
                  title: "User Registration Successful",
                  html: "Welcome to SummerCraftify",
                  timer: 1000,
                  timerProgressBar: true,
                  didOpen: () => {
                    Swal.showLoading();
                    const b = Swal.getHtmlContainer().querySelector("b");
                    timerInterval = setInterval(() => {
                      b.textContent = Swal.getTimerLeft();
                    }, 100);
                  },
                  willClose: () => {
                    clearInterval(timerInterval);
                  },
                }).then((result) => {
                  if (result.dismiss === Swal.DismissReason.timer) {
                    console.log("I was closed by the timer");
                  }
                });
                navigate("/");
              }
            });
        });
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      <div className="hero  min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <SocialLogin></SocialLogin>
            <p className="text-success text-center">Get Access By Google</p>
            <div className="divider text-warning">Or</div>
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <p className="py-6">Get Registered with SummerCraftify</p>
          </div>
          <div className="card flex-shrink-0 max-w-xl shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Your Name Please"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-warning">
                    Name Field Cannot be Empty
                  </span>
                )}
              </div>
              {/* Photo URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Your photo URL please"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-warning">
                    photoURL Makes Your Profile Better
                  </span>
                )}
              </div>
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="Your email please"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-warning">
                    Without Email Registration is not possible
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", { required: true, minLength: 6 })}
                  placeholder="Type Your Password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <p className="text-warning">
                    Password should be at least 6 characters
                  </p>
                )}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {/* Phone Number */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  {...register("phoneNumber", { required: true })}
                  placeholder="Your phone number please"
                  className="input input-bordered"
                />
                {errors.phoneNumber && (
                  <span className="text-warning">Phone Number is required</span>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-outline btn-info w-full"
                />
              </div>
              <div className="text-center pt-4">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="text-warning">
                    Log In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserRegistration;
