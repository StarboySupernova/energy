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
        Latest from us at Stepping Stones Group
      </ParagraphText>
      <SectionTitle>Spotlight & Trending Posts</SectionTitle>
      <ParagraphText className="featuredBlogs__text">
        Latest from us at Stepping Stones Group
      </ParagraphText>
      <BlogGrid blogs={spotlightBlogs} />
    </FeaturedBlogsStyles>
  );
}

export default FeaturedBlogs;

/// colors
/// #1ff4b4 - light green, #2c313e - dark bluish, #cbdd46 - gold
