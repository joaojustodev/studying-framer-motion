import Image from "next/image";
import Link from "next/link";
import {
  NavBlock,
  LogoAndMenuBlock,
  LogoWrapper,
  MenuList,
  MenuListItem,
  MenuMobileButton,
} from "./styles";
import { List } from "phosphor-react";

const Nav = () => {
  return (
    <NavBlock>
      <div className="container">
        <LogoAndMenuBlock>
          <LogoWrapper>
            <Link href="/">
              <Image
                alt="Logo framer motion"
                src="/favicon.png"
                width={42}
                height={42}
              />
            </Link>
            <strong>Framer</strong>
          </LogoWrapper>

          <MenuList>
            <MenuListItem>
              <a href="#">Option 1</a>
            </MenuListItem>
            <MenuListItem>
              <a href="#">Option 2</a>
            </MenuListItem>
            <MenuListItem>
              <a href="#">Option 3</a>
            </MenuListItem>
            <MenuListItem>
              <a href="#">Option 4</a>
            </MenuListItem>
            <MenuListItem>
              <a href="#">Option 5</a>
            </MenuListItem>
          </MenuList>
        </LogoAndMenuBlock>
        <MenuMobileButton
          type="button"
          title="Open menu"
          aria-label="Click for open menu"
          aria-expanded
        >
          <List aria-hidden size={22} />
        </MenuMobileButton>
      </div>
    </NavBlock>
  );
};

export default Nav;
