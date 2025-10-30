import { useEffect, useRef } from "react";
import styles from "./Art.module.css";

interface ArtPiece {
  id: number;
  title: string;
  image: string;
  description: string;
  highlight: boolean;
}

const Art = () => {
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
      { threshold: 0.05 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const digitalArt: ArtPiece[] = [
    {
      id: 1,
      title: "#01",
      image: "/images/art5.jpg",
      description:
        "A simple but effective character piece focusing on contrast and mood.",
      highlight: false,
    },
    {
      id: 2,
      title: "#02",
      image: "/images/art6.jpg",
      description:
        "Through high-key colors and light flares, this character-focused illustration presents a sophisticated, ethereal appeal.",
      highlight: false,
    },
    {
      id: 3,
      title: "#03",
      image: "/images/art3.jpg",
      description:
        "Vibrant and lively, this piece romanticizes the fresh vigor of youth.",
      highlight: true,
    },
    {
      id: 4,
      title: "#04",
      image: "/images/art4.jpg",
      description:
        "Capturing feelings of a nostalgic romance, this wide shot encapsulates a faraway memory.",
      highlight: false,
    },

    {
      id: 5,
      title: "#05",
      image: "/images/art2.png",
      description: "Experimenting with a unique palette.",
      highlight: false,
    },
    {
      id: 6,
      title: "#06",
      image: "/images/sketch4.jpg",
      description: "Stylized character headshots.",
      highlight: true,
    },
  ];

  const animation: ArtPiece[] = [
    {
      id: 9,
      title: "Flow",
      image: "/images/animation.mov",
      description:
        "Character animation to express an appreciation for the mundane moments.",
      highlight: true,
    }
  ];

  const model: ArtPiece[] = [
    {
      id: 11,
      title: "Dr. Martens",
      image: "/images/tnvu_shade_final.mp4",
      description: "Beginner render of owned shoes on Maya.",
      highlight: true,
    },
  ];

  return (
    <div className={styles.artPage}>
      <section
        ref={(el) => {
          sectionsRef.current[0] = el;
        }}
        className={styles.hidden}
      >
        <h2 className={styles.categoryHeader}>˖⁺‧₊˚✦ Animation ⋆.˚⟡ ࣪ ˖</h2>

        <div className={styles.animationSection}>
          {animation.map((piece) => (
            <div key={piece.id} className={styles.videoCard}>
              <div className={styles.videoWrapper}>
                <video
                  src={piece.image}
                  className={styles.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className={styles.overlay}>
                  <h3>{piece.title}</h3>
                  <p>{piece.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        ref={(el) => {
          sectionsRef.current[1] = el;
        }}
        className={styles.hidden}
      >
        <h2 className={styles.categoryHeader}>˖⁺‧₊˚✦ 3D Modelling ⋆.˚⟡ ࣪ ˖</h2>

        <div className={styles.animationSection}>
          {model.map((piece) => (
            <div key={piece.id} className={styles.videoCard}>
              <div className={styles.videoWrapper}>
                <video
                  src={piece.image}
                  className={styles.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className={styles.overlay}>
                  <h3>{piece.title}</h3>
                  <p>{piece.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        ref={(el) => {
          sectionsRef.current[2] = el;
        }}
        className={styles.hidden}
      >
        <h2 className={styles.categoryHeader}> ִֶ˖⁺‧₊˚✦ Digital Art ⋆.˚⟡ ࣪ ˖</h2>
        <div className={styles.grid}>
          {digitalArt.map((piece) => (
            <div
              key={piece.id}
              className={`${styles.card} ${
                piece.highlight ? styles.highlight : ""
              }`}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={piece.image}
                  alt={piece.title}
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <h3>{piece.title}</h3>
                  <p>{piece.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Art;
