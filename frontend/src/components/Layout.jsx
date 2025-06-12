import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <h3>Site crafting for Nicolás Giménez</h3>
      </footer>
    </>
  );
};

export default Layout;
