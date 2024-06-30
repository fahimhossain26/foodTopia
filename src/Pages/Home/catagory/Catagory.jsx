
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay,Pagination } from 'swiper/modules';
// import './styles.css';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SerctionTitle from '../../../component/SerctionTitle';

const Catagory = () => {
    return (
     <section>
        <SerctionTitle
        subHeading={'from 11.00am  to 10.00pm'}
        heading={"order Online"}>
            

        </SerctionTitle>
           <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper mb-24"

      >
        <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
       
        
      
      </Swiper>
     </section>
    );
};

export default Catagory;