import React, { useEffect, useState } from "react";
import CollectionsOverview from "../../components/collections-overview/collectionsOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/Collection";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop-actions";
import WithSpinner from "../../components/with-spinner/with-spinner";
import collectionsOverview from "../../components/collections-overview/collectionsOverview";

const CollectionOverviewWithSpinner = WithSpinner(collectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

function Shop({ match, updateCollections }) {
  const [loading, setLoading] = useState(true);
  let unsubscribeFromSnapshot = null;

  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setLoading(false);
    });
  }, []);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
