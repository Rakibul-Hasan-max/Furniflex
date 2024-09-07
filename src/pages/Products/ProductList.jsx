import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import prod1 from "../..//../src/assets//products/p1.jpg"
import prod2 from "../..//../src/assets//products/p2.jpg"
import prod3 from "../..//../src/assets//products/p3.jpg"
import prod4 from "../..//../src/assets//products/p4.jpg"
import prod5 from "../..//../src/assets//products/p5.jpg"
import prod6 from "../..//../src/assets//products/p6.jpg"
import prod7 from "../..//../src/assets//products/p7.jpg"
import prod8 from "../..//../src/assets//products/p8.jpg"
import prod9 from "../..//../src/assets//products/p9.jpg"

const ProductList = () => {
    return (
        <div className='p-20'>
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
        <SwiperSlide><img src={prod1}/></SwiperSlide>
        <SwiperSlide><img src={prod2}/></SwiperSlide>
        <SwiperSlide><img src={prod3}/></SwiperSlide>
        <SwiperSlide><img src={prod4}/></SwiperSlide>
        <SwiperSlide><img src={prod5}/></SwiperSlide>
        <SwiperSlide><img src={prod6}/></SwiperSlide>
        <SwiperSlide><img src={prod7}/></SwiperSlide>
        <SwiperSlide><img src={prod8}/></SwiperSlide>
        <SwiperSlide><img src={prod9}/></SwiperSlide>
      </Swiper>
        </div>
        
    );
};

export default ProductList;