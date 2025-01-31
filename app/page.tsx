import Hero from "@/components/Hero";

const Home = () => {
  return (
    <main className="relative bg-black flex flex-col overflow-y-auto min-h-screen w-full">
      <div className="flex-1 flex justify-center items-center px-5 sm:px-10">
        <Hero />
      </div>
    </main>
  );
};

export default Home;
