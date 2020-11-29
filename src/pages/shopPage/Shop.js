import React, { useState } from "react";
import SHOP_DATA from "../../components/datas/shop.data";
import CollectionPreview from "../../components/previewCollection/PreviewCollection";

function Shop() {
  const [shopData, setShopData] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {shopData.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
}

export default Shop;
