import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import prod1 from "../..//../src/assets//products/p1.jpg";
import prod2 from "../..//../src/assets//products/p2.jpg";
import prod3 from "../..//../src/assets//products/p3.jpg";
import prod4 from "../..//../src/assets//products/p4.jpg";
import prod5 from "../..//../src/assets//products/p5.jpg";
import prod6 from "../..//../src/assets//products/p6.jpg";
import prod7 from "../..//../src/assets//products/p7.jpg";
import prod8 from "../..//../src/assets//products/p8.jpg";
import prod9 from "../..//../src/assets//products/p9.jpg";

const ProductList = () => {
  return (
    <div className="p-20">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={prod1} />
          <h4 className="mt-6">Recliner Chair Wood</h4>
          <h5>€299.00 <del>€350.00</del> 30% OFF</h5>
          <p>It has a backrest that can be tilted back, and often a footrest extended</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={prod2} />
          <h4 className="mt-6">Recliner Chair Wood</h4>
          <h5>€299.00 <del>€350.00</del> 30% OFF</h5>
          <p>It has a backrest that can be tilted back, and often a footrest extended</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={prod3} />
          <h4 className="mt-6">Recliner Chair Wood</h4>
          <h5>€299.00 <del>€350.00</del> 30% OFF</h5>
          <p>It has a backrest that can be tilted back, and often a footrest extended</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={prod4} />
          <h4 className="mt-6">Recliner Chair Wood</h4>
          <h5>€299.00 <del>€350.00</del> 30% OFF</h5>
          <p>It has a backrest that can be tilted back, and often a footrest extended</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={prod5} />
          <h4 className="mt-6">Recliner Chair Wood</h4>
          <h5>€299.00 <del>€350.00</del> 30% OFF</h5>
          <p>It has a backrest that can be tilted back, and often a footrest extended</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={prod6} />
          <h4 className="mt-6">Recliner Chair Wood</h4>
          <h5>€299.00 <del>€350.00</del> 30% OFF</h5>
          <p>It has a backrest that can be tilted back, and often a footrest extended</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={prod7} />
          <h4 className="mt-6">Recliner Chair Wood</h4>
          <h5>€299.00 <del>€350.00</del> 30% OFF</h5>
          <p>It has a backrest that can be tilted back, and often a footrest extended</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={prod8} />
          <h4 className="mt-6">Recliner Chair Wood</h4>
          <h5>€299.00 <del>€350.00</del> 30% OFF</h5>
          <p>It has a backrest that can be tilted back, and often a footrest extended</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={prod9} />
          <h4 className="mt-6">Recliner Chair Wood</h4>
          <h5>€299.00 <del>€350.00</del> 30% OFF</h5>
          <p>It has a backrest that can be tilted back, and often a footrest extended</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductList;
