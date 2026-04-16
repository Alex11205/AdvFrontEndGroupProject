import TripPlanner from "@/components/TripPlanner";
import Footer from "@/components/footer";
import styles from "@/styles/TripPlanner.module.css";

const featuredJourneys = [
  {
    region: "Europe",
    duration: "8 days",
    title: "Mediterranean summer escape",
    text: "Slow coastal mornings, old towns, sea views, and long dinners by the water.",
  },
  {
    region: "Asia",
    duration: "12 days",
    title: "Cities, markets, and mountain air",
    text: "Blend street food, culture, and scenic train routes into one unforgettable trip.",
  },
  {
    region: "Americas",
    duration: "6 days",
    title: "Nature-first weekend adventure",
    text: "National parks, scenic drives, and stays built around landscapes you will remember.",
  },
];

export default function TripsPage() {
  return (
    <>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.kicker}>LonelyPlanet journeys</p>
            <h1 className={styles.heroTitle}>Trips worth dreaming about</h1>
            <p className={styles.heroText}>
              Discover inspiration for your next destination, save travel ideas,
              and start planning the kind of journey that fits your interests,
              pace, and style.
            </p>
            <a href="#planner" className={styles.heroButton}>
              Start planning
            </a>
          </div>
        </section>

        <section className={styles.stats}>
          <div className={styles.statsInner}>
            <div className={styles.statsItem}>
              <span>Explore</span>
              <strong>Dream destinations</strong>
              <p>Keep a personal list of the places you want to experience next.</p>
            </div>

            <div className={styles.statsItem}>
              <span>Plan</span>
              <strong>Build your own journey</strong>
              <p>Organize travel ideas before choosing where your next trip goes.</p>
            </div>

            <div className={styles.statsItem}>
              <span>Travel</span>
              <strong>Make it personal</strong>
              <p>Shape trips around culture, food, scenery, and unforgettable moments.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.editorial}>
              <h2>Travel inspiration starts with the places that stay on your mind.</h2>

              <div className={styles.editorialText}>
                <p>
                  Some journeys begin with a city, others with a feeling. A coastline,
                  a mountain road, a food market, or a dream you have kept for years.
                </p>
                <p>
                  Use this page to collect destinations you want to visit and turn
                  those ideas into a simple travel plan. Start small, save what
                  inspires you, and build from there.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.journeysSection}>
          <div className={styles.journeysInner}>
            <div className={styles.sectionHeader}>
              <p>Featured journeys</p>
              <h2>Fresh ideas for your next trip</h2>
            </div>

            <div className={styles.journeyGrid}>
              {featuredJourneys.map((journey) => (
                <article key={journey.title} className={styles.journeyCard}>
                  <div>
                    <span className={styles.cardMeta}>
                      {journey.region} · {journey.duration}
                    </span>
                    <h3>{journey.title}</h3>
                    <p>{journey.text}</p>
                  </div>

                  <a href="#planner" className={styles.cardLink}>
                    Plan this trip style
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.quoteBand}>
          <p>
            “The best journeys usually start as saved ideas, half-formed plans,
            and places you can’t stop thinking about.”
          </p>
        </section>

        <section className={styles.imageBand}>
          <img
            src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1600&q=80"
            alt="Travel landscape"
          />
          <div className={styles.imageOverlay}>
            <span>Editor’s pick</span>
            <h3>Save places that inspire you and start shaping your next journey.</h3>
          </div>
        </section>

        <section id="planner" className={styles.plannerSection}>
          <div className={styles.plannerInner}>
            <div className={styles.plannerLayout}>
              <div className={styles.plannerIntro}>
                <span className={styles.plannerKicker}>Trip planner</span>
                <h2>Turn inspiration into an actual plan</h2>
                <p>
                  Save destinations, organize ideas, and start building an itinerary
                  that feels personal, flexible, and exciting from the very beginning.
                </p>
              </div>

              <div className={styles.plannerCard}>
                <TripPlanner />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}