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
    <div className="flex justify-end">
      <div className="flex items-stretch rounded text-primary shadow-sm h-10 bg-black text-white w-48">
        <label className="p-4 mb-0 flex select-none items-center space-x-10 whitespace-nowrap border-secondary bg-secondary px-1.5 font-medium">
          <span className="text-sm">Language</span>
        </label>
        <select
          className="focus-ring inline-block bg-primary py-0 pl-5 pr-4 shadow-sm h-full w-full text-black outline-none"
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
    </div>
  );
}
