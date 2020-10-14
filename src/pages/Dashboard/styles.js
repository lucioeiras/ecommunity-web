import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  max-width: 1148px;

  padding: 48px;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 48px;
    height: 48px;

    border-radius: 50%;
  }

  > h3 {
    color: #41414D;
    font-size: 16px;
    font-weight: bold;

    display: flex;
    flex-direction: column;

    margin-left: 16px;

    > span {
      color: #A8A8B3;
      font-size: 12px;
      font-weight: normal;

      margin-top: 4px;
    }
  }
`

export const Tabs = styled.div`
  display: flex;
  align-items: center;

  > a {
    color: #A8A8B3;
    font-size: 16px;
    text-decoration: none;

    transition: color 0.2s;

    & + a {
      margin-left: 48px;
    }

    &:hover {
      color: #3A3A3A;
    }
  }
`

export const CTA = styled(Link)`
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  background: #00C14E;

  color: #fff !important;
  font-size: 20px !important;
  font-weight: bold;

  padding: 12px 48px;

  transition: background-color 0.2s !important;

  &:hover {
    background-color: #00903A;
  }
`

export const Content = styled.div`
  margin-top: 64px;

  > h1 {
    color: #3a3a3a;
    font-size: 32px;
    font-weight: bold;
  }
`

export const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 24px;  
`

export const Post = styled.div`
  cursor: pointer;

  width: 260px;
  height: 260px;

  display: flex;
  align-items: flex-end;

  border-radius: 5px;

  background: ${
    props => (`
      linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 71.5%),
      url(${props.background}) no-repeat center center / cover   
    `)
  }; 

  padding: 16px;
  margin: 0 16px 16px 0;

  transition: 0.3s;

  &:hover {
    transform: translateY(-4px);
  }

  > h2 {
    color: #FFF;
    font-size: 20px;
    font-weight: 500;
  }
`