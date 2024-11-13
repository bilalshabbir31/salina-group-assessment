import React from "react";
import { useSelector } from "react-redux";

const UserInfoDisplay = () => {
  const { responseData, status, error } = useSelector(
    (state) => state.formData
  );

  console.log(responseData.user);
  

  if (status === "loading") {
    return <p>Submitting data...</p>;
  }

  if (status === "failed") {
    return <p className="text-danger">Error: {error}</p>;
  }

  if (!responseData) {
    return <p>No user data to display. Submit the form to see data here.</p>;
  }

  return (
    <div className="user-info-display">
      <div className="user-details">
        <div>
          <strong>Email:</strong> {responseData.user.email}
        </div>
        <div>
          <strong>Phone Number:</strong> {responseData.user.phoneNumber}
        </div>
        <div>
          <strong>Website:</strong> {responseData.user.website}
        </div>
        <div>
          <strong>Gender:</strong> {responseData.user.gender}
        </div>
        <div>
          <strong>Date of Birth:</strong> {responseData.user.dateOfBirth}
        </div>
        <div>
          <strong>Nationality:</strong> {responseData.user.nationality}
        </div>
        <div>
          <strong>National ID Number:</strong> {responseData.user.nationalIdNumber}
        </div>
        <div>
          <strong>Country:</strong> {responseData.user.country}
        </div>
        <div>
          <strong>Province/State:</strong> {responseData.user.provinceState}
        </div>
        <div>
          <strong>City:</strong> {responseData.user.city}
        </div>
        <div>
          <strong>Postal/Zip Code:</strong> {responseData.user.postalZipCode}
        </div>
        <div>
          <strong>Address:</strong> {responseData.user.address}
        </div>
      </div>
    </div>
  );
};

export default UserInfoDisplay;
