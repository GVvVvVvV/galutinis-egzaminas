import styled from "styled-components";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  gap: 10px;
  margin  30px 0px 0px 0px ;
`;

export const StyledTable = styled.table`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  max-width: 700px;

  background-color: #eaf7ff;
  border-radius: 15px;
  .thnamecontainer th {
    padding: 0px 20px 0px 15px;
    border-right: 1px solid;
  }
  box-shadow: 0px 3px 8px 7px #e1e1e1;

  .thnamecontainer .delete {
    border: none;
  }
  border: 0px solid;
  td button {
    border-radius: 10px;
    padding: 1px 5px 1px 5px;
    background-color: #ffff;
    border: 1px solid;
  }
  thead tr th {
    color: rgb(102, 102, 102);
  }
`;
export const Tbody = styled.tbody`
  tr td {
  }
`;
