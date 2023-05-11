import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import Explore from "./explore";
import Image from "next/image";
export default function Home() {
  const { locale, locales, asPath } = useRouter();
  const router = useRouter();
  const { i18n, t } = useTranslation("login");
  const { pathname, query } = router;
  const handleLanguageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): any => {
    const newLocale = e.target.value;
    router.push(router.asPath, router.asPath, { locale: newLocale });
  };
  return (
    <>
      <div>Home</div>
      <h1>{t("hello")}</h1>
      <h1>{t("age")}</h1>
      <div>
        {locales?.map((l, i) => {
          return (
            <span key={i} className="mr-4">
              <Link href={"login"} locale={l}>
                <button className="w-20 border">{l}</button>
              </Link>
            </span>
          );
        })}
        <br />
        <select
          className="w-20 mt-10 border"
          onChange={handleLanguageChange}
          value={i18n.language}
        >
          {locales?.map((l, i) => {
            return (
              <option key={i} value={l}>
                {l}
              </option>
            );
          })}
        </select>
        <br />
        <div className="mt-10">
          <Tippy
            placement="bottom"
            interactive
            render={(attrs) => (
              <div
                className="w-40 py-2 -mt-2 text-center shadow-xl box"
                tabIndex={-1}
                {...attrs}
              >
                {locales?.map((l, i) => {
                  return (
                    <p key={i} className="mb-4">
                      <Link href={"login"} locale={l}>
                        {l}
                      </Link>
                    </p>
                  );
                })}
              </div>
            )}
          >
            <button>
              <GlobeAltIcon className="w-10 h-10 text-gray-500" />
            </button>
          </Tippy>
        </div>
      </div>
      <Link href="explore" className="block w-32 h-12 mx-auto leading-10 text-center text-white bg-black border">Demo Scroll</Link>
    </>
  );
}
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["login"])),
      // Will be passed to the page component as props
    },
  };
}
