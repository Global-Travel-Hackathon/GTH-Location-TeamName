import React from "react";
import './tag.component.css';

const Tag = ({ title, checked }) => (
  <div>
    <div>
        <div className="btn btn-primarytag tagsize">{title}</div>
    </div>
  </div>
);

export default Tag;
