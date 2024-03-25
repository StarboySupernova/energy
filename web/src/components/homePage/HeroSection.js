import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';
import { SectionTitle } from '../typography/Title';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">Energy Bros Group</h1>
            <h1 className="hero__heading">Internet Cafes</h1>
            <ParagraphText className="hero__text">
              Welcome to Energy Bros Group Internet Cafes, your gateway to
              seamless digital connectivity and productivity. Explore a variety
              of services uniquely created to cater to your requirements &
              enhance your online experience, whether for work, study, or
              leisure. Step into a world of convenience and innovation with
              Energy Bros Group.
            </ParagraphText>
            <SectionTitle>Our Expertise</SectionTitle>
            <ParagraphText className="hero__text">
              We are the Number 1 internet cafe group, setting the standard for
              uninterrupted connectivity as we boast dependable, onside backup
              power, ensuring you stay unaffected by any stage of load shedding.
              Trust our hardworking staff to keep you connected, always, seven
              days a week, from Sunday to Sunday. Choose us for continuous and
              reliable service – your gateway to uninterrupted online
              excellence.
            </ParagraphText>
            <SectionTitle>Explore Our Tech Hub</SectionTitle>
            <ParagraphText className="hero__text">
              We are the top-up-hub for for the following Point of Sale (POS)
              terminal mobile machines
            </ParagraphText>
            <ParagraphText className="kazang inlineText">
              Kazang •
            </ParagraphText>
            <ParagraphText className="flash inlineText">Flash •</ParagraphText>
            <ParagraphText className="vodapay inlineText">
              VodaPay •
            </ParagraphText>
            <ParagraphText className="mtnMomo inlineText">
              MTN MoMo •
            </ParagraphText>
            <ParagraphText className="racellular inlineText">
              and many more!
            </ParagraphText>
            <ParagraphText className="hero__text">
              We facilitate smooth shop-to-shop transactions, for spaza shops in
              the vibrant communities of Midrand & Tembisa. Our dedicated
              service ensures a hassle-free experience, making it convenient for
              businesses to top-up with us effortlessly.
            </ParagraphText>
            <Button to="/services" tag={Link} className="hero__button">
              Explore Our Services
            </Button>
            <ParagraphText className="featuredBlogs__text">
              Where Every Click, Drives You Forward
            </ParagraphText>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/VR.jpg"
              alt="Energy Bros hero image"
              placeholder="blurred"
              objectPosition="50% 30%"
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
