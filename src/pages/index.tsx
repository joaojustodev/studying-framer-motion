import Header from "../components/Home/Header";
import Apresentation from "../components/Home/Apresentation";
import Nav from "../components/Nav";
import CookiesConsent from "../components/CookiesConsent";

const Home = () => {
  return (
    <div>
      <Nav />
      <Header />
      <main>
        <Apresentation />
        <div style={{ width: "100%", height: "150vh" }}></div>
      </main>
      <CookiesConsent />
    </div>
  );
};

export default Home;
