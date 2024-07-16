import React from 'react';
import { ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';
import { ProductCardFields } from 'src/types/Product/ProductCard/ProductCardFields';
import EachProductCard from 'src/molecules/Product/ProductCardMolecules/EachProductCard';

interface ProductDetailFields {
  data: {
    item: {
      brand: {
        ProductBrandCards: Array<ProductCardFields>;
      };
    };
  };
}

interface ProductDetailProps {
  params: ComponentParams;
  fields: ProductDetailFields;
}

export const Default = (props: ProductDetailProps): JSX.Element => {
  const CardItems = props.fields.data.item.brand.ProductBrandCards;

  return (
    <div className={`component ${props.params.styles}`}>
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Custom cards</h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          {CardItems &&
            CardItems.map((carditem, cardIndex) => (
              <EachProductCard key={`productcard-${cardIndex}`} {...carditem} />
            ))}
        </div>
      </div>
    </div>
  );
};
