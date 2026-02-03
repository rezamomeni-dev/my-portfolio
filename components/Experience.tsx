import React from 'react';

const Experience = () => {
  return (
    <section className="mb-8">
      <h3 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">Experience</h3>

      <div className="mb-6">
        <h4 className="text-xl font-semibold text-black dark:text-zinc-50">Today, Isfahan— Senior Front-End Developer</h4>
        <p className="text-zinc-600 dark:text-zinc-400">Apr 2023 - PRESENT</p>
        <p className="text-zinc-700 dark:text-zinc-300 mt-2">
          Overhauled AI-driven messaging, calendar, and planning tools that streamlined workflows, reducing time-to-decision by 40% for key technical initiatives, and increased project launch velocity.
        </p>
        <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 ml-4 mt-2">
          <li>Championed professional development initiatives for a team comprising more than 20 software engineers, directly contributing to three successful project launches ahead of schedule through strategic coaching sessions focused on essential technologies.</li>
          <li>Deployed micro-frontends, integrated the today-kit package, and streamlined workflows for 40+ engineers.</li>
          <li>Established 20+ CI/CD pipelines and Dockerized applications, optimizing deployment efficiency.</li>
          <li>Conducted code reviews to ensure best practices and high-quality delivery.</li>
          <li>Spearheaded development of enterprise messaging platform, integrating real-time chat and ticketing; decreased internal email volume by 60% and accelerated project turnaround time by 35% within six months of launch.</li>
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-black dark:text-zinc-50">Kasra, Isfahan— Front-End Developer</h4>
        <p className="text-zinc-600 dark:text-zinc-400">Apr 2018 - May 2023 (5+ years)</p>
        <p className="text-zinc-700 dark:text-zinc-300 mt-2">
          Kasra, a leading provider of workforce management solutions, serves 3,000+ clients and leverages 24 years of expertise to deliver innovative software.
        </p>
        <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 ml-4 mt-2">
          <li>Engineered 10+ responsive web applications and admin dashboards using React/Redux and Angular, incorporating 100+ reusable components alongside valuable development tools like plugins, mixins, and directives.</li>
          <li>Spearheaded improvements in development, code review, release, and bug-fixing methodologies within the team, leveraging Scrum/agile best practices for over 1000+ hours.</li>
          <li>Engineered enhancements to the GEO-fence Module for the Attendance Application, implementing intricate map customizations using Leaflet and Google Maps, resulting in a 30% increase in user engagement for location-based features.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
