import styled from 'styled-components';

export const Body = styled.div`
  background: #f3f7fa;
  display: grid;
  height: fit-content;
  padding: 0 320px;

  @media (max-width: 768px) {
    padding: 0;
    overflow: hidden;
    justify-content: center;
    width: 100vw;
  }
`;

export const BreadCrumb = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #028af3;
  margin: 32px 0 0 0;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Headline = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: clamp(2rem, 1.8333rem + 0.7407vw, 2.5rem);
  line-height: clamp(2.25rem, 2rem + 1.1111vw, 3rem);
  letter-spacing: -0.5px;
  color: rgba(0, 0, 0, 0.87);
  margin: 48px 0 48px 0;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;
