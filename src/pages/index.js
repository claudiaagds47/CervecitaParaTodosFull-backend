import React from "react";
import GlobalStyles from "@/styles/globals";
import Image from "next/image";
// STYLES

const Index = () => {
  return (
    <>
      <Image
        src="/assets/LogoBirrin.png"
        width={144}
        height={50}
        alt="Picture of the author"
      />
      <h1 style={[GlobalStyles.title]}>Cervesita para todos</h1>
    </>
  );
};

export default Index;
