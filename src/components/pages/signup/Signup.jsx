import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const Signup = () => {
  const { user, createUser } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  useTitle("Sign Up");

  const from = "/";
  const handleRegister = (event) => {
    event.preventDefault();
    setErr("");
    const form = event.target;
    const userName = form.username.value;
    const email = form.email.value;
    const pass = form.password.value;
    const img = form.photo.value;

    createUser(email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        user.displayName = userName;
        user.photoURL = img;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErr(errorMessage);
      });
  };
  return (
    <div className="hero min-h-[calc(100vh-300px)]  text-black">
      <div className="hero-content flex-col w-full lg:w-4/5">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-10">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold ">
                  Username:
                </span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="input input-bordered setInput  "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Email:
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered setInput  "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Password:
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered setInput  "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Photo URL:
                </span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered setInput  "
                required
              />
            </div>
            {err && (
              <>
                <p className="text-sm text-red-600 mt-5">{err}</p>
              </>
            )}
            <div className="form-control m-5 ">
              <button className="btn btn-primary">Submit</button>
            </div>
            <p className="text-sm">
              Already an account?
              <span className="ms-1 underline  hover:text-red-500">
                <Link to="/login">Signin</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
