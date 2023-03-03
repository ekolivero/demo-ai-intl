import Navigation from "./Navigation";

export default function PageLayout({ children, title }) {
  return (
    <div className="flex flex-col p-10 m-auto gap-10">
      <Navigation />
      <div className="gap-10 flex justify-center flex-col">
        <h1 className="text-6xl text-black font-bold text-center">{title}</h1>
        {children}
      </div>
    </div>
  );
}
