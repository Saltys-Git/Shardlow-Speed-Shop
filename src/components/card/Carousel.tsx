import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import "./style.css";

const CarouselCard = () => {
  let carousel3Dswiper;

  useEffect(() => {
    carousel3Dswiper = new Swiper(".carousel-3D-swiper", {
      loop: true,
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 350,
        modifier: 1,
        // slideShadows: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

    return () => {
      stopSwiper();
    };
  }, []);

  const stopSwiper = () => {
    if (carousel3Dswiper) {
      carousel3Dswiper.destroy(true, true);
    }
  };

  return (
    <section className="my-10">
      <h2 className="carousel-3D-swiper-title">Lorem ipsum dolor sit amet</h2>
      <section className="carousel-3D-swiper-section">
        <div className="carousel-3D-swiper swiper-container">
          <div className="swiper-wrapper" style={{ maxWidth: "1200px" }}>
            <div className="swiper-slide">
              <div className="image-wrapper aspect-video">
                <img
                  className="aspect-video"
                  src="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450"
                  alt=""
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="image-wrapper aspect-video">
                <img
                  className="aspect-video"
                  src="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450"
                  alt=""
                />
              </div>
            </div>{" "}
            <div className="swiper-slide">
              <div className="image-wrapper aspect-video">
                <img
                  className="aspect-video"
                  src="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450"
                  alt=""
                />
              </div>
            </div>{" "}
            <div className="swiper-slide">
              <div className="image-wrapper aspect-video">
                <img
                  className="aspect-video"
                  src="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450"
                  alt=""
                />
              </div>
            </div>{" "}
            <div className="swiper-slide">
              <div className="image-wrapper aspect-video">
                <img
                  className="aspect-video"
                  src="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450"
                  alt=""
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="image-wrapper aspect-video">
                <img
                  className="aspect-video"
                  src="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450"
                  alt=""
                />
              </div>
            </div>{" "}
            <div className="swiper-slide">
              <div className="image-wrapper aspect-video">
                <img
                  className="aspect-video"
                  src="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=450"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-pagination" style={{ bottom: "-50px" }}></div>
        </div>
      </section>
    </section>
  );
};

export default CarouselCard;
