import { useFirstPrismicDocument } from "@prismicio/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [document] = useFirstPrismicDocument();
  console.log(document);

  return (
    <>
      <img src={document?.data.background_image_pc.url} alt="" style={{width: '100%'}} />
      <h1>{document?.id}</h1>
    </>
  );
};

export default Home;
