import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
    // const { signIn } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";
  console.log("state in the location login page", location.state);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      // Swal.fire({
      //     title: 'User Login Successful.',
      //     showClass: {
      //         popup: 'animate__animated animate__fadeInDown'
      //     },
      //     hideClass: {
      //         popup: 'animate__animated animate__fadeOutUp'
      //     }
      // });
      // navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">FurniFlex</h1>
            <p className="py-6">
              Discover a seamless shopping experience with our curated
              collection of products. From fashion to electronics, we bring
              quality.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl font-bold">Welcome Back!</h1>
                <p className="text-xs pb-6 pt-3">
                  Enter your Credentials to access your account
                </p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email address</span>
                </label>
                <input
                  type="email"
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
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label justify-end">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-blue-500"
                  >
                    Forgot password?
                  </a>
                </label>
                <label className="">
                  <input type="checkbox" />
                  <a className="text-xs ms-2">I agree to the Terms & Policy</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
            </form>
            <p className="pb-5 ps-8">
              <small>
                Create an account?
                <Link className="ps-2 text-blue-500" to="/signup">
                  Sign Up
                </Link>{" "}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
