import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  height: 100vh;
`

export const Header = styled.header`
  width: 1100px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 48px;
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
    color: #737380;
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

export const PostList = styled.div`
  margin-top: 64px;
`

export const Post = styled.div`

`