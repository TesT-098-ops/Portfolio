// Some icons don’t exist in react-icons/si → we’ll use generic ones
import { FaAws, FaJava, FaMicrosoft } from "react-icons/fa";
import { RiClaudeFill } from "react-icons/ri";
// Import icons from react-icons
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
  SiSpringboot,
  SiTerraform,
} from "react-icons/si";
import { SiPostman } from "react-icons/si";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

// Define mapping safely
const ICONS: Record<string, React.ReactNode> = {
  js: <SiJavascript size={32} color="#F7DF1E" />, // Yellow JS
  python: <SiPython size={32} color="#3776AB" />, // Python Blue
  django: <SiDjango size={32} color="#092E20" />,
  java: <FaJava size={32} color="#007396" />, // Java Blue
  springboot: <SiSpringboot size={32} color="#6DB33F" />,
  nodejs: <SiNodedotjs size={32} color="#339933" />,
  git: <SiGit size={32} color="#F05032" />,
  docker: <SiDocker size={32} color="#2496ED" />,
  mysql: <SiMysql size={32} color="#4479A1" />,
  jenkins: <SiJenkins size={32} color="#D24939" />,
  terraform: <SiTerraform size={32} color="#844FBA" />,
  kubernetes: <SiKubernetes size={32} color="#326CE5" />,
  aws: <FaAws size={32} color="#FF9900" />, // AWS Orange
  azure: <FaMicrosoft size={32} color="#0078D4" />, // Azure Blue
  ansible: <SiAnsible size={32} color="#EE0000" />,
  linux: <SiLinux size={32} color="#FCC624" />,
  bash: <SiGnubash size={32} color="#4EAA25" />,
  chatgpt: <SiOpenai size={32} color="#412991" />,
  claudeai: <RiClaudeFill size={32} color="#FF9900" />,
  postman: <SiPostman size={32} color="#FF6C37" />,

};

export function TechStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((tech) => (
            <li key={tech.key} className="flex">
              <SimpleTooltip content={tech.title}>
                <a
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={tech.title}
                >
                  {ICONS[tech.key.toLowerCase()] ?? <span>{tech.title}</span>}
                  <span className="sr-only">{tech.title}</span>
                </a>
              </SimpleTooltip>
            </li>
          ))}
        </ul>
      </PanelContent>
    </Panel>
  );
}
