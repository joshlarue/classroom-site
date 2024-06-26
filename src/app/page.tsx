import Contact from "./components/Contact";
import Header from "./components/Header";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full flex">
        <Posts />
        <Contact />
      </div>
    </>
  );
}