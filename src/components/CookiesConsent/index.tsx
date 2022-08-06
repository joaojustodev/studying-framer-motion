import { useCallback, useEffect, useState } from "react";
import Cookie from "js-cookie";

import { ConsentBlock, ConsentHeader, ConsentWrapper } from "./styles";

const ACCEPTED_COOKIE_NAME = "accepted-cookies";

type CookieRequest =
  | string
  | "accepted"
  | "declined"
  | "not-iterable"
  | undefined;

const CookiesConsent = () => {
  const [accpetedCookies, setAccpetedCookies] =
    useState<CookieRequest>(undefined);

  const setCookie = useCallback((userChoose: "accepted" | "declined") => {
    const date = new Date();
    setAccpetedCookies(userChoose);

    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);

    const expires = date;

    console.log(date);

    Cookie.set(ACCEPTED_COOKIE_NAME, userChoose, {
      expires,
      path: "/",
    });
  }, []);

  useEffect(() => {
    const cookie = Cookie.get(ACCEPTED_COOKIE_NAME);

    console.log(cookie);

    if (!cookie) {
      setAccpetedCookies("not-iterable");
      return;
    }

    setAccpetedCookies(cookie);
  }, []);

  if (typeof accpetedCookies === undefined) {
    return <></>;
  }

  if (accpetedCookies === "not-iterable") {
    return (
      <ConsentBlock>
        <ConsentHeader>
          <strong>
            This website uses cookies for a better perfermance, Please accept
            cookies for optimal performance.
          </strong>
        </ConsentHeader>
        <ConsentWrapper>
          <button
            type="button"
            title="Accept cookies"
            aria-label="Click for accept the cookies"
            onClick={() => setCookie("accepted")}
          >
            ACCEPT
          </button>{" "}
          <button
            type="button"
            title="Decline cookies"
            aria-label="Click for decline the cookies"
            onClick={() => setCookie("declined")}
          >
            DECLINE
          </button>
        </ConsentWrapper>
      </ConsentBlock>
    );
  }

  return <></>;
};

export default CookiesConsent;
