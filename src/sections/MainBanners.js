import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import mainBanners from '../json/mainBanners.json';
import Banner from '../components/Banner';
import '../styles/MainBanners.css';

function MainBanners() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className='main-banners-container'>
      <div className='main-banners'>
        <Slide
          indicators={true}
          arrows={true}
          autoplay={true}
          duration={3000}
          transitionDuration={300}
          onChange={setActiveSlide}
          infinite={true}
          pauseOnHover={true}
        >
          {mainBanners.map((banner, index) => (
            <div key={index} className='each-slide'>
              <Banner
                id={banner.mainBannerId}
                title={banner.title}
                img={banner.pcImageUrl}
              />
            </div>
          ))}
        </Slide>
        <div className="dots-container">
          {mainBanners.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeSlide ? 'active' : ''}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainBanners;
