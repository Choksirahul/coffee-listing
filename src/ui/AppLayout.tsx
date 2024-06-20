import styled from "styled-components";

import bannerImg from "../../public/bg-cafe.jpg";
import Header from "./Header";
import ButtonGroup from "./ButtonGroup";
import CoffeeList from "./CoffeeList";
import Heading from "./Heading";
import useFetchCoffeeList from "../hooks/useFetchCoffeeList";

import { useEffect, useState } from "react";
import { ICoffeeList } from "../models/coffeeList";

const StyledAppLayout = styled.section`
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  flex-grow: 1;
  position: relative;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  position: absolute;
`;

const Main = styled.main`
  position: relative;
  width: 100%;
  margin: 160px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  z-index: 2;
`;

const MainContent = styled.div`
  width: 1400px;
  margin: 0 auto;
  background-color: var(--color-black-600);
  padding: 5.5rem;
  color: var(--color-grey-500);
  border-radius: var(--border-radius-xl);
`;

const CardListWrapper = styled.div`
  margin-top: "20px";
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 4rem 2.5rem;
  width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
`;

export default function AppLayout() {
  const { coffeeList, loading } = useFetchCoffeeList();
  const [activeTab, setActiveTab] = useState<number>(1);
  const [filterData, setfilterData] = useState<ICoffeeList[]>([]);

  useEffect(() => {
    setfilterData(coffeeList);
  }, [coffeeList]);

  const handleViewCoffee = (id: number) => {
    setActiveTab(id);
    if (id === 1) {
      setfilterData(coffeeList);
    } else {
      setfilterData(coffeeList.filter((item) => item.available));
    }
  };

  return (
    <StyledAppLayout>
      <Img src={bannerImg} />
      <Main>
        <MainContent>
          <Header />

          <CardListWrapper>
            <ButtonGroup
              activeTab={activeTab}
              handleViewCoffee={handleViewCoffee}
            />

            <CardWrapper>
              {loading ? (
                <Heading
                  as="h6"
                  style={{
                    color: "var(--color-grey-0)",
                  }}
                >
                  Loading...
                </Heading>
              ) : (
                <CoffeeList coffeeList={filterData} />
              )}
            </CardWrapper>
          </CardListWrapper>
        </MainContent>
      </Main>
    </StyledAppLayout>
  );
}
