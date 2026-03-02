import type { ContentGroup } from "./ContentGroup";

export const contentData: ContentGroup[] = [
  {
    title: "Education",
    items: [
      {
        title: "MSc (Tech) in Computer Engineering",
        place:
          "Åbo Akademi University (Expected graduation 2027) Graz University of Technology, Exchange year (09.2025 - 06.2026)",
        date: "2025 -",
      },
      {
        title: "BSc (Tech) in Computer Engineering (4.14 / 5 GPA)",
        place: "Åbo Akademi University",
        date: "2022 - 2025",
      },
      {
        title: "ICT vocational degree & matriculation degree (2.96 / 3 GPA)",
        place: "Vamia",
        date: "2017 - 2022",
      },
    ],
  },

  {
    title: "Work Experience",
    items: [
      {
        title: "Software Engineering Trainee",
        place: "Wärtsilä, Vaasa",
        description:
          "Worked full time during summer and part-time during studies.",
        date: "05.2024 - 08.2025",
      },
      {
        title: "Frontend Web Developer",
        place: "Creamarketing, Vaasa",
        description:
          "Worked full time during summer and part-time during studies.",
        date: "04.2020 - 05.2024",
      },
    ],
  },
  {
    title: "Experience",
    items: [
      {
        title: "Vice-chairman",
        place: "Datateknologerna vid Åbo Akademi rf",
        description: "Computer Engineering student association.",
        date: "01.2024 - 12.2024",
      },
      {
        title: "Vice-chairman",
        place: "Infå vid Åbo Akademi r.f.",
        description: "Computer Science student association.",
        date: "01.2023 - 12.2023",
      },
      {
        title: "Finnish Defence Forces, Conscript Sergeant",
        description: "Served in the Finnish Defence Forces.",
        date: "01.2021 - 12.2021",
      },
    ],
  },
  {
    title: "Technical Skills",
    items: [
      { title: "Frontend", description: "HTML, CSS, TypeScript" },
      { title: "Backend", description: "Java, PHP, Python" },
      {
        title: "Tools & Systems",
        description:
          "Git, Docker, Linux, Atlassian tools (e.g. Bitbucket, Jira...), Agile frameworks, SilverStripe CMS",
      },
    ],
  },
];
