import React, { FC } from "react";
import styles from "./Text.module.css";

type TextProps = {
  children: React.ReactNode;
  variant?: "jumboTitle" | "jumboSubTitle" | "title" | "subTitle";
  color?: "black" | "white" | "disable";
};

type CustomStyle = {
  [key: string]: string;
};

const VARIANT: CustomStyle = {
  jumboTitle: styles.jumboTitle,
  jumboSubTitle: styles.jumboSubTitle,
  title: styles.title,
  subTitle: styles.subTitle,
};

const COLOR: CustomStyle = {
  black: "text-black",
  white: "text-white",
  disable: "text-black/70",
};

export const Text: FC<TextProps> = ({
  children,
  variant = "jumboTitle",
  color = "black",
}) => {
  return <h1 className={`${VARIANT[variant]} ${COLOR[color]}`}>{children}</h1>;
};
