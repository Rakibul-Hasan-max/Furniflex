import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2'

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile info updated");
          reset();
          // Swal.fire({
          //     position: 'top-end',
          //     icon: 'success',
          //     title: 'User created successfully.',
          //     showConfirmButton: false,
          //     timer: 1500
          // });
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
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
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
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
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="pb-5 ps-8">
              <small>
                Have an account?
                <Link className="ps-2 text-blue-500" to="/login">
                  Sign In
                </Link>{" "}
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;











// import { useContext } from "react";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProvider";

// const Signup = () => {

//     const { handleSubmit } = useForm();
//     const { createUser, updateUserProfile } = useContext(AuthContext);

//     const onSubmit = data => {
//         console.log(data);
//         createUser(data.email, data.password)
//             .then(result => {
//                 const loggedUser = result.user;
//                 console.log(loggedUser);
//                 // updateUserProfile(data.name, data.photoURL)
//                 //     .then(() => {
//                 //         console.log('user profile info updated')
//                 //         reset();
//                 //         Swal.fire({
//                 //             position: 'top-end',
//                 //             icon: 'success',
//                 //             title: 'User created successfully.',
//                 //             showConfirmButton: false,
//                 //             timer: 1500
//                 //         });
//                 //         navigate('/');

//                 //     })
//                 //     .catch(error => console.log(error))
//             })
//     };

//   return (
//     <div>
//       <div className="hero bg-base-200 min-h-screen">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <div className="text-center lg:text-left">
//             <h1 className="text-5xl font-bold">FurniFlex</h1>
//             <p className="py-6">
//               Discover a seamless shopping experience with our curated
//               collection of products. From fashion to electronics, we bring
//               quality.
//             </p>
//           </div>
//           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//             <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//               <div className="text-center lg:text-left">
//                 <h1 className="text-2xl font-bold">Welcome To</h1>
//                 <h1 className="text-3xl font-bold">FurniFlex</h1>
//                 <p className="text-xs pb-6 pt-3">
//                   Signup for purchase your desire products
//                 </p>
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">First Name</span>
//                 </label>
//                 <input
//                   type="name"
//                   placeholder="First Name"
//                   className="input input-bordered"
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Last Name</span>
//                 </label>
//                 <input
//                   type="name"
//                   placeholder="Last Name"
//                   className="input input-bordered"
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email address</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="email"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="password"
//                   className="input input-bordered"
//                   required
//                 />
//                 <label className="label justify-end">
//                   <a
//                     href="#"
//                     className="label-text-alt link link-hover text-blue-500"
//                   >
//                     Forgot password?
//                   </a>
//                 </label>
//                 <label className="">
//                   <input type="checkbox" />
//                   <a className="text-xs ms-2">I agree to the Terms & Policy</a>
//                 </label>
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn btn-primary">Sign Up</button>
//               </div>
//             </form>
//             <p className="pb-5 ps-8">
//               <small>
//                 Have an account?
//                 <Link className="ps-2 text-blue-500" to="/login">
//                   Sign In
//                 </Link>{" "}
//               </small>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
