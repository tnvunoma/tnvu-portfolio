import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { useEffect, useRef } from "react";

const Home = () => {
  const islandsRef = useRef<(HTMLElement | null)[]>([]);

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
      { threshold: 0.1 }
    );

    islandsRef.current.forEach((island) => {
      if (island) observer.observe(island);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.homeContainer}>
      {/* --- Section 1 --- */}
      <section
        ref={(el) => {
          islandsRef.current[0] = el;
        }}
        className={`${styles.island} ${styles.island1} ${styles.slideLeft}`}
      >
        <div className={styles.text}>
          <h1>Hi, I'm Noma! ܁ ˖ ‧₊˚⊹</h1>
          <p>
            I'm a junior at Brown University, concentrating in Computer Science
            (Sc.B.) with an interest in visual computing, especially real-time
            rendering and graphics systems. I'm passionate about the
            intersection of art and technology and aim to design systems that
            value both technical efficiency and artistic intent. My current
            focus is on understanding low-level graphics pipelines, GPU
            architectures, and rendering algorithms through implementing
            real-time shaders, exploring rendering architectures, and creating
            visual simulations. I hope my journey continues to spark meaningful
            insights and impactful change.
          </p>
          <p className={styles.linkText}>
            <Link to="/projects">Learn more about my CS work →</Link>
          </p>
        </div>

        <div className={styles.imageGallery}>
          <img src="/images/noma_frog.jpg" alt="Computer Science Work" />
        </div>
      </section>

      {/* --- Section 2 --- */}
      <section
        ref={(el) => {
          islandsRef.current[1] = el;
        }}
        className={`${styles.island} ${styles.island2} ${styles.slideRight}`}
      >
        <div className={styles.imageGallery}>
          <img src="/images/art0.jpg" alt="Art Preview" />
        </div>

        <div className={styles.text}>
          <h2> Art & Hobbies </h2>
          <p>
            On the side, I enjoy visual art and media, often immersing myself
            into drawing, designing, and consuming content like animations and
            video games. <br />
            Under the handle @yusihuu, I share my art on many social media
            platforms.
          </p>
          <p>
            <strong>Favorite animation:</strong> Spider-Man: Across the
            Spider-Verse
            <br />
            <strong>Favorite game:</strong> Pokémon Black & White 2
          </p>
          <p className={styles.linkText}>
            <Link to="/art">View my art gallery →</Link>
          </p>
        </div>
      </section>

      {/* --- Section 3 --- */}
      <section
        ref={(el) => {
          islandsRef.current[2] = el;
        }}
        className={`${styles.island} ${styles.island3} ${styles.slideLeft}`}
      >
        <div className={styles.text}>
          <h2> Extracurriculars </h2>
          <p>
            To maintain a healthy balance between work and creativity, I take
            part in extracurriculars both within and outside of programming.
            From collaborative game development projects with artists to music
            and performance groups, my involvement in these experiences let me
            explore teamwork and creativity beyond the screen.
          </p>
          <p>
            <strong> Clubs & Organizations: </strong> <br />
            Brown Lion Dance 舞獅 <br />
            Brown Hansori 한소리 <br />
            Brown RISD Game Developers
          </p>
        </div>

        <div className={styles.imageGallery}>
          <img src="/images/noma_liondance.png" alt="Music and Performance" />
        </div>
      </section>
    </div>
  );
};

export default Home;
