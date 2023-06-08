import { Link, useLocation, useNavigate } from "react-router-dom";


const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    
  };

  return (
    <>
      <div>
        <h3 className="text-center">Please Log In</h3>

        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
               Welcome to Summer Craftify School Login
              </p>
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
                  <Link className="text-warning" to="/signup">
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

export default LogIn;
