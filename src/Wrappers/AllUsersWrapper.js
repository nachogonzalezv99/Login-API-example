import styled from "styled-components";

const Wrapper = styled.aside`
  .users-container {
    width: 100%;
    border-spacing: 0;
    display: flex;
    flex-wrap: wrap;
  }
  .users-container div {
    width: 50%;
    border-bottom: 1px solid var(--grey-100);
    padding: 20px 30px;
  }

  .users-container a {
    width: 100%;
    display: flex;
    transition: ease 0.2s all;
  }
  .users-container a:hover {
    background-color: var(--grey-100);
  }

  .users-header {
    border-bottom: 1px solid var(--grey-300);
    padding: 25px;
    color: grey;
    text-align: left;
  }

  .pagination-container {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .active {
    color: white;
    background-color: var(--grey-500);
  }
`;
export default Wrapper;
