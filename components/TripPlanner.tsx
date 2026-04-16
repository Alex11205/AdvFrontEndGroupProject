import { useState } from "react";
import styles from "@/styles/TripPlanner.module.css";

export default function TripPlanner() {
  const [destination, setDestination] = useState("");
  const [destinations, setDestinations] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmed = destination.trim();
    if (!trimmed) return;

    setDestinations((prev) => [...prev, trimmed]);
    setDestination("");
  };

  const handleRemove = (indexToRemove: number) => {
    setDestinations((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className={styles.tripPlannerBox}>
      <div className={styles.tripPlannerHeader}>
        <span className={styles.tripPlannerEyebrow}>Personal planner</span>
        <h3>Build your next trip</h3>
        <p>
          Save destinations, keep your ideas in one place, and start shaping an
          itinerary that fits your style.
        </p>
      </div>

      <form className={styles.tripPlannerForm} onSubmit={handleSubmit}>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Add a destination"
          className={styles.tripPlannerInput}
        />
        <button type="submit" className={styles.tripPlannerButton}>
          Add
        </button>
      </form>

      {destinations.length === 0 ? (
        <div className={styles.tripPlannerEmpty}>
          No destinations added yet. Start with places like Kyoto, Lisbon,
          Marrakech, or Banff.
        </div>
      ) : (
        <div className={styles.tripPlannerList}>
          {destinations.map((place, index) => (
            <div key={`${place}-${index}`} className={styles.tripPlannerItem}>
              <span>{place}</span>
              <button
                type="button"
                className={styles.tripPlannerRemove}
                onClick={() => handleRemove(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}