import NavBar from "../Layout/NavBar";
import SideBar from "../Layout/SideBar";

const HomePage = () => {
  return (
    <>
      <section className="w-full h-screen flex">
        <div className="w-16 h-screen border-r border-r-gray-300">
          <SideBar />
        </div>

        <div className="w-full h-screen px-4 py-2">
          <NavBar />
           <section className="px-10 flex flex-col items-center justify-center mt-12 mx-auto">
              <HeroSection />
              <Gallery />
          </section>


        </div>
      </section>
    </>
  );
};

export default HomePage;
