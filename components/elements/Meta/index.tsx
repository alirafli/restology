import Head from "next/head";
import { FC } from "react";

type HeaderProps = {
  subTitle: string;
};

export const Meta: FC<HeaderProps> = ({ subTitle }) => {
  const metaData = {
    description:
      "Waiting too long? Order your table and food faster and more conveniently!",
    keywords: "Restaurant, Serve, Food, Hungry",
  };
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={metaData.keywords} />
      <meta name="description" content={metaData.description} />
      <meta charSet="utf-8" />
      <link
        rel="icon"
        href="favicon/favicon.svg"
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="icon"
        href="favicon/favicon_dark.svg"
        media="(prefers-color-scheme: light)"
      />
      <title>Restology | {subTitle}</title>
    </Head>
  );
};

Meta.defaultProps = {
  subTitle: "...",
};
