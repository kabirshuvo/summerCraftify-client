import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const UserRegistration = () => {


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const { createUser  } = useAuth()
      const navigate = useNavigate();
    
      const onSubmit = (data) => {
        console.log(data)
       
      };
    





    return (
        <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp</h1>
            <p className="py-6">
             Get Registerd with Summer Craftify 
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Your photoURL please"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-warning">
                    photoURL Makes Your Profile Better
                  </span>
                )}
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", { required: true, minLength: 6 })}
                  placeholder="Type Yur Password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <p className="text-warning">
                    Password should be at least 6 (six) carecthers
                  </p>
                )}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="signUp"
                />
              </div>
            </form>
            <p className="py-4 text-center">
              <small>
                Allready Have an Account?{" "}
                <Link className="text-warning" to="/login">
                  Please Register
                </Link>
              </small>
            </p>
          
          </div>
        </div>
      </div>
    </>
    );
};

export default UserRegistration;