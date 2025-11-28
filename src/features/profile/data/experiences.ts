import { spring } from "motion/react";

import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "self-employment",
    companyName: "Self Employed",
    companyLogo: "https://cdn-icons-png.flaticon.com/512/6232/6232164.png",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Aspiring SDE/DevOps Engineer",
        employmentPeriod: {
          start: "12.2024",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developing Java applications with focus on backend development using Spring Boot.
- Implement DevOps practices to streamline development and deployment processes.
- Utilize cloud services such as AWS and Azure for scalable application hosting.
- Engage in continuous learning to stay updated with the latest technologies and best practices.`,
        skills: [
          "OOP's",
          "Java",
          "Spring Boot",
          "Automation",
          "DevOps",
          "Jenkins",
          "Docker",
          "Kubernetes",
          "AWS",
          "Terraform",
          "Ansible",
          "Problem-solving",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  //   {
  //     id: "concentrix-catalyst",
  //     companyName: "Concentrix Catalyst",
  //     companyLogo: "https://media.licdn.com/dms/image/v2/D4E0BAQGF8Xie7bO-sw/company-logo_200_200/company-logo_200_200/0/1713811691547/concentrix_catalyst_logo?e=2147483647&v=beta&t=J2r76S1DUbSdWyJ4FiwidoU-ba30AwvJ85HVU3X3GFs",
  //     positions: [
  //       {
  //         id: "d3f5e8c4-5f4b-4c2e-9f4a-8b6d7e9c8a1b",
  //         title: "Software Engineer",
  //         employmentPeriod: {
  //           start: "06.2023",
  //           end: "11.2024",
  //         },
  //         employmentType: "Full-time",
  //         icon: "code",
  //         description: `- Developed and maintained web applications using Java and Spring Boot, enhancing functionality and user experience.
  // - Collaborated with cross-functional teams to design and implement new features, ensuring alignment with business goals.
  // - Participated in code reviews and contributed to improving code quality and performance.
  // - Assisted in the deployment and monitoring of applications on cloud platforms, ensuring high availability and scalability.`,
  //         skills: [
  //           "Java",
  //           "Spring Boot",
  //           "RESTful APIs",
  //           "SQL",
  //           "Git",
  //           "Agile Methodologies",
  //           "Team Collaboration",
  //           "Problem-solving",
  //         ],
  //         isExpanded: false,
  //       },
  //     ],
  //     isCurrentEmployer: false,
  //   },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "Vardhaman College of Engineering — Hyderabad",
        employmentPeriod: {
          start: "11.2021",
          end: "05.2025",
        },
        icon: "education",
        description: `- Student of the Computer Science Program.
- CGPA: 8.31/10
- Relevant Coursework: Data Structures and Algorithms, Database Management Systems, Machine Learning, Deep Learning, Computer Networks, Operating Systems, Software Engineering.
- Participated in Data Analtics Workshop. 
  - Memeber of the Gaming Club, secured 2st place in college-level gaming competition.
  - Football team member representing the college in various tournaments.`,
        skills: [
          "Java",
          "Python",
          "Data Structures",
          "Algorithms",
          "Database Systems",
          "Machine Learning",
          "Deep Learning",
          "Computer Networks",
          "Operating Systems",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "St. Mary's Junior College",
        employmentPeriod: {
          start: "06.2019",
          end: "05.2021",
        },
        icon: "education",
        description: `- I did my Intermediate in MPC (Maths, Physics, and Chemistry) in junior college and simultaneously prepared for engineering entrance exams like JEE and EAMCET. `,
        skills: [
          "Maths",
          "Physics",
          "Chemistry",
          "Problem-solving",
          "Self-learning",
          "JEE",
          "EAMCET",
        ],
      },
      {
        id: "36c4c6fb-02d0-48c0-8947-fda6e9a24af7",
        title: "St. Mark's Boys Town High School",
        employmentPeriod: {
          start: "04.2010",
          end: "05.2019",
        },
        icon: "education",
        description: `- Secured Rank 2 from 2nd to 7th standard, maintaining consistent academic excellence.
- Selected as the House Captain, demonstrating leadership and responsibility.
  - Won multiple drawing competitions, showcasing creativity and talent.
  - Active member of the Spoken English Club, improving communication and public-speaking skills.`,
        skills: [
          "English",
          "Leadership",
          "Creativity",
          "Public Speaking",
          "Time Management",
          "Discipline",
        ],
      },
    ],
  },
];
