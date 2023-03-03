import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import PageLayout from "../components/PageLayout";
import Link from "next/link";

export default function Index() {
  const t = useTranslations("Index");
  const { locale } = useRouter();

  return (
    <PageLayout title={t("title", { project: "AI-Intl" })}>
      <div className="text-gray-500 font-sans text-2xl text-center flex flex-col gap-5">
        <p>{t("description")}</p>
      </div>
      <Link href="www.google.com" className="w-64 m-auto">
        <button className="bg-black text-white py-2 px-4 rounded inline-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
          <span className="ml-4">{t("button", { project: "AI-Intl" })}</span>
        </button>
      </Link>
    </PageLayout>
  );
}

export function getStaticProps({ locale }) {
  let translations;

  try {
    translations = require(`../messages/index/${locale}.json`);
  } catch (err) {
    translations = require(`../messages/index/en-US.json`);
  }

  return {
    props: {
      messages: {
        ...translations,
      },
    },
  };
}
