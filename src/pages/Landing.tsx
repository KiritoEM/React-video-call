import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ThreeScene from "../components/ThreeScene";

const Landing = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <section
      id="landing"
      className="bg-stone-950 w-full h-screen overflow-hidden space-warp"
    >
      <ThreeScene />
      <Navbar />
      <section
        id="landing__container"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50  px-2 md:px-4 h-auto overflow-hidden w-full md:w-2/3 lg:w-1/2 flex flex-col gap-5 md:gap-7"
      >
        <div className="title">
          <h1 className="text-white font-bold text-2xl text-center md:text-3xl">
            Votre nouvelle <span className="text-green-400">application</span>{" "}
            de vidéoConférence
          </h1>
        </div>
        <div className="text">
          <p className="text-white text-center">
            {" "}
            Application de vidéo-conférence basé sur ZegoCloud
          </p>
        </div>
        <div className="button flex flex-row justify-center">
          <button
            className="text-white flex items-center gap-1.5 border-2 border-green-400 rounded-xl px-4 py-2.5 hover:bg-green-400 bg-stone-900 text-sm"
            onClick={() => navigate("/join-room")}
          >
            Rejoindre un room{" "}
            <img src="/chevron-right.png" alt="" style={{ width: "14px" }} />
          </button>
        </div>
      </section>
    </section>
  );
};

export default Landing;
