import { useState } from "react";
import api from "../api/client";
import {useNavigate} from "react-router"

export function RegisterPage() {
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  return (
    <>
      <div className="text-center mt-5">
        <h1 className="text-danger">
          <i className="bi bi-box-arrow-in-right"></i> Register Page
        </h1>
        <div className="w-50 mx-auto mt-5">
          <div className="form-floating mb-3">
            <input
              name="fullname"
              onChange={(e) => {
                setRegisterData((prevState) => ({
                  ...prevState,
                  fullName: e.target.value,
                }));
              }}
              value={registerData.fullName}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Fullname"
            />
            <label htmlFor="floatingInput">Fullname</label>
          </div>
          <div className="form-floating mb-3">
            <input
              name="email"
              onChange={(e) => {
                setRegisterData((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }));
              }}
              value={registerData.email}
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
                setRegisterData((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }));
              }}
              value={registerData.password}
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
              className="btn btn-success mt-3"
              onClick={async () => {
                try {
                  await api.post("/auth/register", registerData);
                  navigate("/login");
                } catch (error) {
                  console.log("Register error:", error);
                }
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
