import React, { useState } from "react";
import Sections from "../../components/datas/sections.data";
import MenuItem from "../../components/menuItem/menuItem";
import "./directory.scss";

function Directory() {
  //eslint-disable-next-line
  const [sections, setSections] = useState(Sections);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
}

export default Directory;
