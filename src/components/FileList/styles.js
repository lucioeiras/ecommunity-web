import styled from 'styled-components';

export const Container = styled.ul`
  height: 256px;

  display: flex;
  flex-wrap: wrap;

  margin-top: 24px;

  > li {
    list-style: none;
    color: #444;

    & + li {
      margin-left: 16px;
    }
  }
`;

export const FileInfo = styled.div`
  > div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;

    > span {
      color: #999;
      font-size: 12px;

      margin-top: 5px;
    }
  }
`;