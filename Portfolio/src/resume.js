import React from "react";

export default function Resume() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-8 font-sans">
      <style>
        {`
          @media print {
            @page { margin: 0; }
            body { margin: 0; }
            .print-hidden { display: none !important; }
          }
        `}
      </style>

      <button
        onClick={() => window.print()}
        className="mb-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors print-hidden"
      >
        Download PDF
      </button>

      {/* A4 Paper Container */}
      <div className="bg-white text-gray-800 w-[210mm] min-h-[297mm] shadow-2xl p-6 text-[14px] leading-normal relative print:shadow-none print:w-full print:h-auto print:p-0">
        {/* Header */}
        <header className="flex justify-between items-start mb-4 border-b-2 border-gray-300 pb-2">
          <div>
            <h1 className="text-4xl font-bold text-blue-800 mb-1">
              Aishwarya Arya
            </h1>
            <div className="text-gray-700 font-medium">
              <p>
                LinkedIn:{" "}
                <a
                  href="https://linkedin.com/in/aishwarya00"
                  className="text-blue-600 hover:underline"
                >
                  aishwarya00
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a
                  href="https://github.com/Aishwarya-Arya05"
                  className="text-blue-600 hover:underline"
                >
                  Aishwarya-Arya05
                </a>
              </p>
            </div>
          </div>
          <div className="text-right text-gray-700 font-medium">
            <p>
              Email:{" "}
              <a
                href="mailto:aisharya05@gmail.com"
                className="text-blue-600 hover:underline"
              >
                aisharya05@gmail.com
              </a>
            </p>
            <p>Mobile: +91-6204439707</p>
          </div>
        </header>

        {/* Skills */}
        <section className="mb-4">
          <h2 className="text-blue-800 font-bold text-lg uppercase border-b border-gray-300 mb-2 tracking-wide">
            Skills
          </h2>
          <ul className="space-y-1">
            <li>
              <span className="font-bold text-blue-900">Languages:</span> C++,
              JavaScript, Python, Java, C, PHP
            </li>
            <li>
              <span className="font-bold text-blue-900">Frontend:</span> React,
              Tailwind CSS, HTML, CSS, Bootstrap
            </li>
            <li>
              <span className="font-bold text-blue-900">Backend:</span> Node.js,
              Express.js, PHP
            </li>
            <li>
              <span className="font-bold text-blue-900">Databases:</span> MySQL,
              MongoDB, PostgreSQL
            </li>
            <li>
              <span className="font-bold text-blue-900">DevOps:</span> Docker,
              Kubernetes, Jenkins, GitHub Actions, AWS, Linux
            </li>
            <li>
              <span className="font-bold text-blue-900">Tools:</span> Git,
              GitHub, VS Code, XAMPP
            </li>
            <li>
              <span className="font-bold text-blue-900">Soft Skills:</span>{" "}
              Adaptable, Problem Solving, Teamwork, Communication
            </li>
          </ul>
        </section>

        {/* Projects */}
        <section className="mb-4">
          <h2 className="text-blue-800 font-bold text-lg uppercase border-b border-gray-300 mb-2 tracking-wide">
            Projects
          </h2>

          <div className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-blue-900 text-sm">
                InternMatch{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  | GitHub
                </a>
              </h3>
              <span className="text-gray-600 font-medium text-sm">
                Oct 2025 - Dec 2025
              </span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700">
              <li>
                Built a full-stack MERN internship web application enabling
                students to discover and apply for internships while recruiters
                efficiently manage candidates.
              </li>
              <li>
                Implemented JWT authentication, role-based dashboards, secure CV
                uploads using Multer, and encrypted credentials with Bcrypt.
              </li>
              <li>
                Developed RESTful APIs for internship postings and applications.
              </li>
              <li>
                <span className="font-bold text-black">Tech Stack:</span>{" "}
                MongoDB, Express.js, React.js, Node.js, JWT, Bcrypt, REST APIs
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-blue-900 text-sm">
                Automated Climate Monitoring for Smart Agriculture{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  | GitHub
                </a>
              </h3>
              <span className="text-gray-600 font-medium text-sm">
                Apr 2025
              </span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700">
              <li>
                Built an IoT dashboard for real-time climate monitoring using
                sensor data.
              </li>
              <li>Developed a PHP backend to fetch and display live data.</li>
              <li>
                Delivered centralized climate insights to support smarter
                agricultural decisions.
              </li>
              <li>
                <span className="font-bold text-black">Tech Stack:</span> HTML,
                Tailwind CSS, JavaScript, MySQL, PHP, XAMPP
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-blue-900 text-[15px]">
                Page Replacement Simulator{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  | GitHub
                </a>
              </h3>
              <span className="text-gray-600 font-medium text-sm">
                Mar 2025 - Apr 2025
              </span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700">
              <li>
                Designed a simulator comparing FIFO and LRU algorithms with
                AI-based suggestions.
              </li>
              <li>Displayed real-time hits, faults, and frame allocation.</li>
              <li>
                Enabled interactive visualization for algorithm comparison.
              </li>
              <li>
                <span className="font-bold text-black">Tech Stack:</span> HTML,
                CSS, JavaScript, AI Integration
              </li>
            </ul>
          </div>
        </section>

        {/* Training */}
        <section className="mb-4">
          <h2 className="text-blue-800 font-bold text-lg uppercase border-b border-gray-300 mb-2 tracking-wide">
            Training
          </h2>
          <div className="mb-2">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-blue-900 text-sm">
                C++ Programming: OOPS and DSA |{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Certificate
                </a>
              </h3>
              <span className="text-gray-600 font-medium text-sm">
                Jun 2025 - Jul 2025
              </span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700">
              <li>
                Studied OOP concepts: classes, inheritance, abstraction,
                polymorphism, encapsulation.
              </li>
              <li>
                Practiced DSA implementation: linked lists, trees, graphs,
                recursion, sorting and searching.
              </li>
              <li>
                Improved problem-solving using complexity analysis and
                optimization techniques.
              </li>
            </ul>
          </div>
        </section>

        {/* Certificates */}
        <section className="mb-4">
          <h2 className="text-blue-800 font-bold text-lg uppercase border-b border-gray-300 mb-2 tracking-wide">
            Certificates
          </h2>
          <ul className="space-y-1">
            <li className="flex justify-between">
              <span>
                <span className="text-black">•</span> JPMorgan Chase Software
                Engineering Job Simulation
              </span>
              <span className="text-gray-600 font-medium text-sm">
                Feb 2026
              </span>
            </li>
            <li className="flex justify-between">
              <span>
                <span className="text-black">•</span> Internet of Things - NPTEL
              </span>
              <span className="text-gray-600 font-medium text-sm">
                Jul 2025 - Nov 2025
              </span>
            </li>
            <li className="flex justify-between">
              <span>
                <span className="text-black">•</span> 24-Hour Hackathon -
                InnovateX
              </span>
              <span className="text-gray-600 font-medium text-sm">
                Mar 2024
              </span>
            </li>
          </ul>
        </section>

        {/* Achievements */}
        <section className="mb-4">
          <h2 className="text-blue-800 font-bold text-lg uppercase border-b border-gray-300 mb-2 tracking-wide">
            Achievements
          </h2>
          <ul className="space-y-1">
            <li className="flex justify-between">
              <span>
                <span className="text-black">•</span> Solved 200+ DSA problems;
                achieved 1550+ LeetCode Biweekly rating and 1 Star (1461) on
                CodeChef.{" "}
              </span>
              <span className="text-gray-600 font-medium text-sm">
                Oct 2025
              </span>
            </li>
            <li className="flex justify-between">
              <span>
                <span className="text-black">•</span> Earned 3 HackerRank badges
                in C, C++, and Python.
              </span>
              <span className="text-gray-600 font-medium text-sm">
                Oct 2025
              </span>
            </li>
          </ul>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-blue-800 font-bold text-lg uppercase border-b border-gray-300 mb-2 tracking-wide">
            Education
          </h2>

          <div className="mb-3">
            <div className="flex justify-between font-bold text-blue-900">
              <h3>Lovely Professional University</h3>
              <span className="text-gray-600 font-medium text-sm text-black">
                Phagwara, Punjab
              </span>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-800">
                B.Tech in Computer Science and Engineering -{" "}
                <span className="font-bold">CGPA: 7.4</span>
              </p>
              <span className="text-gray-600 font-medium text-sm">
                Aug 2023 - Present
              </span>
            </div>
          </div>

          <div className="mb-3">
            <div className="flex justify-between font-bold text-blue-900">
              <h3>D.A.V Public School</h3>
              <span className="text-gray-600 font-medium text-sm text-black">
                Pakur, Jharkhand
              </span>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-800">
                Intermediate -{" "}
                <span className="font-bold">Percentage: 77%</span>
              </p>
              <span className="text-gray-600 font-medium text-sm">
                Apr 2021 - Mar 2023
              </span>
            </div>
          </div>

          <div>
            <div className="flex justify-between font-bold text-blue-900">
              <h3>D.A.V Public School</h3>
              <span className="text-gray-600 font-medium text-sm text-black">
                Pakur, Jharkhand
              </span>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-800">
                Matriculation -{" "}
                <span className="font-bold">Percentage: 89%</span>
              </p>
              <span className="text-gray-600 font-medium text-sm">
                Apr 2020 - Mar 2021
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
