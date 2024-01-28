import React from "react";
import { Hero } from "./components/Hero/Hero";
import { WhoCourseFor } from "./components/SectionWhoCourseFor/WhoCourseFor";
import { AfterCourse } from "./components/SectionAfterCourse/AfterCourse";
import { ActionTimer } from "./components/SectionActionTimer/ActionTimer";
import { CoursePricedLow } from "./components/SectionCoursePricedLow/CoursePricedLow";
import { ExtendedGuarantee } from "./components/SectionExtendedGuarantee/ExtendedGuarantee";
import { HowTraining } from "./components/SectionHowTraining/HowTraining";
import { Program } from "./components/SectionProgramm/Program";
import { AuthorCourse } from "./components/SectionAuthorCourse/AuthorCourse";
import { AnswersToQuestions } from "./components/SectionAnswersToQuestions/AnswersToQuestions";
import { Reviews } from "./components/SectionReviews/Reviews";

function App() {
  return (
    <>
      <main>
        <Hero />
        <WhoCourseFor />
        <AfterCourse />
        <ActionTimer />
        <CoursePricedLow />
        <ExtendedGuarantee />
        <HowTraining />
        <Program />
        <ActionTimer />
        <AuthorCourse />
        <AnswersToQuestions />
        <Reviews />
        <ActionTimer />
      </main>
    </>
  );
}

export default App;
