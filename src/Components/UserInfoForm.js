import { useSelector, useDispatch } from "react-redux";
import { updateField, resetForm, addUser } from "../store/userSlice.js";
import { useEffect, useState } from "react";
import UserInfoDisplay from "./UserInfoDisplay";

const UserInfoForm = () => {
  const { formData, status, error } = useSelector((state) => state.formData);
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (status === "succeeded") {
      setSubmitted(true);
      alert("User added successfully!");
    } else if (status === "failed") {
      alert("An error occurred: " + (error.message || "Unknown error"));
    }
  }, [status, error]);

  const handleChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };

  const handleReset = () => {
    dispatch(resetForm());
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser(formData));
  };

  return (
    <div>
      {!submitted ? (
        <form className="row g-4" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={formData.email}
              required
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              value={formData.phoneNumber}
              required
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Website</label>
            <input
              type="text"
              className="form-control"
              value={formData.website}
              onChange={(e) => handleChange("website", e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Gender</label>
            <input
              type="text"
              className="form-control"
              value={formData.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              value={formData.dateOfBirth}
              onChange={(e) => handleChange("dateOfBirth", e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Nationality</label>
            <input
              type="text"
              className="form-control"
              value={formData.nationality}
              onChange={(e) => handleChange("nationality", e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">National ID Number</label>
            <input
              type="text"
              className="form-control"
              value={formData.nationalIdNumber}
              onChange={(e) => handleChange("nationalIdNumber", e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Country</label>
            <input
              type="text"
              className="form-control"
              value={formData.country}
              onChange={(e) => handleChange("country", e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Province/State</label>
            <input
              type="text"
              className="form-control"
              value={formData.provinceState}
              onChange={(e) => handleChange("provinceState", e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Postal/Zip Code</label>
            <input
              type="text"
              className="form-control"
              value={formData.postalZipCode}
              onChange={(e) => handleChange("postalZipCode", e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </div>

          <div className="col-12 mt-4">
            <button
              type="button"
              className="btn btn-secondary me-2"
              onClick={handleReset}
              disabled={status === "loading"}
            >
              Reset
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Submitting..." : "Submit"}
            </button>
          </div>

          {status === "failed" && error && (
            <div className="col-12 mt-3">
              <p className="text-danger">
                Error:{" "}
                {typeof error === "object"
                  ? error.message || JSON.stringify(error)
                  : error}
              </p>
            </div>
          )}
        </form>
      ) : (
        <UserInfoDisplay />
      )}
    </div>
  );
};

export default UserInfoForm;
