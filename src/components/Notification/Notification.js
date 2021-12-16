import React from "react";
import { PropTypes } from "prop-types";
import "./Notification.css";

const Notification = ({ msg }) => <h2 className="notification">{msg}</h2>;

Notification.propTypes = {
  msg: PropTypes.string.isRequired,
};
export default Notification;
