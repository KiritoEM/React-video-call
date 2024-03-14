import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import ThreeDScene from "../components/ThreeScene";

const Room = (): JSX.Element => {
  const { roomName } = useParams();
  const liveRoomRef = useRef<HTMLDivElement>(null);

  const logTitle = () => {
    if (liveRoomRef.current) {
      console.log("Live room title:", liveRoomRef.current);
      const innerDivs = liveRoomRef.current.querySelectorAll("div");
      console.log(innerDivs);
    }
  };

  const liveRoom = async (element: HTMLDivElement | null) => {
    if (element) {
      const appID = 1693363613;
      const serverSecret = "ce96da9a664a2b944a439e1e05cbc310";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomName,
        Date.now().toString(),
        "johan"
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
      });
    }
  };

  useEffect(() => {
    liveRoom(liveRoomRef.current);
    logTitle();
  }, []);

  return (
    <section
      id="room"
      className="space-warp bg-stone-950 overflow-hidden w-full h-screen"
    >
      <ThreeDScene />
      <section id="room__container" className="w-full flex items-center">
        <div ref={liveRoomRef} className="relative z-50 w-full h-screen"></div>
      </section>
    </section>
  );
};

export default Room;
