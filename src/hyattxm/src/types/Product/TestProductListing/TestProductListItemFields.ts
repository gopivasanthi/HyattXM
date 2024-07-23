export interface TestProductListItemFields {
  productDetailPageUrl: {
    path: string;
  };
  productPageTitle: {
    value: string;
  };
  productType: {
    targetItem: {
      productTypeName: {
        value: string;
      };
    };
  };
  productScope: {
    targetItem: {
      productScopeName: {
        value: string;
      };
    };
  };
  productImage: {
    src: string;
    alt: string;
  };
}
