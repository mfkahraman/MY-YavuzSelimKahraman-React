import { NavLink } from "react-router";

export function HomePage() {
  return (
    <div>
      <p className="lead text-danger">Yavuz hoca ile react bir başka</p>
      <div>
        <NavLink to="/login" className="btn btn-primary me-2">
          Login
        </NavLink>
        <NavLink to="/register" className="btn btn-success">
          Register
        </NavLink>
      </div>
    </div>
  );
}
