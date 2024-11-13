import profilePic from "../assets/profilePic.png";
import coverImage from "../assets/coverImage.png";
import whatsapp from "../assets/whatsApp.png";
import instagram from "../assets/Instagram.png";
import facebook from "../assets/fb.png";
import x from "../assets/x.png";
import youtube from "../assets/Youtube.png";
import wechat from "../assets/weChat.png";
import telegram from "../assets/Telegram.png";
import moon from "../assets/moon.png";
import UserInfoForm from "./UserInfoForm";

const ProfileSection = () => {
  return (
    <div className="position-relative">
      <div
        style={{ height: "240px", overflow: "hidden", position: "relative" }}
      >
        <img
          src={coverImage}
          alt="Profile banner"
          className="w-100 h-100 object-fit-cover"
        />
      </div>

      <div className="container px-4">
        <div className="card" style={{ marginTop: "-100px" }}>
          <div className="card-body p-4">
            <div className="d-flex gap-4">
              <img
                src={profilePic}
                alt="Simon Junior"
                className="rounded-circle"
                style={{
                  width: "150px",
                  height: "150px",
                  border: "4px solid white",
                  marginTop: "-50px",
                }}
              />
              <div className="pt-2">
                <h2 className="display-6 mb-1">Simon Junior</h2>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span style={{ color: "#666" }}>
                    <img
                      src={moon}
                      alt="Moon Icon"
                      width="120"
                      height="35"
                      className="me-1"
                    />
                  </span>
                  <span className="text-primary fw-bold">Owner</span>
                </div>
                <div className="d-flex gap-2">
                  {[
                    {
                      name: "whatsapp",
                      color: "#25D366",
                      imageUrl: whatsapp,
                    },
                    {
                      name: "instagram",
                      color: "#E4405F",
                      imageUrl: instagram,
                    },
                    { name: "facebook", color: "#1877F2", imageUrl: facebook },
                    { name: "twitter", color: "#000000", imageUrl: x },
                    { name: "youtube", color: "#FF0000", imageUrl: youtube },
                    { name: "wechat", color: "#07C160", imageUrl: wechat },
                    { name: "telegram", color: "#0088cc", imageUrl: telegram },
                  ].map((platform) => (
                    <button
                      key={platform.name}
                      className="btn rounded-circle p-0"
                      style={{
                        backgroundColor: platform.color,
                        width: "40px",
                        height: "40px",
                      }}
                    >
                      <img
                        src={platform.imageUrl}
                        alt={platform.name}
                        className="img-fluid"
                        style={{
                          maxWidth: "20px",
                          maxHeight: "20px",
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex gap-2 mt-4">
          <a
            href="#"
            className="btn px-4 py-2 text-white"
            style={{
              backgroundColor: "#6E55FF",
              borderRadius: "8px",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="me-2"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
            Full Page
          </a>

          <a href="#" className="btn btn-light px-4 py-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="me-2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
            Properties
          </a>

          <a href="#" className="btn btn-light px-4 py-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="me-2"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
            Services
          </a>

          <a href="#" className="btn btn-light px-4 py-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="me-2"
            >
              <path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z" />
            </svg>
            News
          </a>

          <a href="#" className="btn btn-light px-4 py-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="me-2"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            </svg>
            Locations
          </a>

          <a href="#" className="btn btn-light px-4 py-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="me-2"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
            Management
          </a>

          <a href="#" className="btn btn-light px-4 py-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="me-2"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
            About
          </a>
        </div>

        <div className="card mt-4 mb-4">
          <div className="card-body p-4">
            <h3 className="mb-4">About Simon Junior</h3>
            <p className="text-muted mb-4">
              Diamond Properties Global – Exciting Investment Opportunities With
              Guaranteed Returns Of Up To 8% On Selected Projects.
            </p>
            <UserInfoForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
