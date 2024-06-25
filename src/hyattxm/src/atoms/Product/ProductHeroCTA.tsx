import React from 'react';

export interface ProductHeroCTAFields {
  heroCTA: {
    primarycta: {
      displayName: string;
      url: {
        path: string;
      };
    };
  };
  heroSecCTA: {
    secondarycta: {
      displayName: string;
      url: {
        path: string;
      };
    };
  };
}

export const ProductHeroCTA = (props: ProductHeroCTAFields): JSX.Element => {
  return (
    <div>
      <div className="d-flex gap-3 justify-content-center lead fw-normal">
        <a className="icon-link" href={props.heroCTA.primarycta.url.path}>
          {props.heroCTA.primarycta.displayName}
        </a>
        <a className="icon-link" href={props.heroSecCTA.secondarycta.url.path}>
          {props.heroSecCTA.secondarycta.displayName}
        </a>
      </div>
    </div>
  );
};

export default ProductHeroCTA;
