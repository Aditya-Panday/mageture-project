"use client";
import Events from "@/components/Events";
import MainLayout from "@/components/MainLayout";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { get } from "@/utils/axios";

export default function Home() {
  const [data, setData] = useState([]);
  const [getLoading, setGetLoading] = useState(false);

  const getData = async () => {
    setGetLoading(true);
    try {
      const response = await get(`${process.env.BASE_URL}/api/podcast`);
      setData(response.data);
      setGetLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MainLayout>
      <div className="container-fluid main-ban">
        <div className="bannerlayers">
          <div className="container" style={{ marginTop: "100px" }}>
            <div className="herobnrlgtxt">
              Rediscover the joy of
              <br />
              <strong> simplicity with Back to Basics</strong>
            </div>
            <p>Your gateway to captivating stories, and endless inspiration</p>
            <h2>Listen & Subscribe On</h2>
            <div className="herologos">
              <Link href="https://open.spotify.com/show/2MPvILycXmxIO2dKuQpIvr">
                <Image
                  alt="Spotify"
                  src="/spotify.png"
                  width={150}
                  height={50}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Link>
              <Link href="https://podcasts.apple.com/us/podcast/simplifying-the-gita-gyana-yoga-and-karma-sanyasa-yoga/id1573471085?i=1000594441542">
                <Image
                  alt="Apple"
                  src="/apple.png"
                  width={150}
                  height={50}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Link>
              <Link href="https://podcastwise.com/podcast/1573471085-back-to-basics-with-gunnika">
                <Image
                  alt="Google"
                  src="/google.png"
                  width={150}
                  height={50}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hmbaout">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="hmaboutexts">
                <h2>
                  Check Out the <span>Latest Podcast </span>
                </h2>
                <p>
                  Our Podcast series is a powerful medium to make our audiences
                  aware of our rich heritage. The series further inspires the
                  young generation to be not only proud of our culture but also
                  motivates them to research and spread the fragrance of our
                  ancient achievements and wisdom across the whole world.
                </p>
                <p className="textinfo">
                  While series 1 brings some of the unheard stories of Dwapar
                  Yuga, series 2 covers the teachings of our holy Book – GITA –
                  in a much-simplified manner. This series is still under
                  progress and will ensure to upload rest of podcasts as soon as
                  they are ready.
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 ordersm-1">
              <Link href="https://open.spotify.com/episode/1hiAMKjeE8uS2hyO4RW6uw?si=bbvHKEQYR_y7iy5jzLsG9A&nd=1&dlsi=170e08cf0bdd48e6">
                <Image
                  alt="podcast"
                  className="img-fluid"
                  src="/about-podcastimg.png"
                  width={700}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
      <div className="hmartsectn">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12 mb-30">
              <h2 className="homecommonhead">
                I am the one behind the show,
                <span className="text-white">
                  my podcasting journey at just 13 years
                </span>
              </h2>
            </div>
            <div className="col-lg-3 col-md-12">
              <div className="right_tagtxts">
                — Meet Your Host
                <span>Get to know me</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 col-md-12 textparagraph">
              <p>
                Growing up in a world filled with diverse perspectives and
                challenges, I found solace and guidance in the teachings of the
                Gita. Simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. My passion
                for learning and storytelling drives me to explore the depths of
                the Gita, seeking nuggets of wisdom that can inspire and empower
                listeners on their own journeys of self-discovery and personal
                growth.
              </p>
            </div>
            <div className="col-lg-5 col-md-12">
              <Image
                alt="teaching-girl"
                src="/teaching-girlpic.png"
                width={150}
                height={50}
                className="img-fluid"
                style={{ width: "100%", maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
        <div className="micpicture">
          <Image
            alt="mic"
            src="/mic.png"
            width={80}
            height={70}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
      {/* home promotional video*/}
      {/* <div className="container-fluid">
        <Events data={data} getLoading={getLoading}></Events>
      </div> */}

      {/* home promotional */}
      <div className="clearfix"></div>
      <div className="container-fluid py-4">
        <div className="hmlogos" style={{ marginBottom: "100px" }}>
          <div className="bluredbg4"></div>
          <div className="bluredbg5"></div>

          <div className="container">
            <div className="row spacebetween">
              <div className="col-lg-5 col-md-12">
                <h2 className="homecommonhead">
                  Most popular podcast <span>listening platforms</span>
                </h2>
                <div className="hmaboutexts">
                  <p>
                    In our latest episodes, we discuss regarding the simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industrys standard dummy text and
                    scrambled it to make a type specimen book.
                  </p>
                  <p className="textinfo">
                    Dont miss out on future episodes! Subscribe to our podcast
                    on your favorite platform to stay in the loop
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="logogroups">
                  <Image
                    alt=""
                    src="/podcast-logo.png"
                    className="img-fluid"
                    width={500}
                    height={300} // Adjust width and height as per your design
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
