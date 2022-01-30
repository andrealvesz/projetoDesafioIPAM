import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  max-width: 80%;
  min-width: 60%;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 2rem;

  -webkit-box-shadow: 0px 0px 8px -4px var(--blue-400);
  box-shadow: 0px 0px 10px -5px var(--blue-500);

  button {
    width: 100%;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    transition: all ease 0.5s;
    background: var(--blue-400);
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      background: var(--blue-500);
    }
  }
`;

export const Separator = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  height: 1px;
  width: 100%;
  background-color: var(--gray-100);
`;

export const TitleCardText = styled.h2`
  margin: 0;
  text-align: center;
  color: var(--gray-800);
`;

export const TitleAreas = styled.p`
  font-weight: 700;
  padding: 5px 0;
  color: var(--gray-800);
`;

export const TitleAreasText = styled.span`
  font-weight: 400;
  color: var(--blue-400);
`;

