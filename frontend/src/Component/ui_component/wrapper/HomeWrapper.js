import React from "react";
import styled from "styled-components";
import imgWrapper from "../../../image/wrapper.jpg";
import SearchHotels from "../search";
import Title from "../../../common/Title";

export default function Wrapper(props) {
  function handleSearch(search) {
    props.search(search);
  }
  return (
    <HomeWrapper>
      <div className="wrapper_box">
        <Title
          title="Looking for Best Hotels in Nepal ?"
          fontSize={35}
          center={true}
          fontWeight={800}
          color=" #fff"
        />
        <SearchHotels search={handleSearch} searchdata={props} />
      </div>
    </HomeWrapper>
  );
}
const HomeWrapper = styled.div`
  background-image: linear-gradient(to right, #9f96964f, #4b464d99),
    url("images/banner2.jpg");
  background-size: cover;
  font-family: " Girassol", cursive;
  height: 80vh;
  .wrapper_box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
  }
`;
