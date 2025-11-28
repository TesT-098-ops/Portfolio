// src/features/profile/data/awards.ts
import type { Award } from "@/features/profile/types/awards";

export const AWARDS: Award[] = [
    {
        id: "award-1",
        title: "Outstanding Portfolio",
        prize: "Portfolio Excellence Award",
        date: "2024-08-01",
        grade: "A+",
        referenceLink: "https://example.com/certificate1.pdf",
        description:
            "Recognized for building a full-stack personal portfolio showcasing DevOps, CI/CD, Cloud, and modern UI development."
    },
    {
        id: "award-2",
        title: "Best Final Year Project",
        prize: "Academic Innovation Award",
        date: "2024-05-10",
        grade: "A",
        referenceLink: "https://example.com/certificate2.pdf",
        description:
            "Awarded for the final-year project on 'Optimized Virtual Health Monitoring Framework using Edge Computing and Deep Transfer Learning'."
    },
    {
        id: "award-3",
        title: "Hackathon Runner-Up",
        prize: "2nd Prize",
        date: "2023-11-20",
        grade: "A",
        description:
            "Runner-up in a college hackathon, developing a real-time deep-learning based analytics system."
    }
];

export default AWARDS;
