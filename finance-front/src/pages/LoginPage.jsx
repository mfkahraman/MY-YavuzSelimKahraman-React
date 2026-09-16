import { useState } from "react";

export function LoginPage() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  return (
    <>
      <div className="text-center mt-5">
        <h1 className="text-danger">
          <i className="bi bi-box-arrow-in-right"></i> Login Page
        </h1>
        <div className="w-50 mx-auto mt-5">
          <div className="form-floating mb-3">
            <input
              name="username"
              onChange={(e) => {
                setLoginData((prevState) => ({
                  ...prevState,
                  username: e.target.value,
                }));
              }}
              value={loginData.username}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Username"
            />
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating">
            <input
              name="password"
              onChange={(e) => {
                setLoginData((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }));
              }}
              value={loginData.password}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary mt-3"
              onClick={() => {
                console.log("loginData", loginData);
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
