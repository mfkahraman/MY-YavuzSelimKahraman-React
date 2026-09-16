import { useState } from "react";

export function RegisterPage({ changeUserName, changeActivePage }) {
  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  return (
    <>
      <div className="text-center mt-5">
        <h1 className="text-danger">
          <i className="bi bi-box-arrow-in-right"></i> Register Page
        </h1>
        <div className="w-50 mx-auto mt-5">
          <div className="form-floating mb-3">
            <input
              name="firstname"
              onChange={(e) => {
                setRegisterData((prevState) => ({
                  ...prevState,
                  firstname: e.target.value,
                }));
              }}
              value={registerData.firstname}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Firstname"
            />
            <label htmlFor="floatingInput">Firstname</label>
          </div>
          <div className="form-floating mb-3">
            <input
              name="lastname"
              onChange={(e) => {
                setRegisterData((prevState) => ({
                  ...prevState,
                  lastname: e.target.value,
                }));
              }}
              value={registerData.lastname}
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Lastname"
            />
            <label htmlFor="floatingInput">Lastname</label>
          </div>
          <div className="form-floating mb-3">
            <input
              name="username"
              onChange={(e) => {
                setRegisterData((prevState) => ({
                  ...prevState,
                  username: e.target.value,
                }));
              }}
              value={registerData.username}
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
              onClick={() => {
                console.log("registerData", registerData);
                changeUserName(registerData.username);
                changeActivePage("default");
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
