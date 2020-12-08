import React from "react";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory-selectors";
import MenuItem from "../../components/menuItem/menuItem";
import "./directory.scss";
import { createStructuredSelector } from "reselect";

function Directory({ sections }) {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
