import React from "react";

function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer (Intern → Probation )",
      company: "Mezenga Holidays Pvt. Ltd.",
      duration: "Feb 2025 – July 2025",
      description:
        "Started as a MERN stack development intern and was extended into a probation period due to strong performance. Contributed to core features of the company's travel platform, handled front-end and back-end tasks, integrated APIs, and resolved real-time production bugs.",
    },
    {
        role: "Solo Developer",
        company: "WhatsApp Web Clone",
        duration: "Aug 2025 – Aug 2025",
        description:
        "WhatsApp Web Clone is a real-time chat application that replicates the core features and user interface of WhatsApp Web. The project allows users to send and receive instant messages, and update statuses in a responsive, web-based environment. ",
    },
    {
        role: "Full Stack Developer (Academic Project)",
        company: "Smart Invoice",
        duration: "Apr 2025 – Jun 2025",
        description:
        "Built a MERN stack application to generate, manage, and share digital invoices. Designed the backend logic, and developed a secure user authentication flow.",
    },
    {
      role: "Frontend Developer (Intern)",
      company: "Octanet Pvt. Ltd.",
      duration: "July 2023 - August 2023",
      description:
        "Worked on backend logic using Node.js and Express, collaborated on invoice automation features for internal tools, and ensured smooth integration with MongoDB.",
    },
  ];

  return (
    <div id="experience" className="w-full mt-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Experience</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-xl font-semibold">{exp.role}</h2>
            <p className="text-sm text-gray-600 font-semibold">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
            <p className="text-[15px] text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
