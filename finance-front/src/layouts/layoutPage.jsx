import { Outlet } from "react-router";
import { NavLink } from "react-router";
import { useAuth } from "../context/AuthContext";

export function LayoutPage() {
  const { user, logout } = useAuth();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Finans Takip
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Anasayfa
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  İşlemler
                </a>
              </li>
            </ul>
          </div>
          {user?.fullName ? (
            <>
              <span className="navbar-text">Hoşgeldin {user.fullName}</span>
              <button className="btn btn-danger ms-3" onClick={logout}>
                Çıkış Yap
              </button>
            </>
          ) : (
            <NavLink to="/login" className="btn btn-primary">
              Giriş Yap
            </NavLink>
          )}
        </div>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
