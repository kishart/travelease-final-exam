import React, { useState } from "react";
import "./ServiceForm.css";

function ServiceForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [comments, setComments] = useState("");
  const [submittedData, setSubmittedData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    returnDate: "",
    adults: "",
    children: "",
    comments: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form refresh
    setSubmittedData({
      fullName,
      email,
      phone,
      destination,
      travelDate,
      returnDate,
      adults,
      children,
      comments,
    });
  };

  return (
    <>
      <h1 className="title">Enjoy Travel Now!</h1>
      <div className="form-container">
        <div className="form-section">
          <h2>Fill up the form</h2>
          <form onSubmit={handleSubmit} className="form">
            {/* Full Name Section */}
            <label>
              Full Name:
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </label>
            <br />

            {/* Email Section */}
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </label>
            <br />

            {/* Phone Section */}
            <label>
              Phone Number:
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </label>
            <br />

            {/* Destination Section */}
            <label>
              Destination:
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Enter destination"
                required
              />
            </label>
            <br />

            {/* Travel Date Section */}
            <label>
              Travel Date:
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                required
              />
            </label>
            <br />

            {/* Return Date Section */}
            <label>
              Return Date:
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                required
              />
            </label>
            <br />

            {/* Number of Adults Section */}
            <label>
              Number of Adults:
              <input
                type="number"
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                required
              />
            </label>
            <br />

            {/* Number of Children Section */}
            <label>
              Number of Children:
              <input
                type="number"
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                required
              />
            </label>
            <br />

            {/* Additional Comments Section */}
            <label>
              Additional Comments:
              <textarea
                rows="4"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              ></textarea>
            </label>
            <br />

            {/* Submit Button */}
            <button type="submit">Submit Booking</button>
          </form>
        </div>

        <div className="itinerary-section">
          <h2>Itinerary Information</h2>
          {submittedData.fullName && (
            <>
              <p><strong>Name:</strong> {submittedData.fullName}</p>
              <p><strong>Email:</strong> {submittedData.email}</p>
              <p><strong>Phone:</strong> {submittedData.phone}</p>
              <p><strong>Destination:</strong> {submittedData.destination}</p>
              <p><strong>Travel Date:</strong> {submittedData.travelDate}</p>
              <p><strong>Return Date:</strong> {submittedData.returnDate}</p>
              <p><strong>Number of Adults:</strong> {submittedData.adults}</p>
              <p><strong>Number of Children:</strong> {submittedData.children}</p>
              <p><strong>Additional Comments:</strong> {submittedData.comments}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ServiceForm;
