import Image from "next/image";
import { Container } from "./styles";

const HeroSection = () => {
  return (
    <Container>
      <div className="container">
        <div>
          <h1>hello world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste
            illo quisquam quod quibusdam illum natus dignissimos ipsa atque,
            consequuntur eaque, accusantium voluptatibus eius aut libero
            numquam! Provident, sunt repellat.
          </p>
          <span>Lorem ipsum dolor sit amet.</span>
        </div>

        <Image
          alt="Mobile Developer"
          src="/assets/mobile_developer.svg"
          width={400}
          height={400}
        />
      </div>
    </Container>
  );
};

export default HeroSection;
