import Link from "next/link";

type CardData = {
  id: string
  title: string;
  continent: string;
  image: string;

};

type CardProps = CardData & {
  isSaved: boolean;
  onToggleSave: (card: CardData) => void;
};

export default function Card({ 
  id, 
  title, 
  continent, 
  image, 
  isSaved,
  onToggleSave, 
}: CardProps) {
  return (
    <div className="relative bg-white text-gray-800 rounded-xl shadow-md overflow-hidden p-4 m-2 w-64">
      
      <button
        type="button"
        onClick={() => onToggleSave({ id, title, continent, image })}
        className={`absolute top-2 right-2 px-3 py-1 rounded text-sm font-medium transition ${
          isSaved
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        {isSaved ? "Remove" : "Save"}
      </button>

      <Link href={`/destinationpages/${id}`}>
        <img  
          src={image}
          alt={title}
          className="w-full h-40 object-cover"
        >
        </img>
      </Link>
      <div className="p-4">
      <p className="text-gray-600">{continent}</p>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <Link href={`/destinationpages/${id}`}>
      <p className="rounded  text-sm px-2 py-1 font-medium border inline-block text-grey hover:bg-green-700 hover:text-white">Discover</p>
      </Link>
      </div>
      
    </div>
  );
}