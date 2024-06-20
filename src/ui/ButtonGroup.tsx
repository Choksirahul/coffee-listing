import styled from "styled-components";

import Button from "./Buttton";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ButtonGroup({ activeTab, handleViewCoffee }) {
  return (
    <ButtonWrapper>
      <Button
        className={activeTab === 1 ? `active` : ""}
        style={{ marginRight: "20px" }}
        onClick={() => handleViewCoffee(1)}
      >
        All Products
      </Button>
      <Button
        className={activeTab === 2 ? `active` : ""}
        onClick={() => handleViewCoffee(2)}
      >
        Available Now
      </Button>
    </ButtonWrapper>
  );
}
