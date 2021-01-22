import React, { Component } from "react";

import { IconContext } from "react-icons";
import { FaLink } from "react-icons/fa";
import { GiFeather } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-page-main-container">
        <div className="about-header">
          <div className="hero-text">
            <IconContext.Provider value={{ className: "about-feather-icon" }}>
              <GiFeather />
            </IconContext.Provider>
            <h1>Esthy plume</h1>
          </div>
          <div>
            <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shape-rendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  xlink
                  href="#gentle-wave"
                  x="48"
                  y="0"
                  fill="rgba(255,255,255,0.7"
                />
                <use
                  xlink
                  href="#gentle-wave"
                  x="48"
                  y="3"
                  fill="rgba(255,255,255,0.5)"
                />
                <use
                  xlink
                  href="#gentle-wave"
                  x="48"
                  y="5"
                  fill="rgba(255,255,255,0.3)"
                />
                <use xlink href="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
        <div className="about-who-we-are-area">
          <div className="header">
            <h1>Notre histoire</h1>
          </div>
          <div className="history-area">
            <p>
              {/* <IconContext.Provider value={{ className: "about-quotes" }}>
                <FaQuoteLeft />
              </IconContext.Provider> */}
              Esthy Plume est une entreprise qui œuvre dans la production des
              journaux et Magazines axés sur les informations entrepreneuriales,
              Autres informations en général sur l’actualité ; différents faits
              de la société au quotidien en ligne. Promotion des événements dans
              différents domaines de la vie. Ainsi que l’organisation des
              événements. Lancement, visibilité et vente de la promotion des
              entreprises et organisations à travers une consultance positive.
              {/* <IconContext.Provider value={{ className: "about-quotes" }}>
                <FaQuoteRight />
              </IconContext.Provider> */}
            </p>
          </div>
          <div className="our-mission-area">
            <Row className="mission-row">
              <Col md="6" sm="12">
                <div className="header">
                  <h3>Notre mission</h3>
                </div>
                <div className="content">
                  Offrir à nos clients des services adaptés à leurs besoins et
                  leurs attentes. Donner satisfaction aux personnes en besoin
                  selon leurs desiderata.
                  <hr />
                  <br /> <strong>Esthyplume magazine</strong> a pour objectif
                  global de promouvoir les entreprises œuvrant dans tout le
                  domaine possible enfin de le rendre capable de se faire
                  connaitre efficacement, se positionné dans leurs secteurs et
                  faire face à la concurrence. Et aussi les grands défis
                  d’abandon. Donner les informations fiables et crédibles à nos
                  internautes et promouvoir toute organisation voulant parler au
                  monde de ce qu’elle et de sa contribution dans le
                  développement sein de la communauté.
                </div>
              </Col>
              <Col md="6" sm="12">
                <div className="about-image-container">
                  <div className="image-wrapper ">
                    <img
                      src={require("../assets/img/9.jpg")}
                      alt=""
                      className="about-image-rounded"
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mission-row specifiques">
              <Col md="6">
                <div className="about-image-container">
                  <div className="image-wrapper ">
                    <img
                      src={require("../assets/img/9.jpg")}
                      alt=""
                      className="about-image-rounded"
                    />
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="header">
                  <h3>Objectifs spécifiques</h3>
                </div>
                <div className="content">
                  <ul>
                    <li>
                      Sensibiliser les entrepreneurs et les entreprise sur
                      l’importance de se faire connaitre ; et faire connaitre
                      leur produits et services. En se vendant efficacement.
                    </li>
                    <li>
                      Permettre aux entrepreneurs de se chercher des partenaires
                    </li>
                    <li>
                      Pousser la communauté à consommer locale ; en faisant
                      confiance aux entreprise locales.
                    </li>
                    <li>
                      Susciter les entreprises à donner les entreprises à donner
                      les meilleurs d’elles même.
                    </li>
                    <li>
                      Aider les startups à s’insérer dans le marché et y trouer
                      place.
                    </li>
                    <li>
                      Accompagner les jeunes entrepreneurs à se développer dans
                      les techniques de visibilité de leurs entreprises.
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className="mission-row strategy">
              <Col md="12">
                <div className="header">
                  <h3>Stratégies</h3>
                </div>
                <div className="content">
                  <br />
                  <ul>
                    <li>
                      Création et commercialisation des espaces publicitaires
                      (promotion) selon des produits et services disponible à
                      travers des magazine et journaux.
                    </li>
                    <li>
                      Mettre l’accent sur le profil des entrepreneurs
                      innovateurs ayant réussi dans leurs activités et la mise
                      en place des modules contenant les idées pouvant aider et
                      susciter les entreprises à évoluer.
                    </li>
                    <li>
                      Rencontrer et visité les organisations et leur faire part
                      des de l’opportunité offerte par nous dans le cadre de la
                      promotion ; et de même pour les medias en ligne.
                    </li>
                  </ul>
                </div>
                <hr />
              </Col>
            </Row>
            <Row className="mission-row services">
              <Col md="12">
                <div className="header">
                  <h3>Nos services</h3>
                </div>
                <div className="services-main-wrapper">
                  <div className="service-item">
                    <div className="service-image-wrapper">
                      <img src={require("../assets/img/9.jpg")} alt="" />
                    </div>
                    <div className="service-details">
                      <div className="header">
                        <h4>
                          Booster les médias sociaux et l’image d’une
                          organisation.
                        </h4>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Doloremque ipsa at odio facere qui accusantium.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="service-item">
                    <div className="service-image-wrapper">
                      <img src={require("../assets/img/9.jpg")} alt="" />
                    </div>
                    <div className="service-details">
                      <div className="header">
                        <h4>
                          Vente d’espace publicitaire, Vente d’espace et
                          organisation d’évènements
                        </h4>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Doloremque ipsa at odio facere qui accusantium.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="service-item">
                    <div className="service-image-wrapper">
                      <img src={require("../assets/img/9.jpg")} alt="" />
                    </div>
                    <div className="service-details">
                      <div className="header">
                        <h4>Promotion d’entreprises.</h4>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Doloremque ipsa at odio facere qui accusantium.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="service-item">
                    <div className="service-image-wrapper">
                      <img src={require("../assets/img/9.jpg")} alt="" />
                    </div>
                    <div className="service-details">
                      <div className="header">
                        <h4>Connexion d’entreprise à une autre.</h4>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Doloremque ipsa at odio facere qui accusantium.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="service-item">
                    <div className="service-image-wrapper">
                      <img src={require("../assets/img/9.jpg")} alt="" />
                    </div>
                    <div className="service-details">
                      <div className="header">
                        <h4>
                          Orientation en lancement d’un produit nouvellement mis
                          sur le marché.
                        </h4>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Doloremque ipsa at odio facere qui accusantium.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="service-item">
                    <div className="service-image-wrapper">
                      <img src={require("../assets/img/9.jpg")} alt="" />
                    </div>
                    <div className="service-details">
                      <div className="header">
                        <h4>
                          Offrir différents services pour la réussite d’une
                          organisation.
                        </h4>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Doloremque ipsa at odio facere qui accusantium.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mission-row strategy valeurs">
              <Col md="12">
                <div className="header">
                  <h3>Nos valeurs</h3>
                </div>
                <div className="content">
                  <br />
                  <p> Innovation, Perfection, réussite et moralité.</p>
                </div>
                <hr />
              </Col>
            </Row>
            <Row className="mission-row team">
              <Col md="12">
                <div className="header">
                  <h3> Une équipe musclée à votre service</h3>
                </div>
                <div className="team-main-container">
                  <div className="team-item-container">
                    <div className="about-page-profile">
                      <img src={require("../assets/img/mike.jpg")} alt="" />
                    </div>
                    <div className="about-page-profile-details">
                      <Link to={`/profile/estherluhavo`}>
                        <h3>
                          Esther Luhavo{" "}
                          <IconContext.Provider
                            value={{ className: "team-link-icon" }}
                          >
                            <FaLink />
                          </IconContext.Provider>
                        </h3>
                      </Link>
                      <div>
                        <span>Directrice générale</span>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nisi, asperiores?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="team-item-container">
                    <div className="about-page-profile">
                      <img src={require("../assets/img/mike.jpg")} alt="" />
                    </div>
                    <div className="about-page-profile-details">
                      <Link to={`/profile/estherluhavo`}>
                        <h3>
                          Laurent Nyange{" "}
                          <IconContext.Provider
                            value={{ className: "team-link-icon" }}
                          >
                            <FaLink />
                          </IconContext.Provider>
                        </h3>
                      </Link>
                      <div>
                        <span>rédacteur en chef</span>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nisi, asperiores?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="team-item-container">
                    <div className="about-page-profile">
                      <img src={require("../assets/img/mike.jpg")} alt="" />
                    </div>
                    <div className="about-page-profile-details">
                      <Link to={`/profile/estherluhavo`}>
                        <h3>
                          Nacchi Junior{" "}
                          <IconContext.Provider
                            value={{ className: "team-link-icon" }}
                          >
                            <FaLink />
                          </IconContext.Provider>
                        </h3>
                      </Link>
                      <div>
                        <span>secrétaire de rédaction</span>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nisi, asperiores?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="team-item-container">
                    <div className="about-page-profile">
                      <img src={require("../assets/img/mike.jpg")} alt="" />
                    </div>
                    <div className="about-page-profile-details">
                      <Link to={`/profile/estherluhavo`}>
                        <h3>
                          Nicolas Bahati{" "}
                          <IconContext.Provider
                            value={{ className: "team-link-icon" }}
                          >
                            <FaLink />
                          </IconContext.Provider>
                        </h3>
                      </Link>
                      <div>
                        <span>chargé de programme</span>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nisi, asperiores?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="team-item-container">
                    <div className="about-page-profile">
                      <img src={require("../assets/img/mike.jpg")} alt="" />
                    </div>
                    <div className="about-page-profile-details">
                      <Link to={`/profile/estherluhavo`}>
                        <h3>
                          Roselyne Luhavo{" "}
                          <IconContext.Provider
                            value={{ className: "team-link-icon" }}
                          >
                            <FaLink />
                          </IconContext.Provider>
                        </h3>
                      </Link>
                      <div>
                        <span>Financière </span>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nisi, asperiores?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="team-item-container">
                    <div className="about-page-profile">
                      <img src={require("../assets/img/mike.jpg")} alt="" />
                    </div>
                    <div className="about-page-profile-details">
                      <Link to={`/profile/estherluhavo`}>
                        <h3>
                          Priscilla Mupenzi{" "}
                          <IconContext.Provider
                            value={{ className: "team-link-icon" }}
                          >
                            <FaLink />
                          </IconContext.Provider>
                        </h3>
                      </Link>
                      <div>
                        <span>DChargée de marketing</span>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nisi, asperiores?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
