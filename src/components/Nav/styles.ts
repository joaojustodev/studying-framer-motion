import styled from "styled-components";

export const NavBlock = styled.nav`
  height: 56px;
  background: #fff;

  > div:first-child {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 8px;
  }
`;

export const LogoAndMenuBlock = styled.div`
  display: flex;

  height: 100%;
`;

export const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  margin-right: 24px;
`;

export const MenuList = styled.ul`
  height: 100%;

  display: flex;
  align-items: center;

  > li + li {
    margin-left: 24px;
  }

  @media screen and (max-width: 997.5px) {
    display: none;
  }
`;

export const MenuListItem = styled.li`
  height: 100%;

  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const MenuMobileButton = styled.button`
  width: 32px;
  height: 32px;

  display: none;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: transparent;
  border: none;

  transition: background 100ms cubic-bezier(0.165, 0.84, 0.44, 1);

  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  @media screen and (max-width: 997.5px) {
    display: flex;
  }
`;
