import React from "react";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory-selectors";
import MenuItem from "../../components/menuItem/menuItem";
import { DirectoryMenuContainer } from "./Directory.styles";
import { createStructuredSelector } from "reselect";

function Directory({ sections }) {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </DirectoryMenuContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
