import { createClient } from "@/services/prismic";
import type { NextPage } from "next";
import { memo } from "react";

const Home: NextPage = ({ document }: any) => {
  console.log(document);

  return (
    <>
      {document &&
        document.map((doc: any) => (
          <>
            <img
              key={doc?.background_image_pc.url}
              src={doc?.background_image_pc.url}
              alt=""
              style={{ width: "50%" }}
            />
            {/* <h1>{document?.id}</h1> */}
          </>
        ))}
    </>
  );
};

export default memo(Home);

export async function getStaticProps() {
  const client = createClient();

  const document = await client.getAllByType("banners");
  const data = document.map((doc) => doc.data);
  return {
    props: {
      document: data,
    },
  };
}
