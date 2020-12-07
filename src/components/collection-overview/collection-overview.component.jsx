import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionOverview } from "../../redux/shop/shop.selector";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherProperties }) => (
      <CollectionPreview key={id} {...otherProperties} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionOverview,
});

export default connect(mapStateToProps)(CollectionOverview);
