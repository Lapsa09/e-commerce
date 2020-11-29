import React, { useState } from "react";
import Sections from "./directory.data";
import MenuItem from "./menuItem";
import "./directory.scss";

function Directory() {
  const [sections, setSections] = useState(Sections);
  return (
    <div className="directory-menu">
      {sections.map(({ title, id, imageUrl, size }) => (
        <MenuItem
          key={id}
          imageUrl={imageUrl}
          size={size}
          title={title.toUpperCase()}
        />
      ))}
    </div>
  );
}

export default Directory;
