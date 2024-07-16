"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function Events() {
  return (
    <div className="container-fluid">
      <div className="hmpromotional">
        <div className="bluredbg1"></div>
        <div className="bluredbg2"></div>
        <div className="bluredbg3"></div>

        <div className="container-fluid">
          <div className="hmpromotionhead">
            <h2 className="homecommonhead">
              Educational Videos
              <span>Latest Collection</span>
            </h2>
          </div>
          <div className="">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[FreeMode, Pagination, Autoplay]}
              className="mySwiper"
              breakpoints={{
                992: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
              }}
            >
              <SwiperSlide>
                <div className="promotionalitems">
                  <div style={{ width: 300, height: 300 }}>
                    <Image
                      src="/promotional-vid-1.png"
                      alt=""
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="promotionalsitmtext">
                    <h3 className="my-2">Video Title Goes Here...</h3>
                    <p>
                      Simply dummy text of the printing and typesetting
                      industry.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="promotionalitems">
                  <div style={{ width: 300, height: 300 }}>
                    <Image
                      src="/promotional-vid-2.png"
                      alt=""
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="promotionalsitmtext">
                    <h3 className="my-2">Video Title Goes Here...</h3>
                    <p>
                      Simply dummy text of the printing and typesetting
                      industry.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="promotionalitems">
                  <div style={{ width: 300, height: 300 }}>
                    <Image
                      src="/promotional-vid-3.png"
                      alt=""
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="promotionalsitmtext">
                    <h3 className="my-2">Video Title Goes Here...</h3>
                    <p>
                      Simply dummy text of the printing and typesetting
                      industry.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="promotionalitems">
                  <div style={{ width: 300, height: 300 }}>
                    <Image
                      src="/promotional-vid-1.png"
                      alt=""
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="promotionalsitmtext">
                    <h3 className="my-2">Video Title Goes Here...</h3>
                    <p>
                      Simply dummy text of the printing and typesetting
                      industry.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              {/* <SwiperSlide>
                <div className="promotionalitems">
                  <div style={{ width: 300, height: 300 }}>
                    <Image
                      src="/promotional-vid-2.png"
                      alt=""
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="promotionalsitmtext">
                    <h3 className="my-2">Video Title Goes Here...</h3>
                    <p>
                      Simply dummy text of the printing and typesetting
                      industry.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="promotionalitems">
                  <div style={{ width: 300, height: 300 }}>
                    <Image
                      src="/promotional-vid-3.png"
                      alt=""
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="promotionalsitmtext">
                    <h3 className="my-2">Video Title Goes Here...</h3>
                    <p>
                      Simply dummy text of the printing and typesetting
                      industry.
                    </p>
                  </div>
                </div>
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
