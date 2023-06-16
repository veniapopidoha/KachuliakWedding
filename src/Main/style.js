import styled from 'styled-components';
import back from '../img/footer.png';

export const Back = styled.img`
  height: 50vw !important;
  width: 100vw;
`;

export const Text = styled.h1`
  font-family: 'Poiret One', cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 44px;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  color: #ffffff;
  @media screen and (max-width: 1024px) {
    font-size: 24px;
    line-height: 32px;
  }
  @media screen and (max-width: 768px) {
    font-size: 17px;
    line-height: 23px;
  }
`;

export const Text2 = styled.h2`
  font-family: 'Poiret One', cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #ffffff;
  a {
    color: #fff;
  }
  @media screen and (max-width: 1024px) {
    font-size: 18px;
    line-height: 27px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const InvitationBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 50vw;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    img {
      width: 100vw;
    }
  }
`;

export const ImgMobile = styled.img`
  display: none;

  @media screen and (max-width: 480px) {
    width: 100vw;
    display: block;
  }
`;

export const ImgComp = styled.img`
  width: 50vw;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Text3 = styled.h2`
  font-family: 'Playfair Display', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;
  @media screen and (max-width: 1024px) {
    font-size: 28px;
    line-height: 32px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 375px) {
    font-size: 15px;
  }
`;

export const Text4 = styled.h2`
  font-family: 'PT Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  text-align: justify;
  width: 80%;

  color: #ffffff;
  @media screen and (max-width: 1024px) {
    font-size: 12px;
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
    font-family: 'Poiret One', cursive;
  }
  @media screen and (max-width: 375px) {
    font-size: 11px;
  }
`;

export const StyledFrame = styled.iframe`
  /* transition: 0.8s;
  ${({ $video }) => ($video ? 'display: block' : 'display: none')}; */
  margin-top: 20px;
  width: 560px;
  height: 315px;
  @media screen and (max-width: 1024px) {
    width: 90%;
    height: fit-content;
  }
`;

export const Button = styled.button`
  font-family: 'Poiret One', cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
  border: 1px solid #fff;
  background-color: #000;
  padding: 12px 28px;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
    padding: 10px 25px;
  }
  @media screen and (max-width: 768px) {
    font-size: 11px;
    padding: 6px 15px;
  }
  @media screen and (max-width: 375px) {
    font-size: 10px;
    padding: 3px 10px;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Text5 = styled.h2`
  font-family: 'Poiret One', cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 150%;
  width: 90vw;
  padding-bottom: 30px;
  text-align: justify;

  color: #ffffff;
  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (max-width: 375px) {
    font-size: 11px;
  }
`;

export const DressCode = styled.div`
  background: rgba(152, 152, 152, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
`;

export const SubTitle = styled.h2`
  font-family: 'Poiret One', cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 25px;
  /* identical to box height */
  text-align: center;
  letter-spacing: 0.11em;
  text-transform: uppercase;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }
  @media screen and (max-width: 768px) {
    font-size: 13px;
    line-height: 17px;
  }
  @media screen and (max-width: 375px) {
    font-size: 10px;
    line-height: 15px;
  }
`;

export const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 10px 20px;

  ${({ $color }) => `background: ${$color}`};
  @media screen and (max-width: 1024px) {
    width: 50px;
    height: 50px;
  }
  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin: 5px 10px;
  }
  @media screen and (max-width: 375px) {
    width: 30px;
    height: 30px;
    margin: 5px;
  }
`;

export const CircleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Footer = styled.footer`
  background-image: url(${back});
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;
  @media screen and (max-width: 480px) {
    padding: 5px;
  }
`;

export const Contacts = styled.h3`
  font-family: 'Poiret One', cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 33px;
  margin-top: 0;
  display: block;
  /* identical to box height */
  text-transform: uppercase;

  /* white */
  color: #ffffff;
  @media screen and (max-width: 1024px) {
    font-size: 25px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ContactText = styled.h3`
  margin: 0;
  a {
    text-decoration: none;
    font-family: 'PT Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;

    color: #ffffff;
    @media screen and (max-width: 1024px) {
      font-size: 12px;
    }
    @media screen and (max-width: 768px) {
      font-size: 10px;
    }
    @media screen and (max-width: 480px) {
      font-size: 8px;
    }
    @media screen and (max-width: 375px) {
      font-size: 7px;
      line-height: 12px;
    }
  }
`;

export const Please = styled.h2`
  font-family: 'Poiret One';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-align: right;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding-right: 30px;

  /* white */
  color: #ffffff;
  @media screen and (max-width: 1024px) {
    font-size: 17px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 16px;
  }
  @media screen and (max-width: 480px) {
    padding-right: 8px;
    font-size: 8px;
  }
  @media screen and (max-width: 375px) {
    font-size: 7px;
    line-height: 12px;
  }
`;
