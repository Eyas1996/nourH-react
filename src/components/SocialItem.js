import React from "react";

const SocialItem = (props) => {
  return (
    <li className="list-group-item">
      <img src={props.img} alt={`Icon of ${props.media}`} />
      <input className="form-check-input" type="checkbox" id={props.id} />
      <label className="form-check-label" htmlFor={props.id}>
        {props.media}
      </label>
    </li>
  );
};

export default SocialItem;
