import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollection],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectParamCollection = (UrlParam) =>
  createSelector([selectShopCollection], (collections) =>
    collections ? collections[UrlParam] : null
  );

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
