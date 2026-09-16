import { NavLink } from "react-router";
import { useSearchParams } from "react-router";

export function HomePage() {
  const [searchParams] = useSearchParams();

  console.log("searchParams", searchParams);

  const name = searchParams.get("name");
  const lastName = searchParams.get("lastname");

  console.log("name", name);
  console.log("lastName", lastName);

  return (
    <div>
      <p className="lead text-danger">Yavuz hoca ile react bir başka</p>
      <div>
        <NavLink to="/login" className="btn btn-primary me-2">
          Login
        </NavLink>
        <NavLink to="/register/3" className="btn btn-success">
          Register
        </NavLink>
      </div>
    </div>
  );
}
