import { useState } from "react";
import api from "../api/client";
import { useAuth } from "../context/AuthContext";

export function LoginPage() {
  const {  login } = useAuth();
  const [error, setError] = useState("");
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
          <div className="pt-4">
            <button
              type="button"
              className="btn btn-primary mt-3"
              onClick={async () => {
                console.log("loginData", loginData);
                try {
                  const response = await api.post("/auth/login", loginData);
                  login(response.data);
                  console.log("response", response.data);
                  // Handle successful login, e.g., store token, redirect, etc.
                } catch (error) {
                  console.log("error:", error);
                  setError("Kullanici veya sifre hatali");
                  setTimeout(() => {
                    setError("Kullanici adı veya sifre hatali");
                  }, 3000);
                }
              }}
            >
              Login
            </button>
            <div className="text-center text-danger">
              {error && (
                <div className="alert alert-danger mt-3" role="alert">
                  Bir hata oluştur: {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
