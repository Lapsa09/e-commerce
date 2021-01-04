import React from "react";
import { withRouter } from "react-router-dom";
import {
  BackgroundImage,
  ContentContainer,
  ContentSubtitle,
  ContentTitle,
  MenuItemContainer,
} from "./menu-item.styles";

function menuItem({ title, imageUrl, size, history, linkUrl, match }) {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImage className="background-image" imageUrl={imageUrl} />
      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
}

export default withRouter(menuItem);
