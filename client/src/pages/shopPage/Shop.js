import React, { useEffect } from "react";
import CollectionsOverviewContainer from "../../components/collections-overview/collectionsOverview.container";
import { Route } from "react-router-dom";
import CollectionPageContainer from "../collection/CollectionContainer";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop-actions";

function Shop({ match, fetchCollectionsStartAsync }) {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, []);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
