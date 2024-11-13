
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark py-2">
      <div className="container-fluid px-4">
        <ul className="navbar-nav flex-row gap-4">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Contact Us
            </a>
          </li>
        </ul>

        <div className="d-flex gap-3">
          <button
            className="btn"
            style={{ backgroundColor: "#6E55FF", color: "white" }}
          >
            Sell Your Items
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "#5842E3", color: "white" }}
          >
            How To Bid
          </button>
          <button className="btn btn-warning">Services</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar