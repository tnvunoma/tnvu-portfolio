import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>© {new Date().getFullYear()} Noma Vu</p>
        <div className={styles.contact}>
          <a href="mailto:thu_vu@brown.edu"> ๋࣭ ⭑💻‧₊˚ thu_vu@brown.edu</a>
          <span> | </span>
          <a
            href="https://github.com/tnvunoma"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span> | </span>
          <a
            href="https://www.linkedin.com/in/thu-vu-08ab24396/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className={styles.contact}>
          <a href="mailto:yusihuu@gmail.com">✎*✩.🎨‧₊˚ yusihuu@gmail.com</a>
          <span> | </span>
          <a
            href="https://www.instagram.com/yusihuu/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <span> | </span>

          <a
            href="https://vgen.co/yusihuu"
            target="_blank"
            rel="noopener noreferrer"
          >
            VGen
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
