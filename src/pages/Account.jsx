import React from "react";
import { Link } from "react-router-dom";
import "./Account.css";

const Account = () => {
  return (
    <div className="account-container">
      <div className="breadcrumbs">
        <Link to="/">Home</Link> / <span>My Account</span>
      </div>

      <div className="account-wrapper">
        <aside className="sidebar">
          <h3>Manage My Account</h3>
          <ul>
            <li className="active">My Profile</li>
            <li>Address Book</li>
            <li>My Payment Options</li>
          </ul>

          <h3>My Orders</h3>
          <ul>
            <li>My Returns</li>
            <li>My Cancellations</li>
          </ul>

          <h3>My Wishlist</h3>
        </aside>

        <div className="profile-content">
          <h2>Edit Your Profile</h2>

          <form>
            <div className="input-row">
              <div className="input-group">
                <label>First Name</label>
                <input type="text" defaultValue="Ankit" />
              </div>
              <div className="input-group">
                <label>Last Name</label>
                <input type="text" defaultValue="Kumar" />
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>Email</label>
                <input type="email" defaultValue="akumar@gmail.com" />
              </div>
              <div className="input-group">
                <label>Address</label>
                <input type="text" defaultValue="Rajkot" />
              </div>
            </div>

            <h3>Password Changes</h3>

            <div className="input-group">
              <input type="password" placeholder="Current Password" />
            </div>
            <div className="input-group">
              <input type="password" placeholder="New Password" />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Confirm New Password" />
            </div>

            <div className="form-buttons">
              <button type="button" className="cancel-btn">Cancel</button>
              <button type="submit" className="save-btn">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
