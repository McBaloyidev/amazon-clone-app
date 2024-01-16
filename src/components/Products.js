import React from "react";
import "./Products.css";
import Product from "./Product";

const Products = () => {
  return (
    <>
      <div className="products_row">
        <Product
          id="1"
          title="SGIN 17 Inch Laptop 4GB RAM 128GB SSD, Laptops with IPS Display, Intel Celeron Quad-Core Processor(Up to 2.5GHz), Mini HDMI, Webcam, Wi-Fi, 512GB Expansion"
          image="https://m.media-amazon.com/images/I/81SjNrB764L._AC_SX679_.jpg"
          rating={2}
          price={289.99}
        />
        <Product
          id="1234"
          title="ASUS ROG Strix NVIDIA GeForce RTX™ 4070 Ti OC Edition Gaming Graphics Card (PCIe 4.0, 12GB GDDR6X, HDMI 2.1a, DisplayPort 1.4a)"
          image="https://m.media-amazon.com/images/I/71pZ+c4I+7L._AC_SX450_.jpg"
          rating={2}
          price={889.99}
        />
      </div>
      <div className="products_row">
      <Product
          id="1434"
          title="Intel Core i7-13700K Gaming Desktop Processor 16 cores (8 P-cores + 8 E-cores) with Integrated Graphics - Unlocked"
          image="https://m.media-amazon.com/images/I/61m0zH-NiTL._AC_CR0%2C0%2C0%2C0_SX960_SY720_.jpg"
          rating={3}
          price={367.99}
        />
      <Product
          id="3456"
          title="TP-Link Deco AXE5400 Tri-Band 6E Mesh System – Wi-Fi up to 7200 Sq.Ft, Engadget Rated Best Mesh For Most People, Replaces WiFi Router and Extender, AI-Driven Mesh New 6GHz Band, 3-Pack(Deco XE75)"
          image="https://m.media-amazon.com/images/I/410MJxP9TuL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          rating={4}
          price={345.99}
        />
      <Product
          id="34"
          title="SANSUI Monitor 24 inch 100Hz PC Monitor, HDMI VGA Ports VESA Mount, FHD Computer Monitor Ultra-Slim Ergonomic Tilt Eye Care for Home Office (ES-24F2, HDMI Cable Included)"
          image="https://m.media-amazon.com/images/I/81gEkKhtgYL._AC_SY450_.jpg"
          rating={4}
          price={100.99}
        />
      </div>
      <div className="products_row">
      <Product
          id="5534"
          title="XGaming 23.8 Inch FHD Gaming Monitor 100Hz,IPS HDR PC Monitor HDMI Display, 1080P with Low Blue Light Eye Care, Build-in FreeSync,VESA Compatible, Black"
          image="https://m.media-amazon.com/images/I/61Y2RxB585L.__AC_SY300_SX300_QL70_FMwebp_.jpg"
          rating={4}
          price={98.99}
        />
      </div>
    </>
  );
};

export default Products;
