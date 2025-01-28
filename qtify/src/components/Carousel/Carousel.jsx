import React, { useRef, useState } from 'react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Albumcard from '../Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';



const Carousel = ({albums}) => {
    return (
        <>
          <Swiper
            slidesPerView={7}
            spaceBetween={1}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {albums.map((index) => {
                return(
                    <SwiperSlide>
                        <Albumcard
                        picture={index.image}
                        follows={index.follows}
                        title={index.title}
                        songs={index.songs.length}
                        />
                    </SwiperSlide>
                )
            })}
          </Swiper>
        </>
      );
}

export default Carousel;