"use client";

import { useEffect, useRef } from 'react';

const TagCloudComponent = () => {
    const tagCloudRef = useRef(null);

    useEffect(() => {
      import("./tagcloud").then((TagCloud) => {
        if (tagCloudRef.current) {
          const texts = [
            "JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "Go", "Swift", "Kotlin",
            "Dart", "PHP", "Rust", "React", "Next.js", "Vue.js", "Angular", "Svelte",
            "Node.js", "Express", "NestJS", "Spring Boot", "Flutter", "Laravel", "Django",
            "FastAPI", "GraphQL", "TailwindCSS", "Bootstrap"
          ];
  
          const options = {
            radius: 200,
            maxSpeed: "fast",
            initSpeed: "fast",
            direction: 135,
            keep: true,
          };
  
          TagCloud.default(tagCloudRef.current, texts, options);
        }
      }).catch((err) => console.error("Failed to load TagCloud:", err));
    }, []);
  
    return (
      <div className="flex justify-center items-center h-screen">
        <span ref={tagCloudRef} className="text-blue-500 text-lg font-bold"></span>
      </div>
    );
}

export default TagCloudComponent