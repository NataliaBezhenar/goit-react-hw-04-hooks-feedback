import React from "react";
import { PropTypes } from "prop-types";
import "./Section.css";

const Section = ({ title, children }) => (
  <div>
    <h1 className="section">{title}</h1>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
