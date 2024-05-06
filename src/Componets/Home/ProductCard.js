import { IconGardenCart, IconStar, IconStarFilled } from "@tabler/icons-react";
import React, { useContext, useEffect } from "react";
import { HomeContext } from "../../context/ContextState";

const ProductCard = ({ data  }) => {
  const { img, title, price, id, rating } = data;
  const { AddToCart } = useContext(HomeContext);

  const ratingStar = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      ratingStar.push(<IconStarFilled className="h-4 w-4" />);
    } else {
      ratingStar.push(<IconStar className="h-4 w-4" />);
    }
  }
  return (
    <>
      <div>
        <div>
          <div className="border-blue-800 relative">
            <div
              className="flex absolute right-0  justify-center items-center h-8 w-8 bg-primary rounded cursor-pointer text-light"
              onClick={() => {
                AddToCart(data, id);
              }}
            >
              <IconGardenCart />
            </div>

            <img
              className="h-auto max-w-full rounded-lg w-100 cursor-pointer"
              src={img}
              alt=""
              onClick={() => {
                AddToCart(data, id);
              }}
            />
          </div>
          <div className="pt-2">
            <div className="flex items-center mt-1.5 mb-1.5">
              {ratingStar.map((item, i) => {
                return <React.Fragment key={i}>{item}</React.Fragment>;
              })}
            </div>
            <h5 className="xl:text-xl md:text-lg sm:text-sm font-semibold tracking-tight text-gray-900 dark:text-white mt-1.5 capitalize whitespace-break-spaces">
              {title}
            </h5>
            <h5 className="text-xl font-semibold tracking-tight text-primary mt-1.5">
              ${price.toFixed(2)}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
