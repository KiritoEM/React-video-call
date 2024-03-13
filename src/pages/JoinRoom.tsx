import Navbar from "../components/Navbar";
import ThreeDScene from "../components/ThreeScene";

const JoinRoom = () => {
  return (
    <section
      id="join-room"
      className="space-warp bg-stone-950 w-full h-screen overflow-hidden"
    >
      <ThreeDScene />
      <Navbar />{" "}
      <section
        id="join-room__container"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50  px-2 md:px-4 h-auto overflow-hidden w-full md:w-1/2 flex flex-col gap-5 md:gap-7"
      >
        <div className="title">
          <h1 className="text-white font-semibold text-xl text-center md:text-2xl">
            Entrez un nom de <span className="text-green-400">room</span>
          </h1>
        </div>
        <div className="text">
          <p className="text-white text-center">
            {" "}
            Entrez le même nom de room que vos proches pour commencer un appel
            vidéo
          </p>
        </div>
        <div className="input-btn flex gap-3 justify-center w-full">
          {" "}
          <div className="input flex justify-center">
            <input
              type="text"
              className="rounded-xl h-10 bg-stone-700 p-4 text-sm"
              placeholder="Nom de room"
            />
          </div>
          <div className="button flex flex-row justify-center">
            <button className="text-white flex items-center gap-1.5 border-2 border-green-400 rounded-xl px-4 py-2 hover:bg-green-400 bg-stone-900 text-sm">
              Rejoindre{" "}
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default JoinRoom;
