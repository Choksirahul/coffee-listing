import styled from "styled-components";

import Heading from "./Heading";
import ratingImg from "../../public/Star.svg";
import ratingFillImg from "../../public/Star_fill.svg";

import { ICoffeeList } from "../models/coffeeList";

const Card = styled.div`
  background-color: transparent;
`;

const CardImgWrapper = styled.div`
  height: 220px;
  position: relative;
  margin-bottom: 15px;
`;

const CardDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CoffeeRate = styled.div`
  background-color: var(--color-green-100);
  font-size: 1rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: var(--border-radius-sm);
  color: var(--color-black-900);
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardRating = styled.div`
  display: flex;
  align-items: center;
`;

const CardBadge = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  border-radius: 25px;
  padding: 0.25rem 1rem;
  background-color: var(--color-yellow-500);
  color: var(--color-black-600);
`;

interface IProp {
  coffeeList: ICoffeeList[];
}

export default function CoffeeList({ coffeeList }: IProp) {
  return (
    <>
      {coffeeList.map((item: ICoffeeList) => (
        <Card key={item.id}>
          <CardImgWrapper>
            <img
              src={item.image}
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "var(--border-radius-xl)",
              }}
              alt="Coffee's Image"
            />
            {item.popular && (
              <CardBadge>
                <Heading as="h6">Popular</Heading>
              </CardBadge>
            )}
          </CardImgWrapper>

          <CardDescription>
            <Heading as="h5" style={{ color: "var(--color-grey-0" }}>
              {item.name}
            </Heading>
            <CoffeeRate>{item.price}</CoffeeRate>
          </CardDescription>

          <CardFooter style={{ marginTop: "10px" }}>
            <CardRating>
              <img
                src={item.rating === null ? ratingImg : ratingFillImg}
                alt="Rating Image"
                style={{ width: "30px" }}
              />
              <Heading
                as="h6"
                style={{
                  color: "var(--color-grey-0)",
                  marginLeft: "5px",
                }}
              >
                {item.rating}
              </Heading>
              <Heading
                as="h6"
                style={{
                  color: "var(--color-grey-500",
                  marginLeft: "5px",
                }}
              >
                {item.votes === 0 ? "No ratings" : `(${item.votes} votes)`}
              </Heading>
            </CardRating>

            {!item.available && (
              <Heading as="h6" style={{ color: "var(--color-red-500" }}>
                Sold out
              </Heading>
            )}
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
