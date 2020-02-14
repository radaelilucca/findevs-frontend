import styled from 'styled-components';

export const Container = styled.div``;

export const Navigation = styled.div`
  width: 100%;
  background: #fff;
  height: 60px;

  @media only screen and (min-width: 48em) {
    height: 60px;
  }

  .wrap {
    margin: 0 1rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%
  }

  .logo {
    color: #7159c1;
    font-size: 13px;
    display: inline-flex;
    align-items: center;

    .icon {
      font-size: 30px;
    }

    span {
      font-size: 14px;
      margin-left: 10px;
      display: inline-block
    }

    @media only screen and (min-width: 48em) {
      
    }
  }

  .signup {
    height: 30px;
    font-size: 12px;
    display: flex;
    align-items: center;

    @media only screen and (min-width: 48em) {
      display: block;
    }

    .icon {
      font-size: 14px;
      color: #7159c1;
      cursor: pointer;
    }

    span {
      line-height: 30px;
      color: #222;
      font-weight: 500;
      display: none;
    }

    button {
      margin: 0;
      background: #7159c1;
      border-radius: 0;
      color: #fff;
      text-align: center;
      height: 30px !important;
      border: 0;
      margin-left: 10px;
      padding: 0 1rem;
      font-weight: bold;
      display: none;
      cursor: pointer;
    }

    @media only screen and (min-width: 48em) {
      span,
      button {
        display: inline-block;
      }
      
      .icon {
        display: none;
      }
    }
  }

  @media only screen and (min-width: 48em) {
    .wrap {
      width: 1050px;
      margin: 0 auto
    }
  }
`;

export const HeaderImage = styled.div`
  position: relative;
  height: calc(100vh - 60px);
  overflow: hidden;

  img {
    width: auto;
    height: 100%;
    display: block;
    position: absolute;
    right: 0
  }

  @media only screen and (min-width: 48em) {
    height: calc(100vh - 100px);

    img {
      width: 100%;
      height: auto;
      position: static
    }
  }

  &:after {
    background: rgba(113,89,193,0.8);
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    position: absolute
  }

  .message {
    z-index: 2;
    font-size: 24px;
    position: absolute;
    color: #fff;
    bottom: 1rem;
    font-weight: bold;
    left: 1rem;

    @media only screen and (min-width: 48em) {
      right: calc((100% - 1050px) / 2);
      font-size: 50px;
      bottom: 3rem;
      text-align: right;
      left: auto
    }
  }
`;
