import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { TopCategoriesStyles } from '../../styles/homePage/TopCategoriesStyles';
// import CategoryGrid from '../category/CategoryGrid';
import ServiceGrid from '../category/ServiceGrid';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allSanitySpotlight(filter: { _id: { eq: "spotlightItems" } }) {
        nodes {
          category {
            id
            title
            slug {
              current
            }
            _rawDescription
          }
        }
      }
    }
  `);
  const services = data.allSanitySpotlight.nodes[0].category;
  return (
    <TopCategoriesStyles>
      <SectionTitle>
        Expert Document Services for Your Business Growth
      </SectionTitle>
      <ParagraphText>
        We excel at crafting business proposals, drafting contracts, and
        creating company profiles tailored to meet your specific needs. Trust
        our highly qualified staff to provide professional documents that
        effectively communicate your business goals and strengths. Our long
        experience and skills in document creation will help support your
        business and enhance your professional image.
      </ParagraphText>
      <SectionTitle>Premier Technological Service</SectionTitle>
      <ParagraphText>
        We specialize in offering a wide range of computers and accessories,
        providing top-notch technology solutions to meet your needs. Our
        selection includes the latest in computing technology, ensuring you have
        access to cutting-edge products.
      </ParagraphText>
      <SectionTitle>Top Services</SectionTitle>
      <ParagraphText>
        Explore Internet Excellence: Your journey begins here with us
      </ParagraphText>
      <ServiceGrid services={services} />
    </TopCategoriesStyles>
  );
}

export default TopCategories;
