import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import images from './Images';
import styled from '@emotion/styled';
import './swiper-custom.css';

const GallerySlideshow = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <SlideshowWrapper>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1}
        style={{ width: '100%', height: '100%' }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <SlideImg src={img.source} alt={img.alt} />
          </SwiperSlide>
        ))}
        {/* 커스텀 네비게이션 버튼 */}
        <CustomNavButton ref={prevRef} style={{ left: 8 }} aria-label="이전 이미지">
          {'<'}
        </CustomNavButton>
        <CustomNavButton ref={nextRef} style={{ right: 8 }} aria-label="다음 이미지">
          {'>'}
        </CustomNavButton>
      </Swiper>
    </SlideshowWrapper>
  );
};

export default GallerySlideshow;

const SlideshowWrapper = styled.div`
  width: 100%;
  max-width: 520px;
  min-width: 0;
  min-height: 350px;
  height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff9f4;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  overflow: hidden;
  position: relative;
`;

const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

const CustomNavButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: 10;
  background: rgba(255,255,255,0.7);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 1.5rem;
  color: #e88ca6;
  transform: translateY(-50%);
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #ffe4ef;
  }
`; 