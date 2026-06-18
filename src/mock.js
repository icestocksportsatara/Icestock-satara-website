// Mock data for Icestock Sport Association of Satara

// Helper: prefix image paths with PUBLIC_URL so they work correctly
// when the site is hosted in a subfolder (e.g. GitHub Pages project site).
const asset = (path) => `${process.env.PUBLIC_URL || ""}${path}`;

export const siteInfo = {
  name: "Icestock Sport Association of Satara",
  shortName: "ISSA Satara",
  tagline: "Precision, Power, and Passion \u2013 Satara Ice Stock Arena.",
  foundedYear: 2021,
  president: "Sahil Ravindra Gurjar",
  address:
    "Yashwant Colony, near Lake View Hotel, Godoli Naka, Satara, Maharashtra 415002",
  phone: "+91 77689 03577",
  email: "icestocksportsatara@gmail.com",
  instagram:
    "https://www.instagram.com/sataraicestocksport?igsh=MTA3MzY1dTkzeDdhNQ%3D%3D&utm_source=qr",
  logo: asset("/images/logo.jpg"),
};

// Local image library (files in frontend/public/images/)
export const media = {
  hero: asset("/images/hero-india-jersey.jpg"),
  presidentArena: asset("/images/president-arena.jpg"),
  iceRink: asset("https://drive.google.com/uc?export=view&id=19O4ADLgqIC9dfTv4MPbOG4Qv9gUmifpX"),
  teamGroup: asset("/images/team-group.jpg"),
  medalWinners: asset("/images/medal-winners.jpg"),
  sahilPortrait: asset("/images/sahil-portrait.jpg"),
  maheshPortrait: asset("/images/mahesh-portrait.jpg"),
};

export const leadership = [
  {
    id: 1,
    name: "Sahil Ravindra Gurjar",
    title: "President",
    org: "Icestock Sport Association of Satara",
    scope: "Satara District",
    photo: asset("/images/sahil-portrait.jpg"),
    photoPosition: "object-top",
    accent: "#2e8bc0",
  },
  {
    id: 2,
    name: "Mahesh Ramesh Rathod",
    title: "President",
    org: "Maharashtra Icestock Sport Association",
    scope: "Maharashtra State",
    photo: asset("/images/mahesh-portrait.jpg"),
    photoPosition: "object-center",
    accent: "#e79a3b",
  },
];

export const newsItems = [
  {
    id: 1,
    date: "15.03.2025",
    title:
      "Satara athletes win GOLD at All India Inter-University Winter Games 2024\u201325",
    image: media.medalWinners,
    featured: true,
  },
  {
    id: 2,
    date: "10.02.2025",
    title:
      "ISSA Satara represents India at Eisstock WM 2025 in Austria",
    image: "",
  },
  {
    id: 3,
    date: "28.01.2025",
    title:
      "Team Satara wins double gold at Maharashtra State Icestock Open",
    image: "",
  },
  {
    id: 4,
    date: "05.01.2025",
    title:
      "Vision 2030 \u2013 Fresh momentum for our youngest players",
    image: "",
  },
];

export const events = [
  {
    id: 0,
    date: "August 2026",
    title: "Maharashtra State Icestock Sport Championship 2026",
    description:
      "The upcoming Maharashtra State Icestock Sport Championship 2026 – open to all interested athletes across the state. Register now via WhatsApp and be part of Maharashtra's biggest icestock event of the year.",
    image: media.iceRink,
    tags: [
      { label: "Team play", code: "TP", color: "blue" },
      { label: "Target", code: "TC", color: "teal" },
      { label: "Distance", code: "DC", color: "orange" },
    ],
    country: "IND",
    flag: "https://flagcdn.com/w320/in.png",
    location: "Maharashtra",
    whatsappLink: "https://wa.me/917768903577?text=I%20am%20interested%20in%20Maharashtra%20State%20Icestock%20Championship%202026",
    registrationOpen: true,
  },
];

