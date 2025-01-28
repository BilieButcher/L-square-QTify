import React, { useRef, useState } from 'react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Albumcard, { Songcard } from '../Card/Card';
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
                        follows={index.follows + " Follows"}
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

const SongCarousel = ({songList}) => {
    return (
        <>
          <Swiper
            slidesPerView={7}
            spaceBetween={1}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {songList.map((index) => {
                return(
                    <SwiperSlide>
                        <Songcard
                        picture={index.image}
                        likes={index.likes + " Likes"}
                        title={index.title}
                        songs={index.likes}
                        />
                    </SwiperSlide>
                )
            })}
          </Swiper>
        </>
      );
}
export {SongCarousel};
export default Carousel;