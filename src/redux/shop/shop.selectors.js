import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollection],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectParamCollection = (UrlParam) =>
  createSelector(
    [selectShopCollection],
    (collections) => collections[UrlParam]
  );
