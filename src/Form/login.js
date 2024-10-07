import React, { useEffect, useState } from "react";
import { useStateValue } from "../Auth/authantication";

const Login = () => {
  const { setUser } = useStateValue();
  const [userName, setUserName] = useState("");
  const [isLogin, setIslogin] = useState(false);
  useEffect(() => {
    const UserData = localStorage.getItem("User");
    if (UserData) {
      setUser(UserData);
      setIslogin(true);
    }
  }, [setUser]);
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    if (userName) {
      localStorage.setItem("User", userName);
      setUser(userName);
      setIslogin(true);
      setUserName("");
    } else {
      console.error("setuser is not defined");
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("User");
    setUser("");
    setIslogin(false);
  };
  return (
    <div>
      <div>
        {isLogin ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>
              UserName
              <input
                type="text"
                value={userName}
                placeholder="Enter username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>

            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
};
export default Login;
