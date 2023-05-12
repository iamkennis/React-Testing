import React from "react";
import { SkillsProps } from "./skills.types";

export default function Skill(props: SkillsProps) {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

React.useEffect(() => {
    setTimeout(() => {
    setIsLoggedIn(true)
    },2000)
},[])


  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
}
