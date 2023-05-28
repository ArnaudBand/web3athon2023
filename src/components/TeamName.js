import { Swiper, SwiperSlide } from "swiper/react";
import { roadMapProps } from "../sliderProps";
import SectionDivider from "./SectionDivider";

const TeamName = () => {
  return (
    <section id="team_name" className="display_mobile" >
      <SectionDivider />
      <div className="container">
        <h3
          className="fn__maintitle big team_section_text"
          data-text="Team"
          data-align="center"
        >
          Team
        </h3>
        <div className="fn_cs_roadmap">
          <div className="slider_holder">
            <Swiper {...roadMapProps} className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Theresa K.</span>
                    <div className="item_in">
                      <div className="flex_item">
                        <div className="img__height">
                          <img className="border_img" src="/img/author/1.png" alt="" />
                        </div>
                        <div className="text__height">
                          <p className="desc" >Founder</p>
                          <p className="desc">Atlantic City, NJ</p>
                          <p className="desc">MBA, Technology Management</p>
                          <p className="desc">BA, Anthropology/African Studies</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Dedrick W.</span>
                    <div className="item_in">
                      <div className="flex_item">
                        <div className="img__height">
                          <img className="border_img" src="/img/author/4.png" alt="" />
                        </div>
                        <div className="text__height">
                          <p className="desc">Dev</p>
                          <p className="desc">Modesto, California</p>
                          <p className="desc">CEO of Truth Serum Entertainment</p>
                        </div>
                      </div>


                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    {/* <span className="icon" /> */}
                    <span className="phase">Trivia F.</span>
                      <div className="item_in">
                        <div className="flex_item">
                          <div className="img__height">
                            <img className="border_img" src="/img/author/2.png" alt="" />
                          </div>
                          <div className="text__height">
                            <p className="desc">Researcher & Dev</p>
                            <p className="desc">Dreamweaver expert</p>
                            <p className="desc">BA Infromation technology</p>
                          </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Deborah S.</span>
                    <div className="item_in">

                      <div className="flex_item">
                        <div className="img__height">
                          <img className="border_img" src="/img/author/3.png" alt="" />
                        </div>
                        <div className="text__height">
                          <p className="desc">Web3 Dev</p>
                          <p className="desc">Atlantic City, NJ</p>
                          <p className="desc">Retired Casino Dealer</p>
                        </div>
                      </div>


                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Piyush J.</span>
                    <div className="item_in">
                      <div className="flex_item">
                        <div className="img__height">
                          <img className="border_img size_img" src="/img/author/8.png" alt="" />
                        </div>
                        <div className="text__height">
                          <p className="desc">Web3 Dev</p>
                          <p className="desc">New Delhi, India</p>
                          <p className="desc">Bachelor in Computer Applications</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Arnaud B.</span>
                    <div className="item_in">
                      <div className="flex_item">
                        <div className="img__height">
                          <img className="border_img size_img" src="/img/author/7.png" alt="" />
                        </div>
                        <div className="text__height">
                          <p className="desc">Web3 Dev</p>
                          <p className="desc">Kampala, UG</p>
                          <p className="desc">Bachelor in Computer Science</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Wilson Y.</span>
                    <div className="item_in">
                      <div className="flex_item">
                        <div className="img__height">
                          <img className="border_img" src="/img/author/5.png" alt="" />
                        </div>
                        <div className="text__height">
                          <p className="desc">AI Art Guru</p>
                          <p className="desc">Bridgeport, Connecticut</p>
                          <p className="desc">Graphic Design</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Jeff St L.</span>
                    <div className="item_in">
                      <div className="flex_item">
                        <div className="img__height">
                          <img className="border_img" src="/img/author/6.png" alt="" />
                        </div>
                        <div className="text__height">
                          <p className="desc">Product Designer</p>
                          <p className="desc">Montreal, CND</p>
                          <p className="desc">Engineer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TeamName;
