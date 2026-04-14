import Link from "next/link";
import Header from "@/components/header";
import Card from "@/components/card";
import { useEffect, useState } from "react";

type CardData = {
  id: string;
  title: string;
  continent: string;
  image: string;
};


const destinations: CardData[] = [
  { id: "theusa", title: "The USA", continent: "NORTH AMERICA", image: "/images/theusa.avif"},
  { id: "australia", title: "Australia", continent: "AUSTRALIA & PACIFIC", image: "/images/australia.avif" },
  { id: "italy", title: "Italy", continent: "EUROPE", image: "/images/italy.avif"  },
  { id: "spain", title: "Spain", continent: "EUROPE", image: "/images/spain.avif"  },
  { id: "india", title: "India", continent: "ASIA", image: "/images/india.avif"  },
  { id: "france", title: "France", continent: "EUROPE", image: "/images/france.avif"  },
  { id: "china", title: "China", continent: "ASIA", image: "/images/china.avif"  },
  { id: "england", title: "England", continent: "EUROPE", image: "/images/england.avif"  },
  { id: "canada", title: "Canada", continent: "NORTH AMERICA", image: "/images/canada.avif"  },
  { id: "greece", title: "Greece", continent: "EUROPE", image: "/images/greece.avif"  },
  { id: "japan", title: "Japan", continent: "EUROPE", image: "/images/japan.avif"  },
  { id: "germany", title: "Germany", continent: "EUROPE", image: "/images/germany.avif"  },
  { id: "russia", title: "Russia", continent: "EUROPE", image: "/images/Russia.avif"  },
  { id: "thenetherlands", title: "The Netherlands", continent: "EUROPE", image: "/images/thenetherlands.avif"  },
  { id: "switzerland", title: "Switzerland", continent: "EUROPE", image: "/images/switzerland.avif"  },
  { id: "poland", title: "Poland", continent: "EUROPE", image: "/images/poland.avif"  },
  { id: "norway", title: "Norway", continent: "EUROPE", image: "/images/norway.avif"  },
  { id: "austria", title: "Austria", continent: "EUROPE", image: "/images/austria.avif"  },
];



export default function Destinations() {

  const [savedItems, setSavedItems] = useState<CardData[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedCards") || "[]");
    setSavedItems(stored);
  }, []);

   const toggleSave = (card: CardData) => {
    const alreadySaved = savedItems.some((item) => item.id === card.id);

    let updated: CardData[];

    if (alreadySaved) {
      updated = savedItems.filter((item) => item.id !== card.id);
    } else {
      updated = [...savedItems, card];
    }

    setSavedItems(updated);
    localStorage.setItem("savedCards", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      

      {/* Navigation */}
      {/* < Header/> */}
        <main className="max-w-5xl mx-auto p-6 text-black">
      <h2 class="text-xl font-semibold mt-4">Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {destinations.map((card) => (
            
          <Card
            key={card.id}
            {...card}
            isSaved={savedItems.some((item) => item.id === card.id)}
            onToggleSave={toggleSave}
            // name={card.title}
            // continent={card.continent}
            // image={card.image}
            // onSave={() => handleSave(card)}
            
            
          />
          
        ))}
      </div>

      </main>
    </div>
  );
}