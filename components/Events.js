"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { Skeleton, Stack } from "@mui/material";

export default function Events({ data, getLoading }) {
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
            {getLoading ? (
              <Stack spacing={2} direction="row">
                {Array.from(new Array(3)).map((_, index) => (
                  <Skeleton
                    key={index}
                    variant="rectangular"
                    width={300}
                    height={300}
                  />
                ))}
              </Stack>
            ) : (
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 4000,
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
                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="promotionalitems">
                      <Link href={item?.link || ""}>
                        <div
                          style={{ width: 300, height: 300 }}
                          className="event-img"
                        >
                          <Image
                            src={item.imgurl}
                            alt=""
                            style={{ borderRadius: "15px" }}
                            width={300}
                            height={300}
                          />
                        </div>
                      </Link>
                      <div className="promotionalsitmtext">
                        <h3 className="my-2">{item?.title || ""}</h3>
                        <p>{item?.description || ""}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
