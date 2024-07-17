import ProductCardPrimaryHighlight from 'src/atoms/Product/ProductCardAtoms/ProductCardPrimaryHighlight';
import ProductCardSecondaryHighlight from 'src/atoms/Product/ProductCardAtoms/ProductCardSecondaryHighlight';
import ProductCardTitle from 'src/atoms/Product/ProductCardAtoms/ProductCardTitle';
import { ProductCardFields } from 'src/types/Product/ProductCard/ProductCardFields';

export const EachProductCard = (props: ProductCardFields): JSX.Element => {
  return (
    <div className="col">
      <div
        className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
        style={{ backgroundImage: `url(${props.productCardBackgroundImageUrl.value})` }}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <ProductCardTitle {...props} />
          <ul className="d-flex list-unstyled mt-auto">
            {props.cardHighlights.CardHighlightItems &&
              props.cardHighlights.CardHighlightItems.map((cardhighlightitem, cardhighlightindex) =>
                cardhighlightindex === 0 ? (
                  <ProductCardPrimaryHighlight
                    key={`highlightprimary-${cardhighlightindex}`}
                    {...cardhighlightitem}
                  />
                ) : (
                  <ProductCardSecondaryHighlight
                    key={`highlightsecondary-${cardhighlightindex}`}
                    {...cardhighlightitem}
                  />
                )
              )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EachProductCard;
