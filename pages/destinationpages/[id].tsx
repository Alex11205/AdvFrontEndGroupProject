import { useRouter } from "next/router";
import Link from "next/link";

const destinations = [
  {
    id: "theusa",
    title: "The USA",
    continent: "NORTH AMERICA",
    overview:
      "The great American experience is about so many things: bluegrass and beaches, snow-covered peaks and redwood forests, restaurant-loving cities and big open skies, and that's just for starters.",
    image: "/images/theusa.avif",
  },
  {
    id: "australia",
    title: "Australia",
    continent: "AUSTRALIA & PACIFIC",
    overview:
      "Australia is the unexpected: a place where the world's oldest cultures share vast ochre plains, stylish laneways and unimaginably blue waters with successive waves of new arrivals from across the globe.",
    image: "/images/australia.avif",
  },
  {
    id: "italy",
    title: "Italy",
    continent: "EUROPE",
    overview:
      "Home to many of the world's greatest works of art, architecture and gastronomy, Italy elates, inspires and moves like no other.",
    image: "/images/italy.avif",
  },
  {
    id: "spain",
    title: "Spain",
    continent: "EUROPE",
    overview:
      "Passionate, sophisticated Spain is full of wild beauty, deep history and some of the best food you'll ever eat. Life is a fiesta, and everyone's invited.",
    image: "/images/spain.avif",
  },
  {
    id: "india",
    title: "India",
    continent: "ASIA",
    overview:
      "With its sumptuous mix of traditions, spiritual beliefs, festivals, architecture and landscapes, India will set your memories ablaze long after you've left its shores.",
    image: "/images/india.avif",
  },
  {
    id: "france",
    title: "France",
    continent: "EUROPE",
    overview:
      "France seduces travelers with iconic landmarks and cafe terraces, epic history and bustling village life. Experiences - and cuisine - to be savored.",
    image: "/images/france.avif",
  },
  {
    id: "china",
    title: "China",
    continent: "ASIA",
    overview:
      "China. The name alone makes you want to get packing. It's going places, so jump aboard, go along for the ride and see where it's headed.",
    image: "/images/china.avif",
  },
  {
    id: "england",
    title: "England",
    continent: "EUROPE",
    overview:
      "This green and pleasant land, this sceptred isle, this crucible of empire and pioneer of parliamentary democracy: England is eccentric and endlessly intriguing.",
    image: "/images/england.avif",
  },
  {
    id: "canada",
    title: "Canada",
    continent: "NORTH AMERICA",
    overview:
      "Canada is more than its hulking-mountain, craggy-coast good looks: it also cooks extraordinary meals, rocks cool culture, and unfurls wild, moose-spotting road trips.",
    image: "/images/canada.avif",
  },
  {
    id: "greece",
    title: "Greece",
    continent: "EUROPE",
    overview:
      "Greece is ancient sun-bleached ruins piercing blue skies, the balmy Aegean lapping an endless coastline and a culture alive with passionate music, wonderful cuisine and thrill-seeking activities.",
    image: "/images/greece.avif",
  },
  {
    id: "japan",
    title: "Japan",
    continent: "ASIA",
    overview:
      "Japan is truly timeless, a place where ancient traditions fuse with modern life, as if it were the most natural thing in the world.",
    image: "/images/japan.avif",
  },
  {
    id: "germany",
    title: "Germany",
    continent: "EUROPE",
    overview:
      "Prepare for a roller-coaster ride of feasts, treats and temptations experiencing Germany's soul-stirring scenery, spirit-lifting culture, big-city beauties, romantic palaces and half-timbered towns.",
    image: "/images/germany.avif",
  },
  {
    id: "russia",
    title: "Russia",
    continent: "EUROPE",
    overview:
      "The world's largest country offers it all, from historic cities and idyllic countryside to artistic riches, epic train rides and vodka-fuelled nightlife.",
    image: "/images/Russia.avif",
  },
  {
    id: "thenetherlands",
    title: "The Netherlands",
    continent: "EUROPE",
    overview:
      "Tradition and innovation intertwine here: artistic masterpieces, centuries-old windmills, tulip fields and romantic candlelit cafes coexist with visionary architecture, cutting-edge design and phenomenal nightlife.",
    image: "/images/thenetherlands.avif",
  },
  {
    id: "switzerland",
    title: "Switzerland",
    continent: "EUROPE",
    overview:
      "Look beyond the chocolate, cuckoo clocks and yodeling - contemporary Switzerland, land of four languages, is all about once-in-a-lifetime journeys, heart-racing Alpine pursuits and urban culture.",
    image: "/images/switzerland.avif",
  },
  {
    id: "poland",
    title: "Poland",
    continent: "EUROPE",
    overview:
      "Picturesque cities such as Krakow and Gdansk vie with energetic Warsaw for your urban attention. Elsewhere, woods, rivers, lakes and hills beckon for some fresh-air fun.",
    image: "/images/poland.avif",
  },
  {
    id: "norway",
    title: "Norway",
    continent: "EUROPE",
    overview:
      "The essence of Norway's appeal is remarkably simple: this is one of the most beautiful countries on earth.",
    image: "/images/norway.avif",
  },
  {
    id: "austria",
    title: "Austria",
    continent: "EUROPE",
    overview:
      "No country waltzes so effortlessly between urban and outdoors as Austria. One day you're cresting alpine summits, the next you're swanning around imperial Vienna.",
    image: "/images/austria.avif",
  },
  {
    id: "cuba",
    title: "Cuba",
    continent: "Carribbean",
    overview:
      "From lush forests to a dynamic music scene, Cuba is a country of indefinable magic. Puff on Cuban cigars or cruise down the Havana streets in a classic car for a true taste of the good life.",
    image: "/images/cuba.avif",
  },
  {
    id: "egypt",
    title: "Egypt",
    continent: "Africa",
    overview:
      "Egypt welcomes you with its mighty Nile and magnificent monuments, the beguiling desert and lush delta, and with its long past and welcoming, story-loving people.",
    image: "/images/egypt.avif",
  },
];

