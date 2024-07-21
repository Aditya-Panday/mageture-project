import MainLayout from "@/components/MainLayout";
import React from "react";
import Image from "next/image";
export default function page() {
  return (
    <MainLayout>
      <div className="clearfix"></div>
      <div className="container-fluid py-4">
        <div className="hmlogos" style={{ marginBottom: "100px" }}>
          <div className="bluredbg4"></div>
          <div className="bluredbg5"></div>
          <div className="container">
            <div className="row spacebetween">
              <div className="col-lg-5 col-md-12">
                <h2 className="homecommonhead">
                  About Us <span>listening platforms</span>
                </h2>
                <div className="hmaboutexts">
                  <p>
                    Back to Basics” is an attempt to connect to our ancient
                    roots. We have a rich heritage of more than 5000 years and
                    our forefathers have left us ocean of knowledge, which we
                    all should read and practice helping all of us find the true
                    meaning of our lives
                  </p>
                  <p>
                    Pick any stream be it Maths, Engineering, Physics,
                    Chemistry, You will see innumerable examples of us being way
                    ahead of all other civilizations and we are making an
                    genuine attempt to make the world aware of this rich
                    heritage of ours.
                  </p>
                  <p className="textinfo">
                    We are just starting and I know there is lot of grounds need
                    to be covered however every big journey starts with a small
                    step. I am looking forward to your continuous feedback to
                    help us improve continuously.
                  </p>
                  <p>
                    {" "}
                    Thanks, <br />
                    <span style={{ color: "#40a297" }}>Gunnika Khurana</span>
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="logogroups">
                  <Image
                    alt=""
                    src="/teaching-girlpic.png"
                    className="img-fluid pic-about p-1"
                    style={{
                      borderRadius: "15px",
                      overflow: "hidden",
                    }}
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
