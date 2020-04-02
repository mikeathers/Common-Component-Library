import React from "react";
import Loader from "react-loader-spinner";
import { FlexBox } from "components/Common";
const Spinner = () => {
  return (
    <FlexBox
      width="10"
      minHeight="10"
      alignItems="center"
      justifyContent="center"
      marginLeft="10"
      marginTop="20"
    >
      <Loader type="TailSpin" color="#1baa57" height={25} width={25} />
    </FlexBox>
  );
};

export { Spinner };
