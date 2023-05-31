import styled from "styled-components";

const Container = styled.dialog`
  width: 100vw;
  height: 100vh;
  border-radius: 8px;
  border: 1px solid #888;
  z-index: 1;
  background: rgba(22, 25, 50, 0.725);
  // TODO: remove color property
  color: white;

  ::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

export { Container };
