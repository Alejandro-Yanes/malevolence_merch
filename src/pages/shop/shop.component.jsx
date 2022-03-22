import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

const ShopPage = () => {
  return (
    <div>
      <CollectionsOverview />
    </div>
  );
};

export default ShopPage;
