import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Shaik",
  lastName: "Abdullah",
  displayName: "Shaik Abdullah",
  username: "Shaik",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Automation matter. DevOps matter.",
    "Software Engineer",
    "Open Source Contributor",
  ],
  address: "Hyderabad, Telangana, India",
  phoneNumber: "KzkxIDkwMTA1NTM1MDk=", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "c2hhaWthYmR1bHNhaWYxMEBnbWFpbC5jb20=", // base64 encoded
  website: "https://testingdevops.rest/",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Aspiring SDE/DevOps Engineer",
      company: "",
      website: "",
    },
  ],
  about: `
- Hello, World! I’m Shaik Abdullah — an aspiring SDE fueled by a passion for DevOps, automation, and crafting seamless, user-centric digital experiences. I strive to combine efficiency with minimal and thoughtful design.

- I love experimenting with new technologies and transforming ideas into real projects.

- Let’s connect and build something great together!
  `,
  avatar: "/me.png",// URL to avatar image
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1755355653", // URL to og-image (1200x630)
  keywords: [
    "Shaik",
    "Shaik Abdullah",
    "Shaik Abddullah",
    "TesT-098-ops",
    "Software Engineer",
    "Full Stack Developer",
    "DevOps",
    "TestingDevOps"
  ],
  dateCreated: "2025-09-05", // YYYY-MM-DD
};
