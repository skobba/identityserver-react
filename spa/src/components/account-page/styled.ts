import styled from 'styled-components';

const Page = styled.div`
  width: 700px;
  background-color: white;
  margin: 10px;
  padding-bottom: 20px;
`;

const DefaultButton = styled.input`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  margin-right: 15px;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

export default { Page, DefaultButton };
