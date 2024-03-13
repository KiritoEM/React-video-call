import Navbar from "../components/Navbar";
import ThreeDScene from "../components/ThreeScene";

const JoinRoom = () => {
  return (
    <section
      id="join-room"
      className="space-warp bg-stone-950 w-full h-screen overflow-hidden"
    >
      <ThreeDScene />
      <Navbar />
    </section>
  );
};

export default JoinRoom;
