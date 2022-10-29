import styled from "styled-components";

const Wrapper = styled.aside`
  .left {
    width: 20%;
    text-align: center;
    padding-top: 30px;
    border-right: 1px solid var(--grey-300);
  }
  .close-icon {
    font-size: 40px;
    transition: var(--transition);
  }
  .close-icon:hover {
    color: var(--grey-500);
  }

  .right {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 60px;
  }
  .center{
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 60px;
    margin: 0 auto;
  }
  @media (max-width: 670px) {
  .center {
    width: 100%;
    padding: 30px 20px;
  }
  .left{
    width: 100%;
    text-align: left;
    border-right: none;
    border-bottom: 1px solid var(--grey-300);
    padding: 20px 20px;
  }
  .flex{
    flex-direction: column;
    
  }
  .right {
    width: 100%;
    
  }
}
`;
export default Wrapper;
