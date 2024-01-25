import React, { FC, ReactNode, MouseEvent } from "react";

import s from "./customLink.module.scss";

interface ICustomLinkProps {
  children: ReactNode;
  id: string;
  customClass?: string;
  customType?: "button" | "link";
  type?: "button" | "submit" | "reset";
  handleClick?: (
    e: MouseEvent<HTMLButtonElement>
    // value?: string | number
  ) => void;
}

export const CustomLink: FC<ICustomLinkProps> = ({
  children,
  id = "#id",
  customClass,
  customType = "link",
  type = "button",
  handleClick,
}) => {
  return customType === "link" ? (
    <a href={id} className={customClass ? customClass : s.link_sale}>
      {children}
    </a>
  ) : (
    <button
      id={id}
      className={customClass ? customClass : s.link_sale}
      onClick={handleClick && handleClick}
      type={type}
    >
      {children}
    </button>
  );
};
