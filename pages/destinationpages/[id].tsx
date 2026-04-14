import { useRouter } from "next/router";
import Link from "next/link";
import Header from "@/components/header";
import Card from "@/components/card";

const destinations = [
  { id: "theusa", title: "The USA", continent: "NORTH AMERICA", overview: "The great American experience is about so many things: bluegrass and beaches, snow-covered peaks and redwood forests, restaurant-loving cities and big open skies, and that's just for starters.", image: "/images/theusa.avif"},
  { id: "australia", title: "Australia",continent: "AUSTRALIA & PACIFIC",  overview: "Australia is the unexpected: a place where the world's oldest cultures share vast ochre plains, stylish laneways and unimaginably blue waters with successive waves of new arrivals from across the globe.", image: "/images/australia.avif"},
  { id: "italy", title: "Italy", continent: "EUROPE", overview: "Home to many of the world's greatest works of art, architecture and gastronomy, Italy elates, inspires and moves like no other.", image: "/images/italy.avif" },
  { id: "spain", title: "Spain", continent: "EUROPE", overview: "Passionate, sophisticated Spain is full of wild beauty, deep history and some of the best food you'll ever eat. Life is a fiesta, and everyone's invited.", image: "/images/spain.avif" },
  { id: "india", title: "India", continent: "ASIA", overview: "With its sumptuous mix of traditions, spiritual beliefs, festivals, architecture and landscapes, India will set your memories ablaze long after you've left its shores.", image: "/images/india.avif" },
  { id: "france", title: "France", continent: "EUROPE", overview: "France seduces travelers with iconic landmarks and cafe terraces, epic history and bustling village life. Experiences - and cuisine - to be savored.", image: "/images/france.avif" },
  { id: "china", title: "China", continent: "ASIA", overview: "China. The name alone makes you want to get packing. It's going places, so jump aboard, go along for the ride and see where it's headed.", image: "/images/china.avif" },
  { id: "england", title: "England", continent: "EUROPE", overview: "This green and pleasant land, this sceptred isle, this crucible of empire and pioneer of parliamentary democracy: England is eccentric and endlessly intriguing.", image: "/images/england.avif" },
  { id: "canada", title: "Canada", continent: "NORTH AMERICA", overview: "Canada is more than its hulking-mountain, craggy-coast good looks: it also cooks extraordinary meals, rocks cool culture, and unfurls wild, moose-spotting road trips.", image: "/images/canada.avif" },
  { id: "greece", title: "Greece", continent: "EUROPE", overview: "Greece is ancient sun-bleached ruins piercing blue skies, the balmy Aegean lapping an endless coastline and a culture alive with passionate music, wonderful cuisine and thrill-seeking activities.", image: "/images/greece.avif" },
  { id: "japan", title: "Japan", continent: "ASIA", overview: "Japan is truly timeless, a place where ancient traditions fuse with modern life, as if it were the most natural thing in the world.", image: "/images/japan.avif"  },
  { id: "germany", title: "Germany", continent: "EUROPE", overview: "Prepare for a roller-coaster ride of feasts, treats and temptations experiencing Germany's soul-stirring scenery, spirit-lifting culture, big-city beauties, romantic palaces and half-timbered towns.", image: "/images/germany.avif"  },
  { id: "russia", title: "Russia", continent: "EUROPE", overview: "The world's largest country offers it all, from historic cities and idyllic countryside to artistic riches, epic train rides and vodka-fuelled nightlife.", image: "/images/Russia.avif"  },
  { id: "thenetherlands", title: "The Netherlands", continent: "EUROPE", overview: "Tradition and innovation intertwine here: artistic masterpieces, centuries-old windmills, tulip fields and romantic candlelit cafes coexist with visionary architecture, cutting-edge design and phenomenal nightlife.", image: "/images/thenetherlands.avif"  },
  { id: "switzerland", title: "Switzerland", continent: "EUROPE", overview: "Look beyond the chocolate, cuckoo clocks and yodeling - contemporary Switzerland, land of four languages, is all about once-in-a-lifetime journeys, heart-racing Alpine pursuits and urban culture.", image: "/images/switzerland.avif"  },
    { id: "poland", title: "Poland", continent: "EUROPE", overview: "Picturesque cities such as Krakow and Gdansk vie with energetic Warsaw for your urban attention. Elsewhere, woods, rivers, lakes and hills beckon for some fresh-air fun.", image: "/images/poland.avif"  },
  { id: "norway", title: "Norway", continent: "EUROPE", overview: "The essence of Norway's appeal is remarkably simple: this is one of the most beautiful countries on earth.", image: "/images/norway.avif"  },
  { id: "austria", title: "Austria", continent: "EUROPE", overview: "No country waltzes so effortlessly between urban and outdoors as Austria. One day you're cresting alpine summits, the next you're swanning around imperial Vienna.", image: "/images/austria.avif"  },
];

export default function DestinationPage() {
  const router = useRouter();
  const { id } = router.query;

  const destination = destinations.find((p) => p.id === id);

  if (!destination) return <p>Destination not found</p>;

  return (
    <div>
    
      {/* < Header/> */}
      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row">
  {/* Left content area */}
  <div className="md:w-1/2 bg-gray-900 p-8 md:p-12 flex flex-col  justify-center inline-block">

<div className="m-25">
    <div className="bg-white inline-block p-2 md:p-1 mb-5 rounded-lg max-w-md mb-2">
      <p className="text-gray-900 text-base md:text-sm leading-relaxed inline-block">
        {destination.continent}
      </p>
    </div>

    <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
      {destination.title}
    </h2>
</div>
    
  </div>

  {/* Right image */}
  <div className="md:w-1/2">
    <img className="w-full h-full object-cover min-h-[300px] max-h-[600px]" src={destination.image} alt={destination.title}></img>
  </div>
</div>

      <h1 class="text-xl font-semibold mt-4">Why visit {destination.title}</h1>
      <p>{destination.overview}</p>
      <h1 class="text-xl font-semibold mt-4">Top places to visit in {destination.title}</h1>
      <p>API Placeholder</p>
      <Link href="/destinations"><h3 class="text-xl font-semibold">Back to Destinations</h3></Link>
    </div>
  );
}