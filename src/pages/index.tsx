import Head from "next/head";
import type { NextPage } from "next";
import Header from "../components/Home/Header";
import Apresentation from "../components/Home/Apresentation";
import Nav from "../components/Nav";

const Home: NextPage = () => {
  return (
    <div>
      <Nav />
      <Header />
      <main>
        <Apresentation />
        <div style={{ width: "100%", height: "150vh" }}></div>
      </main>
    </div>
  );
};

export default Home;