export default function DestinationPage() {
  const router = useRouter();
  const { id } = router.query;

  const destination =
    typeof id === "string"
      ? destinations.find((item) => item.id === id)
      : undefined;

  if (!id) {
    return (
      <div className="w-full px-3 py-6 text-black md:px-5 lg:px-6">
        <p>Loading...</p>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="w-full px-3 py-6 text-black md:px-5 lg:px-6">
        <h1 className="mb-3 text-2xl font-bold">Destination not found</h1>
        <Link
          href="/destinations"
          className="font-medium text-blue-600 hover:underline"
        >
          Back to Destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-100 text-black">
      <main className="w-full px-3 py-6 md:px-5 lg:px-6">
        <section className="grid overflow-hidden rounded-2xl bg-white shadow-lg md:grid-cols-2">
          <div className="flex flex-col justify-center bg-gray-900 px-6 py-10 text-white md:px-10 md:py-14">
            <span className="mb-4 inline-block w-fit rounded-full bg-white px-3 py-1 text-sm font-semibold text-gray-900">
              {destination.continent}
            </span>

            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              {destination.title}
            </h1>
          </div>

          <div className="min-h-[320px] md:min-h-[520px]">
            <img
              src={destination.image}
              alt={destination.title}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section className="mt-8">
          <div className="rounded-2xl bg-white p-6 shadow-md md:p-8">
            <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
              Why visit {destination.title}
            </h2>
            <p className="max-w-5xl leading-8 text-gray-700 md:text-lg">
              {destination.overview}
            </p>
          </div>
        </section>

        <div className="mt-8">
          <Link
          href="/destinations"
          className="inline-block rounded-lg border border-gray-300 bg-white px-4 py-2 font-medium text-gray-800 transition hover:bg-gray-900 hover:!text-white"
          >
            Back to Destinations
            </Link>
            </div>
      </main>
    </div>
  );
}