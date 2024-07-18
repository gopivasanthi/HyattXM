export interface TestProductListItemFields {
  title: {
    value: string;
  };
  insuranceType: {
    targetItem: {
      name: string;
    };
  };
  insuranceScope: {
    targetItem: {
      name: string;
    };
  };
  productImage: {
    src: string;
    alt: string;
  };
}
