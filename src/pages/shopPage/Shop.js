import React from "react";
import CollectionsOverview from "../../components/collections-overview/collectionsOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/Collection";

function Shop({ match }) {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}

export default Shop;
