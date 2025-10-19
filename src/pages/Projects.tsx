import { useEffect, useRef } from "react";
import styles from "./Projects.module.css";

interface Project {
  id: number;
  title: string;
  media: string; 
  description: string;
  github: string;
  contributors: string[];
  isVideo?: boolean;
}

const Projects = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const csProjects: Project[] = [
    {
      id: 1,
      title: "Interactive Scene Renderer",
      media: "/images/SacredSteve_final_demo.mp4",
      description:
        "A real-time Three.js + JavaScript rendering project that depicts a Minecraft-themed cathedral using custom GLSL shaders for displacement mapping, shadow mapping, particle effects, and volumetric lighting.",
      github: "https://github.com/Eric-04/SacredSteve",
      contributors: ["Ryan Huang", "Eric Cho", "Noma Vu"],
      isVideo: true,
    },
    {
      id: 2,
      title: "Links Mixture Modeling",
      media: "/images/links_mixture.png",
      description:
        "A statistical modeling project in R and RStan that builds and evaluates probabilistic mixture models for automated, reproducible workflows.",
      github: "https://github.com/tnvunoma/Links-Mixture-Modeling",
      contributors: ["Roee Gutman", "Morgane Pizigo", "Noma Vu"],
      isVideo: false,
    },
  ];

  return (
    <div className={styles.projectsPage}>
      <section
        ref={(el) => {
          sectionsRef.current[0] = el;
        }}
        className={styles.hidden}
      >
        <h2 className={styles.categoryHeader}>CS Projects</h2>
        <div className={styles.grid}>
          {csProjects.map((proj) => (
            <div key={proj.id} className={styles.card}>
              <div className={styles.mediaWrapper}>
                {proj.isVideo ? (
                  <video
                    src={proj.media}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.media}
                  />
                ) : (
                  <img
                    src={proj.media}
                    alt={proj.title}
                    className={styles.media}
                  />
                )}
              </div>
              <div className={styles.info}>
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  View on GitHub →
                </a>
                <p className={styles.contributors}>
                  <strong>Contributors:</strong> {proj.contributors.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
