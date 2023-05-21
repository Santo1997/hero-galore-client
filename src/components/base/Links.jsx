import React, { useContext, useState } from "react";
import Activelink from "./Activelink";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Links = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const from = "/";
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <li>
        <Activelink to="/">Home</Activelink>
      </li>
      <li>
        <Activelink to="/all_toys">All Toys</Activelink>
      </li>
      {user && (
        <>
          <li>
            <Activelink to="/my_toys">My Toys</Activelink>
          </li>
          <li>
            <Activelink to="/add_toy">Add A Toy</Activelink>
          </li>
        </>
      )}
      <li>
        <Activelink to="/blog">Blogs</Activelink>
      </li>
      {user ? (
        <>
          <li>
            <button className="btn-md" onClick={handleLogOut}>
              LogOut
            </button>
          </li>
          <li className="hover:disabled">
            <span className="btn-md">
              {user.displayName !== null ? (
                <>
                  <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="avatar relative px-10"
                  >
                    <div className="w-10 rounded-full overflow-hidden">
                      <img src={user.photoURL} />
                    </div>
                    {isHovered && (
                      <p className="hoverPoint">{user.displayName}</p>
                    )}
                  </div>
                </>
              ) : (
                user.email
              )}
            </span>
          </li>
        </>
      ) : (
        <>
          <li>
            <Activelink to="/login">Login</Activelink>
          </li>
          <li>
            <Activelink to="/signup">SignUp</Activelink>
          </li>
        </>
      )}
    </>
  );
};

export default Links;
