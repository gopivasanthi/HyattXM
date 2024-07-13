import { TestProductCardHighlightsFields } from './TestProductCardHighlightsFields';

export interface TestProductCardFields {
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
    CardHighlightItems: Array<TestProductCardHighlightsFields>;
  };
}
