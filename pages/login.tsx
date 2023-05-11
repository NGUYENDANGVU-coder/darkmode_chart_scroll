import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config.js";


export default function login() {
  const { locale } = useRouter();
  const { t } = useTranslation('login');
  return (
    <div>
      login
      <h1>{locale}</h1>
      <p>{t("hello")}</p>
      <p>{t("age")}</p>
      <Link href="/">Home</Link>
    </div>
  );
}

export async function getStaticProps({ locale }:any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'login'
      ])),
      // Will be passed to the page component as props
    },
  }
}
