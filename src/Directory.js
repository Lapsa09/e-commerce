import React, { useState } from "react";
import { Sections } from "./directory.data";
import MenuItem from "./menuItem";
import "./directory.scss";

function Directory() {
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
