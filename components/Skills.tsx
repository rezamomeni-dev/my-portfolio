import React from 'react';

const Skills = () => {
  const skills = [
    "React.js", "Next.js", "Vue.js", "Clean Architecture", "Angular", "ASP.NET Core",
    "ASP.NET MVC", "Webpack", "Redux Toolkit", "jQuery", "SCSS", "Material UI",
    "Ant Design", "Leaflet", "Mapbox", "C#", "CSS", "HTML", "SQL Server", "Git",
    "Gitflow", "Agile", "Websocket", "Sentry", "SOLID Principles", "Kanban"
  ];

  return (
    <section className="mb-8">
      <h3 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
