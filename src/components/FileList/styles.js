import styled from 'styled-components';

export const Container = styled.ul`
  max-height: 256px;

  display: flex;
  flex-wrap: wrap;
  align-content: space-between;

  margin-top: 8px;

  > li {
    list-style: none;
    color: #444;

    margin: 0 16px 16px 0;
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