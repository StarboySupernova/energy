import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import BlogGrid from '../blog/BlogGrid';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';

function FeaturedBlogs() {
  const data = useStaticQuery(graphql`
    {
      allSanitySpotlight(filter: { _id: { eq: "spotlightItems" } }) {
        nodes {
          blogs {
            id
            title
            publishedAt
            categories {
              title
              slug {
                current
              }
            }
            coverImage {
              alt
              asset {
                gatsbyImageData
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `);
  const spotlightBlogs = data.allSanitySpotlight.nodes[0].blogs;
  return (
    <FeaturedBlogsStyles>
      <SectionTitle>Our Core Operations</SectionTitle>
      <ParagraphText className="featuredBlogs__text">
        We are a money market, we excel in seamless money, electricity, and
        airtime transfers, both locally and across borders. Trust us to cater to
        all your transfer needs with efficiency and reliability.
      </ParagraphText>
      <SectionTitle>Dedication & Reliability</SectionTitle>
      <ParagraphText className="featuredBlogs__text">
        🌐 Connect with Confidence at Energy Bros Group Internet Cafes! 🌐 At
        Energy Bros Group, our commitment to your connectivity is unwavering. 💪
        Experience the pinnacle of reliability and dedication as we provide a
        smooth internet experience in a vibrant and comfortable setting. Your
        productivity and customer satisfaction matters, and we're here to ensure
        it thrives. Trust the Energy Bros difference! 🚀💻
      </ParagraphText>
      <SectionTitle>Spotlight & Trending Posts</SectionTitle>
      <ParagraphText className="featuredBlogs__text">
        Latest from us at Energy Bros Group
      </ParagraphText>
      <BlogGrid blogs={spotlightBlogs} />
    </FeaturedBlogsStyles>
  );
}

export default FeaturedBlogs;
