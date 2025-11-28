import React from "react";
import { FaAws, FaJava, FaMicrosoft } from "react-icons/fa";
import {
    SiAnsible,
    SiDjango,
    SiDocker,
    SiGit,
    SiGnubash,
    SiJavascript,
    SiJenkins,
    SiKubernetes,
    SiLinux,
    SiMysql,
    SiNodedotjs,
    SiOpenai,
    SiPython,
    SiTerraform,
    SiVagrant,
} from "react-icons/si";

/**
 * Brand colors - tweak if you prefer slight variations.
 * These make the icons colored like Chánh Dai's portfolio.
 */
const ICON_COLORS: Record<string, string> = {
    js: "#F7DF1E",
    python: "#3776AB",
    java: "#007396",
    nodejs: "#339933",
    git: "#F05032",
    docker: "#2496ED",
    mysql: "#4479A1",
    jenkins: "#D24939",
    ansible: "#EE0000",
    linux: "#FCC624",
    bash: "#4EAA25",
    terraform: "#7B42BC",
    kubernetes: "#326CE5",
    aws: "#FF9900",
    azure: "#0078D4",
    chatgpt: "#10A37F",
    django: "#092E20",
    vagrant: "#1563FF",
};

/**
 * TECH_ICONS mapping — keys should be lowercase.
 * Use React.ReactNode type to avoid JSX namespace problems.
 */
export const TECH_ICONS: Record<string, React.ReactNode> = {
    js: <SiJavascript size={32} color={ICON_COLORS.js} />,
    python: <SiPython size={32} color={ICON_COLORS.python} />,
    java: <FaJava size={32} color={ICON_COLORS.java} />,
    nodejs: <SiNodedotjs size={32} color={ICON_COLORS.nodejs} />,
    git: <SiGit size={32} color={ICON_COLORS.git} />,
    docker: <SiDocker size={32} color={ICON_COLORS.docker} />,
    mysql: <SiMysql size={32} color={ICON_COLORS.mysql} />,
    jenkins: <SiJenkins size={32} color={ICON_COLORS.jenkins} />,
    ansible: <SiAnsible size={32} color={ICON_COLORS.ansible} />,
    linux: <SiLinux size={32} color={ICON_COLORS.linux} />,
    bash: <SiGnubash size={32} color={ICON_COLORS.bash} />,
    terraform: <SiTerraform size={32} color={ICON_COLORS.terraform} />,
    kubernetes: <SiKubernetes size={32} color={ICON_COLORS.kubernetes} />,
    aws: <FaAws size={32} color={ICON_COLORS.aws} />,
    azure: <FaMicrosoft size={32} color={ICON_COLORS.azure} />,
    chatgpt: <SiOpenai size={32} color={ICON_COLORS.chatgpt} />,
    django: <SiDjango size={32} color={ICON_COLORS.django} />,
    vagrant: <SiVagrant size={32} color={ICON_COLORS.vagrant} />,
};
