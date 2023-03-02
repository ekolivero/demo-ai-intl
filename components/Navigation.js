import { useRouter } from "next/router";
import { useState } from "react";

export default function Navigation() {
  const router = useRouter();

  const { locale, locales } = router;

  const [currentLocale, setCurrentLocale] = useState(() => locale);

  const setNewLocale = (e) => {
    setCurrentLocale(e.target.value);
    router.push("/", undefined, { locale: e.target.value });
  };

  return (
    <div className="focus-within-ring flex items-stretch rounded border border-secondary text-primary shadow-sm h-8 bg-gray-100">
      <label className="mb-0 flex select-none items-center space-x-1 whitespace-nowrap border-secondary bg-secondary px-1.5 font-medium rounded-l rounded-r-none border-r">
        <span className="text-sm">Language</span>
      </label>
      <select
        className="focus-ring inline-block rounded border border-secondary bg-primary py-0  pr-4 shadow-sm h-full w-full border-t-0 border-l-0 border-b-0 pl-2 !ring-0 border-r-0"
        onChange={setNewLocale}
        defaultValue={currentLocale}
      >
        {locales?.map((locale) => (
          <option key={locale} value={locale}>
            {locale}
          </option>
        ))}
      </select>
    </div>
  );
}
