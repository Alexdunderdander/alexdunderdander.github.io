import type { ContentGroup } from "./ContentGroup";
import aboAkademiLogo from "@/assets/content-images/AboAkademi-logo.png";
import tuGrazLogo from "@/assets/content-images/TU_Graz_Logo.svg";
import vamiaLogo from "@/assets/content-images/vamia_logo.webp";
import wartsilaLogo from "@/assets/content-images/Wartsila_logo.png";
import cremarketingLogo from "@/assets/content-images/Creamarketing_logo.jpg";

const contentData: ContentGroup[] = [
  {
    title: "Education",
    items: [
      {
        title: "MSc (Tech) in Computer Engineering",
        place:
          "Åbo Akademi University (Expected graduation 2027)\n Graz University of Technology, Exchange year (09.2025 - 06.2026)",
        date: "2025 - Present",
        grade: "GPA: 4.62 / 5",
        description:
          "Participating in the Erasmus exchange program at Graz University of Technology in Austria, focusing on Computational Neuroscience.",
        imageUrl: [aboAkademiLogo, tuGrazLogo],
      },
      {
        title: "BSc (Tech) in Computer Engineering",
        place: "Åbo Akademi University",
        date: "2022 - 2025",
        grade: "GPA: 4.14 / 5\n Bachelor's thesis grade: 5 / 5",
        description:
          'Bachelor\'s thesis subject: "Evaluation of a Commercial Edge Computing Solution for Collecting and Monitoring Engine Data"\n\nSocieties:\n 2023 - 2024: Vice chairman of the computer engineering student association Datateknologerna vid Åbo Akademi rf\n 2022 - 2023: Vice chairman of the computer science student association Infå vid Åbo Akademi r.f.',
        imageUrl: [aboAkademiLogo],
      },
      {
        title: "ICT Vocational Degree & Matriculation Degree",
        place: "Vamia & Vasa Gymnasium",
        date: "2017 - 2020",
        grade: "GPA: 2.96 / 3",
        imageUrl: [vamiaLogo],
      },
    ],
  },

  {
    title: "Experience",
    items: [
      {
        title: "Software Engineering Trainee",
        place: "Wärtsilä, Vaasa",
        description:
          "Contributed to the development of an application for monitoring engine data. Learnt large-scale software development, collaborating with multiple teams incorporating Scrum. Used mainly Typescript and Java for development. I was also familiarized with common software technologies like Docker, API, Edge Computing etc. and wrote my bachelor's thesis about an edge computing solution for Wärtsilä engines. Worked full-time during summers and part-time during studies.",
        date: "05.2024 - 08.2025",
        imageUrl: [wartsilaLogo],
      },
      {
        title: "Frontend Web Developer",
        place: "Creamarketing, Vaasa",
        description:
          "Focused on developing and maintaining customer websites including eCommerce websites. The development was carried out using SilverStripe as CMS, along with HTML, CSS, JavaScript, and PHP. Worked full-time during summers and   part-time during studies.",
        date: "04.2020 - 05.2024",
        imageUrl: [cremarketingLogo],
      },
      {
        title: "Finnish Defence Forces",
        place: "Nyland Brigade, Dragsvik",
        date: "01.2021 - 12.2021",
        grade: "Sergeant",
        description:
          "Served as a coastal jaeger during my mandatory military service in the Finnish Navy. The first half year was basic training and leadership training. The second half year consisted of leading and teaching new recruits, acting as vice-platoon leader.",
      },
    ],
  },

  // {
  //   title: "Volunteering",
  //   items: [
  //     {
  //       title: "Vice-chairman",
  //       place: "Datateknologerna vid Åbo Akademi rf",
  //       description: "Computer Engineering student association.",
  //       date: "01.2024 - 12.2024",
  //     },
  //     {
  //       title: "Vice-chairman",
  //       place: "Infå vid Åbo Akademi r.f.",
  //       description: "Computer Science student association.",
  //       date: "01.2023 - 12.2023",
  //     },
  //   ],
  // },

  // {
  //   title: "Technical Skills",
  //   items: [
  //     { title: "Frontend", description: "React, TypeScript, HTML, CSS" },
  //     { title: "Backend", description: "Java, PHP, Python" },
  //     {
  //       title: "Tools & Systems",
  //       description:
  //         "Git, Docker, Linux, Atlassian tools (e.g. Bitbucket, Jira...), Agile frameworks, SilverStripe CMS",
  //     },
  //   ],
  // },
];

export default contentData;
