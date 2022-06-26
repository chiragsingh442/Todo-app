import React from "react";

function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn flex1"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="visually-hidden">Display </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> Tasks</span>
    </button>
  );
}

export default FilterButton;
