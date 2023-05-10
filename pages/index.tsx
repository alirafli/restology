import type { NextPage } from "next";
import { Meta } from "@components/elements";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-4/5">
      <Meta subTitle="Homepage" />
      <h1>Homepage</h1>
    </div>
  );
};

export default Home;
