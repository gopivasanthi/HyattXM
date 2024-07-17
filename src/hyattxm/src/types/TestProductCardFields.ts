import { TestProductCardHighlightsFields } from './TestProductCardHighlightsFields';

export interface TestProductCardFields {
  productCardName:string;
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
