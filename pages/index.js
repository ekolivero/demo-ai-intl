import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import Code from "../components/Code";
import PageLayout from "../components/PageLayout";

export default function Index() {
  const t = useTranslations("Index");
  const { locale } = useRouter();

  return (
    <PageLayout title={t("title", { project: "AI-Intl" })}>
      <p className="mt-5">
        {t("description", {
          locale,
          code: (children) => <Code>{children}</Code>,
        })}
      </p>
      <p className="mt-5">
        {t("downloads", {
          downloads: 1000,
        })}
      </p>
      <p className="mt-5">{t("about")}</p>
      <p className="mt-5">{t("interpolation")}</p>
      <p className="mt-5">
        {t("use", {
          locale,
          code: (children) => <Code>{children}</Code>,
        })}
      </p>
      <p className="mt-5">
        {t("useAiIntl", {
          locale,
          code: (children) => <Code>{children}</Code>,
        })}
      </p>
      <p className="mt-5">
        {t("result")}
        <span> 🤩 </span>
      </p>
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
