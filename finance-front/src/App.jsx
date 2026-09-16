import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { LoginPage } from "./pages/LoginPage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { LayoutPage } from "./layouts/layoutPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";

export default function App() {
  const [activePage, setActivePage] = useState("register");
  const [username, setUsername] = useState("");

  if (activePage == "login") {
    return (
      <LoginPage
        changeUserName={setUsername}
        changeActivePage={setActivePage}
      ></LoginPage>
    );
  }

  if (activePage == "register") {
    return (
      <RegisterPage
        changeActivePage={setActivePage}
        changeUserName={setUsername}
      ></RegisterPage>
    );
  }

  return (
    <LayoutPage username={username}>
      <HomePage></HomePage>
    </LayoutPage>
  );

  /*     //Hook 
    const [number, setNumber] = useState(0);
  return (
    <div>
        <i className="bi bi-6-circle-fill fs-4"></i>
        <div className='text-danger'>
            <h1>Finance App</h1>
            <p>Hello World</p>

            <button onClick={() => {
                setNumber(number + 1);
                console.log("number", number + 1);
                }}>Click Me</button>

            Number is {number}
        </div>
    </div>
  ); */
}
