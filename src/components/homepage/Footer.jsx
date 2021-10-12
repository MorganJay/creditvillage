import React from 'react';
import { LinkList } from 'components/headers/AuthHeader';

import { ReactComponent as Facebook } from 'assets/images/facebook.svg';
import { ReactComponent as Twitter } from 'assets/images/icons_twitter.svg';
import { ReactComponent as Instagram } from 'assets/images/instagram-alt.svg';
import {
  Footer,
  Wrapper,
  HeadingOne,
  Paragraph,
  StyledLink,
  OutLink,
} from '../../styled/';

const FooterSection = () => {
  return (
    <Footer>
      <Wrapper className='footer-top'>
        <Wrapper>
          <HeadingOne>V</HeadingOne>
          <Paragraph className='footer-paragraph'>
            CreditVillage &copy; 2021. All rights reserved
          </Paragraph>
        </Wrapper>
        <Wrapper>
          <LinkList>
            <StyledLink path='#home'>Home</StyledLink>
            <StyledLink path='#features'>Features</StyledLink>
            <StyledLink path='#how'> How it works</StyledLink>
          </LinkList>
        </Wrapper>
        <Wrapper className='socials-wrapper'>
          <OutLink href='https://www.facebook.com'>
            <Facebook />
          </OutLink>
          <OutLink href='https://www.twitter.com'>
            <Twitter />
          </OutLink>
          <OutLink href='https://www.instagram.com'>
            <Instagram />
          </OutLink>
        </Wrapper>
      </Wrapper>
      <Wrapper className='footer-bottom'>
        <OutLink href='/'>Terms and Conditions</OutLink>
        <OutLink href='/'>Privacy Policy</OutLink>
      </Wrapper>
    </Footer>
  );
};

export default FooterSection;
