import React from "react";
import {
  CameraGesture,
  CamerIdentification,
  FlexSensor,
  Gyroscope,
  Speaker,
  Ultrasonic,
} from "@/components";

export default function App() {
  return (
    <main className="flex flex-col gap-y-20 items-center justify-center min-h-screen">
      <h1 className="text-center capitalize text-6xl">Sign language system</h1>
      <div className="grid grid-cols-3 grid-flow-row gap-8">
        <CameraGesture />
        <CamerIdentification />
        <FlexSensor />
        <Gyroscope />
        <Speaker />
        <Ultrasonic />
      </div>
    </main>
  );
}
