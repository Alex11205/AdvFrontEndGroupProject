import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "@/components/card";

type CardData = {
  id: string;
  title: string;
  continent: string;
  image: string;
};

export default function SavedPage() {
  const [savedItems, setSavedItems] = useState<CardData[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedCards") || "[]");
    setSavedItems(stored);
  }, []);

  const toggleSave = (card: CardData) => {
    const updated = savedItems.filter((item) => item.id !== card.id);
    setSavedItems(updated);
    localStorage.setItem("savedCards", JSON.stringify(updated));
  };

  return (
    <main className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Saved Destinations</h1>
        <Link
          href="/destinations"
          className="text-blue-600 hover:underline"
        >
          Back to Full List
        </Link>
      </div>

      {savedItems.length === 0 ? (
        <p>No saved cards yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {savedItems.map((card) => (
            <Card
              key={card.id}
              {...card}
              isSaved={true}
              onToggleSave={toggleSave}
            />
          ))}
        </div>
      )}
    </main>
  );
}