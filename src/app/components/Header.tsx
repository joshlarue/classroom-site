export default function Header() {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="w-full h-[2vh] bg-[#FFC759]"></div>
        <div className="flex flex-col p-[3vh] justify-center items-center w-full bg-[#3D485F]">
          <h2 className="text-2xl text-[#D7DFFF] text-center">Mrs. LaRue's</h2>
          <h1 className="text-6xl font-bold text-[#FF7B9C] mt-1">Class 5B</h1>
        </div>
      </div>
    </>
  );
}