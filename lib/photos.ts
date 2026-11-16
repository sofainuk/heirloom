/**
 * PHOTO LIBRARY — free-to-use photos from Unsplash (Unsplash License: free for commercial use,
 * no attribution required). Every photo is referenced by a key so you can swap any of them for
 * your own: replace `id` with another Unsplash id, or set `url` to any https image address
 * (for example your own product photo hosted on Vercel Blob / Cloudinary).
 */
export interface Photo {
  id?: string;
  url?: string;
  alt: string;
}

const lib = {
  // landscapes / lifestyle
  wheatGolden: { id: "photo-1763257494793-b2bde45acd96", alt: "Golden wheat field swaying in the breeze" },
  wheatBlue: { id: "photo-1779036115351-119924e8f4b8", alt: "Golden wheat field under a clear blue sky" },
  cornField: { id: "photo-1530464684439-723262c0d16e", alt: "Corn fields at golden hour" },
  mustardField: { id: "photo-1590701068745-481e93a21cf4", alt: "Mustard flower field under a blue sky" },
  mustardSunset: { id: "photo-1785996355148-9a5a32c7860c", alt: "Yellow mustard flowers at sunset" },
  farmer: { id: "photo-1710563159928-83611beece71", alt: "Farmer standing in a field of tall grass" },
  kitchen: { id: "photo-1725483990150-61a9fbd746d1", alt: "Cooking a home meal on the stove" },
  flatbreadGriddle: { id: "photo-1780907084874-14d202d39bf1", alt: "Fresh flatbread cooking on a hot griddle" },
  flatbreadHands: { id: "photo-1763951719000-661d3d50d763", alt: "Hands cooking flatbread on a griddle" },
  jarsGrains: { id: "photo-1509043183980-23be96ae4109", alt: "Clear jars filled with grains" },
  jarsShelf: { id: "photo-1580116270858-8a0d62b15426", alt: "Pantry shelf filled with jars of spices" },
  sweets: { id: "photo-1758910536889-43ce7b3199fd", alt: "Assortment of traditional sweets" },
  thali: { id: "photo-1742984039016-4b34a90a0fe6", alt: "A festive thali with traditional items" },
  giftBasket: { id: "photo-1508899203029-1c9eb493c9bd", alt: "Gift basket" },
  giftCrate: { id: "photo-1773450970959-cef81e9b1053", alt: "Wooden crate filled with food and flowers" },
  chaiClay: { id: "photo-1761483281417-778013dc0177", alt: "Tea poured into small clay cups" },
  chaiPour: { id: "photo-1693302050215-66ae33076745", alt: "Pouring hot tea into a cup" },
  // products
  jaggeryPlate: { id: "photo-1788238025855-55581a2ed354", alt: "Pieces of jaggery on a small metal plate" },
  jaggeryPile: { id: "photo-1775817590687-f1da5d70d9ad", alt: "Pile of golden-brown jaggery pieces" },
  sugarCubes: { id: "photo-1613228295977-3b5ac7533b36", alt: "Brown unrefined sugar cubes" },
  brownCubes: { id: "photo-1550297486-5deebace721e", alt: "Brown sugar cubes on a grey surface" },
  jaggeryPowder: { id: "photo-1770123366817-743776f66d6a", alt: "Spoonful of brown powder falling onto a dark surface" },
  nutsRaisins: { id: "photo-1633168850968-76be3bb0a2fc", alt: "Nuts and raisins in wooden spoons on an orange cloth" },
  fruitNutMix: { id: "photo-1641291361624-38b69b86b1cf", alt: "A mixture of dried fruit and nuts" },
  mixedNuts: { id: "photo-1543158181-1274e5362710", alt: "A mix of walnuts, pecans, pistachios and almonds" },
  wheatPlant: { id: "photo-1645439164506-84b9c8f53c96", alt: "Close-up of a wheat plant in a field" },
  barleyField: { id: "photo-1437252611977-07f74518abd7", alt: "Field of ripe grain" },
  cornClose: { id: "photo-1578652903016-b78571b87410", alt: "Yellow corn in close-up" },
  cornPile: { id: "photo-1540040920895-4ed39be080b7", alt: "Three yellow corn cobs" },
  sattuCup: { id: "photo-1610725664285-7c57e6eeac3f", alt: "Cup of fine roasted brown flour" },
  moringaLeaves: { id: "photo-1771643033515-0028fd03b708", alt: "Vibrant green moringa leaves on branches" },
  moringaDark: { id: "photo-1790053101987-edded0e97537", alt: "Sunlit moringa leaves against a dark background" },
  oilBottle: { id: "photo-1621958180509-74e9a29b3758", alt: "Glass bottle of golden-yellow oil" },
  oilCruet: { id: "photo-1474979266404-7eaacbcd87c5", alt: "Clear glass cruet bottle of oil" },
  sesameSeeds: { id: "photo-1778048840964-d221d23b86ee", alt: "Close-up of toasted sesame seeds" },
  sesamePile: { id: "photo-1778048840966-04589f37c525", alt: "Pile of small golden-brown seeds" },
  gheeJar: { id: "photo-1573812461383-e5f8b759d12e", alt: "Jar of golden ghee with a spoon" },
  gheeJar2: { id: "photo-1605880980331-20a711b27338", alt: "Clear glass jar of golden clarified butter" },
  honeyDipper: { id: "photo-1613548058193-1cd24c1bebcf", alt: "Golden honey dripping from a wooden dipper into a jar" },
  honeyJar: { id: "photo-1587049352851-8d4e89133924", alt: "Glass jar of golden honey" },
  honeyShelf: { id: "photo-1761416351532-ede97c29fab8", alt: "Jars of golden honey on shelves" },
  honeycomb: { id: "photo-1777306086149-48c4e11e28ee", alt: "Fresh honeycomb filled with golden honey" },
  blackSeed: { id: "photo-1765308623957-d84f4a92cc40", alt: "Dried seed pods with black seeds" },
  datesPile: { id: "photo-1771231591559-d19c89ad118a", alt: "Dried dates in shades of brown" },
  datesMarket: { id: "photo-1784043437426-3261c7f2c3de", alt: "Pile of dried dates at a market" },
  almondsBowl: { id: "photo-1608797178974-15b35a64ede9", alt: "Almonds in a ceramic bowl" },
  almondsPile: { id: "photo-1772986799860-6dd2cd2f286d", alt: "Pile of raw almonds" },
  flourBowl: { id: "photo-1714842981153-ffeaf74e7a1a", alt: "Bowl of freshly milled flour" },
  flourTable: { id: "photo-1627735483792-233bf632619b", alt: "Flour on a wooden table" },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof lib;
export const photos: Record<PhotoKey, Photo> = lib;

export function photoSrc(key: PhotoKey): string {
  const p = photos[key];
  return p.url ?? `https://images.unsplash.com/${p.id}`;
}

export function photoAlt(key: PhotoKey): string {
  return photos[key].alt;
}
