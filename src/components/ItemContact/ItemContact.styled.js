import styled from "@emotion/styled";

export const ContsctBlock = styled.li`
  display: flex;
  justify-content: space-between;
  width: calc(100%/1.2);
  height: 3em;
  margin: 0 auto 8px auto;
  padding: 16px;
  align-items: center;
  font-size: 16px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;


export const ContactName = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: #292828;
`;

export const ContactNumber = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: #292828;
`;

export const BtnDeleteContact = styled.button`
  text-align: center;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: #292828;
  background-color: #f7f7f7;
  border: 1px solid #c7c3c3;
  border-radius: 4px;
`;