import Navigation from "./Navigation";

export default function PageLayout({ children, title }) {
  return (
    <div className="flex flex-col p-10 max-w-md m-auto">
      <Navigation />
      <div className="mt-10 flex justify-center flex-col">
        <a
          href="google.com"
          className="text-sky-500 text-2xl hover:cursor-pointer flex justify-center text-center mb-2"
        >
          {title}
        </a>
        {children}
      </div>
    </div>
  );
}
