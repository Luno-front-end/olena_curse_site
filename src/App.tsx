import React from "react";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { WhoCourseFor } from "./components/SectionWhoCourseFor/WhoCourseFor";
import { AfterCourse } from "./components/SectionAfterСourse/AfterCourse";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhoCourseFor />
        <AfterCourse />
      </main>
    </>
  );
}

export default App;
