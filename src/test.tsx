// src/components/Greeting.tsx
import React from "react";

interface GreetingProps {
  name: string;
  fullname: string;
}

const Greeting: React.FC<GreetingProps> = ({ name, fullname }) => {
  return (
    <h1>
      Hello, {name} {fullname}!
    </h1>
  );
};

export default Greeting;
