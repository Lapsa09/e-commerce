import React from "react";
import CollectionItem from "../collectionItem/CollectionItem";
import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  PreviewsContainer,
} from "./collection-preview.styles";

function PreviewCollection({ title, items }) {
  return (
    <CollectionPreviewContainer>
      <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
      <PreviewsContainer>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewsContainer>
    </CollectionPreviewContainer>
  );
}

export default PreviewCollection;
