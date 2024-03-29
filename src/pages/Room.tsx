/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import ThreeDScene from "../components/ThreeScene";

const Room = (): JSX.Element => {
  const { roomName } = useParams();
  const liveRoomRef = useRef<HTMLDivElement>(null);

  const liveRoom = async (element: HTMLDivElement | null) => {
    if (element) {
      const appID = parseInt(import.meta.env.VITE_APP_ID);
      const serverSecret = import.meta.env.VITE_SERVER_SECRET;
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomName as string,
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
