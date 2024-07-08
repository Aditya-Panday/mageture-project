import MainLayout from "@/components/MainLayout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
              <Link href="#">
                <Image
                  alt="Spotify"
                  src="/spotify.png"
                  width={150}
                  height={50}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Link>
              <Link href="#">
                <Image
                  alt="Apple"
                  src="/apple.png"
                  width={150}
                  height={50}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Link>
              <Link href="#">
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
                  In our latest episodes, we discuss the simply dummy text of
                  the printing and typesetting industry. Lorem Ipsum has been
                  the industrys standard dummy text and scrambled it to make a
                  type specimen book.
                </p>
                <p className="textinfo">
                  Dont miss out on future episodes! Subscribe to our podcast on
                  your favorite platform to stay in the loop.
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 ordersm-1">
              <Image
                alt="podcast"
                className="img-fluid"
                src="/about-podcastimg.png"
                width={700}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
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
      {/* home promotional */}

    </MainLayout>
  );
}
