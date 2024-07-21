"use client";
import MainLayout from "@/components/MainLayout";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Skeleton, Stack } from "@mui/material";
import { get } from "@/utils/axios";

export default function Page() {
  const [data, setData] = useState([]);
  const [getLoading, setGetLoading] = useState(false);

  const getData = async () => {
    setGetLoading(true);
    try {
      const response = await get("/api/events");
      setData(response.data);
      console.log("EventsData", response.data);
      setGetLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MainLayout>
      <div className="container-fluid">
        <div className="hmpromotional">
          <div className="bluredbg1"></div>
          <div className="bluredbg2"></div>
          <div className="bluredbg3"></div>

          <div className="container-fluid">
            <div className="hmpromotionhead">
              <h2 className="homecommonhead">
                Speaking Events
                <span>Latest Collection</span>
              </h2>
            </div>
            <div>
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
                    delay: 7000,
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
                        <div
                          style={{
                            width: 300,
                            height: 300,
                            border: "1px solid black",
                            borderRadius: "15px",
                            overflow: "hidden",
                          }}
                        >
                          <iframe
                            width="300"
                            height="300"
                            src={item.videoUrl}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          ></iframe>
                        </div>
                        <div className="promotionalsitmtext">
                          <h3 className="my-2">{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ border: "1px solid black" }}>
        <div className="container-fluid">
          <div className="hmpromotionhead">
            <h2 className="homecommonhead">
              Playlist
              <span>Latest Collection</span>
            </h2>
          </div>
        </div>
        <iframe
          src="https://www.listennotes.com/podcasts/back-to-basics-with-gunnika-gunnika-khurana-LfhMaGukAsr/embed/"
          height="600px"
          width="100%"
          style={{ minWidth: "100" }}
          loading="lazy"
        ></iframe>
      </div>
    </MainLayout>
  );
}
