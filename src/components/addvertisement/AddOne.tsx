import { Container } from "GlobalStyled";
import React from "react";
import { AddImage, AddSection} from "./AddOne.styled";

const AddOne = () => {
  return (
    <>
      <Container>
        <AddSection>
                  <AddImage src="https://www.motorcyclevalley.com/images/ads/Suzuki-2021-11-04.webp" />
        </AddSection>
      </Container>
    </>
  );
};

export default AddOne;
