import { Search } from "lucide-react";
import icon from "../assets/icon.png"

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg py-3"
      style={{ backgroundColor: "#6E55FF" }}
    >
      <div className="container-fluid px-4">
        <a
          className="navbar-brand d-flex align-items-center text-white"
          href="#"
        >
          <img
            src={icon} 
            alt="Logo"
            width="32"
            height="32"
            className="me-2"
          />
          <span className="fw-bold">GirGir</span>
          <span className="ms-1">AUCTION</span>
        </a>

        <div className="d-flex flex-grow-1 mx-4 position-relative">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <Search size={20} className="text-secondary" />
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search for Inventory, Auction, Dealers, more..."
            />
            <button className="btn btn-dark px-4" type="button">
              Search
            </button>
          </div>
        </div>

        <div className="d-flex align-items-center text-white">
          <div className="d-flex align-items-center me-4">
            <span className="me-1">English</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>

          <div className="d-flex align-items-center me-4">
            <span className="me-1">Currency</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>

          <div className="d-flex align-items-center me-4">
            <span className="me-1">Location</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>

          <div className="d-flex align-items-center">
            <span className="me-1">Hi Salah</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
