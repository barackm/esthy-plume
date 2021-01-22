import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import { IconContext } from "react-icons";
import { BsClock } from "react-icons/bs";
import truncatedStr from "utils/truncatedStr";

import image1 from "../assets/img/article.jpg";
import { Link } from "react-router-dom";

const items = [
  {
    src: image1,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: require("assets/img/damir-bosnjak.jpg"),
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: require("assets/img/bg5.jpg"),
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

const CarouselHome = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Link to="/news/1">
          <div className="main-article-home-area">
            <div className="image-wrapper">
              <img src={item.src} alt="" />
            </div>
            <div className="home-article-details">
              <div className="home-article-category">
                <span>Culture</span>
              </div>
              <div className="home-article-title">
                <h3>10 Essential Rules of Good Health</h3>
              </div>
              <div className="home-article-timing">
                <IconContext.Provider
                  value={{ className: "article-clock-icon" }}
                >
                  <BsClock />
                </IconContext.Provider>
                <span>Mars 17, 2020</span>
              </div>
              <div className="home-article-synthese">
                {truncatedStr(
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.Id fuga consequatur quod enim voluptatem aliquid itaque,vitae similique, minima laboriosam, obcaecati molestiasmaiores quam adipisci?",
                  120
                )}
              </div>
            </div>
            <div className="overlay-article-main"></div>
          </div>
        </Link>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="home-carousel-container"
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default CarouselHome;
