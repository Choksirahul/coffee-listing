import styled from "styled-components";

import Heading from "./Heading";

const ListingHeader = styled.div`
  padding: 1rem;
  text-align: center;
  margin: 0 auto;
  width: 45%;
  background-image: url("vector.svg");
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 350px 150px;
`;

export default function Header() {
  return (
    <ListingHeader>
      <Heading
        as="h2"
        style={{ color: "var(--color-grey-0", marginBottom: "10px" }}
      >
        Our Collection
      </Heading>
      <p style={{ fontSize: "1rem", fontWeight: 600 }}>
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
    </ListingHeader>
  );
}
