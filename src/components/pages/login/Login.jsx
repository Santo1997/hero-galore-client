import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Login = () => {
  const { user, signIn } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    setErr("");
    const form = event.target;
    const email = form.email.value;
    const pass = form.pass.value;

    signIn(email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErr(errorMessage);
      });
  };
  return (
    <div className="hero min-h-[calc(100vh-300px)] text-black">
      <div className="hero-content flex-col w-full lg:w-3/6">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-10 ">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
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
                className="input input-bordered setInput "
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
                name="pass"
                placeholder="password"
                className="input input-bordered setInput"
                required
              />
            </div>
            {err && (
              <>
                <p className="text-sm text-red-600 mt-5">{err}</p>
              </>
            )}
            <div className="form-control m-5">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="text-sm">
              Create an account?
              <span className="ms-1 underline  hover:text-red-500">
                <Link to="/signUp">Signup</Link>
              </span>
            </p>
          </form>
          <div className="divider">OR Go With</div>
          <div className=" text-center mb-10">
            <button className="btn btn-outline btn-success btn-xs btn-md ">
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
