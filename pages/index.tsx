import dynamic from "next/dynamic";
import Navigation from "../components/Navigation";
import Greetings from "../containers/Greetings";
const Skills = dynamic(() => import("../containers/Skills"), { ssr: false });
const Projects = dynamic(() => import("../containers/Projects"), { ssr: false });
import Proficiency from "../containers/Proficiency";
import Education from "../containers/Education";
import Experience from "../containers/Experience";
import Feedbacks from "../containers/Feedbacks";
import GithubProfileCard from "../components/GithubProfileCard";
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import { GithubUserType } from "../types";

export default function Home({ githubProfileData }: { githubProfileData: any }) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Projects />
      <Feedbacks />
      <GithubProfileCard {...githubProfileData} />
    </div>
  );
}

export async function getStaticProps() {
  const githubProfileData: GithubUserType = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
