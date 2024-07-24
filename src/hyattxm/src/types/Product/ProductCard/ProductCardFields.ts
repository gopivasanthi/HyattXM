import { ProductCardHighlightFields } from './ProductCardHighlightFields';

export interface ProductCardFields {
  productCardName: string;
  productCardTitle: {
    value: string;
  };
  productCardBackgroundImageUrl: {
    value: string;
  };
  productCardBackgroundImageAlt: {
    value: string;
  };
  cardHighlights: {
    CardHighlightItems: Array<ProductCardHighlightFields>;
  };
}
