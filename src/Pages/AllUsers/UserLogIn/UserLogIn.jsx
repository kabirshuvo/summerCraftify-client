import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../../../shared/SocialLogIn/SocialLogIn";
import useTitle from "../../../hooks/useTitle";

const UserLogIn = () => {
  useTitle('LogIn || summerCraftify');
  const navigate = useNavigate();
  const location = useLocation();

  const { signIn } = useAuth()

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Welcome to Summer Craftify",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <>
      <div>
        <h3 className="text-center">Please Log In</h3>

        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
            <SocialLogin></SocialLogin>
            <p className="text-success text-center">Get Access By Google</p>
            <div className="divider text-warning">Or</div>
              <h1 className="text-5xl font-bold text-center">Login now!</h1>
              <p className="py-6 text-center">Welcome to Summer Craftify School Login</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <button className="btn btn-info btn-outline mt-4">
                    log-in
                  </button>
                </div>
              </form>
              <p className="py-4 text-center">
                <small>
                  New On summerCraftify?{" "}
                  <Link to="/register" className="text-warning">
                    Please Register
                  </Link>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogIn;
