import { useState } from "react";
// import { useNavigate } from "react-router";
import api from "../api/client";
// import { useAuth } from "../context/AuthContext";

export function LoginPage() {
  //   const navigate = useNavigate();
//   const { isAuth, setIsAuth } = useAuth();
  const [loginData, setLoginData] = useState({
    email: "",
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
              name="email"
              onChange={(e) => {
                setLoginData((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }));
              }}
              value={loginData.email}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="Email"
            />
            <label htmlFor="floatingInput">Email</label>
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

                api
                  .post("/auth/login", loginData)
                  .then((res) => {
                    console.log("res", res);
                  })
                  .catch((err) => {
                    console.log("err", err);
                  });
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
