import React, { FC, ReactNode } from "react";

import s from "./customLink.module.scss";

interface ICustomLinkProps {
  children: ReactNode;
  id: string;
  customClass?: string;
}

export const CustomLink: FC<ICustomLinkProps> = ({
  children,
  id = "#id",
  customClass,
}) => {
  return (
    <a href={id} className={customClass ? customClass : s.link_sale}>
      {children}
    </a>
  );
};