// 5 disciplines with rules & scoring (based on IFI / International Federation)
export const disciplines = [
  {
    key: "team-game",
    name: "Team Game",
    short: "TG",
    color: "blue",
    accent: "#2e8bc0",
    bg: "#eaf4fb",
    summary:
      "The flagship discipline: two teams of four slide their stocks on ice to get closest to the daube.",
    rules: [
      "Two teams of 4 players each.",
      "Each player plays 2 stocks per turn (Kehre).",
      "A match consists of 6 or 8 Kehren.",
      "The daube (small target puck) is placed on the playing field at the start of each Kehre.",
    ],
    points:
      "The team with the stock closest to the daube scores 3 points; every additional closer stock scores 2 points. Match points: 2 for a win, 1 for a draw, 0 for a loss.",
  },
  {
    key: "team-target",
    name: "Team Target",
    short: "TT",
    color: "teal",
    accent: "#2a8273",
    bg: "#e8f3ef",
    summary:
      "A team precision discipline played across 6 fixed target schemes \u2013 teamwork and accuracy decide the winner.",
    rules: [
      "4 players per team.",
      "6 predefined target schemes (rings, short distance, maximum distance, combinations).",
      "Each player plays 6 stocks per scheme.",
      "Stocks are aimed at concentric rings with values 1 to 5.",
    ],
    points:
      "Rings score 1, 2, 3, 4 or 5 points. Total team score = sum of all players across the 6 schemes. Highest total wins.",
  },
  {
    key: "team-distance",
    name: "Team Distance",
    short: "TD",
    color: "orange",
    accent: "#e79a3b",
    bg: "#fcf2e3",
    summary:
      "Athletes slide their stocks as far as possible down a long lane \u2013 pure power, balance and technique.",
    rules: [
      "4 players per team.",
      "Each player has 2 attempts per round (best attempt counts).",
      "Lane length: up to 100 m on ice.",
      "Stocks are modified (distance stocks, special running plates).",
    ],
    points:
      "Distance is measured from the throw-off line to the point where the stock comes to rest. Team result = sum of each player's best attempt. Greatest total distance wins.",
  },
  {
    key: "individual-target",
    name: "Individual Target",
    short: "IT",
    color: "blue",
    accent: "#2e8bc0",
    bg: "#eaf4fb",
    summary:
      "The solo precision test \u2013 one athlete, 6 schemes, 24 stocks, one chance to be the best.",
    rules: [
      "Single player competition.",
      "6 target schemes (same as Team Target).",
      "Each athlete plays 6 stocks per scheme (24 stocks total in short format).",
      "Strict time limits per attempt.",
    ],
    points:
      "Rings score 1 to 5 points. Total score = sum of all 6 schemes. Highest single score wins gold; ties broken by best single scheme.",
  },
  {
    key: "individual-distance",
    name: "Individual Distance",
    short: "ID",
    color: "teal",
    accent: "#2a8273",
    bg: "#e8f3ef",
    summary:
      "The fastest, furthest solo slide \u2013 a showcase of raw power, smooth release and running-plate mastery.",
    rules: [
      "Single player competition.",
      "Each athlete takes 3 attempts.",
      "Only the longest valid attempt is counted.",
      "Distance stocks with approved running plates.",
    ],
    points:
      "Pure distance in metres. The athlete with the longest single attempt wins. Current world records exceed 180 m on ice.",
  },
];

// Players array reserved for future use (user will add real data later).
// Keeping it empty avoids shipping placeholder / external image URLs.
export const players = [];

export const navItems = [
  { label: "News", href: "#news" },
  {
    label: "Events",
    href: "#events",
    dropdown: ["Upcoming events", "Past events", "Results", "Calendar"],
  },
  {
    label: "Disciplines",
    href: "#disciplines",
    dropdown: [
      "Team Game",
      "Team Target",
      "Team Distance",
      "Individual Target",
      "Individual Distance",
    ],
  },
  { label: "Leadership", href: "#leadership" },
  {
    label: "About",
    href: "#about",
    dropdown: ["About ISSA", "Governance", "Committees", "Partners", "Contact"],
  },
];
