import React from "react";
import "./Portfolio.css";
import img from "../../assets/1_o5JioPIf2Y7fwXWvhLf_CA.png";
import amazon from "../../assets/amazon_pic.png";
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={amazon}></img>
          </div>
          <h3>Amazon-clone</h3>
          <div className="portfolio__item-cta">
            <a src={amazon} className="btn btn-primary" target="_blank">
              Live DEmo
            </a>
            <a
              href="https://github.com/adwaith0007/Amazon-clone.git"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img}></img>
          </div>
          <h3>Shopping-Cart</h3>
          <div className="portfolio__item-cta">
            <a src={img} className="btn btn-primary" target="_blank">
              Live DEmo
            </a>
            <a
              href="https://github.com/adwaith0007/Shopping-Cart.git"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img}></img>
          </div>
          <h3>Netflix-clone</h3>
          <div className="portfolio__item-cta">
            <a src={img} className="btn btn-primary" target="_blank">
              Live DEmo
            </a>
            <a
              href="https://github.com/adwaith0007/Netflix-clone.git"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img}></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a src={img} className="btn btn-primary" target="_blank">
              Live DEmo
            </a>
            <a href="" className="btn" target="_blank">
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img}></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a src={img} className="btn btn-primary" target="_blank">
              Live DEmo
            </a>
            <a href="" className="btn" target="_blank">
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img}></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a src={img} className="btn btn-primary" target="_blank">
              Live DEmo
            </a>
            <a href="" className="btn" target="_blank">
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
