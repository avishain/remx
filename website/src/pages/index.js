import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Easy",
    imageUrl: "", //TODO: add .svg images in img folder
    description: (
      <>
        Remx is designed from the ground up to be the state meneger for all your
        websites and apps that&apos;s easy to install and use.
      </>
    ),
  },
  {
    title: "Zero Boilerplate",
    imageUrl: "",
    description: (
      <>
        Remx lets you focus on features, not the chores. Install Remx in your
        website or app and hit the ground running.
      </>
    ),
  },
  {
    title: "Fast and Reliable",
    imageUrl: "",
    description: (
      <>
        Extend or customize your data management. Remx is reliable and fast to
        use.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.features)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function CustomHero() {
  return (
    <div
      style={{
        backgroundImage: "url(../../static/img/illustration.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        height: 2000,
      }}
    >
      <div style={{ marginLeft: "15%", marginRight: "15%" }}>
        <p className={styles.heroTitle}>REMX</p>
        <p className={styles.heroSubtitle}>An easy to use state manager</p>
        <div
          className={styles.gettingStartedContainer}
          onClick={(event) => {
            console.log("open getting started page");
          }}
        >
          <span
            className={styles.gettingStartedLabel + " " + styles.notSelectable}
          >
            GETTING STARTED
          </span>
          <img
            alt={"Right chevron icon"}
            src={"../../static/img/getting_started_btn.svg"}
          />
        </div>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="Description will go into a meta tag in <head />"
    >
      {CustomHero()}
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/introduction/getting-started")}
            >
              Getting Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
