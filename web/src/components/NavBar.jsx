import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";

export function NavBar() {
  const { isLoaded, isSignedIn, user } = useUser();
  console.log(user?.primaryEmailAddress?.emailAddress);
  const { signOut } = useAuth();

  if (!isLoaded) {
    return null;
  }
  // is is not loaded then display nothing
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        {isSignedIn && (
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        )}

        <div>
          {isSignedIn ? (
            <>
              {user?.primaryEmailAddress?.emailAddress}
              <NavLink
                onClick={() => {
                  signOut();
                }}
              >
                Loged out{" "}
              </NavLink>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
}
