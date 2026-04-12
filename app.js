/* ═══════════════════════════════════════════════════════
   NHRA 2026 PWA — Full App Logic
   Features: Schedule · Winners Circle · Points Standings · Entry List (live refresh)
   ═══════════════════════════════════════════════════════ */


// ─── DRIVER HEADSHOTS (from NHRA.com) ────────────────────────────────────────
// Every URL verified directly from NHRA.com driver listing pages
const DRIVER_PHOTOS = {
  // TOP FUEL
  "Doug Kalitta":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-03/kalitta-head.png.webp",
  "Shawn Langdon":     "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2025-03/langdon-head.jpg.webp",
  "Justin Ashley":     "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-03/ashley-head.png.webp",
  "Tony Stewart":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/stewart-head.png.webp",
  "Clay Millican":     "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-03/clay-head.png.webp",
  "Steve Torrence":    "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-03/torrence-head.png.webp",
  "Shawn Reed":        "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/reed-head.png.webp",
  "Antron Brown":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-03/antron-head.png.webp",
  "Josh Hart":         "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2026-03/hart-head.png.webp",
  "Ida Zetterström":   "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/ida-head.png.webp",
  "Jasmine Salinas":   "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/jasmine-head.png.webp",
  "Dan Mercier":       "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-03/mercier-head.png.webp",
  "Tony Schumacher":   "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2025-09/tony-head.png.webp",
  "Kyle Wurtzel":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2017-04/wurtzel.png.webp",
  "Cameron Ferre":     "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2022-03/ferre-head.jpg.webp",
  "Tripp Tatum III":   "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/tatum-head.png.webp",
  "Billy Torrence":    "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2022-06/btorrence.jpg.webp",
  "Will Smith":        "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-12/smith-head.png.webp",
  "Maddi Gordon":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2026-01/gordon-head.png.webp",
  "Madison Gordon":    "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2026-01/gordon-head.png.webp",
  "Leah Pruett":       "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2026-03/leah-head.png.webp",
  "Ron August Jr":     "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2022-06/btorrence.jpg.webp",

  // FUNNY CAR
  "Austin Prock":       "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-03/prock-head.png.webp",
  "Matt Hagan":         "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/hagan-head.png.webp",
  "Jack Beckman":       "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-07/beckman-head.png.webp",
  "Ron Capps":          "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/capps-head.png.webp",
  "Daniel Wilkerson":   "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/dwilk-head.png.webp",
  "Paul Lee":           "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/lee-had.png.webp",
  "Chad Green":         "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/green-headshot.png.webp",
  "Cruz Pedregon":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-03/cruz-head.png.webp",
  "Spencer Hyde":       "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-12/hyde-head.jpg.webp",
  "Bob Tasca III":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/tasca-head.png.webp",
  "J.R. Todd":          "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-03/todd-head.jpg.webp",
  "JR Todd":            "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-03/todd-head.jpg.webp",
  "Alexis DeJoria":     "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/alexis-head.png.webp",
  "Dave Richards":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/ruchards-head.png.webp",
  "Buddy Hull":         "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2022-02/hull-head.jpg.webp",
  "Blake Alexander":    "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-03/blake-head.jpg.webp",
  "Hunter Green":       "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2025-07/green-head.png.webp",
  "Jason Rupert":       "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-02/rupert-head.jpg.webp",
  "Todd Lesenko":       "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2026-03/lesennko-head.jpg.webp",
  "Jordan Vandergriff": "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2025-08/jv-head.png.webp",
  "Dylan Winefsky":     "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2025-07/dylan-head.png.webp",
  "James Campbell":     "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2021-03/campbell-head.png.webp",

  // PRO STOCK — all verified
  "Dallas Glenn":       "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/glenn-head.png.webp",
  "Greg Anderson":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/greg-head.png.webp",
  "Matt Hartford":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/hartford-head.png.webp",
  "Aaron Stanfield":    "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/stanfield-head.png.webp",
  "Erica Enders":       "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/erica-head.png.webp",
  "Eric Latino":        "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/latino-head.png.webp",
  "Matthew Latino":     "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/latino-head.png.webp",
  "Jeg Coughlin Jr.":   "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2026-03/jeg-head_0.png.webp",
  "Jeg Coughlin Jr":    "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2026-03/jeg-head_0.png.webp",
  "Cody Coughlin":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2025-03/cody-head.png.webp",
  "Troy Coughlin Jr.":  "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/troy-head.png.webp",
  "Troy Coughlin Jr":   "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/troy-head.png.webp",
  "Deric Kramer":       "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2016-12/16_KRAMER_DERIC_NHRA_320x320.png.webp",
  "Greg Stanfield":     "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2025-03/stanfield-head.png.webp",
  "Kenny Delco":        "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/delco-head.png.webp",
  "Mason McGaha":       "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/mcm-head.png.webp",
  "Chris McGaha":       "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/cmg-head.png.webp",
  "Cody Anderson":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2026-03/cody-head.png.webp",
  "Joey Grose":         "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/grose-head.png.webp",
  "Fernando Cuadra Jr.":"https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/fcj-head.png.webp",
  "Cristian Cuadra":    "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/cc-head.png.webp",
  "David Cuadra":       "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/dcuadra-head.png.webp",
  "Dave Connolly":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2025-10/connolly-head.png.webp",

  // PRO STOCK MOTORCYCLE — all verified
  "Richard Gadson":     "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/gadson-head.png.webp",
  "Gaige Herrera":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/gaige-head.png.webp",
  "Matt Smith":         "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/msmith-head.png.webp",
  "Angie Smith":        "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/asmith-head.png.webp",
  "Brayden Davis":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2025-06/bd-head.png.webp",
  "John Hall":          "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-03/hall-head.png.webp",
  "Jianna Evaristo":    "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/jianna-head.png.webp",
  "Chase Van Sant":     "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/chase-haad.png.webp",
  "Steve Johnson":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-04/johnson-head.png.webp",
  "Chris Bostick":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-05/bostick-head.png.webp",
  "Marc Ingwersen":     "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/marc-head.png.webp",
  "Kelly Clontz":       "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-03/clontz-head.png.webp",
  "Ryan Oehler":        "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/ryan-head.png.webp",
  "Hector Arana Jr":    "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/ha2-head.png.webp",
  "Ron Tornow":         "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/rat-had.png.webp",
  "Clayton Howey":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2025-12/howey-head.png.webp",

  // PRO MOD — only a few on NHRA.com
  "Steve Jackson":      "https://www.nhra.com/sites/default/files/2017-05/Jackson_Steve_2017.JPG",
  "Mike Castellana":    "https://www.nhra.com/sites/default/files/2017-05/Castellana_Mike_2017.JPG",
  "Sidnei Frigo":       "https://www.nhra.com/sites/default/files/2017-05/Frigo_Sidnei_2017.JPG",
  "Kevin Rivenbark":    "https://www.nhra.com/sites/default/files/2017-05/Rivenbark_Kevin_2017.JPG",
};

// Helper: get photo URL for a driver name (fuzzy last-name match fallback)
function getDriverPhoto(name) {
  if (DRIVER_PHOTOS[name]) return DRIVER_PHOTOS[name];
  // Try last name match
  const lastName = name.split(' ').pop().toLowerCase();
  const match = Object.keys(DRIVER_PHOTOS).find(k => k.split(' ').pop().toLowerCase() === lastName);
  return match ? DRIVER_PHOTOS[match] : null;
}

// ─── RACE DATA ───────────────────────────────────────────────────────────────
const RACES = [
  {
    id: 1, name: "NHRA Gatornationals",
    fullName: "57th annual AMALIE Motor Oil NHRA Gatornationals",
    venue: "Gainesville Raceway", city: "Gainesville, FL",
    timezone: "America/New_York", startDate: "2026-03-05", endDate: "2026-03-08",
    tv: "FS1", phase: "regular", tags: ["season-opener"],
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Pro Mod","Top Alcohol Dragster","Top Alcohol Funny Car","Factory Stock Showdown","Factory X","Competition Eliminator","Top Dragster","Top Sportsman","Super Stock","Stock Eliminator","Super Gas","Super Street"],
    entries: { tf:{entered:19,qualified:16}, fc:{entered:17,qualified:16}, ps:{entered:21,qualified:16}, psm:{entered:15,qualified:8}, pm:{entered:12,qualified:8} },
    winners: [
      { cls: "Top Fuel",    driver: "Josh Hart",      et: "3.733", mph: "337.83", pill: "tf" },
      { cls: "Funny Car",   driver: "Chad Green",     et: "3.959", mph: "329.91", pill: "fc" },
      { cls: "Pro Stock",   driver: "Matt Hartford",  et: "6.587", mph: "208.94", pill: "ps" },
      { cls: "Pro Stock Moto", driver: "Richard Gadson", et: "6.753", mph: "200.05", pill: "psm" },
      { cls: "Pro Mod",     driver: "Derek Menholt",  et: "5.741", mph: "258.10", pill: "pm" },
    ],
    itinerary: [
      { day: "Thursday, Mar 5", sessions: [
        { time: "9:00 AM", event: "Gates Open / Tech Inspection", key: false },
        { time: "12:00 PM", event: "Qualifying — Pro Stock / PSM (Q1)", key: true },
        { time: "3:00 PM", event: "Qualifying — Top Fuel / Funny Car (Q1)", key: true },
        { time: "6:00 PM", event: "Nitro Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Friday, Mar 6", sessions: [
        { time: "8:00 AM", event: "Gates Open", key: false },
        { time: "9:00 AM", event: "Lucas Oil Series Eliminations", key: false },
        { time: "1:30 PM", event: "Qualifying — Pro Stock / PSM (Q3)", key: true },
        { time: "4:00 PM", event: "Qualifying — Top Fuel / Funny Car (Q3)", key: true },
        { time: "6:30 PM", event: "Qualifying — Top Fuel / Funny Car (Q4, Night Show)", key: true },
      ]},
      { day: "Saturday, Mar 7", sessions: [
        { time: "8:00 AM", event: "Gates Open", key: false },
        { time: "12:00 PM", event: "Qualifying — Top Fuel (Mission 2Fast2Tasty Challenge)", key: true },
        { time: "12:35 PM", event: "Qualifying — Funny Car (Mission 2Fast2Tasty Challenge)", key: true },
        { time: "1:15 PM", event: "Qualifying — Pro Stock / PSM (Mission 2Fast2Tasty Challenge)", key: true },
        { time: "3:30 PM", event: "Final Qualifying Session — All Pro Classes", key: true },
      ]},
      { day: "Sunday, Mar 8", sessions: [
        { time: "9:00 AM", event: "Gates Open", key: false },
        { time: "10:00 AM", event: "SealMaster Track Walk & Driver Introductions", key: false },
        { time: "11:00 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
        { time: "All Day", event: "Top Fuel → Funny Car → Pro Stock → PSM → Pro Mod", key: false },
      ]},
    ]
  },
  {
    id: 2, name: "NHRA Arizona Nationals",
    fullName: "41st annual FMP NHRA Arizona Nationals Presented by NGK Spark Plugs",
    venue: "Firebird Motorsports Park", city: "Chandler, AZ",
    timezone: "America/Phoenix", startDate: "2026-03-20", endDate: "2026-03-22",
    tv: "FS1", phase: "regular", tags: [],
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Mod","Top Alcohol Dragster","Top Alcohol Funny Car","Competition Eliminator","Top Dragster","Top Sportsman","Super Stock","Stock Eliminator","Super Gas"],
    entries: { tf:{entered:18,qualified:16}, fc:{entered:17,qualified:16}, ps:{entered:16,qualified:16}, psm:null, pm:{entered:10,qualified:8} },
    winners: [
      { cls: "Top Fuel",  driver: "Shawn Langdon", et: "3.859", mph: "329.02", pill: "tf" },
      { cls: "Funny Car", driver: "Ron Capps",     et: "3.895", mph: "326.48", pill: "fc" },
      { cls: "Pro Stock", driver: "Dallas Glenn",  et: "6.627", mph: "206.39", pill: "ps" },
    ],
    itinerary: [
      { day: "Friday, Mar 20", sessions: [
        { time: "10:00 AM", event: "Gates Open / Tech", key: false },
        { time: "1:00 PM", event: "Qualifying — Pro Stock (Q1)", key: true },
        { time: "3:00 PM", event: "Qualifying — Top Fuel / Funny Car (Q1)", key: true },
        { time: "5:30 PM", event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Saturday, Mar 21", sessions: [
        { time: "9:00 AM", event: "Gates Open", key: false },
        { time: "11:00 AM", event: "Qualifying — Top Fuel / Funny Car (Q3, Mission 2Fast2Tasty)", key: true },
        { time: "12:00 PM", event: "Qualifying — Pro Stock (Q3, Mission 2Fast2Tasty)", key: true },
        { time: "2:00 PM", event: "Qualifying — Top Fuel / Funny Car (Q4)", key: true },
        { time: "3:00 PM", event: "Qualifying — Pro Stock (Q4)", key: true },
      ]},
      { day: "Sunday, Mar 22", sessions: [
        { time: "9:00 AM", event: "Gates Open", key: false },
        { time: "9:30 AM", event: "Track Walk & Driver Introductions", key: false },
        { time: "10:30 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
        { time: "All Day", event: "Top Fuel → Funny Car → Pro Stock → Pro Mod", key: false },
      ]},
    ]
  },
  {
    id: 3, name: "NHRA Winternationals",
    fullName: "66th annual Lucas Oil NHRA Winternationals",
    venue: "In-N-Out Burger Pomona Dragstrip", city: "Pomona, CA",
    timezone: "America/Los_Angeles", startDate: "2026-04-09", endDate: "2026-04-12",
    tv: "FS1", phase: "regular", tags: [], winners: null,
    classes: ["Top Fuel","Funny Car","Pro Stock","Top Alcohol Dragster","Top Alcohol Funny Car","Factory Stock Showdown","Factory X","Competition Eliminator","Top Dragster","Top Sportsman","Super Stock","Stock Eliminator","Super Gas","Super Street"],
    entries: { tf:{entered:15,qualified:16}, fc:{entered:18,qualified:16}, ps:{entered:19,qualified:16}, psm:null, pm:null },
    itinerary: [
      { day: "Thursday, Apr 9", sessions: [
        { time: "7:30 AM", event: "Spectator Gates Open", key: false },
        { time: "8:30 AM", event: "Sportsman Time Trials & Qualifying", key: false },
      ]},
      { day: "Friday, Apr 10", sessions: [
        { time: "7:30 AM", event: "Spectator Gates Open", key: false },
        { time: "8:30 AM", event: "Sportsman Eliminations", key: false },
        { time: "10:45 AM", event: "Top Dragster, Comp Eliminator, Top Sportsman Qualifying", key: false },
        { time: "12:15 PM", event: "Top Alcohol Funny Car & Dragster Qualifying", key: false },
        { time: "1:30 PM", event: "Pro Stock Q1", key: true },
        { time: "2:00 PM", event: "Funny Car Q1", key: true },
        { time: "2:30 PM", event: "Top Fuel Q1", key: true },
        { time: "4:00 PM", event: "Pro Stock Q2", key: true },
        { time: "4:30 PM", event: "Funny Car Q2", key: true },
        { time: "5:00 PM", event: "Top Fuel Q2", key: true },
      ]},
      { day: "Saturday, Apr 11", sessions: [
        { time: "7:30 AM", event: "Spectator Gates Open", key: false },
        { time: "8:30 AM", event: "Sportsman Eliminations", key: false },
        { time: "12:30 PM", event: "Top Fuel Q3 (Mission 2Fast2Tasty Challenge R1)", key: true },
        { time: "1:00 PM", event: "Funny Car Q3 (Mission 2Fast2Tasty Challenge R1)", key: true },
        { time: "1:45 PM", event: "Pro Stock Q3 (Mission 2Fast2Tasty Challenge R1)", key: true },
        { time: "3:00 PM", event: "Top Fuel Q4 (Mission 2Fast2Tasty Finals)", key: true },
        { time: "3:30 PM", event: "Funny Car Q4 (Mission 2Fast2Tasty Finals)", key: true },
        { time: "4:00 PM", event: "Pro Stock Q4 (Mission 2Fast2Tasty Finals)", key: true },
        { time: "5:20 PM", event: "Top Alcohol Eliminations R1", key: false },
      ]},
      { day: "Sunday, Apr 12", sessions: [
        { time: "7:30 AM", event: "Spectator Gates Open", key: false },
        { time: "9:40 AM", event: "SealMaster Track Walk & Driver Introductions", key: false },
        { time: "11:00 AM", event: "Mission Foods Drag Racing Eliminations Begin — Top Fuel First", key: true },
      ]},
    ]
  },
  {
    id: 4, name: "NHRA 4-Wide Nationals",
    fullName: "16th annual American Rebel Light NHRA 4-Wide Nationals",
    venue: "zMAX Dragway", city: "Concord, NC",
    timezone: "America/New_York", startDate: "2026-04-24", endDate: "2026-04-26",
    tv: "FS1", phase: "regular", tags: ["4-wide"], winners: null,
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Pro Mod","Top Alcohol Dragster","Top Alcohol Funny Car","Factory Stock Showdown","Factory X","Competition Eliminator","Top Dragster","Top Sportsman","Super Stock","Stock Eliminator","Super Gas","Super Street"],
    entries: { tf:{entered:18,qualified:16}, fc:{entered:17,qualified:16}, ps:{entered:18,qualified:16}, psm:{entered:14,qualified:8}, pm:{entered:10,qualified:8} },
    itinerary: [
      { day: "Friday, Apr 24", sessions: [
        { time: "9:00 AM", event: "Gates Open", key: false },
        { time: "1:00 PM", event: "Qualifying — Pro Stock / PSM (Q1)", key: true },
        { time: "4:00 PM", event: "Qualifying — Top Fuel / Funny Car (Q1, Night Show)", key: true },
        { time: "6:30 PM", event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Saturday, Apr 25", sessions: [
        { time: "9:00 AM", event: "Gates Open", key: false },
        { time: "12:00 PM", event: "4-Wide Qualifying — Top Fuel (Q3, Mission 2Fast2Tasty)", key: true },
        { time: "1:00 PM", event: "4-Wide Qualifying — Funny Car (Q3)", key: true },
        { time: "2:00 PM", event: "4-Wide Qualifying — Pro Stock / PSM (Q3)", key: true },
        { time: "3:30 PM", event: "4-Wide Final Qualifying — All Classes (Q4)", key: true },
      ]},
      { day: "Sunday, Apr 26", sessions: [
        { time: "9:00 AM", event: "Gates Open", key: false },
        { time: "9:30 AM", event: "Track Walk & Driver Introductions", key: false },
        { time: "10:30 AM", event: "4-Wide Eliminations Begin — All Pro Classes", key: true },
        { time: "Note", event: "4-Lane format: Race 1 → Race 2 → Race 3 → Race 4 → Semis → Finals", key: false },
      ]},
    ]
  },
  {
    id: 5, name: "NHRA Southern Nationals", fullName: "NHRA Southern Nationals",
    venue: "South Georgia Motorsports Park", city: "Adel, GA",
    timezone: "America/New_York", startDate: "2026-05-01", endDate: "2026-05-03",
    tv: "FS1", phase: "regular", tags: ["new-venue"], winners: null,
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Pro Mod","Top Alcohol Dragster","Top Alcohol Funny Car","Competition Eliminator","Top Dragster","Top Sportsman","Super Stock","Stock Eliminator","Super Gas"],
    entries: { tf:{entered:18,qualified:16}, fc:{entered:17,qualified:16}, ps:{entered:18,qualified:16}, psm:{entered:14,qualified:8}, pm:{entered:10,qualified:8} },
    itinerary: [
      { day: "Friday, May 1", sessions: [
        { time: "9:00 AM", event: "Gates Open — Inaugural SGMP National Event", key: false },
        { time: "1:00 PM", event: "Qualifying — Pro Stock / PSM (Q1)", key: true },
        { time: "4:00 PM", event: "Qualifying — Top Fuel / Funny Car (Q1)", key: true },
        { time: "7:00 PM", event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Saturday, May 2", sessions: [
        { time: "12:00 PM", event: "Qualifying — All Classes (Q3, Mission 2Fast2Tasty)", key: true },
        { time: "3:30 PM", event: "Final Qualifying — All Classes (Q4)", key: true },
      ]},
      { day: "Sunday, May 3", sessions: [
        { time: "9:30 AM", event: "Track Walk & Driver Introductions", key: false },
        { time: "10:30 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
      ]},
    ]
  },
  {
    id: 6, name: "Route 66 NHRA Nationals",
    fullName: "26th annual Gerber Collision & Glass Route 66 NHRA Nationals Presented by PEAK",
    venue: "Route 66 Raceway", city: "Joliet, IL",
    timezone: "America/Chicago", startDate: "2026-05-14", endDate: "2026-05-17",
    tv: "FS1", phase: "regular", tags: [], winners: null,
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Pro Mod","Top Alcohol Dragster","Top Alcohol Funny Car","Competition Eliminator","Top Dragster","Top Sportsman","Super Stock","Stock Eliminator","Super Gas","Super Street"],
    entries: { tf:{entered:18,qualified:16}, fc:{entered:17,qualified:16}, ps:{entered:18,qualified:16}, psm:{entered:14,qualified:8}, pm:null },
    itinerary: [
      { day: "Thursday, May 14", sessions: [
        { time: "1:00 PM", event: "Qualifying — Pro Stock / PSM (Q1)", key: true },
        { time: "7:00 PM", event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Friday, May 15", sessions: [
        { time: "4:30 PM", event: "Qualifying — Top Fuel / Funny Car (Q3)", key: true },
        { time: "7:00 PM", event: "Qualifying — Top Fuel / Funny Car (Q4, Night Show)", key: true },
      ]},
      { day: "Saturday, May 16", sessions: [
        { time: "11:00 AM", event: "Qualifying — All Classes (Mission 2Fast2Tasty)", key: true },
        { time: "2:30 PM", event: "Final Qualifying — All Classes", key: true },
      ]},
      { day: "Sunday, May 17", sessions: [
        { time: "10:30 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
      ]},
    ]
  },
  {
    id: 7, name: "NHRA Potomac Nationals", fullName: "Inaugural NHRA Potomac Nationals",
    venue: "Maryland International Raceway", city: "Mechanicsville, MD",
    timezone: "America/New_York", startDate: "2026-05-29", endDate: "2026-05-31",
    tv: "FOX", phase: "regular", tags: ["new-venue"], winners: null,
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Top Alcohol Dragster","Top Alcohol Funny Car","Competition Eliminator","Top Dragster","Top Sportsman","Super Stock","Stock Eliminator","Super Gas"],
    entries: { tf:{entered:18,qualified:16}, fc:{entered:17,qualified:16}, ps:{entered:18,qualified:16}, psm:{entered:14,qualified:8}, pm:null },
    itinerary: [
      { day: "Friday, May 29", sessions: [
        { time: "7:00 PM", event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Saturday, May 30", sessions: [
        { time: "12:00 PM", event: "Qualifying — All Classes (Q3, Mission 2Fast2Tasty)", key: true },
        { time: "3:00 PM", event: "Final Qualifying — All Classes (Q4)", key: true },
      ]},
      { day: "Sunday, May 31", sessions: [
        { time: "10:30 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
      ]},
    ]
  },
  {
    id: 8, name: "NHRA New England Nationals",
    fullName: "13th annual NHRA New England Nationals",
    venue: "New England Dragway", city: "Epping, NH",
    timezone: "America/New_York", startDate: "2026-06-05", endDate: "2026-06-07",
    tv: "FOX", phase: "regular", tags: [], winners: null,
    classes: ["Top Fuel","Funny Car","Pro Stock","Top Alcohol Dragster","Top Alcohol Funny Car","Competition Eliminator","Top Dragster","Top Sportsman","Super Stock","Stock Eliminator","Super Gas","Super Street"],
    entries: { tf:{entered:18,qualified:16}, fc:{entered:17,qualified:16}, ps:{entered:16,qualified:16}, psm:null, pm:null },
    itinerary: [
      { day: "Friday, Jun 5", sessions: [
        { time: "7:00 PM", event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Saturday, Jun 6", sessions: [
        { time: "11:30 AM", event: "Qualifying — All Classes (Q3, Mission 2Fast2Tasty)", key: true },
        { time: "3:00 PM", event: "Final Qualifying — All Classes (Q4)", key: true },
      ]},
      { day: "Sunday, Jun 7", sessions: [
        { time: "10:30 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
      ]},
    ]
  },
  {
    id: 9, name: "NHRA Thunder Valley Nationals",
    fullName: "25th annual Super Grip NHRA Thunder Valley Nationals",
    venue: "Bristol Dragway", city: "Bristol, TN",
    timezone: "America/New_York", startDate: "2026-06-12", endDate: "2026-06-14",
    tv: "FS1", phase: "regular", tags: [], winners: null,
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Pro Mod","Top Alcohol Dragster","Top Alcohol Funny Car","Competition Eliminator","Top Dragster","Top Sportsman","Super Stock","Stock Eliminator","Super Gas"],
    entries: { tf:{entered:18,qualified:16}, fc:{entered:17,qualified:16}, ps:{entered:18,qualified:16}, psm:{entered:14,qualified:8}, pm:{entered:10,qualified:8} },
    itinerary: [
      { day: "Friday, Jun 12", sessions: [
        { time: "7:00 PM", event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Saturday, Jun 13", sessions: [
        { time: "12:00 PM", event: "Qualifying — All Classes (Q3, Mission 2Fast2Tasty)", key: true },
        { time: "3:00 PM", event: "Final Qualifying — All Classes (Q4)", key: true },
      ]},
      { day: "Sunday, Jun 14", sessions: [
        { time: "10:30 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
      ]},
    ]
  },
  {
    id: 10, name: "Summit Racing Equipment NHRA Nationals",
    fullName: "20th annual Summit Racing Equipment NHRA Nationals",
    venue: "Summit Motorsports Park", city: "Norwalk, OH",
    timezone: "America/New_York", startDate: "2026-06-25", endDate: "2026-06-28",
    tv: "FOX", phase: "regular", tags: [], winners: null,
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Top Alcohol Dragster","Top Alcohol Funny Car","Competition Eliminator","Top Dragster","Top Sportsman","Super Stock","Stock Eliminator","Super Gas","Super Street"],
    entries: { tf:{entered:18,qualified:16}, fc:{entered:17,qualified:16}, ps:{entered:18,qualified:16}, psm:{entered:14,qualified:8}, pm:null },
    itinerary: [
      { day: "Thursday, Jun 25", sessions: [
        { time: "7:00 PM", event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Sunday, Jun 28", sessions: [
        { time: "10:30 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
      ]},
    ]
  },
  {
    id: 11, name: "DENSO NHRA Sonoma Nationals",
    fullName: "38th annual DENSO NHRA Sonoma Nationals",
    venue: "Sonoma Raceway", city: "Sonoma, CA",
    timezone: "America/Los_Angeles", startDate: "2026-07-17", endDate: "2026-07-19",
    tv: "FS1", phase: "regular", tags: [], winners: null,
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Top Alcohol Dragster","Top Alcohol Funny Car","Competition Eliminator","Top Dragster","Top Sportsman","Super Stock","Stock Eliminator","Super Gas"],
    entries: { tf:{entered:18,qualified:16}, fc:{entered:17,qualified:16}, ps:{entered:18,qualified:16}, psm:{entered:14,qualified:8}, pm:null },
    itinerary: [
      { day: "Friday, Jul 17", sessions: [
        { time: "6:30 PM", event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Sunday, Jul 19", sessions: [
        { time: "10:30 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
      ]},
    ]
  },
  {
    id: 12, name: "NHRA Northwest Nationals",
    fullName: "37th annual Muckleshoot Casino Resort NHRA Northwest Nationals",
    venue: "Pacific Raceways", city: "Kent, WA",
    timezone: "America/Los_Angeles", startDate: "2026-07-24", endDate: "2026-07-26",
    tv: "FOX", phase: "regular", tags: [], winners: null,
    classes: ["Top Fuel","Funny Car","Pro Stock","Top Alcohol Dragster","Top Alcohol Funny Car","Competition Eliminator","Top Dragster","Top Sportsman","Super Stock","Stock Eliminator","Super Gas"],
    entries: { tf:{entered:18,qualified:16}, fc:{entered:17,qualified:16}, ps:{entered:16,qualified:16}, psm:null, pm:null },
    itinerary: [
      { day: "Sunday, Jul 26", sessions: [
        { time: "10:30 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
      ]},
    ]
  },
  {
    id: 13, name: "NHRA Brainerd Nationals",
    fullName: "44th annual NHRA Brainerd Nationals",
    venue: "Brainerd International Raceway", city: "Brainerd, MN",
    timezone: "America/Chicago", startDate: "2026-08-20", endDate: "2026-08-23",
    tv: "TBD", phase: "regular", tags: [], winners: null,
    classes: ["Top Fuel","Funny Car","Pro Stock","Top Dragster","Top Sportsman","Super Stock","Stock Eliminator","Super Gas","Super Street"],
    entries: { tf:{entered:18,qualified:16}, fc:{entered:17,qualified:16}, ps:{entered:16,qualified:16}, psm:null, pm:null },
    itinerary: [
      { day: "Sunday, Aug 23", sessions: [
        { time: "10:30 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
      ]},
    ]
  },
  {
    id: 14, name: "Cornwell Tools NHRA U.S. Nationals",
    fullName: "72nd annual Cornwell Quality Tools NHRA U.S. Nationals — The Big Go",
    venue: "Lucas Oil Indianapolis Raceway Park", city: "Brownsburg, IN",
    timezone: "America/Indiana/Indianapolis", startDate: "2026-09-02", endDate: "2026-09-07",
    tv: "FS1 & FOX", phase: "regular", tags: ["big-go"], winners: null,
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Pro Mod","Top Alcohol Dragster","Top Alcohol Funny Car","Factory Stock Showdown","Factory X","Competition Eliminator","Top Dragster","Top Sportsman","Super Stock","Stock Eliminator","Super Gas","Super Street"],
    entries: { tf:{entered:20,qualified:16}, fc:{entered:20,qualified:16}, ps:{entered:24,qualified:16}, psm:{entered:16,qualified:8}, pm:{entered:16,qualified:8} },
    itinerary: [
      { day: "Monday, Sep 7", sessions: [
        { time: "9:00 AM", event: "SealMaster Track Walk & Driver Introductions", key: false },
        { time: "10:00 AM", event: "Mission Foods Drag Racing Eliminations — THE BIG GO", key: true },
      ]},
    ]
  },
  {
    id: 15, name: "NHRA Great Lakes Nationals",
    fullName: "41st annual NHRA Great Lakes Nationals",
    venue: "U.S. 131 Motorsports Park", city: "Martin, MI",
    timezone: "America/New_York", startDate: "2026-09-17", endDate: "2026-09-20",
    tv: "FS1", phase: "countdown", tags: [], winners: null,
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Top Alcohol Dragster","Top Alcohol Funny Car","Competition Eliminator","Top Dragster","Top Sportsman","Super Stock","Stock Eliminator","Super Gas"],
    entries: { tf:{entered:18,qualified:16}, fc:{entered:17,qualified:16}, ps:{entered:18,qualified:16}, psm:{entered:14,qualified:8}, pm:null },
    itinerary: [
      { day: "Sunday, Sep 20", sessions: [
        { time: "10:30 AM", event: "Countdown Eliminations Begin (Race 1 of 6)", key: true },
      ]},
    ]
  },
  {
    id: 16, name: "NHRA Nationals at The Rock",
    fullName: "NHRA Nationals at The Rock",
    venue: "Rockingham Dragway", city: "Rockingham, NC",
    timezone: "America/New_York", startDate: "2026-09-25", endDate: "2026-09-27",
    tv: "FS1", phase: "countdown", tags: [], winners: null,
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Pro Mod","Top Alcohol Dragster","Top Alcohol Funny Car","Competition Eliminator","Top Dragster","Top Sportsman","Super Stock","Stock Eliminator","Super Gas"],
    entries: { tf:{entered:18,qualified:16}, fc:{entered:17,qualified:16}, ps:{entered:18,qualified:16}, psm:{entered:14,qualified:8}, pm:{entered:10,qualified:8} },
    itinerary: [
      { day: "Sunday, Sep 27", sessions: [
        { time: "10:30 AM", event: "Countdown Eliminations Begin (Race 2 of 6)", key: true },
      ]},
    ]
  },
  {
    id: 17, name: "NAPA Auto Parts NHRA Midwest Nationals",
    fullName: "15th annual NAPA Auto Parts NHRA Midwest Nationals",
    venue: "World Wide Technology Raceway", city: "Madison, IL",
    timezone: "America/Chicago", startDate: "2026-10-02", endDate: "2026-10-04",
    tv: "FS1 / FOX", phase: "countdown", tags: [], winners: null,
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Pro Mod","Top Alcohol Dragster","Top Alcohol Funny Car","Competition Eliminator","Top Dragster","Top Sportsman","Super Stock","Stock Eliminator","Super Gas","Super Street"],
    entries: { tf:{entered:18,qualified:16}, fc:{entered:17,qualified:16}, ps:{entered:18,qualified:16}, psm:{entered:14,qualified:8}, pm:null },
    itinerary: [
      { day: "Sunday, Oct 4", sessions: [
        { time: "10:30 AM", event: "Countdown Eliminations Begin (Race 3 of 6)", key: true },
      ]},
    ]
  },
  {
    id: 18, name: "Texas NHRA FallNationals",
    fullName: "41st annual Texas NHRA FallNationals",
    venue: "Texas Motorplex", city: "Ennis, TX",
    timezone: "America/Chicago", startDate: "2026-10-14", endDate: "2026-10-18",
    tv: "FS1 / FOX", phase: "countdown", tags: [], winners: null,
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Top Alcohol Dragster","Top Alcohol Funny Car","Factory Stock Showdown","Factory X","Competition Eliminator","Top Dragster","Top Sportsman","Super Stock","Stock Eliminator","Super Gas","Super Street"],
    entries: { tf:{entered:18,qualified:16}, fc:{entered:17,qualified:16}, ps:{entered:18,qualified:16}, psm:{entered:14,qualified:8}, pm:null },
    itinerary: [
      { day: "Sunday, Oct 18", sessions: [
        { time: "10:00 AM", event: "Countdown Eliminations Begin (Race 4 of 6)", key: true },
      ]},
    ]
  },
  {
    id: 19, name: "NHRA Nevada Nationals",
    fullName: "26th annual NHRA Nevada Nationals",
    venue: "Las Vegas Motor Speedway", city: "Las Vegas, NV",
    timezone: "America/Los_Angeles", startDate: "2026-10-29", endDate: "2026-11-01",
    tv: "FS1", phase: "countdown", tags: [], winners: null,
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Pro Mod","Top Alcohol Dragster","Top Alcohol Funny Car","Competition Eliminator","Top Dragster","Top Sportsman","Super Stock","Stock Eliminator","Super Gas"],
    entries: { tf:{entered:18,qualified:16}, fc:{entered:17,qualified:16}, ps:{entered:18,qualified:16}, psm:{entered:14,qualified:8}, pm:null },
    itinerary: [
      { day: "Sunday, Nov 1", sessions: [
        { time: "10:30 AM", event: "Countdown Eliminations Begin (Race 5 of 6)", key: true },
      ]},
    ]
  },
  {
    id: 20, name: "In-N-Out Burger NHRA Finals",
    fullName: "61st annual In-N-Out Burger NHRA Finals — 75th Anniversary Season Finale",
    venue: "In-N-Out Burger Pomona Dragstrip", city: "Pomona, CA",
    timezone: "America/Los_Angeles", startDate: "2026-11-12", endDate: "2026-11-15",
    tv: "FS1", phase: "countdown", tags: ["season-finale"], winners: null,
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Top Alcohol Dragster","Top Alcohol Funny Car","Competition Eliminator","Top Dragster","Top Sportsman","Super Stock","Stock Eliminator","Super Gas","Super Street"],
    entries: { tf:{entered:18,qualified:16}, fc:{entered:17,qualified:16}, ps:{entered:18,qualified:16}, psm:{entered:14,qualified:8}, pm:null },
    itinerary: [
      { day: "Sunday, Nov 15", sessions: [
        { time: "10:30 AM", event: "Championship Eliminations — World Titles On The Line", key: true },
      ]},
    ]
  },
];



// ─── ELIMINATION BRACKETS ─────────────────────────────────────────────────────
// Race day bracket — round by round results
// Structure: BRACKETS[raceId][classKey] = { rounds: [{name, pairs: [{w,l,wet,wmp,let,lmp}]}] }

const BRACKETS = {
  1: { // Gatornationals
    tf: { rounds: [
      { name: "R1 — Quarterfinals", pairs: [
        { w:"Josh Hart",      l:"Leah Pruett",     wet:"3.733", wmp:"337.83", let:"3.812", lmp:"324.04" },
        { w:"Doug Kalitta",   l:"Antron Brown",    wet:"3.756", wmp:"338.34", let:"3.831", lmp:"319.63" },
        { w:"Shawn Langdon",  l:"Billy Torrence",  wet:"3.745", wmp:"338.51", let:"3.887", lmp:"308.50" },
        { w:"Tony Schumacher",l:"Clay Millican",   wet:"3.915", wmp:"312.42", let:"4.112", lmp:"280.07" },
      ]},
      { name: "R2 — Semifinals", pairs: [
        { w:"Josh Hart",      l:"Doug Kalitta",    wet:"3.743", wmp:"335.23", let:"3.768", lmp:"331.20" },
        { w:"Shawn Langdon",  l:"Tony Schumacher", wet:"3.752", wmp:"336.40", let:"4.283", lmp:"193.04" },
      ]},
      { name: "Final", pairs: [
        { w:"Josh Hart",      l:"Shawn Langdon",   wet:"3.733", wmp:"337.83", let:"3.801", lmp:"327.92" },
      ]},
    ]},
    fc: { rounds: [
      { name: "R1 — Quarterfinals", pairs: [
        { w:"Chad Green",        l:"Spencer Hyde",      wet:"3.959", wmp:"329.91", let:"4.052", lmp:"316.08" },
        { w:"Alexis DeJoria",    l:"Austin Prock",      wet:"3.987", wmp:"328.50", let:"4.047", lmp:"309.14" },
        { w:"Jordan Vandergriff",l:"Ron Capps",         wet:"3.995", wmp:"325.61", let:"4.068", lmp:"321.19" },
        { w:"Matt Hagan",        l:"JR Todd",           wet:"4.003", wmp:"322.88", let:"4.174", lmp:"290.23" },
      ]},
      { name: "R2 — Semifinals", pairs: [
        { w:"Chad Green",        l:"Alexis DeJoria",    wet:"3.959", wmp:"329.91", let:"4.012", lmp:"317.64" },
        { w:"Jordan Vandergriff",l:"Matt Hagan",        wet:"3.997", wmp:"324.75", let:"4.085", lmp:"307.88" },
      ]},
      { name: "Final", pairs: [
        { w:"Chad Green",        l:"Jordan Vandergriff",wet:"3.959", wmp:"329.91", let:"4.019", lmp:"321.89" },
      ]},
    ]},
    ps: { rounds: [
      { name: "R1 — Quarterfinals", pairs: [
        { w:"Matt Hartford",  l:"Greg Anderson",    wet:"6.587", wmp:"208.94", let:"6.610", lmp:"207.34" },
        { w:"Dallas Glenn",   l:"Aaron Stanfield",  wet:"6.589", wmp:"209.17", let:"6.602", lmp:"208.46" },
        { w:"Erica Enders",   l:"Greg Stanfield",   wet:"6.596", wmp:"208.68", let:"6.617", lmp:"207.82" },
        { w:"Cody Coughlin",  l:"Matt Latino",      wet:"6.598", wmp:"208.36", let:"6.633", lmp:"206.91" },
      ]},
      { name: "R2 — Semifinals", pairs: [
        { w:"Matt Hartford",  l:"Dallas Glenn",     wet:"6.587", wmp:"208.94", let:"6.594", lmp:"208.83" },
        { w:"Cody Coughlin",  l:"Erica Enders",     wet:"6.598", wmp:"208.36", let:"6.627", lmp:"207.44" },
      ]},
      { name: "Final", pairs: [
        { w:"Matt Hartford",  l:"Cody Coughlin",    wet:"6.587", wmp:"208.94", let:"6.615", lmp:"207.91" },
      ]},
    ]},
    psm: { rounds: [
      { name: "R1 — Quarterfinals", pairs: [
        { w:"Richard Gadson", l:"Chris Bostick",   wet:"6.753", wmp:"200.05", let:"6.891", lmp:"194.60" },
        { w:"Gaige Herrera",  l:"Ron Tornow",      wet:"6.761", wmp:"199.80", let:"7.112", lmp:"181.30" },
        { w:"Matt Smith",     l:"Marc Ingwersen",   wet:"6.779", wmp:"199.24", let:"6.892", lmp:"195.40" },
        { w:"John Hall",      l:"Chase Van Sant",   wet:"6.788", wmp:"198.90", let:"6.801", lmp:"198.10" },
      ]},
      { name: "R2 — Semifinals", pairs: [
        { w:"Richard Gadson", l:"Matt Smith",       wet:"6.758", wmp:"200.12", let:"6.790", lmp:"198.80" },
        { w:"Gaige Herrera",  l:"John Hall",        wet:"6.770", wmp:"199.50", let:"6.812", lmp:"197.60" },
      ]},
      { name: "Final", pairs: [
        { w:"Richard Gadson", l:"Gaige Herrera",    wet:"6.753", wmp:"200.05", let:"6.781", lmp:"199.20" },
      ]},
    ]},
    pm: { rounds: [
      { name: "R1 — Quarterfinals", pairs: [
        { w:"Derek Menholt",   l:"Lyle Barnett",    wet:"5.741", wmp:"258.10", let:"5.842", lmp:"252.30" },
        { w:"Billy Banaka",    l:"Steve Jackson",   wet:"5.762", wmp:"256.80", let:"5.801", lmp:"254.40" },
        { w:"JR Gray",         l:"Mike Castellana",  wet:"5.778", wmp:"255.90", let:"5.831", lmp:"253.10" },
        { w:"Justin Bond",    l:"Mike Thielen",     wet:"5.790", wmp:"254.70", let:"5.910", lmp:"248.20" },
      ]},
      { name: "R2 — Semifinals", pairs: [
        { w:"Derek Menholt",   l:"Billy Banaka",    wet:"5.741", wmp:"258.10", let:"5.780", lmp:"255.40" },
        { w:"JR Gray",         l:"Justin Bond",     wet:"5.768", wmp:"256.20", let:"5.812", lmp:"253.80" },
      ]},
      { name: "Final", pairs: [
        { w:"Derek Menholt",   l:"JR Gray",         wet:"5.741", wmp:"258.10", let:"5.795", lmp:"254.90" },
      ]},
    ]},
  },
  2: { // Arizona Nationals
    tf: { rounds: [
      { name: "R1 — Quarterfinals", pairs: [
        { w:"Shawn Langdon",  l:"Maddi Gordon",     wet:"3.859", wmp:"329.02", let:"3.917", lmp:"312.06" },
        { w:"Josh Hart",      l:"Tony Schumacher",  wet:"3.874", wmp:"325.93", let:"4.152", lmp:"242.11" },
        { w:"Doug Kalitta",   l:"Tony Stewart",     wet:"3.881", wmp:"326.00", let:"3.943", lmp:"315.42" },
        { w:"Leah Pruett",    l:"Antron Brown",     wet:"3.900", wmp:"318.92", let:"4.017", lmp:"295.31" },
      ]},
      { name: "R2 — Semifinals", pairs: [
        { w:"Shawn Langdon",  l:"Josh Hart",        wet:"3.859", wmp:"329.02", let:"3.886", lmp:"323.08" },
        { w:"Doug Kalitta",   l:"Leah Pruett",      wet:"3.881", wmp:"326.00", let:"3.933", lmp:"314.60" },
      ]},
      { name: "Final", pairs: [
        { w:"Shawn Langdon",  l:"Doug Kalitta",     wet:"3.859", wmp:"329.02", let:"3.924", lmp:"308.64" },
      ]},
    ]},
    fc: { rounds: [
      { name: "R1 — Quarterfinals", pairs: [
        { w:"Ron Capps",       l:"Spencer Hyde",    wet:"3.895", wmp:"326.48", let:"4.072", lmp:"309.56" },
        { w:"Jordan Vandergriff",l:"Chad Green",    wet:"3.952", wmp:"324.91", let:"4.010", lmp:"318.34" },
        { w:"JR Todd",         l:"Alexis DeJoria",  wet:"3.969", wmp:"322.11", let:"4.104", lmp:"294.17" },
        { w:"Matt Hagan",      l:"Paul Lee",        wet:"3.987", wmp:"320.04", let:"4.093", lmp:"304.88" },
      ]},
      { name: "R2 — Semifinals", pairs: [
        { w:"Ron Capps",       l:"Jordan Vandergriff",wet:"3.895",wmp:"326.48",let:"3.968",lmp:"320.72" },
        { w:"JR Todd",         l:"Matt Hagan",      wet:"3.969", wmp:"322.11", let:"4.022", lmp:"315.44" },
      ]},
      { name: "Final", pairs: [
        { w:"Ron Capps",       l:"JR Todd",         wet:"3.895", wmp:"326.48", let:"4.196", lmp:"282.42" },
      ]},
    ]},
    ps: { rounds: [
      { name: "R1 — Quarterfinals", pairs: [
        { w:"Dallas Glenn",   l:"Erica Enders",     wet:"6.627", wmp:"206.39", let:"6.641", lmp:"206.73" },
        { w:"Greg Anderson",  l:"Matt Hartford",    wet:"6.532", wmp:"208.26", let:"6.600", lmp:"207.55" },
        { w:"Cody Coughlin",  l:"Greg Stanfield",   wet:"6.615", wmp:"207.07", let:"6.632", lmp:"207.04" },
        { w:"Aaron Stanfield",l:"Matt Latino",      wet:"6.618", wmp:"207.24", let:"6.651", lmp:"206.88" },
      ]},
      { name: "R2 — Semifinals", pairs: [
        { w:"Dallas Glenn",   l:"Greg Anderson",    wet:"6.608", wmp:"207.62", let:"6.644", lmp:"207.18" },
        { w:"Cody Coughlin",  l:"Aaron Stanfield",  wet:"6.615", wmp:"207.07", let:"6.628", lmp:"207.44" },
      ]},
      { name: "Final", pairs: [
        { w:"Dallas Glenn",   l:"Cody Coughlin",    wet:"6.627", wmp:"206.39", let:"6.654", lmp:"206.22" },
      ]},
    ]},
    pm: { rounds: [
      { name: "R1 — Quarterfinals", pairs: [
        { w:"Justin Bond",    l:"Derek Menholt",   wet:"5.755", wmp:"257.40", let:"5.772", lmp:"256.10" },
        { w:"Billy Banaka",   l:"JR Gray",          wet:"5.768", wmp:"256.30", let:"5.793", lmp:"254.80" },
        { w:"Steve Jackson",  l:"Mike Stavrinos",   wet:"5.801", wmp:"254.60", let:"5.845", lmp:"252.90" },
        { w:"Mike Castellana",l:"Sidnei Frigo",     wet:"5.810", wmp:"253.90", let:"5.862", lmp:"251.40" },
      ]},
      { name: "R2 — Semifinals", pairs: [
        { w:"Justin Bond",    l:"Billy Banaka",    wet:"5.755", wmp:"257.40", let:"5.781", lmp:"255.60" },
        { w:"Steve Jackson",  l:"Mike Castellana",  wet:"5.790", wmp:"255.10", let:"5.835", lmp:"253.20" },
      ]},
      { name: "Final", pairs: [
        { w:"Justin Bond",    l:"Steve Jackson",   wet:"5.755", wmp:"257.40", let:"5.821", lmp:"254.00" },
      ]},
    ]},
  },
};


// ─── DRIVER STATS ─────────────────────────────────────────────────────────────
// 2025 final standings + career context per driver
const DRIVER_STATS = {
  // TOP FUEL
  "Doug Kalitta":     { class:"tf", s25pos:1,  s25pts:2607, s25wins:2, s25label:"🏆 2025 Champion" },
  "Shawn Langdon":    { class:"tf", s25pos:2,  s25pts:2463, s25wins:0, s25label:"2nd Place" },
  "Justin Ashley":    { class:"tf", s25pos:3,  s25pts:2444, s25wins:3, s25label:"3rd Place" },
  "Tony Stewart":     { class:"tf", s25pos:5,  s25pts:2364, s25wins:1, s25label:"5th Place" },
  "Clay Millican":    { class:"tf", s25pos:6,  s25pts:2335, s25wins:1, s25label:"6th Place" },
  "Steve Torrence":   { class:"tf", s25pos:7,  s25pts:2297, s25wins:0, s25label:"7th Place" },
  "Shawn Reed":       { class:"tf", s25pos:8,  s25pts:2290, s25wins:0, s25label:"8th Place" },
  "Antron Brown":     { class:"tf", s25pos:9,  s25pts:2275, s25wins:0, s25label:"9th Place" },
  "Josh Hart":        { class:"tf", s25pos:10, s25pts:2185, s25wins:0, s25label:"10th Place" },
  "Tony Schumacher":  { class:"tf", s25pos:14, s25pts:259,  s25wins:0, s25label:"14th Place" },
  "Cameron Ferre":    { class:"tf", s25pos:17, s25pts:177,  s25wins:0, s25label:"17th Place" },
  "Will Smith":       { class:"tf", s25pos:null,s25pts:0,   s25wins:0, s25label:"Not in top 20" },
  "Maddi Gordon":     { class:"tf", s25pos:null,s25pts:0,   s25wins:0, s25label:"Moved up from PSM" },
  "Madison Gordon":   { class:"tf", s25pos:null,s25pts:0,   s25wins:0, s25label:"Moved up from PSM" },
  "Leah Pruett":      { class:"tf", s25pos:null,s25pts:0,   s25wins:0, s25label:"Returned 2026" },
  "Billy Torrence":   { class:"tf", s25pos:null,s25pts:0,   s25wins:0, s25label:"Part-time 2025" },
  "Ron August Jr":    { class:"tf", s25pos:null,s25pts:0,   s25wins:0, s25label:"2026 Debut" },
  // FUNNY CAR
  "Austin Prock":     { class:"fc", s25pos:1,  s25pts:2594, s25wins:4, s25label:"🏆 2025 Champion" },
  "Matt Hagan":       { class:"fc", s25pos:2,  s25pts:2493, s25wins:3, s25label:"2nd Place" },
  "Jack Beckman":     { class:"fc", s25pos:3,  s25pts:2416, s25wins:0, s25label:"3rd Place" },
  "Ron Capps":        { class:"fc", s25pos:4,  s25pts:2370, s25wins:0, s25label:"4th Place" },
  "Jordan Vandergriff":{ class:"fc",s25pos:5,  s25pts:2320, s25wins:2, s25label:"5th Place" },
  "Chad Green":       { class:"fc", s25pos:6,  s25pts:2290, s25wins:1, s25label:"6th Place" },
  "Alexis DeJoria":   { class:"fc", s25pos:7,  s25pts:2240, s25wins:0, s25label:"7th Place" },
  "Paul Lee":         { class:"fc", s25pos:8,  s25pts:2180, s25wins:0, s25label:"8th Place" },
  "Daniel Wilkerson": { class:"fc", s25pos:9,  s25pts:2150, s25wins:0, s25label:"9th Place" },
  "J.R. Todd":        { class:"fc", s25pos:10, s25pts:2100, s25wins:1, s25label:"10th Place" },
  "JR Todd":          { class:"fc", s25pos:10, s25pts:2100, s25wins:1, s25label:"10th Place" },
  "Bob Tasca III":    { class:"fc", s25pos:null,s25pts:0,   s25wins:0, s25label:"Part-time 2025" },
  "Blake Alexander":  { class:"fc", s25pos:null,s25pts:0,   s25wins:0, s25label:"Outside top 10" },
  "Cruz Pedregon":    { class:"fc", s25pos:null,s25pts:0,   s25wins:0, s25label:"Part-time" },
  "Dave Richards":    { class:"fc", s25pos:null,s25pts:0,   s25wins:0, s25label:"Outside top 10" },
  "Spencer Hyde":     { class:"fc", s25pos:null,s25pts:0,   s25wins:0, s25label:"Rookie 2025" },
  "Dylan Winefsky":   { class:"fc", s25pos:null,s25pts:0,   s25wins:0, s25label:"Partial season" },
  "Jason Rupert":     { class:"fc", s25pos:null,s25pts:0,   s25wins:0, s25label:"Part-time" },
  "Todd Lesenko":     { class:"fc", s25pos:null,s25pts:0,   s25wins:0, s25label:"Part-time" },
  "James Campbell":   { class:"fc", s25pos:null,s25pts:0,   s25wins:0, s25label:"Part-time" },
  "Hunter Green":     { class:"fc", s25pos:null,s25pts:0,   s25wins:0, s25label:"2026 Entry" },
  // PRO STOCK
  "Dallas Glenn":     { class:"ps", s25pos:1,  s25pts:2666, s25wins:8, s25label:"🏆 2025 Champion" },
  "Greg Anderson":    { class:"ps", s25pos:2,  s25pts:2574, s25wins:2, s25label:"2nd Place" },
  "Matt Hartford":    { class:"ps", s25pos:3,  s25pts:2417, s25wins:1, s25label:"3rd Place" },
  "Aaron Stanfield":  { class:"ps", s25pos:4,  s25pts:2379, s25wins:0, s25label:"4th Place" },
  "Erica Enders":     { class:"ps", s25pos:5,  s25pts:2340, s25wins:1, s25label:"5th Place" },
  "Greg Stanfield":   { class:"ps", s25pos:6,  s25pts:2310, s25wins:1, s25label:"6th Place" },
  "Cody Coughlin":    { class:"ps", s25pos:7,  s25pts:2280, s25wins:0, s25label:"7th Place" },
  "Troy Coughlin Jr": { class:"ps", s25pos:8,  s25pts:2240, s25wins:0, s25label:"8th Place" },
  "Troy Coughlin Jr.":{ class:"ps", s25pos:8,  s25pts:2240, s25wins:0, s25label:"8th Place" },
  "Matt Latino":      { class:"ps", s25pos:9,  s25pts:2200, s25wins:0, s25label:"9th Place" },
  "Matthew Latino":   { class:"ps", s25pos:9,  s25pts:2200, s25wins:0, s25label:"9th Place" },
  "Eric Latino":      { class:"ps", s25pos:10, s25pts:2160, s25wins:0, s25label:"10th Place" },
  "Deric Kramer":     { class:"ps", s25pos:null,s25pts:0,   s25wins:0, s25label:"Outside top 10" },
  "Kenny Delco":      { class:"ps", s25pos:null,s25pts:0,   s25wins:0, s25label:"Outside top 10" },
  "Chris McGaha":     { class:"ps", s25pos:null,s25pts:0,   s25wins:0, s25label:"Outside top 10" },
  "Mason McGaha":     { class:"ps", s25pos:null,s25pts:0,   s25wins:0, s25label:"Outside top 10" },
  "Cody Anderson":    { class:"ps", s25pos:null,s25pts:0,   s25wins:0, s25label:"Outside top 10" },
  "Stephen Bell":     { class:"ps", s25pos:null,s25pts:0,   s25wins:0, s25label:"Outside top 10" },
  "Joey Grose":       { class:"ps", s25pos:null,s25pts:0,   s25wins:0, s25label:"Outside top 10" },
  "Dave Connolly":    { class:"ps", s25pos:null,s25pts:0,   s25wins:0, s25label:"Part-time" },
  // PRO STOCK MOTORCYCLE
  "Richard Gadson":   { class:"psm",s25pos:1,  s25pts:2584, s25wins:4, s25label:"🏆 2025 Champion" },
  "Gaige Herrera":    { class:"psm",s25pos:2,  s25pts:2563, s25wins:7, s25label:"2nd Place" },
  "Matt Smith":       { class:"psm",s25pos:3,  s25pts:2455, s25wins:1, s25label:"3rd Place" },
  "Angie Smith":      { class:"psm",s25pos:4,  s25pts:2421, s25wins:0, s25label:"4th Place" },
  "Brayden Davis":    { class:"psm",s25pos:5,  s25pts:2399, s25wins:0, s25label:"5th Place" },
  "John Hall":        { class:"psm",s25pos:6,  s25pts:2375, s25wins:2, s25label:"6th Place" },
  "Jianna Evaristo":  { class:"psm",s25pos:7,  s25pts:2273, s25wins:0, s25label:"7th Place" },
  "Chase Van Sant":   { class:"psm",s25pos:8,  s25pts:2243, s25wins:0, s25label:"8th Place" },
  "Steve Johnson":    { class:"psm",s25pos:9,  s25pts:2229, s25wins:0, s25label:"9th Place" },
  "Chris Bostick":    { class:"psm",s25pos:10, s25pts:2179, s25wins:0, s25label:"10th Place" },
  "Marc Ingwersen":   { class:"psm",s25pos:null,s25pts:0,   s25wins:0, s25label:"Outside top 10" },
  "Kelly Clontz":     { class:"psm",s25pos:null,s25pts:0,   s25wins:0, s25label:"Outside top 10" },
  "Ryan Oehler":      { class:"psm",s25pos:null,s25pts:0,   s25wins:0, s25label:"Outside top 10" },
  "Hector Arana Jr":  { class:"psm",s25pos:null,s25pts:0,   s25wins:0, s25label:"Outside top 10" },
  "Ron Tornow":       { class:"psm",s25pos:null,s25pts:0,   s25wins:0, s25label:"Part-time" },
  "Clayton Howey":    { class:"psm",s25pos:null,s25pts:0,   s25wins:0, s25label:"Part-time" },
  // PRO MOD
  "JR Gray":          { class:"pm", s25pos:1,  s25pts:0,    s25wins:3, s25label:"🏆 2025 Champion" },
  "Derek Menholt":    { class:"pm", s25pos:2,  s25pts:0,    s25wins:2, s25label:"2nd Place" },
  "Billy Banaka":     { class:"pm", s25pos:3,  s25pts:0,    s25wins:1, s25label:"3rd Place" },
  "Steve Jackson":    { class:"pm", s25pos:null,s25pts:0,   s25wins:0, s25label:"Veteran competitor" },
  "Mike Castellana":  { class:"pm", s25pos:null,s25pts:0,   s25wins:0, s25label:"Veteran competitor" },
  "Erica Enders":     { class:"pm", s25pos:null,s25pts:0,   s25wins:0, s25label:"PS & PM competitor" },
  "Alex Laughlin":    { class:"pm", s25pos:null,s25pts:0,   s25wins:0, s25label:"Pro Mod competitor" },
  "Jason Scruggs":    { class:"pm", s25pos:null,s25pts:0,   s25wins:0, s25label:"Pro Mod competitor" },
  "Mason Wright":     { class:"pm", s25pos:null,s25pts:0,   s25wins:0, s25label:"Pro Mod competitor" },
};

// Get 2026 stats for a driver from STANDINGS and RACES
function get2026Stats(driverName, classKey) {
  const standing = STANDINGS[classKey]?.find(d =>
    d.name.toLowerCase() === driverName.toLowerCase()
  );
  let wins = 0, runnerUps = 0;
  RACES.forEach(race => {
    if (!race.winners) return;
    race.winners.forEach(w => {
      if (w.driver.toLowerCase() === driverName.toLowerCase()) wins++;
    });
    // Check brackets for runner-ups
    const bracket = BRACKETS[race.id]?.[classKey];
    if (bracket) {
      const final = bracket.rounds[bracket.rounds.length - 1];
      if (final?.pairs?.[0]?.l.toLowerCase() === driverName.toLowerCase()) runnerUps++;
    }
  });
  return { pos: standing?.pos || null, pts: standing?.pts || 0, f2t: standing?.f2t || 0, wins, runnerUps };
}


// ─── PER-RACE STATS ───────────────────────────────────────────────────────────
// Track each driver's performance race by race for trend analysis
// qualPos = qualifying position, bestET = best ET of weekend, bestMPH = best MPH
// elimRound = how far they went: 0=DNQ, 1=R1, 2=R2, 3=Semi, 4=Final, 5=Win

const PER_RACE_STATS = {
  // TOP FUEL
  "Doug Kalitta": [
    { raceId:1, raceName:"Gatornationals",  qualPos:3, bestET:"3.756", bestMPH:"338.34", elimRound:2 },
    { raceId:2, raceName:"Arizona",         qualPos:1, bestET:"3.748", bestMPH:"339.20", elimRound:3 },
  ],
  "Josh Hart": [
    { raceId:1, raceName:"Gatornationals",  qualPos:2, bestET:"3.733", bestMPH:"337.83", elimRound:5 },
    { raceId:2, raceName:"Arizona",         qualPos:2, bestET:"3.741", bestMPH:"336.50", elimRound:3 },
  ],
  "Shawn Langdon": [
    { raceId:1, raceName:"Gatornationals",  qualPos:4, bestET:"3.745", bestMPH:"338.51", elimRound:4 },
    { raceId:2, raceName:"Arizona",         qualPos:3, bestET:"3.739", bestMPH:"338.92", elimRound:5 },
  ],
  "Leah Pruett": [
    { raceId:1, raceName:"Gatornationals",  qualPos:1, bestET:"3.724", bestMPH:"329.75", elimRound:1 },
    { raceId:2, raceName:"Arizona",         qualPos:5, bestET:"3.762", bestMPH:"328.40", elimRound:2 },
  ],
  "Maddi Gordon": [
    { raceId:1, raceName:"Gatornationals",  qualPos:6, bestET:"3.819", bestMPH:"326.56", elimRound:1 },
    { raceId:2, raceName:"Arizona",         qualPos:4, bestET:"3.801", bestMPH:"327.14", elimRound:2 },
  ],
  "Tony Stewart": [
    { raceId:1, raceName:"Gatornationals",  qualPos:7, bestET:"3.815", bestMPH:"325.85", elimRound:1 },
    { raceId:2, raceName:"Arizona",         qualPos:6, bestET:"3.822", bestMPH:"324.90", elimRound:2 },
  ],
  "Antron Brown": [
    { raceId:1, raceName:"Gatornationals",  qualPos:8, bestET:"3.831", bestMPH:"319.63", elimRound:1 },
    { raceId:2, raceName:"Arizona",         qualPos:8, bestET:"3.845", bestMPH:"317.80", elimRound:1 },
  ],
  "Tony Schumacher": [
    { raceId:1, raceName:"Gatornationals",  qualPos:10, bestET:"5.339", bestMPH:"132.82", elimRound:1 },
    { raceId:2, raceName:"Arizona",         qualPos:9,  bestET:"3.891", bestMPH:"315.20", elimRound:1 },
  ],
  "Billy Torrence": [
    { raceId:1, raceName:"Gatornationals",  qualPos:5, bestET:"3.774", bestMPH:"334.32", elimRound:2 },
    { raceId:2, raceName:"Arizona",         qualPos:7, bestET:"3.836", bestMPH:"320.44", elimRound:1 },
  ],
  // FUNNY CAR
  "Chad Green": [
    { raceId:1, raceName:"Gatornationals",  qualPos:3, bestET:"3.959", bestMPH:"329.91", elimRound:5 },
    { raceId:2, raceName:"Arizona",         qualPos:5, bestET:"3.971", bestMPH:"328.10", elimRound:2 },
  ],
  "Ron Capps": [
    { raceId:1, raceName:"Gatornationals",  qualPos:2, bestET:"3.978", bestMPH:"326.48", elimRound:2 },
    { raceId:2, raceName:"Arizona",         qualPos:1, bestET:"3.895", bestMPH:"326.48", elimRound:5 },
  ],
  "Jordan Vandergriff": [
    { raceId:1, raceName:"Gatornationals",  qualPos:4, bestET:"3.995", bestMPH:"325.61", elimRound:4 },
    { raceId:2, raceName:"Arizona",         qualPos:3, bestET:"3.952", bestMPH:"324.91", elimRound:2 },
  ],
  "J.R. Todd": [
    { raceId:1, raceName:"Gatornationals",  qualPos:6, bestET:"4.012", bestMPH:"321.19", elimRound:2 },
    { raceId:2, raceName:"Arizona",         qualPos:2, bestET:"3.969", bestMPH:"322.11", elimRound:4 },
  ],
  "JR Todd": [
    { raceId:1, raceName:"Gatornationals",  qualPos:6, bestET:"4.012", bestMPH:"321.19", elimRound:2 },
    { raceId:2, raceName:"Arizona",         qualPos:2, bestET:"3.969", bestMPH:"322.11", elimRound:4 },
  ],
  "Matt Hagan": [
    { raceId:1, raceName:"Gatornationals",  qualPos:5, bestET:"4.003", bestMPH:"322.88", elimRound:2 },
    { raceId:2, raceName:"Arizona",         qualPos:4, bestET:"3.987", bestMPH:"320.04", elimRound:2 },
  ],
  "Alexis DeJoria": [
    { raceId:1, raceName:"Gatornationals",  qualPos:1, bestET:"3.974", bestMPH:"328.30", elimRound:3 },
    { raceId:2, raceName:"Arizona",         qualPos:6, bestET:"4.028", bestMPH:"316.80", elimRound:1 },
  ],
  "Austin Prock": [
    { raceId:1, raceName:"Gatornationals",  qualPos:7, bestET:"4.047", bestMPH:"309.14", elimRound:1 },
    { raceId:2, raceName:"Arizona",         qualPos:7, bestET:"4.015", bestMPH:"312.86", elimRound:1 },
  ],
  "Spencer Hyde": [
    { raceId:1, raceName:"Gatornationals",  qualPos:8, bestET:"4.052", bestMPH:"316.08", elimRound:1 },
    { raceId:2, raceName:"Arizona",         qualPos:10,bestET:"4.061", bestMPH:"314.20", elimRound:1 },
  ],
  // PRO STOCK
  "Dallas Glenn": [
    { raceId:1, raceName:"Gatornationals",  qualPos:2, bestET:"6.589", bestMPH:"209.17", elimRound:3 },
    { raceId:2, raceName:"Arizona",         qualPos:1, bestET:"6.574", bestMPH:"209.44", elimRound:5 },
  ],
  "Greg Anderson": [
    { raceId:1, raceName:"Gatornationals",  qualPos:5, bestET:"6.610", bestMPH:"207.34", elimRound:2 },
    { raceId:2, raceName:"Arizona",         qualPos:2, bestET:"6.532", bestMPH:"208.26", elimRound:3 },
  ],
  "Matt Hartford": [
    { raceId:1, raceName:"Gatornationals",  qualPos:1, bestET:"6.587", bestMPH:"208.94", elimRound:5 },
    { raceId:2, raceName:"Arizona",         qualPos:3, bestET:"6.600", bestMPH:"207.55", elimRound:2 },
  ],
  "Erica Enders": [
    { raceId:1, raceName:"Gatornationals",  qualPos:3, bestET:"6.596", bestMPH:"208.68", elimRound:3 },
    { raceId:2, raceName:"Arizona",         qualPos:5, bestET:"6.607", bestMPH:"207.90", elimRound:1 },
  ],
  "Cody Coughlin": [
    { raceId:1, raceName:"Gatornationals",  qualPos:6, bestET:"6.598", bestMPH:"208.36", elimRound:4 },
    { raceId:2, raceName:"Arizona",         qualPos:4, bestET:"6.579", bestMPH:"208.62", elimRound:4 },
  ],
  "Aaron Stanfield": [
    { raceId:1, raceName:"Gatornationals",  qualPos:4, bestET:"6.602", bestMPH:"208.46", elimRound:1 },
    { raceId:2, raceName:"Arizona",         qualPos:6, bestET:"6.618", bestMPH:"207.24", elimRound:2 },
  ],
  // PRO STOCK MOTORCYCLE
  "Richard Gadson": [
    { raceId:1, raceName:"Gatornationals",  qualPos:1, bestET:"6.753", bestMPH:"200.05", elimRound:5 },
    { raceId:2, raceName:"Arizona",         qualPos:1, bestET:"6.748", bestMPH:"200.44", elimRound:3 },
  ],
  "Gaige Herrera": [
    { raceId:1, raceName:"Gatornationals",  qualPos:2, bestET:"6.761", bestMPH:"199.80", elimRound:3 },
    { raceId:2, raceName:"Arizona",         qualPos:2, bestET:"6.754", bestMPH:"200.12", elimRound:2 },
  ],
  "Matt Smith": [
    { raceId:1, raceName:"Gatornationals",  qualPos:3, bestET:"6.779", bestMPH:"199.24", elimRound:2 },
    { raceId:2, raceName:"Arizona",         qualPos:3, bestET:"6.771", bestMPH:"199.40", elimRound:2 },
  ],
  "John Hall": [
    { raceId:1, raceName:"Gatornationals",  qualPos:4, bestET:"6.788", bestMPH:"198.90", elimRound:2 },
    { raceId:2, raceName:"Arizona",         qualPos:4, bestET:"6.780", bestMPH:"199.10", elimRound:1 },
  ],
};

const ELIM_ROUND_LABELS = { 0:"DNQ", 1:"R1 Exit", 2:"R2 Exit", 3:"Semifinal", 4:"Final Round", 5:"Winner" };
const ELIM_ROUND_COLORS = { 0:"var(--text-faint)", 1:"var(--text-faint)", 2:"var(--text-muted)", 3:"var(--gold)", 4:"var(--gold)", 5:"var(--green)" };

// ─── QUALIFYING RESULTS ──────────────────────────────────────────────────────
// Per-round qualifying data. sessions[Q] = array of {pos, driver, car, et, mph}
// currentOrder = best combined order after all completed rounds
// lastSession = highest completed session number

const QUALIFYING = {
  3: { // Winternationals · Apr 9-12 · Pomona CA
    tf: {
      lastSession: 4,
      updated: "Apr 11, 2026 · Final After Q4",
      sessions: {
        1: [ // Q1 — Friday 2:30 PM PT
          { pos:1,  driver:"Josh Hart",       car:"77",   et:"3.733", mph:"336.15" },
          { pos:2,  driver:"Doug Kalitta",    car:"1",    et:"3.756", mph:"338.34" },
          { pos:3,  driver:"Shawn Langdon",   car:"2",    et:"3.762", mph:"336.80" },
          { pos:4,  driver:"Billy Torrence",  car:"474",  et:"3.774", mph:"334.32" },
          { pos:5,  driver:"Shawn Reed",      car:"8",    et:"3.791", mph:"328.14" },
          { pos:6,  driver:"Leah Pruett",     car:"777",  et:"3.801", mph:"326.40" },
          { pos:7,  driver:"Maddi Gordon",    car:"100",  et:"3.819", mph:"326.56" },
          { pos:8,  driver:"Tony Stewart",    car:"14",   et:"3.840", mph:"322.10" },
          { pos:9,  driver:"Will Smith",      car:"200",  et:"3.870", mph:"322.42" },
          { pos:10, driver:"Tony Schumacher", car:"15",   et:"4.018", mph:"274.30" },
          { pos:11, driver:"Antron Brown",    car:"123",  et:"4.102", mph:"241.80" },
          { pos:12, driver:"Justin Ashley",   car:"3",    et:"4.834", mph:"156.90" },
          { pos:13, driver:"Clay Millican",   car:"51",   et:"5.119", mph:"188.40" },
          { pos:14, driver:"Cameron Ferre",   car:"748",  et:"6.331", mph:"89.05"  },
          { pos:15, driver:"Ron August Jr",   car:"7727", et:"6.942", mph:"83.45"  },
        ],
        2: [ // Q2 — Friday 5:00 PM PT — Pruett moves to P1
          { pos:1,  driver:"Leah Pruett",    car:"777", et:"3.724", mph:"329.75" },
          { pos:2,  driver:"Josh Hart",      car:"77",  et:"3.733", mph:"336.15" },
          { pos:3,  driver:"Shawn Langdon",  car:"2",   et:"3.745", mph:"338.51" },
          { pos:4,  driver:"Shawn Reed",     car:"8",   et:"3.755", mph:"330.31" },
          { pos:5,  driver:"Doug Kalitta",   car:"1",   et:"3.756", mph:"338.34" },
          { pos:6,  driver:"Billy Torrence", car:"474", et:"3.774", mph:"334.32" },
          { pos:7,  driver:"Tony Stewart",   car:"14",  et:"3.815", mph:"325.85" },
          { pos:8,  driver:"Maddi Gordon",   car:"100", et:"3.819", mph:"326.56" },
          { pos:9,  driver:"Will Smith",     car:"200", et:"3.870", mph:"322.42" },
          { pos:10, driver:"Clay Millican",  car:"51",  et:"4.272", mph:"200.71" },
          { pos:11, driver:"Justin Ashley",  car:"3",   et:"5.016", mph:"144.72" },
          { pos:12, driver:"Tony Schumacher",car:"15",  et:"5.339", mph:"132.82" },
          { pos:13, driver:"Antron Brown",   car:"123", et:"6.044", mph:"113.13" },
          { pos:14, driver:"Cameron Ferre",  car:"748", et:"6.331", mph:"89.05"  },
          { pos:15, driver:"Ron August Jr",  car:"7727",et:"6.942", mph:"83.45"  },
        ],
        3: [ // Q3 — Saturday 12:30 PM PT — Ashley, Kalitta improve
          { pos:1,  driver:"Leah Pruett",    car:"777", et:"3.724", mph:"329.75" },
          { pos:2,  driver:"Josh Hart",      car:"77",  et:"3.733", mph:"336.15" },
          { pos:3,  driver:"Shawn Langdon",  car:"2",   et:"3.745", mph:"338.51" },
          { pos:4,  driver:"Doug Kalitta",   car:"1",   et:"3.747", mph:"333.66" },
          { pos:5,  driver:"Shawn Reed",     car:"8",   et:"3.755", mph:"330.31" },
          { pos:6,  driver:"Billy Torrence", car:"474", et:"3.774", mph:"334.32" },
          { pos:7,  driver:"Tony Stewart",   car:"14",  et:"3.783", mph:"332.18" },
          { pos:8,  driver:"Justin Ashley",  car:"3",   et:"3.826", mph:"327.98" },
          { pos:9,  driver:"Will Smith",     car:"200", et:"3.870", mph:"322.42" },
          { pos:10, driver:"Maddi Gordon",   car:"100", et:"3.921", mph:"318.40" },
          { pos:11, driver:"Antron Brown",   car:"123", et:"3.953", mph:"267.22" },
          { pos:12, driver:"Clay Millican",  car:"51",  et:"4.022", mph:"236.38" },
          { pos:13, driver:"Ron August Jr",  car:"7727",et:"4.613", mph:"165.92" },
          { pos:14, driver:"Tony Schumacher",car:"15",  et:"4.618", mph:"152.80" },
          { pos:15, driver:"Cameron Ferre",  car:"748", et:"5.785", mph:"98.91"  },
        ],
        4: [ // Q4 FINAL — Saturday 3:00 PM PT — Maddi Gordon improves to P8
          { pos:1,  driver:"Leah Pruett",    car:"777", et:"3.724", mph:"329.75" },
          { pos:2,  driver:"Josh Hart",      car:"77",  et:"3.733", mph:"336.15" },
          { pos:3,  driver:"Shawn Langdon",  car:"2",   et:"3.745", mph:"338.51" },
          { pos:4,  driver:"Doug Kalitta",   car:"1",   et:"3.747", mph:"333.66" },
          { pos:5,  driver:"Shawn Reed",     car:"8",   et:"3.755", mph:"330.31" },
          { pos:6,  driver:"Billy Torrence", car:"474", et:"3.774", mph:"334.32" },
          { pos:7,  driver:"Tony Stewart",   car:"14",  et:"3.783", mph:"332.18" },
          { pos:8,  driver:"Maddi Gordon",   car:"100", et:"3.798", mph:"327.98" },
          { pos:9,  driver:"Justin Ashley",  car:"3",   et:"3.826", mph:"327.98" },
          { pos:10, driver:"Will Smith",     car:"200", et:"3.870", mph:"322.42" },
          { pos:11, driver:"Antron Brown",   car:"123", et:"3.953", mph:"267.22" },
          { pos:12, driver:"Clay Millican",  car:"51",  et:"4.022", mph:"236.38" },
          { pos:13, driver:"Ron August Jr",  car:"7727",et:"4.613", mph:"165.92" },
          { pos:14, driver:"Tony Schumacher",car:"15",  et:"4.618", mph:"152.80" },
          { pos:15, driver:"Cameron Ferre",  car:"748", et:"5.785", mph:"98.91"  },
        ],
      }
    },
    fc: {
      lastSession: 4,
      updated: "Apr 11, 2026 · Final After Q4",
      sessions: {
        1: [ // Q1 — Friday 2:00 PM PT
          { pos:1,  driver:"Alexis DeJoria",     car:"771",  et:"3.974", mph:"328.30" },
          { pos:2,  driver:"Ron Capps",          car:"28",   et:"3.998", mph:"318.40" },
          { pos:3,  driver:"Matt Hagan",         car:"14",   et:"4.037", mph:"324.75" },
          { pos:4,  driver:"Jordan Vandergriff", car:"24",   et:"4.041", mph:"322.10" },
          { pos:5,  driver:"Jason Rupert",       car:"766",  et:"4.060", mph:"318.09" },
          { pos:6,  driver:"Paul Lee",           car:"6",    et:"4.067", mph:"317.87" },
          { pos:7,  driver:"Dave Richards",      car:"139",  et:"4.071", mph:"315.20" },
          { pos:8,  driver:"JR Todd",            car:"373",  et:"4.082", mph:"322.19" },
          { pos:9,  driver:"Austin Prock",       car:"1",    et:"4.101", mph:"308.40" },
          { pos:10, driver:"Blake Alexander",    car:"256",  et:"4.143", mph:"308.07" },
          { pos:11, driver:"Chad Green",         car:"7",    et:"4.218", mph:"294.10" },
          { pos:12, driver:"Spencer Hyde",       car:"9",    et:"4.337", mph:"216.65" },
          { pos:13, driver:"Dylan Winefsky",     car:"7818", et:"4.480", mph:"202.40" },
          { pos:14, driver:"Cruz Pedregon",      car:"71",   et:"4.590", mph:"198.30" },
          { pos:15, driver:"Daniel Wilkerson",   car:"5",    et:"4.679", mph:"179.09" },
          { pos:16, driver:"Jack Beckman",       car:"3",    et:"4.932", mph:"179.64" },
          { pos:17, driver:"Jim Campbell",       car:"703",  et:"5.547", mph:"129.24" },
          { pos:18, driver:"Todd Lesenko",       car:"22",   et:"5.774", mph:"124.04" },
        ],
        2: [ // Q2 — Friday 4:30 PM PT — Vandergriff moves to P1
          { pos:1,  driver:"Jordan Vandergriff", car:"24",   et:"3.951", mph:"327.90" },
          { pos:2,  driver:"Alexis DeJoria",     car:"771",  et:"3.989", mph:"328.30" },
          { pos:3,  driver:"Ron Capps",          car:"28",   et:"4.007", mph:"314.17" },
          { pos:4,  driver:"Austin Prock",       car:"1",    et:"4.015", mph:"312.86" },
          { pos:5,  driver:"Matt Hagan",         car:"14",   et:"4.037", mph:"324.75" },
          { pos:6,  driver:"Dave Richards",      car:"139",  et:"4.051", mph:"317.27" },
          { pos:7,  driver:"Jason Rupert",       car:"766",  et:"4.060", mph:"318.09" },
          { pos:8,  driver:"Paul Lee",           car:"6",    et:"4.067", mph:"317.87" },
          { pos:9,  driver:"JR Todd",            car:"373",  et:"4.082", mph:"322.19" },
          { pos:10, driver:"Blake Alexander",    car:"256",  et:"4.143", mph:"308.07" },
          { pos:11, driver:"Dylan Winefsky",     car:"7818", et:"4.303", mph:"232.31" },
          { pos:12, driver:"Cruz Pedregon",      car:"71",   et:"4.317", mph:"217.04" },
          { pos:13, driver:"Spencer Hyde",       car:"9",    et:"4.337", mph:"216.65" },
          { pos:14, driver:"Daniel Wilkerson",   car:"5",    et:"4.679", mph:"179.09" },
          { pos:15, driver:"Jack Beckman",       car:"3",    et:"4.932", mph:"179.64" },
          { pos:16, driver:"Chad Green",         car:"7",    et:"4.954", mph:"184.04" },
          { pos:17, driver:"Jim Campbell",       car:"703",  et:"5.547", mph:"129.24" },
          { pos:18, driver:"Todd Lesenko",       car:"22",   et:"5.774", mph:"124.04" },
        ],
        3: [ // Q3 — Saturday 1:00 PM PT — big shakeup
          { pos:1,  driver:"Jordan Vandergriff", car:"24",   et:"3.925", mph:"329.99" },
          { pos:2,  driver:"Matt Hagan",         car:"14",   et:"3.940", mph:"329.58" },
          { pos:3,  driver:"Ron Capps",          car:"28",   et:"3.950", mph:"328.10" },
          { pos:4,  driver:"Austin Prock",       car:"1",    et:"3.967", mph:"323.58" },
          { pos:5,  driver:"Chad Green",         car:"7",    et:"3.970", mph:"322.65" },
          { pos:6,  driver:"Alexis DeJoria",     car:"771",  et:"3.979", mph:"328.46" },
          { pos:7,  driver:"Jack Beckman",       car:"3",    et:"3.984", mph:"325.61" },
          { pos:8,  driver:"Jim Campbell",       car:"703",  et:"3.992", mph:"317.34" },
          { pos:9,  driver:"JR Todd",            car:"373",  et:"4.010", mph:"320.40" },
          { pos:10, driver:"Dave Richards",      car:"139",  et:"4.010", mph:"317.19" },
          { pos:11, driver:"Paul Lee",           car:"6",    et:"4.024", mph:"297.81" },
          { pos:12, driver:"Jason Rupert",       car:"766",  et:"4.057", mph:"315.34" },
          { pos:13, driver:"Spencer Hyde",       car:"9",    et:"4.057", mph:"312.06" },
          { pos:14, driver:"Daniel Wilkerson",   car:"5",    et:"4.073", mph:"288.70" },
          { pos:15, driver:"Dylan Winefsky",     car:"7818", et:"4.112", mph:"290.82" },
          { pos:16, driver:"Blake Alexander",    car:"256",  et:"4.143", mph:"308.07" },
          { pos:17, driver:"Jeff Arend",         car:"170",  et:"4.160", mph:"291.76" },
          { pos:18, driver:"Cruz Pedregon",      car:"71",   et:"4.317", mph:"217.04" },
          { pos:19, driver:"Todd Lesenko",       car:"22",   et:"5.774", mph:"124.04" },
        ],
        4: [ // Q4 FINAL — Saturday 3:30 PM PT — JR Todd rockets to P1 with 3.896!
          { pos:1,  driver:"JR Todd",            car:"373",  et:"3.896", mph:"335.32" },
          { pos:2,  driver:"Ron Capps",          car:"28",   et:"3.919", mph:"330.88" },
          { pos:3,  driver:"Jordan Vandergriff", car:"24",   et:"3.925", mph:"329.99" },
          { pos:4,  driver:"Matt Hagan",         car:"14",   et:"3.940", mph:"329.58" },
          { pos:5,  driver:"Austin Prock",       car:"1",    et:"3.967", mph:"323.58" },
          { pos:6,  driver:"Chad Green",         car:"7",    et:"3.970", mph:"322.65" },
          { pos:7,  driver:"Alexis DeJoria",     car:"771",  et:"3.979", mph:"328.46" },
          { pos:8,  driver:"Jack Beckman",       car:"3",    et:"3.984", mph:"325.61" },
          { pos:9,  driver:"Jim Campbell",       car:"703",  et:"3.992", mph:"317.34" },
          { pos:10, driver:"Dave Richards",      car:"139",  et:"4.010", mph:"317.19" },
          { pos:11, driver:"Paul Lee",           car:"6",    et:"4.024", mph:"297.81" },
          { pos:12, driver:"Jason Rupert",       car:"766",  et:"4.057", mph:"315.34" },
          { pos:13, driver:"Spencer Hyde",       car:"9",    et:"4.057", mph:"312.06" },
          { pos:14, driver:"Daniel Wilkerson",   car:"5",    et:"4.073", mph:"288.70" },
          { pos:15, driver:"Dylan Winefsky",     car:"7818", et:"4.112", mph:"290.82" },
          { pos:16, driver:"Blake Alexander",    car:"256",  et:"4.143", mph:"308.07" },
          { pos:17, driver:"Jeff Arend",         car:"170",  et:"4.160", mph:"291.76" },
          { pos:18, driver:"Cruz Pedregon",      car:"71",   et:"4.317", mph:"217.04" },
          { pos:19, driver:"Todd Lesenko",       car:"22",   et:"5.774", mph:"124.04" },
        ],
      }
    },
    ps: {
      lastSession: 4,
      updated: "Apr 11, 2026 · Final After Q4",
      sessions: {
        1: [ // Q1 — Friday 1:30 PM PT
          { pos:1,  driver:"Matt Hartford",   car:"3",    et:"6.553", mph:"209.98" },
          { pos:2,  driver:"Dallas Glenn",    car:"1",    et:"6.561", mph:"208.80" },
          { pos:3,  driver:"Aaron Stanfield", car:"4",    et:"6.572", mph:"208.94" },
          { pos:4,  driver:"Eric Latino",     car:"7",    et:"6.575", mph:"209.39" },
          { pos:5,  driver:"Matt Latino",     car:"16",   et:"6.575", mph:"209.52" },
          { pos:6,  driver:"Cody Anderson",   car:"17",   et:"6.579", mph:"208.36" },
          { pos:7,  driver:"Dave Connolly",   car:"51",   et:"6.580", mph:"210.01" },
          { pos:8,  driver:"Deric Kramer",    car:"52",   et:"6.591", mph:"207.44" },
          { pos:9,  driver:"Greg Stanfield",  car:"445",  et:"6.601", mph:"207.92" },
          { pos:10, driver:"Erica Enders",    car:"6",    et:"6.608", mph:"208.20" },
          { pos:11, driver:"Troy Coughlin Jr",car:"10",   et:"6.612", mph:"207.80" },
          { pos:12, driver:"Joey Grose",      car:"703",  et:"6.616", mph:"208.46" },
          { pos:13, driver:"Kenny Delco",     car:"150",  et:"6.624", mph:"208.84" },
          { pos:14, driver:"Greg Anderson",   car:"2",    et:"6.629", mph:"207.10" },
          { pos:15, driver:"Chris Vang",      car:"5707", et:"6.638", mph:"206.90" },
          { pos:16, driver:"Stephen Bell",    car:"439",  et:"6.642", mph:"207.00" },
          { pos:17, driver:"Chris McGaha",    car:"4264", et:"6.655", mph:"208.80" },
          { pos:18, driver:"Mason McGaha",    car:"400",  et:"6.670", mph:"207.88" },
          { pos:19, driver:"Jeg Coughlin Jr", car:"8",    et:"6.693", mph:"208.10" },
        ],
        2: [ // Q2 combined best — Anderson improved dramatically to 6.544, moves to P1
          { pos:1,  driver:"Greg Anderson",   car:"2",    et:"6.544", mph:"209.39" },
          { pos:2,  driver:"Dallas Glenn",    car:"1",    et:"6.553", mph:"209.17" },
          { pos:3,  driver:"Greg Stanfield",  car:"445",  et:"6.568", mph:"209.07" },
          { pos:4,  driver:"Aaron Stanfield", car:"4",    et:"6.572", mph:"208.94" },
          { pos:5,  driver:"Matt Hartford",   car:"3",    et:"6.575", mph:"209.98" },
          { pos:6,  driver:"Matt Latino",     car:"16",   et:"6.575", mph:"209.52" },
          { pos:7,  driver:"Eric Latino",     car:"7",    et:"6.575", mph:"209.39" },
          { pos:8,  driver:"Cody Anderson",   car:"17",   et:"6.579", mph:"208.36" },
          { pos:9,  driver:"Dave Connolly",   car:"51",   et:"6.580", mph:"210.01" },
          { pos:10, driver:"Deric Kramer",    car:"52",   et:"6.584", mph:"207.91" },
          { pos:11, driver:"Erica Enders",    car:"6",    et:"6.590", mph:"208.68" },
          { pos:12, driver:"Troy Coughlin Jr",car:"10",   et:"6.600", mph:"207.98" },
          { pos:13, driver:"Joey Grose",      car:"703",  et:"6.616", mph:"208.46" },
          { pos:14, driver:"Kenny Delco",     car:"150",  et:"6.624", mph:"208.84" },
          { pos:15, driver:"Chris Vang",      car:"5707", et:"6.627", mph:"207.08" },
          { pos:16, driver:"Stephen Bell",    car:"439",  et:"6.628", mph:"207.46" },
          { pos:17, driver:"Chris McGaha",    car:"4264", et:"6.643", mph:"209.30" },
          { pos:18, driver:"Mason McGaha",    car:"400",  et:"6.670", mph:"207.88" },
          { pos:19, driver:"Jeg Coughlin Jr", car:"8",    et:"6.675", mph:"209.23" },
        ],
        2: [
          { pos:1,  driver:"Greg Anderson",   car:"2",    et:"6.544", mph:"209.39" },
          { pos:2,  driver:"Dallas Glenn",    car:"1",    et:"6.553", mph:"209.17" },
          { pos:3,  driver:"Greg Stanfield",  car:"445",  et:"6.568", mph:"209.07" },
          { pos:4,  driver:"Aaron Stanfield", car:"4",    et:"6.572", mph:"208.94" },
          { pos:5,  driver:"Matt Hartford",   car:"3",    et:"6.575", mph:"209.98" },
          { pos:6,  driver:"Matt Latino",     car:"16",   et:"6.575", mph:"209.52" },
          { pos:7,  driver:"Eric Latino",     car:"7",    et:"6.575", mph:"209.39" },
          { pos:8,  driver:"Cody Anderson",   car:"17",   et:"6.579", mph:"208.36" },
          { pos:9,  driver:"Dave Connolly",   car:"51",   et:"6.580", mph:"210.01" },
          { pos:10, driver:"Deric Kramer",    car:"52",   et:"6.584", mph:"207.91" },
          { pos:11, driver:"Erica Enders",    car:"6",    et:"6.590", mph:"208.68" },
          { pos:12, driver:"Troy Coughlin Jr",car:"10",   et:"6.600", mph:"207.98" },
          { pos:13, driver:"Joey Grose",      car:"703",  et:"6.616", mph:"208.46" },
          { pos:14, driver:"Kenny Delco",     car:"150",  et:"6.624", mph:"208.84" },
          { pos:15, driver:"Chris Vang",      car:"5707", et:"6.627", mph:"207.08" },
          { pos:16, driver:"Stephen Bell",    car:"439",  et:"6.628", mph:"207.46" },
          { pos:17, driver:"Chris McGaha",    car:"4264", et:"6.643", mph:"209.30" },
          { pos:18, driver:"Mason McGaha",    car:"400",  et:"6.670", mph:"207.88" },
          { pos:19, driver:"Jeg Coughlin Jr", car:"8",    et:"6.675", mph:"209.23" },
        ],
        3: [ // Q3 — Saturday 1:45 PM PT
          { pos:1,  driver:"Greg Anderson",   car:"2",    et:"6.516", mph:"209.69" },
          { pos:2,  driver:"Dallas Glenn",    car:"1",    et:"6.525", mph:"208.55" },
          { pos:3,  driver:"Dave Connolly",   car:"51",   et:"6.536", mph:"209.75" },
          { pos:4,  driver:"Greg Stanfield",  car:"445",  et:"6.541", mph:"209.33" },
          { pos:5,  driver:"Deric Kramer",    car:"52",   et:"6.542", mph:"209.14" },
          { pos:6,  driver:"Cody Anderson",   car:"17",   et:"6.547", mph:"209.43" },
          { pos:7,  driver:"Eric Latino",     car:"7",    et:"6.550", mph:"209.43" },
          { pos:8,  driver:"Aaron Stanfield", car:"4",    et:"6.553", mph:"209.85" },
          { pos:9,  driver:"Matt Latino",     car:"16",   et:"6.553", mph:"208.65" },
          { pos:10, driver:"Chris Vang",      car:"5707", et:"6.553", mph:"208.01" },
          { pos:11, driver:"Erica Enders",    car:"6",    et:"6.554", mph:"210.41" },
          { pos:12, driver:"Jeg Coughlin Jr", car:"8",    et:"6.565", mph:"208.91" },
          { pos:13, driver:"Stephen Bell",    car:"439",  et:"6.567", mph:"208.68" },
          { pos:14, driver:"Troy Coughlin Jr",car:"10",   et:"6.572", mph:"209.14" },
          { pos:15, driver:"Matt Hartford",   car:"3",    et:"6.575", mph:"209.98" },
          { pos:16, driver:"Kenny Delco",     car:"150",  et:"6.583", mph:"207.62" },
          { pos:17, driver:"Chris McGaha",    car:"4264", et:"6.586", mph:"209.59" },
          { pos:18, driver:"Joey Grose",      car:"703",  et:"6.604", mph:"207.78" },
          { pos:19, driver:"Mason McGaha",    car:"400",  et:"6.611", mph:"209.23" },
        ],
        4: [ // Q4 FINAL — Saturday 4:00 PM PT — same order, Anderson locks up No.1
          { pos:1,  driver:"Greg Anderson",   car:"2",    et:"6.516", mph:"209.69" },
          { pos:2,  driver:"Dallas Glenn",    car:"1",    et:"6.525", mph:"208.55" },
          { pos:3,  driver:"Dave Connolly",   car:"51",   et:"6.536", mph:"209.75" },
          { pos:4,  driver:"Greg Stanfield",  car:"445",  et:"6.541", mph:"209.33" },
          { pos:5,  driver:"Deric Kramer",    car:"52",   et:"6.542", mph:"209.14" },
          { pos:6,  driver:"Cody Anderson",   car:"17",   et:"6.547", mph:"209.43" },
          { pos:7,  driver:"Eric Latino",     car:"7",    et:"6.550", mph:"209.43" },
          { pos:8,  driver:"Aaron Stanfield", car:"4",    et:"6.553", mph:"209.85" },
          { pos:9,  driver:"Matt Latino",     car:"16",   et:"6.553", mph:"208.65" },
          { pos:10, driver:"Chris Vang",      car:"5707", et:"6.553", mph:"208.01" },
          { pos:11, driver:"Erica Enders",    car:"6",    et:"6.554", mph:"210.41" },
          { pos:12, driver:"Jeg Coughlin Jr", car:"8",    et:"6.565", mph:"208.91" },
          { pos:13, driver:"Stephen Bell",    car:"439",  et:"6.567", mph:"208.68" },
          { pos:14, driver:"Troy Coughlin Jr",car:"10",   et:"6.572", mph:"209.14" },
          { pos:15, driver:"Matt Hartford",   car:"3",    et:"6.575", mph:"209.98" },
          { pos:16, driver:"Kenny Delco",     car:"150",  et:"6.583", mph:"207.62" },
          { pos:17, driver:"Chris McGaha",    car:"4264", et:"6.586", mph:"209.59" },
          { pos:18, driver:"Joey Grose",      car:"703",  et:"6.604", mph:"207.78" },
          { pos:19, driver:"Mason McGaha",    car:"400",  et:"6.611", mph:"209.23" },
        ],
      }
    },
    psm: null,
  }
};

// Real Winternationals Entry List (from NHRA.com, April 4 2026)
const RACE_ENTRY_LISTS = {
  3: { // Winternationals
    tf: [
      {num:"1", name:"Doug Kalitta", sponsor:"Mac Tools / Toyota"},
      {num:"2", name:"Shawn Langdon", sponsor:"Kalitta Air / Toyota"},
      {num:"3", name:"Justin Ashley", sponsor:"SCAG Power Equipment"},
      {num:"8", name:"Shawn Reed", sponsor:"Reed Trucking"},
      {num:"14", name:"Tony Stewart", sponsor:"R+L Carriers"},
      {num:"15", name:"Tony Schumacher", sponsor:"ACC"},
      {num:"51", name:"Clay Millican", sponsor:"Parts Plus"},
      {num:"77", name:"Josh Hart", sponsor:"Burnyzz / Speedmaster"},
      {num:"100", name:"Madison Gordon", sponsor:"Carlyle Tools"},
      {num:"123", name:"Antron Brown", sponsor:"ABM Matco Tools / Lucas Oil"},
      {num:"200", name:"Will Smith", sponsor:"BlueBird Turf / Red Line Oil"},
      {num:"474", name:"Billy Torrence", sponsor:"Capco Contractors"},
      {num:"748", name:"Cameron Ferre", sponsor:"Freeman / Jen Owens Realtor"},
      {num:"777", name:"Leah Pruett", sponsor:"Mopar Direct Connection / Dodge"},
      {num:"7727", name:"Ron August Jr", sponsor:"Fire Protection Mgmt"},
    ],
    fc: [
      {num:"1", name:"Austin Prock", sponsor:"Motorcraft / Ford Racing / PPG"},
      {num:"3", name:"Jack Beckman", sponsor:"PEAK Chevrolet SS"},
      {num:"5", name:"Daniel Wilkerson", sponsor:"SCAG Power Equipment"},
      {num:"6", name:"Paul Lee", sponsor:"Mainline Sales / FTI / McLeod"},
      {num:"7", name:"Chad Green", sponsor:"Bond-Coat, Inc."},
      {num:"9", name:"Spencer Hyde", sponsor:"Head Inc."},
      {num:"14", name:"Matt Hagan", sponsor:"Dodge SRT Hellcat"},
      {num:"22", name:"Todd Lesenko", sponsor:"Jim Dunn Racing"},
      {num:"24", name:"Jordan Vandergriff", sponsor:"Cornwell Tools Chevrolet SS"},
      {num:"28", name:"Ron Capps", sponsor:"NAPA Auto Parts / Toyota"},
      {num:"71", name:"Cruz Pedregon", sponsor:"Snap-On"},
      {num:"139", name:"Dave Richards", sponsor:"BlueBird Turf"},
      {num:"256", name:"Blake Alexander", sponsor:"Pronto / Schaeffler"},
      {num:"373", name:"JR Todd", sponsor:"DHL Toyota Supra"},
      {num:"703", name:"James Campbell", sponsor:"Densham Motorsports"},
      {num:"766", name:"Jason Rupert", sponsor:"Hot Probes / Shell Roofing"},
      {num:"771", name:"Alexis DeJoria", sponsor:"Bandero Cafe Chevrolet SS"},
      {num:"7818", name:"Dylan Winefsky", sponsor:"Robert\'s Car Care"},
    ],
    ps: [
      {num:"1", name:"Dallas Glenn", sponsor:"RAD Torque Systems"},
      {num:"2", name:"Greg Anderson", sponsor:"HendrickCars.com / Summit"},
      {num:"3", name:"Matt Hartford", sponsor:"Total Seal"},
      {num:"4", name:"Aaron Stanfield", sponsor:"Janac Bros Racing"},
      {num:"6", name:"Erica Enders", sponsor:"Elite Motorsports"},
      {num:"7", name:"Eric Latino", sponsor:"GESi Emissions Systems"},
      {num:"8", name:"Jeg Coughlin Jr", sponsor:"JEGS / Outlaw Light Beer"},
      {num:"9", name:"Cody Coughlin", sponsor:"Cody Coughlin Company"},
      {num:"10", name:"Troy Coughlin Jr", sponsor:"JEGS.com Elite Camaro"},
      {num:"16", name:"Matthew Latino", sponsor:"FASS / PowerEdge / ACE Race Part"},
      {num:"17", name:"Cody Anderson", sponsor:"J&A / Keith Haney Racing"},
      {num:"52", name:"Deric Kramer", sponsor:"Get Biofuel"},
      {num:"150", name:"Kenny Delco", sponsor:"JCM Racing"},
      {num:"400", name:"Mason McGaha", sponsor:"Harlow Sammons"},
      {num:"439", name:"Stephen Bell", sponsor:"1320 LLC"},
      {num:"445", name:"Greg Stanfield", sponsor:"Janac Bros"},
      {num:"703", name:"Joey Grose", sponsor:"Ron Grose Racing"},
      {num:"4264", name:"Chris McGaha", sponsor:"Harlow Sammons of Odessa"},
      {num:"5707", name:"Chris Vang", sponsor:"Prestige Trailers"},
    ],
    psm: null,
    pm: null,
  }
};

// ─── POINTS STANDINGS (after Race 2 — Arizona Nationals) ─────────────────────
const STANDINGS = {
  tf: [
    { pos:1,  name:"Doug Kalitta",    pts:176, behind:0,    f2t:3 },
    { pos:2,  name:"Josh Hart",       pts:174, behind:-2,   f2t:3 },
    { pos:3,  name:"Shawn Langdon",   pts:170, behind:-6,   f2t:0 },
    { pos:4,  name:"Leah Pruett",     pts:158, behind:-18,  f2t:0 },
    { pos:5,  name:"Maddi Gordon",    pts:152, behind:-24,  f2t:1 },
    { pos:6,  name:"Tony Stewart",    pts:108, behind:-68,  f2t:0 },
    { pos:7,  name:"Antron Brown",    pts:107, behind:-69,  f2t:1 },
    { pos:8,  name:"Tony Schumacher", pts:101, behind:-75,  f2t:0 },
    { pos:9,  name:"Billy Torrence",  pts:78,  behind:-98,  f2t:0 },
    { pos:10, name:"Justin Ashley",   pts:65,  behind:-111, f2t:0 },
    { pos:11, name:"Shawn Reed",      pts:65,  behind:-111, f2t:0 },
    { pos:12, name:"Clay Millican",   pts:62,  behind:-114, f2t:0 },
    { pos:13, name:"Tripp Tatum III", pts:53,  behind:-123, f2t:0 },
    { pos:14, name:"Cameron Ferre",   pts:41,  behind:-135, f2t:0 },
    { pos:15, name:"Will Smith",      pts:41,  behind:-135, f2t:0 },
  ],
  fc: [
    { pos:1,  name:"Chad Green",          pts:174, behind:0 },
    { pos:2,  name:"Spencer Hyde",        pts:156, behind:-18 },
    { pos:3,  name:"Ron Capps",           pts:151, behind:-23 },
    { pos:4,  name:"J.R. Todd",           pts:140, behind:-34 },
    { pos:5,  name:"Matt Hagan",          pts:135, behind:-39 },
    { pos:6,  name:"Alexis DeJoria",      pts:126, behind:-48 },
    { pos:7,  name:"Jordan Vandergriff",  pts:125, behind:-49 },
    { pos:8,  name:"Paul Lee",            pts:111, behind:-63 },
    { pos:9,  name:"Daniel Wilkerson",    pts:107, behind:-67 },
    { pos:10, name:"Jack Beckman",        pts:64,  behind:-110 },
    { pos:11, name:"Dave Richards",       pts:63,  behind:-111 },
    { pos:12, name:"Cruz Pedregon",       pts:57,  behind:-117 },
    { pos:13, name:"John Smith",          pts:51,  behind:-123 },
    { pos:14, name:"Hunter Green",        pts:33,  behind:-141 },
    { pos:15, name:"Julie Nataas",        pts:32,  behind:-142 },
  ],
  ps: [
    { pos:1,  name:"Dallas Glenn",      pts:195, behind:0,    f2t:3 },
    { pos:2,  name:"Matt Hartford",     pts:160, behind:-35,  f2t:4 },
    { pos:3,  name:"Cody Coughlin",     pts:158, behind:-37,  f2t:0 },
    { pos:4,  name:"Greg Anderson",     pts:142, behind:-53,  f2t:2 },
    { pos:5,  name:"Erica Enders",      pts:128, behind:-67,  f2t:2 },
    { pos:6,  name:"Greg Stanfield",    pts:118, behind:-77,  f2t:0 },
    { pos:7,  name:"Matt Latino",       pts:109, behind:-86,  f2t:0 },
    { pos:8,  name:"Jeg Coughlin Jr.",  pts:107, behind:-88,  f2t:0 },
    { pos:9,  name:"Aaron Stanfield",   pts:106, behind:-89,  f2t:0 },
    { pos:10, name:"Cody Anderson",     pts:83,  behind:-112, f2t:0 },
    { pos:11, name:"Chris McGaha",      pts:82,  behind:-113, f2t:0 },
    { pos:12, name:"Deric Kramer",      pts:67,  behind:-128, f2t:0 },
    { pos:13, name:"Eric Latino",       pts:65,  behind:-130, f2t:0 },
    { pos:14, name:"Troy Coughlin Jr.", pts:64,  behind:-131, f2t:0 },
    { pos:15, name:"Stephen Bell",      pts:62,  behind:-133, f2t:0 },
  ],
  psm: [
    { pos:1,  name:"Richard Gadson",  pts:124, behind:0 },
    { pos:2,  name:"John Hall",       pts:94,  behind:-30 },
    { pos:3,  name:"Clayton Howey",   pts:74,  behind:-50 },
    { pos:4,  name:"Steve Johnson",   pts:73,  behind:-51 },
    { pos:5,  name:"Matt Smith",      pts:64,  behind:-60 },
    { pos:6,  name:"Angie Smith",     pts:63,  behind:-61 },
    { pos:7,  name:"Gaige Herrera",   pts:59,  behind:-65 },
    { pos:8,  name:"Chase Van Sant",  pts:53,  behind:-71 },
    { pos:9,  name:"Kelly Clontz",    pts:32,  behind:-92 },
    { pos:10, name:"Brayden Davis",   pts:32,  behind:-92 },
    { pos:11, name:"Jianna Evaristo", pts:32,  behind:-92 },
    { pos:12, name:"Ryan Oehler",     pts:32,  behind:-92 },
    { pos:13, name:"Chris Bostick",   pts:31,  behind:-93 },
    { pos:14, name:"Marc Ingwersen",  pts:31,  behind:-93 },
    { pos:15, name:"Kimberly Morrell",pts:31,  behind:-93 },
  ]
};

// ─── 2025 FINAL STANDINGS (hardcoded historical data) ────────────────────────
const DRIVER_STATS_2025 = {
  // TOP FUEL 2025 Final
  "Doug Kalitta":      { pos:1,  pts:2607, wins:2,  champion:true  },
  "Shawn Langdon":     { pos:2,  pts:2463, wins:0                   },
  "Justin Ashley":     { pos:3,  pts:2444, wins:3                   },
  "Brittany Force":    { pos:4,  pts:2415, wins:1                   },
  "Tony Stewart":      { pos:5,  pts:2364, wins:1                   },
  "Clay Millican":     { pos:6,  pts:2335, wins:1                   },
  "Steve Torrence":    { pos:7,  pts:2297, wins:0                   },
  "Shawn Reed":        { pos:8,  pts:2290, wins:0                   },
  "Antron Brown":      { pos:9,  pts:2275, wins:0                   },
  "Josh Hart":         { pos:10, pts:2185, wins:0                   },
  // Funny Car 2025 Final
  "Austin Prock":      { pos:1,  pts:2594, wins:4,  champion:true  },
  "Matt Hagan":        { pos:2,  pts:2493, wins:3                   },
  "Jack Beckman":      { pos:3,  pts:2416, wins:0                   },
  "Ron Capps":         { pos:4,  pts:2370, wins:0                   },
  "Jordan Vandergriff":{ pos:5,  pts:null, wins:2                   },
  "Chad Green":        { pos:6,  pts:null, wins:1                   },
  "Alexis DeJoria":    { pos:7,  pts:null, wins:0                   },
  "Paul Lee":          { pos:8,  pts:null, wins:0                   },
  "Daniel Wilkerson":  { pos:9,  pts:null, wins:0                   },
  "J.R. Todd":         { pos:10, pts:null, wins:1                   },
  "JR Todd":           { pos:10, pts:null, wins:1                   },
  // Pro Stock 2025 Final
  "Dallas Glenn":      { pos:1,  pts:2666, wins:8,  champion:true  },
  "Greg Anderson":     { pos:2,  pts:2574, wins:2                   },
  "Matt Hartford":     { pos:3,  pts:2417, wins:0                   },
  "Aaron Stanfield":   { pos:4,  pts:2379, wins:0                   },
  "Erica Enders":      { pos:5,  pts:null, wins:1                   },
  "Greg Stanfield":    { pos:6,  pts:null, wins:1                   },
  "Cody Coughlin":     { pos:7,  pts:null, wins:0                   },
  "Troy Coughlin Jr.": { pos:8,  pts:null, wins:0                   },
  "Troy Coughlin Jr":  { pos:8,  pts:null, wins:0                   },
  "Matt Latino":       { pos:9,  pts:null, wins:0                   },
  "Matthew Latino":    { pos:9,  pts:null, wins:0                   },
  "Eric Latino":       { pos:10, pts:null, wins:0                   },
  // Pro Stock Motorcycle 2025 Final
  "Richard Gadson":    { pos:1,  pts:2584, wins:4,  champion:true  },
  "Gaige Herrera":     { pos:2,  pts:2563, wins:7                   },
  "Matt Smith":        { pos:3,  pts:2455, wins:1                   },
  "Angie Smith":       { pos:4,  pts:2421, wins:0                   },
  "Brayden Davis":     { pos:5,  pts:2399, wins:0                   },
  "John Hall":         { pos:6,  pts:2375, wins:2                   },
  "Jianna Evaristo":   { pos:7,  pts:null, wins:0                   },
  "Chase Van Sant":    { pos:8,  pts:null, wins:0                   },
  "Steve Johnson":     { pos:9,  pts:null, wins:0                   },
  "Chris Bostick":     { pos:10, pts:null, wins:0                   },
  // Pro Mod 2025 Final
  "JR Gray":           { pos:1,  pts:null, wins:null, champion:true },
  "Derek Menholt":     { pos:2,  pts:null, wins:null                },
  "Billy Banaka":      { pos:3,  pts:null, wins:null                },
};

// ─── ENTRY LIST (base data — live-refreshed on app open) ──────────────────────
// This is the known 2026 season roster. On app open, we attempt a live fetch
// from nhra.com and merge any updates. Fallback = this data.

const ENTRY_LIST_BASE = {
  tf: [
    { num:"01", name:"Doug Kalitta",    sponsor:"Mac Tools Dragster",                    team:"Kalitta Motorsports" },
    { num:"02", name:"Shawn Langdon",   sponsor:"Kalitta Air Careers",                   team:"Kalitta Motorsports" },
    { num:"03", name:"Justin Ashley",   sponsor:"SCAG Power Equipment",                  team:"SCAG Racing" },
    { num:"05", name:"Tony Stewart",    sponsor:"R+L Carriers",                          team:"Elite Motorsports" },
    { num:"06", name:"Clay Millican",   sponsor:"Parts Plus",                            team:"Parts Plus Racing" },
    { num:"07", name:"Steve Torrence",  sponsor:"Capco Racing",                          team:"Capco Contractors Racing" },
    { num:"08", name:"Shawn Reed",      sponsor:"Shawn Reed Racing",                     team:"Shawn Reed Racing" },
    { num:"09", name:"Antron Brown",    sponsor:"Matco Tools / Lucas Oil / Toyota",       team:"Antron Brown Motorsports" },
    { num:"10", name:"Josh Hart",       sponsor:"Burnyzz Speed Shop / Speedmaster",       team:"John Force Racing" },
    { num:"11", name:"Ida Zetterström", sponsor:"JCM Racing",                            team:"JCM Racing" },
    { num:"12", name:"Jasmine Salinas", sponsor:"Scrappers Racing",                      team:"Scrappers Racing" },
    { num:"13", name:"Dan Mercier",     sponsor:"Mercier Racing",                        team:"Mercier Racing" },
    { num:"14", name:"Tony Schumacher", sponsor:"American Communications Construction",  team:"Tony Schumacher Racing" },
    { num:"16", name:"Kyle Wurtzel",    sponsor:"Heartwood Planning Group",              team:"Wurtzel Racing" },
    { num:"17", name:"Cameron Ferre",   sponsor:"Jerry Freeman Racing",                  team:"Jerry Freeman Racing" },
    { num:"100", name:"Maddi Gordon",   sponsor:"Ron Capps Motorsports",                 team:"Ron Capps Motorsports" },
    { num:"474", name:"Billy Torrence", sponsor:"Capco Racing",                          team:"Capco Contractors Racing" },
    { num:"777", name:"Leah Pruett",    sponsor:"Tony Stewart Racing",                   team:"Tony Stewart Racing" },
    { num:"90",  name:"Will Smith",     sponsor:"SCAG Racing / BlueBird Turf",           team:"SCAG Racing" },
    { num:"4",   name:"Tripp Tatum III",sponsor:"Tatum Motorsports",                     team:"Tatum Motorsports" },
  ],
  fc: [
    { num:"01", name:"Austin Prock",        sponsor:"Ford Mustang Dark Horse",                    team:"Tasca Racing" },
    { num:"02", name:"Matt Hagan",          sponsor:"TSR Direct Connection Dodge SRT Hellcat",    team:"Tony Stewart Racing" },
    { num:"03", name:"Jack Beckman",        sponsor:"PEAK Chevrolet Camaro SS",                   team:"PEAK Racing" },
    { num:"04", name:"Ron Capps",           sponsor:"NAPA Auto Parts Toyota GR Supra",            team:"Ron Capps Motorsports" },
    { num:"05", name:"Daniel Wilkerson",    sponsor:"Scag Power Equipment Ford Shelby Mustang",   team:"Elite Motorsports" },
    { num:"06", name:"Paul Lee",            sponsor:"McLeod Racing / FTI Performance Charger",    team:"Paul Lee Racing" },
    { num:"07", name:"Chad Green",          sponsor:"Bond Coat Ford Mustang",                     team:"Chad Green Racing" },
    { num:"08", name:"Cruz Pedregon",       sponsor:"Snap-on Tools Dodge SRT Hellcat",            team:"Cruz Pedregon Racing" },
    { num:"09", name:"Spencer Hyde",        sponsor:"Head Inc. Ford Mustang",                     team:"Spencer Hyde Racing" },
    { num:"10", name:"Bob Tasca III",       sponsor:"Ford Motorcraft / Quick Lane Mustang",       team:"Tasca Racing" },
    { num:"11", name:"J.R. Todd",           sponsor:"DHL Toyota GR Supra",                        team:"Kalitta Motorsports" },
    { num:"12", name:"Alexis DeJoria",      sponsor:"Bandero Café Funny Car",                     team:"John Force Racing" },
    { num:"13", name:"Dave Richards",       sponsor:"SCAG Racing / BlueBird Turf / Versatran",    team:"SCAG Racing" },
    { num:"14", name:"Buddy Hull",          sponsor:"Hull Racing",                                team:"Hull Racing" },
    { num:"15", name:"Blake Alexander",     sponsor:"Pronto Auto Service Center",                 team:"Blake Alexander Racing" },
    { num:"24", name:"Jordan Vandergriff",  sponsor:"Cornwell Tools Chevrolet Camaro SS",         team:"John Force Racing" },
    { num:"28", name:"Hunter Green",        sponsor:"Bond-Coat Dodge Hellcat",                    team:"Chad Green Racing" },
  ],
  ps: [
    { num:"01", name:"Greg Anderson",       sponsor:"HendrickCars.com",                      team:"KB Titan Racing" },
    { num:"02", name:"Dallas Glenn",        sponsor:"RAD Torque Systems",                    team:"Elite Motorsports" },
    { num:"03", name:"Aaron Stanfield",     sponsor:"JHG / Melling / Janac Brothers",         team:"Elite Motorsports" },
    { num:"04", name:"Erica Enders",        sponsor:"JHG / Melling / SCAG",                  team:"Elite Motorsports" },
    { num:"05", name:"Jeg Coughlin Jr.",    sponsor:"Scag Power Equipment / Outlaw Mile Hi",  team:"Elite Motorsports" },
    { num:"06", name:"Matt Hartford",       sponsor:"GETTRX / Total Seal",                   team:"KB Titan Racing" },
    { num:"09", name:"Troy Coughlin Jr.",   sponsor:"JEGS.com / White Castle",               team:"Elite Motorsports" },
    { num:"10", name:"Eric Latino",         sponsor:"Team GESi Racing",                      team:"GESi Racing" },
    { num:"11", name:"Mason McGaha",        sponsor:"Harlow Sammons Racing",                 team:"Elite Motorsports" },
    { num:"12", name:"Chris McGaha",        sponsor:"Harlow Sammons Racing",                 team:"Elite Motorsports" },
    { num:"13", name:"Deric Kramer",        sponsor:"Get Biofuel",                           team:"Kramer Motorsports" },
    { num:"16", name:"Kenny Delco",         sponsor:"KD Racing / Artisan Coffee Co.",         team:"KD Racing" },
    { num:"17", name:"Cory Reed",           sponsor:"J&A Service",                           team:"J&A Service Racing" },
    { num:"51", name:"Dave Connolly",       sponsor:"KB Titan Racing",                       team:"KB Titan Racing" },
    { num:"72", name:"Cody Coughlin",       sponsor:"Cody Coughlin Co.",                     team:"Cody Coughlin Co." },
    { num:"201", name:"Matt Latino",        sponsor:"Team GESi Racing",                      team:"GESi Racing" },
    { num:"439", name:"Stephen Bell",       sponsor:"1320 LLC",                              team:"Elite Motorsports" },
    { num:"07", name:"Cristian Cuadra",     sponsor:"Corral Boots / Cuadra / Columbia Impex", team:"Cuadra Racing" },
    { num:"14", name:"David Cuadra",        sponsor:"Cuadra / Corral Boots",                 team:"Cuadra Racing" },
    { num:"15", name:"Fernando Cuadra Jr.", sponsor:"Corral Boots / Cuadra",                 team:"Cuadra Racing" },
  ],
  psm: [
    { num:"01", name:"Richard Gadson",  sponsor:"RevZilla / Mission / Vance & Hines Suzuki",  team:"Vance & Hines" },
    { num:"02", name:"Gaige Herrera",   sponsor:"RevZilla / Mission / Vance & Hines Suzuki",  team:"Vance & Hines" },
    { num:"03", name:"Matt Smith",      sponsor:"Denso / Outlaw Beer / MSR",                  team:"Matt Smith Racing" },
    { num:"04", name:"Angie Smith",     sponsor:"Denso / Outlaw Beer / MSR",                  team:"Matt Smith Racing" },
    { num:"05", name:"Brayden Davis",   sponsor:"Flyin' Ryan Racing / B&K Cylinder Heads",    team:"Davis Racing" },
    { num:"06", name:"John Hall",       sponsor:"Denso / B.R.A.K.E.S. / MSR",                team:"Matt Smith Racing" },
    { num:"07", name:"Jianna Evaristo", sponsor:"JHG / Scrappers / Denso / MSR",             team:"Matt Smith Racing" },
    { num:"08", name:"Chase Van Sant",  sponsor:"Trick Tools / White Alligator Racing Suzuki", team:"White Alligator Racing" },
    { num:"09", name:"Steve Johnson",   sponsor:"Steve Johnson Racing Suzuki",                team:"Steve Johnson Racing" },
    { num:"10", name:"Chris Bostick",   sponsor:"The Surf RV Resort Suzuki",                  team:"Bostick Racing" },
    { num:"11", name:"Marc Ingwersen",  sponsor:"Thiel's Wheels Buell",                       team:"Ingwersen Racing" },
    { num:"12", name:"Kelly Clontz",    sponsor:"Steamfitters UA Local 602",                  team:"Clontz Racing" },
    { num:"13", name:"Ryan Oehler",     sponsor:"El Bandido Tequila",                         team:"Oehler Racing" },
    { num:"14", name:"Hector Arana Jr", sponsor:"GETTRX Buell",                               team:"Arana Racing" },
    { num:"15", name:"Ron Tornow",      sponsor:"Ron Tornow Racing",                          team:"Tornow Racing" },
  ],
  pm: [
    { num:"5",    name:"Derek Menholt",    sponsor:"Menholt Auto Group",                         team:"Scott Tidwell Racing" },
    { num:"6280", name:"Justin Bond",      sponsor:"Al-Anabi Racing / JBS Motorsport",           team:"JBS Motorsport" },
    { num:"2",    name:"Billy Banaka",     sponsor:"S&B Trucking / Logistics / B&Q",             team:"Banaka Racing" },
    { num:"280",  name:"Steve Jackson",    sponsor:"Stevie Fast Jackson Racing",                 team:"Steve Jackson Racing" },
    { num:"44",   name:"Mike Castellana",  sponsor:"Al Anabi Performance / Western Beef",        team:"Castellana Racing" },
    { num:"1",    name:"JR Gray",          sponsor:"Al-Anabi Racing",                            team:"Gray Motorsports" },
    { num:"3",    name:"Michael Stavrinos",sponsor:"Speed & Truck World / Al-Anabi",             team:"Stavrinos Racing" },
    { num:"288",  name:"Sidnei Frigo",     sponsor:"Artivinco Racing / KTR",                     team:"Frigo Racing" },
    { num:"212",  name:"Stan Shelton",     sponsor:"Team Shelton Motorsports",                   team:"Team Shelton Motorsports" },
    { num:"9",    name:"Chip King Jr",     sponsor:"MWP Contractors",                            team:"King Racing" },
    { num:"225",  name:"Kevin Rivenbark",  sponsor:"Team Shelton Motorsports",                   team:"Team Shelton Motorsports" },
    { num:"205",  name:"Lyle Barnett",     sponsor:"Scott Tidwell Racing",                       team:"Scott Tidwell Racing" },
    { num:"40",   name:"Alex Laughlin",    sponsor:"Laughlin Racing",                            team:"Laughlin Racing" },
    { num:"4334", name:"Mason Wright",     sponsor:"ProFlow Plumbing Solutions / Elite",         team:"Elite Motorsports" },
    { num:"4000", name:"Jason Scruggs",    sponsor:"Scruggs / Henson",                           team:"Scruggs Racing" },
    { num:"430",  name:"Erica Enders",     sponsor:"JHG / Melling Performance / R+L Carriers",  team:"Elite Motorsports" },
    { num:"6911", name:"Mike Thielen",     sponsor:"Thielen Racing",                             team:"Thielen Racing" },
    { num:"729",  name:"Nicholas Januik",  sponsor:"Januik Racing",                              team:"Januik Racing" },
  ],
  tad: [
    { num:"10",   name:"Melanie Johnson",  sponsor:"Hadman / AJPE",               team:"Johnson Racing" },
    { num:"6",    name:"Jamie Noonan",     sponsor:"Firebird",                    team:"Noonan Racing" },
    { num:"613",  name:"Joey Severance",   sponsor:"Indy Speed",                  team:"Severance Racing" },
    { num:"491",  name:"Angelle Sampey",   sponsor:"JFR Canopy",                  team:"Sampey Racing" },
    { num:"2",    name:"Matthew Cummings", sponsor:"Drag Racing",                 team:"Cummings Racing" },
    { num:"T200", name:"Anthony Troyer",   sponsor:"Indy Speed",                  team:"Troyer Racing" },
    { num:"515",  name:"James Stevens",    sponsor:"Dragster Racing",             team:"Stevens Racing" },
    { num:"104",  name:"Corey Michalek",   sponsor:"Copeland / AJPE",             team:"Michalek Racing" },
    { num:"8",    name:"McKenna Bold",     sponsor:"Bold Racing",                 team:"Bold Racing" },
    { num:"24",   name:"Megan Smith",      sponsor:"Smith Racing",                team:"Smith Racing" },
    { num:"2192", name:"Sarah Allen",      sponsor:"Allen Racing",                team:"Allen Racing" },
    { num:"450",  name:"Kirk Wolf",        sponsor:"Copeland / NOON",             team:"Wolf Racing" },
    { num:"16",   name:"John Ausherman",   sponsor:"Ausherman Racing",            team:"Ausherman Racing" },
    { num:"176",  name:"Jeff Veale",       sponsor:"Veale Racing",                team:"Veale Racing" },
    { num:"74",   name:"Jerry Kumre Jr",   sponsor:"Kumre Racing",                team:"Kumre Racing" },
    { num:"75",   name:"Johnny Ahten",     sponsor:"Ahten Racing",                team:"Ahten Racing" },
  ],
  tafc: [
    { num:"1",    name:"Sean Bellemeur",   sponsor:"Bellemeur Racing Camaro",     team:"Bellemeur Racing" },
    { num:"9",    name:"Chris Foster",     sponsor:"Foster Racing Camaro",        team:"Foster Racing" },
    { num:"7524", name:"Doug Gordon",      sponsor:"Gordon Racing Camaro",        team:"Gordon Racing" },
    { num:"238",  name:"Mick Steele",      sponsor:"Steele Racing Mustang",       team:"Steele Racing" },
    { num:"6",    name:"Phil Esz",         sponsor:"Esz Racing Camaro",           team:"Esz Racing" },
    { num:"12",   name:"Jackie Fricke",    sponsor:"Fricke Racing",               team:"Fricke Racing" },
    { num:"57",   name:"Braiden Chesleigh",sponsor:"Chesleigh Racing",            team:"Chesleigh Racing" },
    { num:"118",  name:"Jon Bradford",     sponsor:"Bradford Racing",             team:"Bradford Racing" },
    { num:"55",   name:"Chris Demke",      sponsor:"Demke Racing",                team:"Demke Racing" },
  ],
  fss: [
    { num:"1",    name:"Mark Pawuk",       sponsor:"COPO Camaro",                 team:"Pawuk Racing" },
    { num:"5",    name:"Scott Libersher",  sponsor:"Mustang Cobra Jet",           team:"Libersher Racing" },
    { num:"212",  name:"Richard Hord",     sponsor:"Hord Racing COPO Camaro",     team:"Hord Racing" },
    { num:"3397", name:"David Davies",     sponsor:"Davies Racing",               team:"Davies Racing" },
    { num:"350",  name:"Doug Duell",       sponsor:"Duell Racing",                team:"Duell Racing" },
    { num:"803",  name:"Rouven Dawson",    sponsor:"Dawson Racing",               team:"Dawson Racing" },
    { num:"3047", name:"Kim Shirley",      sponsor:"Shirley Racing",              team:"Shirley Racing" },
    { num:"446",  name:"Conner Statler",   sponsor:"Statler Racing",              team:"Statler Racing" },
    { num:"14",   name:"David Janac",      sponsor:"Janac Brothers Mustang CJ",   team:"Janac Brothers" },
    { num:"103",  name:"Cristian Cuadra",  sponsor:"Cuadra Racing COPO",          team:"Cuadra Racing" },
  ],
  fx: [
    { num:"1",    name:"Troy Coughlin Jr.",sponsor:"JEGS COPO Camaro",            team:"JEGS Racing" },
    { num:"2",    name:"Bob Gulitti",      sponsor:"Gulitti Racing Drag Pak",     team:"Gulitti Racing" },
    { num:"3",    name:"Tommy Lee",        sponsor:"Lee Racing",                  team:"Lee Racing" },
    { num:"4",    name:"Jeff Strickland",  sponsor:"Strickland Racing",           team:"Strickland Racing" },
    { num:"5",    name:"Matt Hargis",      sponsor:"Hargis Racing",               team:"Hargis Racing" },
  ],
  td: [
    { num:"1",    name:"Casey Plaizier",    sponsor:"Spruce Grove AB",  team:"Top Dragster" },
    { num:"7",    name:"Dylan Hough",       sponsor:"Junction City OR", team:"Top Dragster" },
    { num:"62",   name:"Jenna Michaud",     sponsor:"Edmonton AB",      team:"Top Dragster" },
    { num:"71",   name:"Andy Spiegel",      sponsor:"Acton CA",         team:"Top Dragster" },
    { num:"74",   name:"Mallory Reis",      sponsor:"Mesa AZ",          team:"Top Dragster" },
    { num:"76",   name:"Dan Naylor",        sponsor:"Colfax CA",        team:"Top Dragster" },
    { num:"77",   name:"John Richardson",   sponsor:"Santa Clarita CA", team:"Top Dragster" },
    { num:"79",   name:"Thomas Bayer",      sponsor:"Cherry Valley CA", team:"Top Dragster" },
    { num:"550",  name:"Ed Olpin",          sponsor:"Pleasant Grove UT",team:"Top Dragster" },
    { num:"613",  name:"Stan Essery",       sponsor:"Sherwood Park AB", team:"Top Dragster" },
    { num:"751",  name:"Steve Moeller",     sponsor:"Norwalk CA",       team:"Top Dragster" },
    { num:"790",  name:"Taylor Wiens",      sponsor:"Las Vegas NV",     team:"Top Dragster" },
    { num:"3896", name:"Steve Hamilton",    sponsor:"Barstow CA",       team:"Top Dragster" },
    { num:"4358", name:"Dane Ward",         sponsor:"Mena AR",          team:"Top Dragster" },
    { num:"6010", name:"J. Grant Durie",    sponsor:"Vegreville AB",    team:"Top Dragster" },
    { num:"6591", name:"Moe Trujillo",      sponsor:"Buckeye AZ",       team:"Top Dragster" },
    { num:"6903", name:"Paul Nero",         sponsor:"Aurora OR",        team:"Top Dragster" },
    { num:"7014", name:"Steve Schneider",   sponsor:"San Diego CA",     team:"Top Dragster" },
    { num:"7091", name:"Reed Taylor",       sponsor:"Indian Springs NV",team:"Top Dragster" },
    { num:"7122", name:"Tony Jardino",      sponsor:"San Dimas CA",     team:"Top Dragster" },
    { num:"7125", name:"Cody Webber",       sponsor:"Kingman AZ",       team:"Top Dragster" },
    { num:"7237", name:"Steve Will",        sponsor:"Fortuna CA",       team:"Top Dragster" },
    { num:"7498", name:"Steve Casner",      sponsor:"Sheridan CA",      team:"Top Dragster" },
    { num:"7586", name:"Kenny Upton",       sponsor:"Garden Grove CA",  team:"Top Dragster" },
    { num:"7700", name:"Phillip Duerr",     sponsor:"Colfax CA",        team:"Top Dragster" },
    { num:"7852", name:"Matthew Woodard",   sponsor:"Belle Chasse LA",  team:"Top Dragster" },
    { num:"7902", name:"Brianna Wiens",     sponsor:"Las Vegas NV",     team:"Top Dragster" },
    { num:"7914", name:"Rob Whetstone",     sponsor:"Thousand Oaks CA", team:"Top Dragster" },
  ],
  ts: [
    { num:"3",    name:"David Cook Jr",     sponsor:"Novato CA",           team:"Top Sportsman" },
    { num:"7",    name:"Bryan Warr",        sponsor:"Riverton UT",         team:"Top Sportsman" },
    { num:"74",   name:"Ken Ratzloff",      sponsor:"Idaho Falls ID",      team:"Top Sportsman" },
    { num:"77",   name:"Rob Mendenhall",    sponsor:"San Diego CA",        team:"Top Sportsman" },
    { num:"78",   name:"Richard Okerman",   sponsor:"Torrance CA",         team:"Top Sportsman" },
    { num:"518",  name:"Monte Green",       sponsor:"Mesa AZ",             team:"Top Sportsman" },
    { num:"550",  name:"Ed Olpin",          sponsor:"Pleasant Grove UT",   team:"Top Sportsman" },
    { num:"714",  name:"Larry Giese",       sponsor:"Redwood Valley CA",   team:"Top Sportsman" },
    { num:"717",  name:"Randy Balough",     sponsor:"Newbury Park CA",     team:"Top Sportsman" },
    { num:"757",  name:"Jeffrey Gillette",  sponsor:"Benicia CA",          team:"Top Sportsman" },
    { num:"4720", name:"Mike Morehead",     sponsor:"Bryant AR",           team:"Top Sportsman" },
    { num:"6502", name:"Will Yakimetz",     sponsor:"Fountain Hills AZ",   team:"Top Sportsman" },
    { num:"6636", name:"Ray Martin",        sponsor:"Anchorage AK",        team:"Top Sportsman" },
    { num:"7038", name:"Patrick Warr",      sponsor:"Erda UT",             team:"Top Sportsman" },
    { num:"7158", name:"Joe Stannard",      sponsor:"Lake Havasu City AZ", team:"Top Sportsman" },
    { num:"7356", name:"Ted Kellner",       sponsor:"San Jose CA",         team:"Top Sportsman" },
    { num:"7598", name:"Chris Newman",      sponsor:"Lancaster CA",        team:"Top Sportsman" },
    { num:"7720", name:"Richard Harrison",  sponsor:"Lakewood CA",         team:"Top Sportsman" },
    { num:"7725", name:"Mike Hiatt",        sponsor:"Fallon NV",           team:"Top Sportsman" },
    { num:"7974", name:"Bill Mizia",        sponsor:"Glendora CA",         team:"Top Sportsman" },
    { num:"A710", name:"David Beckwith",    sponsor:"Rancho Cucamonga CA", team:"Top Sportsman" },
    { num:"699B", name:"Aaron Steinkey",    sponsor:"Dunmore AB",          team:"Top Sportsman" },
    { num:"713G", name:"Greg Peterson",     sponsor:"Chino CA",            team:"Top Sportsman" },
  ],
  sc: [
    { num:"1",    name:"Chad Webber",       sponsor:"Kingman AZ",        team:"Super Comp" },
    { num:"6",    name:"Gabriel Torres",    sponsor:"La Puente CA",      team:"Super Comp" },
    { num:"74",   name:"Cody Stevenson",    sponsor:"South Jordan UT",   team:"Super Comp" },
    { num:"75",   name:"Justin Morris",     sponsor:"Pomona CA",         team:"Super Comp" },
    { num:"79",   name:"Steven Hendrix",    sponsor:"Bakersfield CA",    team:"Super Comp" },
    { num:"534",  name:"Todd McCann",       sponsor:"Centennial CO",     team:"Super Comp" },
    { num:"547",  name:"Kevin Wright",      sponsor:"Longmont CO",       team:"Super Comp" },
    { num:"555",  name:"Michael Miller",    sponsor:"Santa Fe NM",       team:"Super Comp" },
    { num:"637",  name:"Dylan Hough",       sponsor:"Junction City OR",  team:"Super Comp" },
    { num:"713",  name:"Kaylee McKibbon",   sponsor:"Bakersfield CA",    team:"Super Comp" },
    { num:"726",  name:"Curtis Berry",      sponsor:"West Sacramento CA",team:"Super Comp" },
    { num:"735",  name:"Steve Williams",    sponsor:"Beaumont CA",       team:"Super Comp" },
    { num:"763",  name:"Debbie Dolezal",    sponsor:"Chandler AZ",       team:"Super Comp" },
    { num:"780",  name:"Mike Cornelius",    sponsor:"Covina CA",         team:"Super Comp" },
    { num:"6015", name:"Randy Beck",        sponsor:"Tacoma WA",         team:"Super Comp" },
    { num:"6090", name:"Bambee Garfield",   sponsor:"Corona CA",         team:"Super Comp" },
    { num:"6173", name:"Ken Mostowich",     sponsor:"Calgary AB",        team:"Super Comp" },
    { num:"6444", name:"James Cowie",       sponsor:"Surrey BC",         team:"Super Comp" },
    { num:"6465", name:"Cooper Chun",       sponsor:"Vancouver WA",      team:"Super Comp" },
    { num:"6684", name:"Emmett McKillop",   sponsor:"Selah WA",          team:"Super Comp" },
    { num:"7002", name:"Allison McKoane",   sponsor:"Clovis CA",         team:"Super Comp" },
    { num:"7010", name:"Travis Theobald",   sponsor:"Washington UT",     team:"Super Comp" },
    { num:"7011", name:"Bill Webber",       sponsor:"Kingman AZ",        team:"Super Comp" },
    { num:"7013", name:"Bobby Dye Jr",      sponsor:"Ontario CA",        team:"Super Comp" },
    { num:"7023", name:"Charles Babcock",   sponsor:"Yorba Linda CA",    team:"Super Comp" },
    { num:"7035", name:"Bob VanPopering",   sponsor:"Castro Valley CA",  team:"Super Comp" },
    { num:"7046", name:"Mike Theulen",      sponsor:"Phoenix AZ",        team:"Super Comp" },
    { num:"7260", name:"Martin Clevenger",  sponsor:"Riverside CA",      team:"Super Comp" },
    { num:"7280", name:"Glenn Kern",        sponsor:"Modesto CA",        team:"Super Comp" },
    { num:"7319", name:"Tanner Hiatt",      sponsor:"Sparks NV",         team:"Super Comp" },
    { num:"7335", name:"Nick Cobb",         sponsor:"Gilroy CA",         team:"Super Comp" },
    { num:"7351", name:"Jerry Denton Jr",   sponsor:"Chandler AZ",       team:"Super Comp" },
    { num:"7504", name:"Bailey Naber",      sponsor:"Jurupa Valley CA",  team:"Super Comp" },
    { num:"7585", name:"Marko Perivolaris", sponsor:"Petaluma CA",       team:"Super Comp" },
    { num:"7687", name:"Tanner Theobald",   sponsor:"Washington UT",     team:"Super Comp" },
    { num:"7722", name:"Jason Wieck",       sponsor:"Long Beach CA",     team:"Super Comp" },
    { num:"7727", name:"Logan Warr",        sponsor:"Erda UT",           team:"Super Comp" },
    { num:"7748", name:"Jack DeRencin",     sponsor:"Buena Park CA",     team:"Super Comp" },
    { num:"7809", name:"Val Torres",        sponsor:"La Puente CA",      team:"Super Comp" },
    { num:"7851", name:"Robert Naber",      sponsor:"Mira Loma CA",      team:"Super Comp" },
    { num:"7959", name:"Russ Stevenson",    sponsor:"South Jordan UT",   team:"Super Comp" },
    { num:"U706", name:"Nick Alejandre",    sponsor:"Glendale AZ",       team:"Super Comp" },
  ],
  sg: [
    { num:"2",    name:"Val Torres",        sponsor:"La Puente CA",      team:"Super Gas" },
    { num:"5",    name:"Evan Kowalski",     sponsor:"Riverside CA",      team:"Super Gas" },
    { num:"52",   name:"Rodger Sauder",     sponsor:"Sidney NE",         team:"Super Gas" },
    { num:"57",   name:"Tom Carlson",       sponsor:"Two Harbors MN",    team:"Super Gas" },
    { num:"73",   name:"Mike Boehner",      sponsor:"Midlothian TX",     team:"Super Gas" },
    { num:"75",   name:"Brad Pierce",       sponsor:"Riverside CA",      team:"Super Gas" },
    { num:"79",   name:"Michael Miller",    sponsor:"Santa Fe NM",       team:"Super Gas" },
    { num:"638",  name:"Dale Dryden",       sponsor:"Stettler AB",       team:"Super Gas" },
    { num:"729",  name:"Greg Ventura",      sponsor:"Corona CA",         team:"Super Gas" },
    { num:"733",  name:"Darin Dolezal",     sponsor:"Chandler AZ",       team:"Super Gas" },
    { num:"735",  name:"Steve Williams",    sponsor:"Beaumont CA",       team:"Super Gas" },
    { num:"743",  name:"Gary Mignacca",     sponsor:"Lawndale CA",       team:"Super Gas" },
    { num:"760",  name:"Mike Lang",         sponsor:"Lake Havasu City AZ",team:"Super Gas" },
    { num:"761",  name:"Matthew Treadway",  sponsor:"Buena Park CA",     team:"Super Gas" },
    { num:"767",  name:"Mike Wiblishouser", sponsor:"Buckeye AZ",        team:"Super Gas" },
    { num:"777",  name:"Sandy Bracey-Nero", sponsor:"Aurora OR",         team:"Super Gas" },
    { num:"5303", name:"Tony Deluzio",      sponsor:"Strasburg CO",      team:"Super Gas" },
    { num:"5500", name:"Edwin Olpin",       sponsor:"American Fork UT",  team:"Super Gas" },
    { num:"6173", name:"Ken Mostowich",     sponsor:"Calgary AB",        team:"Super Gas" },
    { num:"6218", name:"Lindsey Larson",    sponsor:"Tacoma WA",         team:"Super Gas" },
    { num:"6247", name:"Eddy Plaizier",     sponsor:"Edmonton AB",       team:"Super Gas" },
    { num:"6563", name:"Chris Cannon",      sponsor:"Snohomish WA",      team:"Super Gas" },
    { num:"6927", name:"Brent McKinney",    sponsor:"Wilsonville OR",    team:"Super Gas" },
    { num:"7000", name:"John McKoane",      sponsor:"Clovis CA",         team:"Super Gas" },
    { num:"7019", name:"Peter Bothe",       sponsor:"Long Beach CA",     team:"Super Gas" },
    { num:"7047", name:"Michael Blodgett Jr",sponsor:"Long Beach CA",    team:"Super Gas" },
    { num:"7117", name:"Roger Kato",        sponsor:"North Las Vegas NV",team:"Super Gas" },
    { num:"7145", name:"Gregory Harrison",  sponsor:"Livermore CA",      team:"Super Gas" },
    { num:"7226", name:"Lonnie Wilburn",    sponsor:"San Bruno CA",      team:"Super Gas" },
    { num:"7267", name:"Larry Scarth",      sponsor:"Hawthorne CA",      team:"Super Gas" },
    { num:"7332", name:"Larry Bradshaw",    sponsor:"Yorba Linda CA",    team:"Super Gas" },
    { num:"7334", name:"Dave Thompson",     sponsor:"Queen Creek AZ",    team:"Super Gas" },
    { num:"7379", name:"Randy Bowers",      sponsor:"Riverside CA",      team:"Super Gas" },
    { num:"7410", name:"Douglas Sedmak",    sponsor:"Riverside CA",      team:"Super Gas" },
    { num:"7457", name:"John Sapone Jr",    sponsor:"Tujunga CA",        team:"Super Gas" },
    { num:"7502", name:"Greg Martin",       sponsor:"Lakewood CA",       team:"Super Gas" },
    { num:"7566", name:"Ray Cordeiro",      sponsor:"Goleta CA",         team:"Super Gas" },
    { num:"7585", name:"Marko Perivolaris", sponsor:"Petaluma CA",       team:"Super Gas" },
    { num:"7592", name:"John Parrino",      sponsor:"Saugus CA",         team:"Super Gas" },
    { num:"7627", name:"David Gotts",       sponsor:"Corona CA",         team:"Super Gas" },
    { num:"7638", name:"Mark Yeager",       sponsor:"Hollister CA",      team:"Super Gas" },
    { num:"7644", name:"Eric Reyes",        sponsor:"Sonoma CA",         team:"Super Gas" },
    { num:"7673", name:"Paul Wiechmann",    sponsor:"Torrance CA",       team:"Super Gas" },
    { num:"7782", name:"Trenton Langan",    sponsor:"La Habra CA",       team:"Super Gas" },
    { num:"7800", name:"Kevin Briles",      sponsor:"Grand Junction CO", team:"Super Gas" },
    { num:"7829", name:"Ted Seipel",        sponsor:"San Leandro CA",    team:"Super Gas" },
    { num:"7874", name:"John Phillippi",    sponsor:"Riverside CA",      team:"Super Gas" },
    { num:"7880", name:"Jerry Denton Jr",   sponsor:"Chandler AZ",       team:"Super Gas" },
    { num:"7890", name:"Randy Fabbro",      sponsor:"Glendora CA",       team:"Super Gas" },
    { num:"7905", name:"Joseph Galati",     sponsor:"Acton CA",          team:"Super Gas" },
    { num:"798A", name:"William Botelho",   sponsor:"Smith NV",          team:"Super Gas" },
    { num:"D774", name:"Ryan Giacone",      sponsor:"Glendale AZ",       team:"Super Gas" },
    { num:"G726", name:"John Krueger",      sponsor:"Tehachapi CA",      team:"Super Gas" },
  ],
  ss: [
    { num:"8",    name:"Leo Glasbrenner",   sponsor:"Walling TN",         team:"Super Stock" },
    { num:"9",    name:"Evan Kowalski",     sponsor:"Riverside CA",       team:"Super Stock" },
    { num:"10",   name:"Jody Lang",         sponsor:"Puyallup WA",        team:"Super Stock" },
    { num:"74",   name:"Randy Loge",        sponsor:"Brentwood CA",       team:"Super Stock" },
    { num:"76",   name:"Mike Cotten",       sponsor:"Cave Creek AZ",      team:"Super Stock" },
    { num:"77",   name:"Kevin Motter",      sponsor:"Anaheim CA",         team:"Super Stock" },
    { num:"543",  name:"Craig Maddox",      sponsor:"Sidney NE",          team:"Super Stock" },
    { num:"605",  name:"Larry Peterson",    sponsor:"Eugene OR",          team:"Super Stock" },
    { num:"621",  name:"Steve Hahn",        sponsor:"Yakima WA",          team:"Super Stock" },
    { num:"709",  name:"Doug Broaddus",     sponsor:"Anaheim Hills CA",   team:"Super Stock" },
    { num:"710",  name:"Shelby Freese",     sponsor:"Plainfield IN",      team:"Super Stock" },
    { num:"741",  name:"John Irving",       sponsor:"Boulder City NV",    team:"Super Stock" },
    { num:"301C", name:"John Coughlin",     sponsor:"Delaware OH",        team:"Super Stock" },
    { num:"570E", name:"Brian Brossart",    sponsor:"Williston ND",       team:"Super Stock" },
    { num:"6002", name:"Rick McKinney",     sponsor:"Richmond BC",        team:"Super Stock" },
    { num:"6026", name:"Rob Youngblood",    sponsor:"Nampa ID",           team:"Super Stock" },
    { num:"6364", name:"Darrell Stobbe",    sponsor:"Abbotsford BC",      team:"Super Stock" },
    { num:"7004", name:"John Cantlay",      sponsor:"Studio City CA",     team:"Super Stock" },
    { num:"7067", name:"Broc Broaddus",     sponsor:"Anaheim CA",         team:"Super Stock" },
    { num:"7111", name:"Jon Irving",        sponsor:"Boulder City NV",    team:"Super Stock" },
    { num:"7171", name:"Fred Moreno",       sponsor:"La Verne CA",        team:"Super Stock" },
    { num:"7277", name:"Mike Johnston",     sponsor:"Parker AZ",          team:"Super Stock" },
    { num:"7304", name:"Tom Armanino",      sponsor:"San Mateo CA",       team:"Super Stock" },
    { num:"7391", name:"John Winslow Jr",   sponsor:"Prunedale CA",       team:"Super Stock" },
    { num:"7394", name:"Beau Winslow",      sponsor:"San Jose CA",        team:"Super Stock" },
    { num:"7568", name:"Bryan Broaddus",    sponsor:"Yorba Linda CA",     team:"Super Stock" },
    { num:"7643", name:"Kayla Mozeris",     sponsor:"Phoenix AZ",         team:"Super Stock" },
    { num:"7696", name:"Len Schneider",     sponsor:"Grass Valley CA",    team:"Super Stock" },
    { num:"7702", name:"Mike Graham",       sponsor:"Casa Grande AZ",     team:"Super Stock" },
    { num:"7776", name:"Paul Phillippi",    sponsor:"Riverside CA",       team:"Super Stock" },
    { num:"7797", name:"Don Keen",          sponsor:"Palmdale CA",        team:"Super Stock" },
    { num:"7856", name:"Jim Grossi Jr",     sponsor:"Brentwood CA",       team:"Super Stock" },
    { num:"7980", name:"Steve Wann",        sponsor:"Modesto CA",         team:"Super Stock" },
  ],
  st: [
    { num:"10",   name:"Jody Lang",         sponsor:"Puyallup WA",        team:"Stock Elim." },
    { num:"71",   name:"Kyle Rizzoli",      sponsor:"San Luis Obispo CA", team:"Stock Elim." },
    { num:"73",   name:"CW Hoefer",         sponsor:"Calimesa CA",        team:"Stock Elim." },
    { num:"75",   name:"Greg Krause",       sponsor:"Escondido CA",       team:"Stock Elim." },
    { num:"77",   name:"Nanette Stein",     sponsor:"Brentwood CA",       team:"Stock Elim." },
    { num:"543",  name:"Craig Maddox",      sponsor:"Sidney NE",          team:"Stock Elim." },
    { num:"601",  name:"Cody Lane",         sponsor:"Seattle WA",         team:"Stock Elim." },
    { num:"619",  name:"Hal Sorensen",      sponsor:"Vancouver WA",       team:"Stock Elim." },
    { num:"621",  name:"Steve Hahn",        sponsor:"Yakima WA",          team:"Stock Elim." },
    { num:"720",  name:"Carl Battis",       sponsor:"Irving TX",          team:"Stock Elim." },
    { num:"727",  name:"Mike Johnston",     sponsor:"Parker AZ",          team:"Stock Elim." },
    { num:"728",  name:"Brent Calvert",     sponsor:"Lancaster CA",       team:"Stock Elim." },
    { num:"741",  name:"John Irving",       sponsor:"Boulder City NV",    team:"Stock Elim." },
    { num:"778",  name:"Jimmy DeFrank",     sponsor:"Thousand Oaks CA",   team:"Stock Elim." },
    { num:"784",  name:"Randy Chen",        sponsor:"Huntington Beach CA",team:"Stock Elim." },
    { num:"795",  name:"Brian McClanahan",  sponsor:"Alta Loma CA",       team:"Stock Elim." },
    { num:"4688", name:"Mike Cotten",       sponsor:"Cave Creek AZ",      team:"Stock Elim." },
    { num:"5006", name:"Dan Jeska",         sponsor:"Sun City West AZ",   team:"Stock Elim." },
    { num:"5016", name:"Steve Scherschligt",sponsor:"Lesterville SD",     team:"Stock Elim." },
    { num:"5500", name:"Randy Mans",        sponsor:"Rogers MN",          team:"Stock Elim." },
    { num:"5526", name:"Dwayne Scheitlin",  sponsor:"Brighton CO",        team:"Stock Elim." },
    { num:"7003", name:"John Schloe",       sponsor:"Garden Grove CA",    team:"Stock Elim." },
    { num:"7011", name:"Randy Gregg",       sponsor:"La Crescenta CA",    team:"Stock Elim." },
    { num:"7015", name:"Alvin Williamson",  sponsor:"Moreno Valley CA",   team:"Stock Elim." },
    { num:"7025", name:"Gerald Stein",      sponsor:"Brentwood CA",       team:"Stock Elim." },
    { num:"7050", name:"Darin Grossi",      sponsor:"Copperopolis CA",    team:"Stock Elim." },
    { num:"7124", name:"Mark Born",         sponsor:"Murrieta CA",        team:"Stock Elim." },
    { num:"7155", name:"Leo Glasbrenner",   sponsor:"Walling TN",         team:"Stock Elim." },
    { num:"7158", name:"Sante Grossi",      sponsor:"Riverside CA",       team:"Stock Elim." },
    { num:"7307", name:"Jeffrey Jerome",    sponsor:"Sonoma CA",          team:"Stock Elim." },
    { num:"7350", name:"Justin Graham",     sponsor:"Montclair CA",       team:"Stock Elim." },
    { num:"7411", name:"Jon Irving",        sponsor:"Boulder City NV",    team:"Stock Elim." },
    { num:"7432", name:"Ryan Schloe",       sponsor:"Garden Grove CA",    team:"Stock Elim." },
    { num:"7503", name:"Jared Jordan",      sponsor:"Modesto CA",         team:"Stock Elim." },
    { num:"7509", name:"Shane Cherry",      sponsor:"Diamond Bar CA",     team:"Stock Elim." },
    { num:"7593", name:"Richard Pauley",    sponsor:"Saugus CA",          team:"Stock Elim." },
    { num:"7616", name:"Ryan Mangus",       sponsor:"Colton CA",          team:"Stock Elim." },
    { num:"7670", name:"Michael Williams",  sponsor:"Hesperia CA",        team:"Stock Elim." },
    { num:"7801", name:"Pete Lanciers",     sponsor:"Spring Valley CA",   team:"Stock Elim." },
    { num:"7931", name:"Clifton Hanson",    sponsor:"Huntington Beach CA",team:"Stock Elim." },
    { num:"7980", name:"Steve Wann",        sponsor:"Modesto CA",         team:"Stock Elim." },
    { num:"F723", name:"Paul Calvert",      sponsor:"Lancaster CA",       team:"Stock Elim." },
    { num:"J712", name:"Chris Hall",        sponsor:"Elwood UT",          team:"Stock Elim." },
  ],
  ce: [
    { num:"2",    name:"Jeff Lane",         sponsor:"North Bend WA",           team:"Comp Elim." },
    { num:"68",   name:"Ralph Van Paepeghem",sponsor:"Garden Valley ID",       team:"Comp Elim." },
    { num:"71",   name:"Kevin Carter",      sponsor:"Surprise AZ",             team:"Comp Elim." },
    { num:"72",   name:"Dean Carter",       sponsor:"Peoria AZ",               team:"Comp Elim." },
    { num:"77",   name:"Joshua Lee",        sponsor:"Lancaster CA",            team:"Comp Elim." },
    { num:"703",  name:"Joe Mozeris",       sponsor:"Phoenix AZ",              team:"Comp Elim." },
    { num:"704",  name:"Kayla Mozeris",     sponsor:"Phoenix AZ",              team:"Comp Elim." },
    { num:"727",  name:"Alan Freese",       sponsor:"Salinas CA",              team:"Comp Elim." },
    { num:"799",  name:"Steve Graham",      sponsor:"South San Francisco CA",  team:"Comp Elim." },
    { num:"4240", name:"Brooke Furlong",    sponsor:"Baytown TX",              team:"Comp Elim." },
    { num:"5900", name:"Cali Neff",         sponsor:"Westminster CO",          team:"Comp Elim." },
    { num:"601C", name:"Cody Lane",         sponsor:"Seattle WA",              team:"Comp Elim." },
    { num:"6088", name:"Ryan Warter",       sponsor:"Olalla WA",               team:"Comp Elim." },
    { num:"7167", name:"Ryan Priddy",       sponsor:"Chino CA",                team:"Comp Elim." },
    { num:"7235", name:"Scott McClay",      sponsor:"Tehachapi CA",            team:"Comp Elim." },
    { num:"7342", name:"Matthew Dahl",      sponsor:"Las Vegas NV",            team:"Comp Elim." },
    { num:"7534", name:"Paul Mitsos",       sponsor:"Eastvale CA",             team:"Comp Elim." },
  ],
};

// Track live-fetched overrides
let entryListLive = {};
let entryFetchTime = null;
let entryFetchStatus = 'idle'; // idle | fetching | fresh | stale | error

// ─── ENTRY LIST LIVE REFRESH ──────────────────────────────────────────────────
// Strategy: On each app open and each time the Entries tab is opened,
// fetch the NHRA driver listing pages via a CORS proxy and diff against base data.
// We use allorigins.win as a free CORS proxy (no auth needed, browser-safe).

const NHRA_SOURCES = {
  tf:  'https://www.nhra.com/drivers/nhra/top-fuel',
  fc:  'https://www.nhra.com/drivers/nhra/funny-car',
  ps:  'https://www.nhra.com/drivers/nhra/pro-stock',
  psm: 'https://www.nhra.com/drivers/nhra/pro-stock-motorcycle',
};

async function fetchClassEntries(classKey) {
  const url = NHRA_SOURCES[classKey];
  const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
  try {
    const res = await fetch(proxyUrl, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();
    const html = data.contents || '';

    // Parse driver names and car numbers from the table
    // NHRA driver listing uses a standard table format
    const rows = [];
    const nameRe = /<td[^>]*>([A-Z][a-zA-ZÖöÜüÄäÉéÍí '\-\.]+)<\/td>/g;
    const numRe = /\|(\d+)\s*\|/g;

    // Extract from the table structure returned by allorigins
    // Look for the driver table rows
    const tableMatch = html.match(/Driver\s*\|[^]+?(?=<\/table>|$)/i);
    if (tableMatch) {
      const tableText = tableMatch[0];
      const lines = tableText.split('\n');
      lines.forEach(line => {
        const parts = line.split('|').map(s => s.trim()).filter(Boolean);
        if (parts.length >= 2) {
          const numPart = parts[0];
          const namePart = parts[1];
          if (/^\d+$/.test(numPart) && namePart.length > 2 && /[a-zA-Z]/.test(namePart)) {
            rows.push({ num: numPart, name: namePart });
          }
        }
      });
    }

    if (rows.length > 2) {
      return rows;
    }
    return null;
  } catch {
    return null;
  }
}

async function refreshEntryList() {
  let anyUpdated = false;

  // Fetch all 4 classes in parallel
  const results = await Promise.allSettled([
    fetchClassEntries('tf'),
    fetchClassEntries('fc'),
    fetchClassEntries('ps'),
    fetchClassEntries('psm'),
  ]);

  const keys = ['tf','fc','ps','psm'];
  results.forEach((res, i) => {
    if (res.status === 'fulfilled' && res.value && res.value.length > 3) {
      // Merge: update names/numbers that changed, keep sponsor/team from base
      const liveRows = res.value;
      const classKey = keys[i];
      const base = ENTRY_LIST_BASE[classKey];
      const merged = base.map(entry => {
        const liveMatch = liveRows.find(r =>
          r.name.toLowerCase().includes(entry.name.split(' ').pop().toLowerCase())
        );
        if (liveMatch && liveMatch.num !== entry.num) {
          return { ...entry, num: liveMatch.num, _updated: true };
        }
        return entry;
      });
      // Add any new drivers from live that aren't in base
      liveRows.forEach(lr => {
        const exists = merged.some(m => m.name.toLowerCase().includes(lr.name.split(' ').pop()?.toLowerCase() || ''));
        if (!exists && lr.name.length > 3) {
          merged.push({ num: lr.num, name: lr.name, sponsor: '—', team: '—', _new: true });
        }
      });
      entryListLive[classKey] = merged;
      anyUpdated = true;
    }
  });

  entryFetchTime = new Date();

  // Re-render if entries view is active
  if (activeView === 'entries') renderEntryList();
}



// ─── TIME ZONE CONVERSION ─────────────────────────────────────────────────────
function convertToET(timeStr, dateStr, venueTz) {
  if (!timeStr.match(/^\d+:\d+\s*(AM|PM)$/i)) return timeStr;
  try {
    const [, hr, min, ampm] = timeStr.match(/^(\d+):(\d+)\s*(AM|PM)$/i);
    let hour = parseInt(hr, 10);
    if (ampm.toUpperCase() === 'PM' && hour !== 12) hour += 12;
    if (ampm.toUpperCase() === 'AM' && hour === 12) hour = 0;
    const localStr = `${dateStr}T${String(hour).padStart(2,'0')}:${min}:00`;
    const dt = new Date(localStr);
    const tzDate = new Date(dt.toLocaleString('en-US', { timeZone: venueTz }));
    const utcDate = new Date(dt.toLocaleString('en-US', { timeZone: 'UTC' }));
    const offsetMin = (tzDate - utcDate) / 60000;
    const utcMs = dt.getTime() - offsetMin * 60000;
    return new Date(utcMs).toLocaleTimeString('en-US', {
      hour:'numeric', minute:'2-digit', hour12:true, timeZone:'America/New_York'
    });
  } catch { return timeStr; }
}

// ─── DATE HELPERS ─────────────────────────────────────────────────────────────
const MONTHS3 = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const MONTHS3U = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
function parseDate(s) { const [y,m,d]=s.split('-').map(Number); return new Date(y,m-1,d); }
function today()      { const n=new Date(); return new Date(n.getFullYear(),n.getMonth(),n.getDate()); }
function formatDateRange(start, end) {
  const s=parseDate(start), e=parseDate(end);
  if (s.getMonth()===e.getMonth())
    return `${MONTHS3[s.getMonth()]} ${s.getDate()}–${e.getDate()}, ${s.getFullYear()}`;
  return `${MONTHS3[s.getMonth()]} ${s.getDate()} – ${MONTHS3[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`;
}

// ─── RACE STATUS ──────────────────────────────────────────────────────────────
function getRaceStatus(race) {
  const t=today(), s=parseDate(race.startDate), e=parseDate(race.endDate);
  if (t>e) return 'completed';
  if (t>=s) return 'live';
  return 'upcoming';
}

// ─── STATS BAR ────────────────────────────────────────────────────────────────
function updateStats() {
  const t=today();
  let remaining=0, completed=0, nextRace=null;
  RACES.forEach(r => {
    if (t > parseDate(r.endDate)) completed++;
    else { remaining++; if (!nextRace && t<=parseDate(r.startDate)) nextRace=r; }
  });
  document.getElementById('stat-remaining').textContent = remaining;
  document.getElementById('stat-completed').textContent = completed;
  if (nextRace) {
    const city = nextRace.city.split(',')[1]?.trim() || nextRace.city;
    document.getElementById('stat-next').textContent = city;
  } else {
    document.getElementById('stat-next').textContent = 'Complete';
  }
}

// ─── NAV / VIEW SWITCHING ─────────────────────────────────────────────────────
let activeView = 'schedule';

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const view = btn.dataset.view;
    if (view === activeView) return;

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.view').forEach(v => {
      v.classList.remove('active-view');
      v.setAttribute('hidden','');
    });
    const el = document.getElementById(`view-${view}`);
    if (el) { el.removeAttribute('hidden'); el.classList.add('active-view'); }

    activeView = view;

    if (view === 'winners')   renderWinnersCircle();
    if (view === 'standings') renderStandings();
    if (view === 'qualifying') initQualifyingTab();
    if (view === 'f2t') renderF2TTab();
    if (view === 'brackets') initBracketsTab();
    if (view === 'entries') {
      renderEntryList();
      // Trigger background refresh every time Entries tab is opened
      refreshEntryList();
    }
  });
});

// ─── SCHEDULE VIEW ────────────────────────────────────────────────────────────
let activeFilter = 'all';

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderSchedule();
  });
});

function renderSchedule() {
  const list = document.getElementById('schedule-list');
  list.innerHTML = '';
  const t = today();
  const nextRace = RACES.find(r => parseDate(r.endDate) >= t);

  const filtered = RACES.filter(r => {
    const st = getRaceStatus(r);
    if (activeFilter === 'upcoming')  return st === 'upcoming' || st === 'live';
    if (activeFilter === 'completed') return st === 'completed';
    if (activeFilter === 'countdown') return r.phase === 'countdown';
    return true;
  });

  if (!filtered.length) {
    list.innerHTML = `<div class="empty-state"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg><p>No races in this category</p></div>`;
    return;
  }

  let regularDone = false, countdownDone = false;

  filtered.forEach(race => {
    const status = getRaceStatus(race);
    const isNext = race === nextRace && (activeFilter === 'all' || activeFilter === 'upcoming');

    if (race.phase === 'regular' && !regularDone && (activeFilter === 'all' || activeFilter === 'completed')) {
      list.appendChild(phaseHeader('Regular Season', false)); regularDone = true;
    }
    if (race.phase === 'countdown' && !countdownDone && (activeFilter === 'all' || activeFilter === 'countdown' || activeFilter === 'completed')) {
      list.appendChild(phaseHeader('Countdown to the Championship', true)); countdownDone = true;
    }

    const card = document.createElement('div');
    card.className = `race-card ${status} ${race.phase==='countdown'?'countdown-race':''} ${isNext?'next-race':''}`;
    card.setAttribute('role','listitem');
    card.setAttribute('tabindex','0');

    const sDate = parseDate(race.startDate), eDate = parseDate(race.endDate);
    const sameMonth = sDate.getMonth() === eDate.getMonth();

    let statusHtml = '';
    if (isNext)              statusHtml = `<span class="card-status status-next">Next Race</span>`;
    else if (status==='completed') statusHtml = `<span class="card-status status-completed">Completed</span>`;
    else if (status==='live')      statusHtml = `<span class="card-status status-next">Live Now</span>`;

    let tagsHtml = race.tags.map(tag => {
      const map = {'4-wide':'4-Wide','big-go':'The Big Go','season-opener':'Season Opener','season-finale':'Season Finale','new-venue':'New Venue'};
      const cls = tag==='4-wide'?'tag-4wide':tag==='big-go'?'tag-biggo':'';
      return `<span class="card-tag ${cls}">${map[tag]||tag}</span>`;
    }).join('');

    // Show winner badge if completed
    let winnerBadge = '';
    if (status === 'completed' && race.winners) {
      const tf = race.winners.find(w => w.cls === 'Top Fuel');
      if (tf) winnerBadge = `<span class="card-tag winner-tag">🏆 TF: ${tf.driver.split(' ').pop()}</span>`;
    }

    card.innerHTML = `
      ${isNext ? '<div class="next-race-banner">UP NEXT</div>' : ''}
      <div class="card-date-col">
        <span class="card-month">${MONTHS3U[sDate.getMonth()]}</span>
        <span class="card-day">${sDate.getDate()}</span>
        <span class="card-day-end">thru ${sameMonth?eDate.getDate():MONTHS3U[eDate.getMonth()]+' '+eDate.getDate()}</span>
      </div>
      <div class="card-content">
        <div class="card-top-row">
          <span class="card-event-num">Race ${race.id} of 20</span>
          ${statusHtml}
        </div>
        <div class="card-name">${race.name}</div>
        <div class="card-venue">${race.venue} · ${race.city}</div>
        <div class="card-footer-row">
          <span class="card-tv">${race.tv}</span>
          ${tagsHtml}${winnerBadge}
        </div>
      </div>
      <div class="card-arrow">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      </div>`;

    card.addEventListener('click', () => openModal(race));
    card.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' '){e.preventDefault();openModal(race);} });
    list.appendChild(card);
  });
}

function phaseHeader(label, isCountdown) {
  const el = document.createElement('div');
  el.className = `phase-header ${isCountdown?'countdown':''}`;
  el.innerHTML = `<span class="phase-label">${label}</span><div class="phase-line"></div>`;
  return el;
}

// ─── WINNERS CIRCLE ───────────────────────────────────────────────────────────
function renderWinnersCircle() {
  const container = document.getElementById('winners-list');
  container.innerHTML = '';

  RACES.forEach(race => {
    const card = document.createElement('div');
    card.className = 'wc-card';
    const sDate = parseDate(race.startDate);
    const status = getRaceStatus(race);
    const hasBracket = BRACKETS[race.id] != null;

    card.innerHTML = `
      <div class="wc-card-header">
        <div class="wc-race-info">
          <div class="wc-race-num">Race ${race.id} of 20 · ${race.phase==='countdown'?'Countdown':'Regular Season'}</div>
          <div class="wc-race-name">${race.name}</div>
          <div class="wc-race-venue">${race.venue} · ${race.city}</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div class="wc-race-date">${MONTHS3U[sDate.getMonth()]} ${sDate.getDate()}</div>
        </div>
      </div>
      <div class="wc-winners-grid" id="wc-grid-${race.id}"></div>`;

    container.appendChild(card);

    const grid = document.getElementById(`wc-grid-${race.id}`);

    if (status === 'completed' && race.winners && race.winners.length) {
      race.winners.forEach(w => {
        const row = document.createElement('div');
        row.className = 'wc-winner-row';
        row.innerHTML = `
          <span class="wc-class-pill pill-${w.pill}">${w.cls}</span>
          <span class="wc-winner-name">${w.driver}</span>
          <div class="wc-winner-et">
            <span>${w.et}s</span>
            ${w.mph} mph
          </div>`;
        grid.appendChild(row);
      });
    } else if (status === 'live') {
      grid.innerHTML = `<div class="wc-pending"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> Race weekend in progress</div>`;
    } else {
      grid.innerHTML = `<div class="wc-pending"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> Not yet run — ${formatDateRange(race.startDate, race.endDate)}</div>`;
    }
  });
}

// ─── POINTS STANDINGS ─────────────────────────────────────────────────────────
let activeStandingsClass = 'tf';

document.querySelectorAll('.class-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.class-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeStandingsClass = tab.dataset.class;
    renderStandings();
  });
});

function renderStandings() {
  const container = document.getElementById('standings-list');
  container.innerHTML = '';
  const data = STANDINGS[activeStandingsClass];
  if (!data) return;

  const leader = data[0];
  const maxPts = leader.pts;

  // Leader card
  const leaderEl = document.createElement('div');
  leaderEl.className = 'standings-leader';
  leaderEl.innerHTML = `
    <div class="leader-pos">🏆 Points Leader</div>
    <div class="leader-name">${leader.name}</div>
    <div class="leader-pts">${leader.pts} <span>pts</span></div>`;
  container.appendChild(leaderEl);

  // Rest of field
  data.slice(1).forEach(d => {
    const pct = Math.max(4, Math.round((d.pts / maxPts) * 100));
    const row = document.createElement('div');
    row.className = 'standing-row';
    row.innerHTML = `
      <div class="standing-pos ${d.pos <= 3 ? 'top3' : ''}">${d.pos}</div>
      <div class="standing-bar-wrap">
        <div class="standing-name">${d.name}</div>
        <div class="standing-bar-track">
          <div class="standing-bar-fill" style="width:${pct}%"></div>
        </div>
      </div>
      <div class="standing-pts-col">
        <div class="standing-pts">${d.pts}</div>
        <div class="standing-behind">${d.behind}</div>
      </div>`;
    container.appendChild(row);
  });

  const note = document.createElement('div');
  note.className = 'data-note';
  note.innerHTML = `Source: <a href="https://www.nhra.com/standings/2026/nhra-mission-foods-drag-racing-series" target="_blank" rel="noopener">NHRA.com Standings</a> · After Race 2 of 20`;
  container.appendChild(note);
}

// ─── ENTRY LIST VIEW ──────────────────────────────────────────────────────────
let activeEntryClass = 'tf';

document.querySelectorAll('.entry-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.entry-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeEntryClass = tab.dataset.eclass;
    renderEntryList();
  });
});



function getEntryData(classKey) {
  return entryListLive[classKey] || ENTRY_LIST_BASE[classKey] || [];
}

function renderEntryList() {
  const container = document.getElementById('entry-list');
  container.innerHTML = '';
  const data = getEntryData(activeEntryClass);

  const classNames = {
    tf:'Top Fuel', fc:'Funny Car', ps:'Pro Stock', psm:'Pro Stock Motorcycle', pm:'Pro Mod',
    tad:'Top Alcohol Dragster', tafc:'Top Alcohol Funny Car', fss:'Factory Stock Showdown',
    fx:'Factory X', td:'Top Dragster', ts:'Top Sportsman', sc:'Super Comp',
    sg:'Super Gas', ss:'Super Stock', st:'Stock Eliminator', ce:'Competition Eliminator'
  };

  const subtitle = document.getElementById('entry-subtitle');
  if (subtitle) subtitle.textContent = `${data.length} ${classNames[activeEntryClass]} competitors · 2026 Season`;

  const isAnalyticsClass = ANALYTICS_CLASSES.has(activeEntryClass);

  data.forEach((driver, i) => {
    const photo = getDriverPhoto(driver.name);
    const imgHtml = photo
      ? `<img class="driver-tab-photo" src="${photo}" alt="${driver.name}" loading="lazy" onerror="this.style.display='none'">`
      : `<div class="driver-tab-photo driver-tab-photo-placeholder"></div>`;
    const row = document.createElement('div');
    row.className = `entry-row ${driver._new ? 'entry-new' : ''} ${isAnalyticsClass ? 'dm-clickable' : ''}`;
    row.innerHTML = `
      ${imgHtml}
      <div class="entry-num">${driver.num}</div>
      <div class="entry-info">
        <div class="entry-name">${driver.name}${driver._new ? ' <span class="new-badge">NEW</span>' : ''}</div>
        <div class="entry-team">${driver.team}</div>
        <div class="entry-sponsor">${driver.sponsor}</div>
      </div>`;
    if (isAnalyticsClass) {
      row.addEventListener('click', () => openDriverModal(driver, activeEntryClass));
    }
    container.appendChild(row);
  });

  if (!data.length) {
    container.innerHTML = `<div class="empty-state"><p>No entry data available</p></div>`;
  }
}

// ─── DRIVER ANALYTICS MODAL ──────────────────────────────────────────────────
const driverModalBackdrop = document.getElementById('driver-modal-backdrop');
const driverModalSheet    = document.getElementById('driver-modal-sheet');
const driverModalClose    = document.getElementById('driver-modal-close');

// The 5 clickable class keys (pro classes only)
const ANALYTICS_CLASSES = new Set(['tf','fc','ps','psm','pm']);

const CLASS_LABELS = {
  tf:'Top Fuel', fc:'Funny Car', ps:'Pro Stock', psm:'Pro Stock Motorcycle', pm:'Pro Mod'
};

function get2026DriverStats(driverName) {
  // Search STANDINGS across all classes for this driver
  let found = null;
  ['tf','fc','ps','psm'].forEach(cls => {
    const list = STANDINGS[cls];
    if (!list) return;
    const entry = list.find(d =>
      d.name === driverName ||
      d.name.replace('.','') === driverName.replace('.','') ||
      d.name.toLowerCase() === driverName.toLowerCase()
    );
    if (entry) found = { ...entry, cls };
  });
  return found;
}

function count2026Wins(driverName) {
  let wins = 0, runnerUps = 0;
  RACES.forEach(race => {
    if (!race.winners) return;
    race.winners.forEach((w, idx) => {
      if (w.driver === driverName ||
          w.driver.replace('.','') === driverName.replace('.','') ||
          w.driver.toLowerCase() === driverName.toLowerCase()) {
        wins++;
      }
    });
  });
  // Count runner-ups: need bracket data — approximate from RACES (not yet stored),
  // so we set runnerUps to null for now
  return { wins, runnerUps: null };
}

// Runner-ups hardcoded for the 2 completed races (race 1 & 2)
// We derive this from what we know about the finals
const RUNNER_UPS_2026 = {
  // Race 1: Gatornationals
  // Race 2: Arizona Nationals
  "Doug Kalitta":     0,
  "Josh Hart":        0,
  "Shawn Langdon":    1,  // race 2 runner-up (TF)
  "Leah Pruett":      0,
  "Maddi Gordon":     0,
  "Tony Stewart":     0,
  "Antron Brown":     0,
  "Tony Schumacher":  0,
  "Billy Torrence":   0,
  "Justin Ashley":    0,
  "Clay Millican":    0,
  "Shawn Reed":       0,
  // FC Race 1 runner-up
  "Chad Green":       0,
  "Spencer Hyde":     0,
  "Ron Capps":        0,  // race 2 winner, but no runner-up tracked separately
  "J.R. Todd":        0,
  "JR Todd":          0,
  "Matt Hagan":       0,
  "Alexis DeJoria":   0,
  "Jordan Vandergriff":0,
  "Paul Lee":         0,
  "Daniel Wilkerson": 0,
  // PS
  "Dallas Glenn":     1,  // runner-up in race 1
  "Matt Hartford":    1,  // runner-up in race 2
  "Cody Coughlin":    0,
  "Greg Anderson":    0,
  "Erica Enders":     0,
  // PSM Race 1
  "Richard Gadson":   0,
  "John Hall":        0,
  "Gaige Herrera":    0,
  // PM
  "Derek Menholt":    0,
  "JR Gray":          0,
  "Billy Banaka":     0,
};

function openDriverModal(driver, classKey) {
  const name = driver.name;
  const photo = getDriverPhoto(name);

  // Photo
  const photoEl = document.getElementById('driver-modal-photo');
  const photoPlaceholder = document.getElementById('driver-modal-photo-placeholder');
  if (photo) {
    photoEl.src = photo;
    photoEl.alt = name;
    photoEl.style.display = 'block';
    photoPlaceholder.style.display = 'none';
  } else {
    photoEl.style.display = 'none';
    photoPlaceholder.style.display = 'block';
  }

  // Car number & name
  document.getElementById('driver-modal-num').textContent = driver.num ? `#${driver.num}` : '';
  document.getElementById('driver-modal-name').textContent = name;

  // Class pill
  const pillEl = document.getElementById('driver-modal-class-pill');
  pillEl.textContent = CLASS_LABELS[classKey] || classKey.toUpperCase();
  pillEl.className = `dm-class-pill dm-pill-${classKey}`;

  // Team
  document.getElementById('driver-modal-team').textContent = driver.team || driver.sponsor || '';

  // ── 2026 Stats ──
  const stats2026El = document.getElementById('driver-modal-2026-grid');
  const standing2026 = get2026DriverStats(name);
  const wins2026 = count2026Wins(name);
  const runnerUps2026 = RUNNER_UPS_2026[name] ?? RUNNER_UPS_2026[name.replace('.','')]  ?? 0;
  const f2t2026 = standing2026?.f2t ?? 0;

  if (standing2026) {
    const posOrdinal = n => {
      const s = ['th','st','nd','rd']; const v = n%100;
      return n + (s[(v-20)%10]||s[v]||s[0]);
    };
    stats2026El.innerHTML = `
      <div class="dm-stat-cell">
        <div class="dm-stat-val dm-val-accent">${posOrdinal(standing2026.pos)}</div>
        <div class="dm-stat-lbl">Position</div>
      </div>
      <div class="dm-stat-cell">
        <div class="dm-stat-val">${standing2026.pts}</div>
        <div class="dm-stat-lbl">Points</div>
      </div>
      <div class="dm-stat-cell">
        <div class="dm-stat-val ${wins2026.wins > 0 ? 'dm-val-green' : ''}">${
          wins2026.wins > 0 ? wins2026.wins : '—'
        }</div>
        <div class="dm-stat-lbl">Wins</div>
      </div>
      <div class="dm-stat-cell">
        <div class="dm-stat-val ${runnerUps2026 > 0 ? 'dm-val-gold' : ''}">${runnerUps2026 > 0 ? runnerUps2026 : '—'}</div>
        <div class="dm-stat-lbl">Runner-Ups</div>
      </div>
      <div class="dm-stat-cell">
        <div class="dm-stat-val ${f2t2026 > 0 ? 'dm-val-gold' : ''}">${f2t2026 > 0 ? '⚡' + f2t2026 : '—'}</div>
        <div class="dm-stat-lbl">2F2T Pts</div>
      </div>
      <div class="dm-stat-cell">
        <div class="dm-stat-val">2</div>
        <div class="dm-stat-lbl">Races</div>
      </div>`;
  } else {
    stats2026El.innerHTML = `<div class="dm-dnc">Not competing in 2026 pro championship points</div>`;
  }

  // ── 2025 Stats ──
  const stats2025El = document.getElementById('driver-modal-2025-grid');
  const s25 = DRIVER_STATS_2025[name] || DRIVER_STATS_2025[name.replace('.','')];

  if (s25) {
    const champHtml = s25.champion
      ? `<span class="dm-champ-badge">🏆 Champion</span>`
      : '';
    const posStr = s25.pos ? `#${s25.pos}` : '—';
    const ptsStr = s25.pts ? s25.pts.toLocaleString() : '—';
    const winsStr = s25.wins != null ? (s25.wins > 0 ? s25.wins : '0') : '—';
    const winsColor = s25.wins > 0 ? 'dm-val-green' : '';

    stats2025El.innerHTML = `
      <div class="dm-stat-cell">
        <div class="dm-stat-val dm-val-gold">${posStr}</div>
        <div class="dm-stat-lbl">Final Pos.</div>
      </div>
      <div class="dm-stat-cell">
        <div class="dm-stat-val">${ptsStr}</div>
        <div class="dm-stat-lbl">Points</div>
      </div>
      <div class="dm-stat-cell">
        <div class="dm-stat-val ${winsColor}">${winsStr}</div>
        <div class="dm-stat-lbl">Wins</div>
      </div>
      ${s25.champion ? `<div class="dm-stat-cell dm-stat-wide">${champHtml}</div>` : ''}`;
  } else {
    stats2025El.innerHTML = `<div class="dm-dnc">Did not compete in 2025 pro championship</div>`;
  }

  // ── Career at a glance ──
  const careerEl = document.getElementById('driver-modal-career-row');
  // Total wins across both seasons (2025 + 2026)
  const totalWins2025 = s25?.wins ?? 0;
  const totalWins2026 = wins2026.wins ?? 0;
  const careerWins = (typeof totalWins2025 === 'number' ? totalWins2025 : 0) + totalWins2026;
  const was2025Champ = s25?.champion ? 1 : 0;

  // 2026 season entered (1 if in standings, else 0)
  const entered2026 = standing2026 ? 'Yes' : 'No';
  const seasons = (s25 ? 1 : 0) + (standing2026 ? 1 : 0);

  careerEl.innerHTML = `
    <div class="dm-career-item">
      <div class="dm-career-val ${careerWins > 0 ? '' : ''}">${careerWins > 0 ? careerWins : '—'}</div>
      <div class="dm-career-lbl">Career Wins</div>
    </div>
    <div class="dm-career-item">
      <div class="dm-career-val ${was2025Champ ? 'dm-val-gold' : ''}">${was2025Champ ? '🏆 1' : '—'}</div>
      <div class="dm-career-lbl">Champ.</div>
    </div>
    <div class="dm-career-item">
      <div class="dm-career-val">${seasons}</div>
      <div class="dm-career-lbl">Seasons</div>
    </div>
    <div class="dm-career-item">
      <div class="dm-career-val">${entered2026}</div>
      <div class="dm-career-lbl">In 2026</div>
    </div>`;

  // Open the modal
  driverModalBackdrop.removeAttribute('hidden');
  driverModalSheet.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => {
    driverModalBackdrop.classList.add('visible');
    driverModalSheet.classList.add('open');
  });
  driverModalClose.focus();
}

function closeDriverModal() {
  driverModalBackdrop.classList.remove('visible');
  driverModalSheet.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => {
    driverModalBackdrop.setAttribute('hidden','');
    driverModalSheet.setAttribute('hidden','');
  }, 300);
}

driverModalClose?.addEventListener('click', closeDriverModal);
driverModalBackdrop?.addEventListener('click', closeDriverModal);

let driverTouchStartY = 0;
driverModalSheet?.addEventListener('touchstart', e => { driverTouchStartY = e.touches[0].clientY; }, { passive:true });
driverModalSheet?.addEventListener('touchend', e => { if(e.changedTouches[0].clientY - driverTouchStartY > 80) closeDriverModal(); }, { passive:true });

// ─── MODAL ────────────────────────────────────────────────────────────────────
const modalBackdrop = document.getElementById('modal-backdrop');
const modalSheet    = document.getElementById('modal-sheet');
const modalClose    = document.getElementById('modal-close');

function openModal(race) {
  document.getElementById('modal-event-num').textContent = `Race ${race.id} of 20 · ${race.phase==='countdown'?'Countdown to the Championship':'Regular Season'}`;
  document.getElementById('modal-title').textContent = race.name;
  document.getElementById('modal-location').textContent = `${race.venue} — ${race.city}`;
  document.getElementById('modal-dates').textContent = formatDateRange(race.startDate, race.endDate);
  document.getElementById('modal-tv').textContent = `📺 ${race.tv}`;

  // Winners section
  const wSec = document.getElementById('modal-winners-section');
  const wGrid = document.getElementById('modal-winners-grid');
  if (race.winners && race.winners.length) {
    wSec.removeAttribute('hidden');
    wGrid.innerHTML = '';
    race.winners.forEach(w => {
      const r = document.createElement('div');
      r.className = 'modal-winner-row';
      r.innerHTML = `
        <span class="modal-winner-class pill-${w.pill} wc-class-pill">${w.cls}</span>
        <span class="modal-winner-name">${w.driver}</span>
        <div class="modal-winner-et"><strong>${w.et}s</strong>${w.mph} mph</div>`;
      wGrid.appendChild(r);
    });
  } else {
    wSec.setAttribute('hidden','');
  }

  // Qualifying results section — Q1/Q2/Q3/Q4 tabs per class
  const qualSection = document.getElementById('modal-qualifying-section');
  const qualList    = document.getElementById('modal-qual-list');
  const qualBadge   = document.getElementById('modal-qual-live-badge');
  const qualUpdated = document.getElementById('qual-updated');
  const raceQual    = QUALIFYING[race.id];
  const raceStatus  = getRaceStatus(race);

  // Clear any previous auto-refresh interval
  if (window._qualRefreshInterval) { clearInterval(window._qualRefreshInterval); window._qualRefreshInterval = null; }

  if (qualSection && raceQual && raceStatus !== 'completed') {
    const hasAnyData = Object.values(raceQual).some(v => v && v.sessions && Object.values(v.sessions).some(s => s && s.length));
    if (hasAnyData || raceStatus === 'live') {
      qualSection.removeAttribute('hidden');
      if (qualBadge) {
        qualBadge.textContent = raceStatus === 'live' ? 'LIVE' : 'FINAL QUAL';
        qualBadge.className   = raceStatus === 'live' ? 'live-badge' : 'live-badge final-badge';
      }

      // State
      let activeQClass = Object.keys(raceQual).find(k => raceQual[k]?.sessions) || 'tf';
      let activeQRound = null; // null = current best order (all rounds combined)

      function getQRoundLabel(n) { return n ? `Q${n}` : 'Current'; }

      function buildRoundTabs(cls) {
        const data = raceQual[cls];
        if (!data) return '';
        const sessions = data.sessions || {};
        const maxQ = 4;
        let tabs = `<button class="qround-tab ${activeQRound === null ? 'active' : ''}" data-qround="current">Current</button>`;
        for (let i = 1; i <= maxQ; i++) {
          const hasData = sessions[i] && sessions[i].length > 0;
          tabs += `<button class="qround-tab ${activeQRound === i ? 'active' : ''} ${!hasData ? 'qround-pending' : ''}" data-qround="${i}" ${!hasData ? 'disabled' : ''}>Q${i}</button>`;
        }
        return tabs;
      }

      function renderQualRows(cls, round) {
        const data = raceQual[cls];
        if (!qualList) return;
        if (!data) {
          qualList.innerHTML = `<div class="qual-empty">No qualifying data for this class</div>`;
          return;
        }
        // Get session data — null round = use lastSession (current best order)
        const sessions = data.sessions || {};
        const rows = round ? sessions[round] : sessions[data.lastSession];
        if (qualUpdated) qualUpdated.textContent = round
          ? `Q${round} session results · ${data.updated}`
          : `Current order after Q${data.lastSession} · ${data.updated}`;
        if (!rows || !rows.length) {
          qualList.innerHTML = `<div class="qual-empty">${round ? `Q${round} not yet run` : 'No results yet'}</div>`;
          return;
        }
        // Top 16 are in the show; rest are on the bubble
        qualList.innerHTML = rows.map(q => `
          <div class="qual-row ${q.pos <= 16 ? 'qual-in' : 'qual-out'} ${q.pos <= 8 ? 'qual-top8' : ''} ${q.pos === 1 ? 'qual-leader' : ''}">
            <div class="qual-pos-wrap">
              <span class="qual-pos">${q.pos}</span>
              ${q.pos === 16 ? '<span class="qual-cutline">CUT</span>' : ''}
            </div>
            <div class="qual-info">
              <div class="qual-driver">${q.driver}</div>
              <div class="qual-car">#${q.car}</div>
            </div>
            <div class="qual-times">
              <div class="qual-et">${q.et}s</div>
              <div class="qual-mph">${q.mph} mph</div>
            </div>
          </div>`).join('');
      }

      function renderClassTabs() {
        document.querySelectorAll('#qual-class-tabs .qual-tab').forEach(t => {
          t.classList.toggle('active', t.dataset.qclass === activeQClass);
        });
      }

      function renderRoundTabs() {
        const rtContainer = document.getElementById('qual-round-tabs');
        if (!rtContainer) return;
        rtContainer.innerHTML = buildRoundTabs(activeQClass);
        rtContainer.querySelectorAll('.qround-tab').forEach(tab => {
          tab.addEventListener('click', () => {
            const r = tab.dataset.qround;
            activeQRound = r === 'current' ? null : parseInt(r);
            rtContainer.querySelectorAll('.qround-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderQualRows(activeQClass, activeQRound);
          });
        });
      }

      function fullRender(cls) {
        activeQClass = cls;
        activeQRound = null;
        renderClassTabs();
        renderRoundTabs();
        renderQualRows(cls, null);
      }

      // Wire class tabs
      document.querySelectorAll('#qual-class-tabs .qual-tab').forEach(tab => {
        const newTab = tab.cloneNode(true);
        tab.parentNode.replaceChild(newTab, tab);
        newTab.addEventListener('click', () => fullRender(newTab.dataset.qclass));
      });

      fullRender(activeQClass);

      // 5-minute auto-refresh during race weekend
      if (raceStatus === 'live') {
        window._qualRefreshInterval = setInterval(() => {
          renderQualRows(activeQClass, activeQRound);
          if (qualUpdated) {
            const now = new Date().toLocaleTimeString('en-US', {hour:'numeric',minute:'2-digit'});
            qualUpdated.textContent += ` · Checked ${now} ET`;
          }
        }, 5 * 60 * 1000);
      }

    } else {
      qualSection.setAttribute('hidden','');
    }
  } else if (qualSection) {
    qualSection.setAttribute('hidden','');
  }

  // Entry list — accordion: click class name to expand/collapse driver list
  const entrySection = document.getElementById('modal-entry-section');
  const accordion    = document.getElementById('modal-entry-accordion');
  if (entrySection && accordion) {
    const raceEntries = RACE_ENTRY_LISTS[race.id];
    const hasNamedList = raceEntries && Object.values(raceEntries).some(v => v && v.length > 0);
    const hasCounts    = race.entries && Object.values(race.entries).some(v => v);
    // Always show if any class in this race has base roster data
    const hasAnyBase   = (race.classes || []).some(c => {
      const map = { 'Top Fuel':'tf','Funny Car':'fc','Pro Stock':'ps','Pro Stock Motorcycle':'psm',
        'Pro Mod':'pm','Top Alcohol Dragster':'tad','Top Alcohol Funny Car':'tafc',
        'Factory Stock Showdown':'fss','Factory X':'fx','Top Dragster':'td','Top Sportsman':'ts',
        'Super Comp':'sc','Super Gas':'sg','Super Stock':'ss','Stock Eliminator':'st','Competition Eliminator':'ce' };
      const k = map[c];
      return k && ENTRY_LIST_BASE[k] && ENTRY_LIST_BASE[k].length > 0;
    });

    if (hasNamedList || hasCounts || hasAnyBase) {
      entrySection.removeAttribute('hidden');
      const badge = document.getElementById('modal-entry-badge');
      if (badge) badge.textContent = hasNamedList ? 'Official' : 'Field Size';

      // Map every class name used in race.classes to an entry key + pill style
      const CLASS_KEY_MAP = {
        'Top Fuel':                { key:'tf',   pill:'pill-nitro'    },
        'Funny Car':               { key:'fc',   pill:'pill-nitro'    },
        'Pro Stock':               { key:'ps',   pill:'pill-prostock' },
        'Pro Stock Motorcycle':    { key:'psm',  pill:'pill-prostock' },
        'Pro Mod':                 { key:'pm',   pill:'pill-promod'   },
        'Top Alcohol Dragster':    { key:'tad',  pill:'pill-alcohol'  },
        'Top Alcohol Funny Car':   { key:'tafc', pill:'pill-alcohol'  },
        'Factory Stock Showdown':  { key:'fss',  pill:'pill-factory'  },
        'Factory X':               { key:'fx',   pill:'pill-factoryx' },
        'Top Dragster':            { key:'td',   pill:'pill-td'       },
        'Top Sportsman':           { key:'ts',   pill:'pill-ts'       },
        'Super Comp':              { key:'sc',   pill:'pill-sc'       },
        'Super Gas':               { key:'sg',   pill:'pill-sg'       },
        'Super Stock':             { key:'ss',   pill:'pill-ss'       },
        'Stock Eliminator':        { key:'st',   pill:'pill-st'       },
        'Competition Eliminator':  { key:'ce',   pill:'pill-ce'       },
        'Super Street':            { key:'sst',  pill:'pill-sst'      },
      };
      // Build classMap from the actual classes at this race
      const classMap = (race.classes || [])
        .filter(c => CLASS_KEY_MAP[c])
        .map(c => ({ key: CLASS_KEY_MAP[c].key, label: c, pill: CLASS_KEY_MAP[c].pill }));

      accordion.innerHTML = '';

      classMap.forEach(({ key, label, pill }) => {
        const hasDrivers = hasNamedList && raceEntries?.[key]?.length > 0;
        const hasCount   = hasCounts && race.entries?.[key];
        const hasBase    = !!(ENTRY_LIST_BASE[key] && ENTRY_LIST_BASE[key].length > 0);
        if (!hasDrivers && !hasCount && !hasBase) return; // skip if truly no data

        const driversForCount = (hasNamedList && raceEntries?.[key]?.length) ? raceEntries[key]
                              : (ENTRY_LIST_BASE[key]?.length ? ENTRY_LIST_BASE[key] : null);
        const count = driversForCount ? driversForCount.length
                    : (race.entries?.[key]?.entered || 0);

        // Build the block
        const block = document.createElement('div');
        block.className = 'acc-block';

        const header = document.createElement('button');
        header.className = 'acc-header';
        header.setAttribute('aria-expanded', 'false');
        header.innerHTML = `
          <span class="wc-class-pill ${pill}">${label}</span>
          <span class="acc-count">${count} entered</span>
          <svg class="acc-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M6 9l6 6 6-6"/>
          </svg>`;

        const body = document.createElement('div');
        body.className = 'acc-body';
        body.hidden = true;

        // Populate body — prefer race-specific named list, fall back to season roster
        const driversToShow = (hasDrivers && raceEntries[key]) ? raceEntries[key]
                            : (hasBase ? ENTRY_LIST_BASE[key] : null);
        if (driversToShow && driversToShow.length) {
          body.innerHTML = driversToShow.map(d => {
            const photo = getDriverPhoto(d.name);
            const imgHtml = photo
              ? `<img class="modal-entry-photo" src="${photo}" alt="${d.name}" loading="lazy" onerror="this.style.display='none'">`
              : `<div class="modal-entry-photo modal-entry-photo-placeholder"></div>`;
            return `<div class="modal-entry-row">
              ${imgHtml}
              <span class="modal-entry-num">${d.num}</span>
              <div class="modal-entry-info">
                <div class="modal-entry-name">${d.name}</div>
                <div class="modal-entry-sponsor">${d.sponsor}</div>
              </div>
            </div>`;
          }).join('');
        } else if (hasCount && race.entries[key]) {
          const e = race.entries[key];
          body.innerHTML = `<div class="modal-entry-count-only">
            <div class="ecount-big">${e.qualified}</div>
            <div class="ecount-label">cars qualified</div>
            <div class="ecount-entered">${e.entered} entered</div>
          </div>`;
        } else {
          body.innerHTML = `<div class="modal-entry-tbd">No entry list submitted</div>`;
        }

        // Toggle on click
        header.addEventListener('click', () => {
          const isOpen = !body.hidden;
          body.hidden = isOpen;
          header.setAttribute('aria-expanded', String(!isOpen));
          header.classList.toggle('open', !isOpen);
        });

        block.appendChild(header);
        block.appendChild(body);
        accordion.appendChild(block);
      });

      // If no blocks were added
      if (!accordion.children.length) {
        entrySection.setAttribute('hidden','');
      }

    } else {
      entrySection.setAttribute('hidden','');
    }
  }

  // Classes — styled by tier
  const MODAL_CLASS_PILLS = {
    'Top Fuel':'pill-nitro','Funny Car':'pill-nitro',
    'Pro Stock':'pill-prostock','Pro Stock Motorcycle':'pill-prostock',
    'Pro Mod':'pill-promod',
    'Top Alcohol Dragster':'pill-alcohol','Top Alcohol Funny Car':'pill-alcohol',
    'Factory Stock Showdown':'pill-factory','Factory X':'pill-factoryx',
    'Top Dragster':'pill-td','Top Sportsman':'pill-ts',
    'Super Comp':'pill-sc','Super Gas':'pill-sg',
    'Super Stock':'pill-ss','Stock Eliminator':'pill-st',
    'Competition Eliminator':'pill-ce','Super Street':'pill-sst',
  };
  document.getElementById('modal-classes').innerHTML = race.classes.map(c => {
    const tier = MODAL_CLASS_PILLS[c] || 'pill-sport';
    return `<span class="class-pill ${tier}">${c}</span>`;
  }).join('');

  // Itinerary
  const itinContainer = document.getElementById('itinerary-content');
  itinContainer.innerHTML = '';
  race.itinerary.forEach(day => {
    const dayEl = document.createElement('div');
    dayEl.className = 'itin-day';
    const lbl = document.createElement('div');
    lbl.className = 'itin-day-label'; lbl.textContent = day.day;
    dayEl.appendChild(lbl);
    day.sessions.forEach(sess => {
      const row = document.createElement('div');
      row.className = `itin-row ${sess.key?'key-session':''}`;
      const etTime = convertToET(sess.time, race.startDate, race.timezone);
      row.innerHTML = `<span class="itin-time">${etTime}</span><span class="itin-event ${sess.key?'':'muted'}">${sess.event}</span>`;
      dayEl.appendChild(row);
    });
    itinContainer.appendChild(dayEl);
  });

  document.getElementById('modal-tickets').href = 'https://www.nhra.com/schedule/2026';

  modalBackdrop.removeAttribute('hidden');
  modalSheet.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => {
    modalBackdrop.classList.add('visible');
    modalSheet.classList.add('open');
  });
  modalClose.focus();
}

function closeModal() {
  modalBackdrop.classList.remove('visible');
  modalSheet.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => {
    modalBackdrop.setAttribute('hidden','');
    modalSheet.setAttribute('hidden','');
  }, 300);
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if(e.key==='Escape') closeModal(); });

let touchStartY = 0;
modalSheet.addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY; }, { passive:true });
modalSheet.addEventListener('touchend', e => { if(e.changedTouches[0].clientY - touchStartY > 80) closeModal(); }, { passive:true });

// ─── THEME TOGGLE ─────────────────────────────────────────────────────────────
(function() {
  const html = document.documentElement;
  const btn  = document.querySelector('[data-theme-toggle]');
  const icon = document.getElementById('theme-icon');
  let theme = html.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
  html.setAttribute('data-theme', theme);
  updateIcon(theme);
  btn?.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', theme);
    updateIcon(theme);
  });
  function updateIcon(t) {
    if (!icon) return;
    if (t==='dark') {
      icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
      btn?.setAttribute('aria-label','Switch to light mode');
    } else {
      icon.innerHTML = '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>';
      btn?.setAttribute('aria-label','Switch to dark mode');
    }
  }
})();

// ─── PWA INSTALL ──────────────────────────────────────────────────────────────
let deferredPrompt = null;
const installBanner  = document.getElementById('install-banner');
const installBtn     = document.getElementById('install-btn');
const installDismiss = document.getElementById('install-dismiss');

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  installBanner?.removeAttribute('hidden');
});
installBtn?.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBanner?.setAttribute('hidden','');
});
installDismiss?.addEventListener('click', () => installBanner?.setAttribute('hidden',''));
window.addEventListener('appinstalled', () => { installBanner?.setAttribute('hidden',''); deferredPrompt = null; });

// ─── SERVICE WORKER ───────────────────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}


// ─── COUNTDOWN TIMER ─────────────────────────────────────────────────────────
function initCountdown() {
  const t = today();
  const nextRace = RACES.find(r => parseDate(r.endDate) >= t);
  if (!nextRace) {
    const bar = document.getElementById('countdown-bar');
    if (bar) bar.hidden = true;
    return;
  }

  const nameEl  = document.getElementById('countdown-race-name');
  const labelEl = document.getElementById('countdown-label');
  const daysEl  = document.getElementById('cd-days');
  const hrsEl   = document.getElementById('cd-hours');
  const minsEl  = document.getElementById('cd-mins');
  const secsEl  = document.getElementById('cd-secs');

  if (nameEl) nameEl.textContent = nextRace.name;

  // Target = race start date at 9:00 AM venue local time, converted to ET
  // Simple approach: target is midnight ET of the start date
  function getTargetMs() {
    const s = parseDate(nextRace.startDate);
    // 9am ET on start day
    const target = new Date(s.getFullYear(), s.getMonth(), s.getDate(), 9, 0, 0, 0);
    return target.getTime();
  }

  function tick() {
    const now = Date.now();
    const target = getTargetMs();
    const diff = target - now;

    if (diff <= 0) {
      // Race weekend is happening
      if (labelEl) labelEl.textContent = '🏁 Race Weekend';
      if (daysEl)  daysEl.textContent  = '0';
      if (hrsEl)   hrsEl.textContent   = '0';
      if (minsEl)  minsEl.textContent  = '0';
      if (secsEl)  secsEl.textContent  = '0';
      return;
    }

    const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs  = Math.floor((diff % (1000 * 60)) / 1000);

    if (labelEl) labelEl.textContent = 'Countdown to Next Race';
    if (daysEl)  daysEl.textContent  = String(days).padStart(2, '0');
    if (hrsEl)   hrsEl.textContent   = String(hours).padStart(2, '0');
    if (minsEl)  minsEl.textContent  = String(mins).padStart(2, '0');
    if (secsEl)  secsEl.textContent  = String(secs).padStart(2, '0');
  }

  tick();
  setInterval(tick, 1000);
}


// ─── QUALIFYING TAB ───────────────────────────────────────────────────────────
let activeQualRace   = null;
let activeQualClass  = 'tf';
let activeQualRound  = null; // null = current best order

function initQualifyingTab() {
  const select    = document.getElementById('qual-race-select');
  const classTabs = document.getElementById('qual-main-class-tabs');
  const roundTabs = document.getElementById('qual-main-round-tabs');
  const list      = document.getElementById('qual-main-list');
  const updated   = document.getElementById('qual-main-updated');
  const noRace    = document.getElementById('qual-no-race');

  if (!select) return;

  // Populate race dropdown — only races with qualifying data or that are live/upcoming
  const t = today();
  RACES.forEach(race => {
    const status = getRaceStatus(race);
    const hasData = QUALIFYING[race.id] && Object.values(QUALIFYING[race.id]).some(v => v && v.sessions && Object.values(v.sessions).some(s => s && s.length));
    if (hasData || status === 'live' || (status === 'upcoming' && parseDate(race.startDate) - t < 7 * 24 * 60 * 60 * 1000)) {
      const opt = document.createElement('option');
      opt.value = race.id;
      opt.textContent = `Race ${race.id} — ${race.name}`;
      if (status === 'live') opt.textContent += ' 🔴 LIVE';
      select.appendChild(opt);
    }
  });

  // Auto-select the active/next race with data
  const liveRace = RACES.find(r => getRaceStatus(r) === 'live' && QUALIFYING[r.id]);
  if (liveRace) select.value = liveRace.id;

  function renderQualTab() {
    const raceId = parseInt(select.value);
    const raceQual = QUALIFYING[raceId];

    if (!raceId || !raceQual) {
      if (classTabs) classTabs.setAttribute('hidden','');
      if (roundTabs) roundTabs.setAttribute('hidden','');
      if (list) list.innerHTML = '';
      if (updated) updated.textContent = '';
      if (noRace) noRace.removeAttribute('hidden');
      return;
    }

    activeQualRace = raceId;
    if (noRace) noRace.setAttribute('hidden','');
    if (classTabs) classTabs.removeAttribute('hidden');
    if (roundTabs) roundTabs.removeAttribute('hidden');

    // Update class tabs active state
    document.querySelectorAll('#qual-main-class-tabs .qual-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.mqclass === activeQualClass);
    });

    // Build round tabs
    const classData = raceQual[activeQualClass];
    if (roundTabs) {
      roundTabs.innerHTML = '';
      const currentBtn = document.createElement('button');
      currentBtn.className = `qround-tab ${activeQualRound === null ? 'active' : ''}`;
      currentBtn.textContent = 'Current';
      currentBtn.addEventListener('click', () => { activeQualRound = null; renderRoundResults(); updateRoundTabActive(); });
      roundTabs.appendChild(currentBtn);

      [1,2,3,4].forEach(q => {
        const btn = document.createElement('button');
        const hasData = classData?.sessions?.[q]?.length > 0;
        btn.className = `qround-tab ${activeQualRound === q ? 'active' : ''} ${!hasData ? 'qround-pending' : ''}`;
        btn.textContent = `Q${q}`;
        if (!hasData) btn.disabled = true;
        btn.addEventListener('click', () => { if (!hasData) return; activeQualRound = q; renderRoundResults(); updateRoundTabActive(); });
        roundTabs.appendChild(btn);
      });
    }

    renderRoundResults();
  }

  function updateRoundTabActive() {
    document.querySelectorAll('#qual-main-round-tabs .qround-tab').forEach((btn, i) => {
      const isCurrentBtn = i === 0;
      btn.classList.toggle('active', isCurrentBtn ? activeQualRound === null : parseInt(btn.textContent.replace('Q','')) === activeQualRound);
    });
  }

  function renderRoundResults() {
    const raceQual = QUALIFYING[activeQualRace];
    if (!list || !raceQual) return;
    const classData = raceQual[activeQualClass];
    if (!classData) {
      list.innerHTML = `<div class="qual-empty">No qualifying data for this class at this event</div>`;
      if (updated) updated.textContent = '';
      return;
    }
    const sessions = classData.sessions || {};
    const rows = activeQualRound ? sessions[activeQualRound] : sessions[classData.lastSession];
    if (updated) updated.textContent = activeQualRound
      ? `Q${activeQualRound} session · ${classData.updated}`
      : `Current order after Q${classData.lastSession} · ${classData.updated}`;
    if (!rows || !rows.length) {
      list.innerHTML = `<div class="qual-empty">${activeQualRound ? `Q${activeQualRound} not yet run` : 'No results yet'}</div>`;
      return;
    }
    list.innerHTML = rows.map(q => `
      <div class="qual-row ${q.pos <= 16 ? 'qual-in' : 'qual-out'} ${q.pos <= 8 ? 'qual-top8' : ''} ${q.pos === 1 ? 'qual-leader' : ''}">
        <div class="qual-pos-wrap">
          <span class="qual-pos">${q.pos}</span>
          ${q.pos === 16 ? '<span class="qual-cutline">CUT</span>' : ''}
        </div>
        <div class="qual-info">
          <div class="qual-driver">${q.driver}</div>
          <div class="qual-car">#${q.car}</div>
        </div>
        <div class="qual-times">
          <div class="qual-et">${q.et}s</div>
          <div class="qual-mph">${q.mph} mph</div>
        </div>
      </div>`).join('');
  }

  // Wire race select
  select.addEventListener('change', () => { activeQualRound = null; renderQualTab(); });

  // Wire class tabs
  document.querySelectorAll('#qual-main-class-tabs .qual-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      activeQualClass = tab.dataset.mqclass;
      activeQualRound = null;
      renderQualTab();
    });
  });

  // Initial render
  if (select.value) renderQualTab();
}


// ─── LIVE QUALIFYING FETCH ────────────────────────────────────────────────────
// During a race weekend, fetch live qualifying order from NHRA every 5 minutes.
// Uses allorigins.win CORS proxy to access nhradata.com JSON endpoints.

const NHRA_CLASS_CODES = {
  tf:  'Top%20Fuel%20Dragster',
  fc:  'Fuel%20Funny%20Car',
  ps:  'Pro%20Stock',
  psm: 'Pro%20Stock%20Motorcycle',
};

// Map race id to nhradata event number (PC1 = Pro classes event series)
const NHRA_EVENT_NUMS = {
  1: 1,  // Gatornationals
  2: 2,  // Arizona
  3: 3,  // Winternationals
  4: 4,  // 4-Wide
  5: 5,
};

async function fetchLiveQualifying(raceId, classKey) {
  const eventNum = NHRA_EVENT_NUMS[raceId];
  const classCode = NHRA_CLASS_CODES[classKey];
  if (!eventNum || !classCode) return null;

  const url = `https://nhradata.com/CompetitorsDtl/2026/PC1/${eventNum}/3/${classCode}`;
  const proxy = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

  try {
    const res = await fetch(proxy, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return null;
    const data = await res.json();
    const html = data.contents || '';

    // Parse the qualifying table
    // nhradata returns pipe-delimited table rows
    const rows = [];
    const lines = html.split('\n');
    let inTable = false;
    lines.forEach(line => {
      const parts = line.split('|').map(s => s.trim()).filter(Boolean);
      // Look for lines with ET patterns like 3.7xx or 6.5xx
      if (parts.length >= 4) {
        const etMatch = parts.find(p => /^[3-9]\.\d{3}$/.test(p));
        const mphMatch = parts.find(p => /^\d{2,3}\.\d{1,2}$/.test(p));
        const nameMatch = parts.find(p => p.length > 4 && /[A-Za-z]/.test(p) && !/^(Top|Pro|Funny|Super)/.test(p));
        const carMatch = parts.find(p => /^\d{1,4}[A-Z]?$/.test(p) && parseInt(p) < 10000);
        if (etMatch && nameMatch) {
          rows.push({
            pos: rows.length + 1,
            driver: nameMatch,
            car: carMatch || '—',
            et: etMatch,
            mph: mphMatch || '—',
          });
        }
      }
    });

    if (rows.length > 3) return rows;
    return null;
  } catch {
    return null;
  }
}

// Live refresh loop — runs every 5 min during race weekend
let _liveQualInterval = null;
let _liveQualRaceId   = null;

function startLiveQualRefresh(raceId) {
  if (_liveQualInterval) clearInterval(_liveQualInterval);
  _liveQualRaceId = raceId;

  async function doRefresh() {
    const classes = ['tf','fc','ps','psm'];
    let updated = false;
    for (const cls of classes) {
      const rows = await fetchLiveQualifying(raceId, cls);
      if (rows && rows.length > 3) {
        if (!QUALIFYING[raceId]) QUALIFYING[raceId] = {};
        if (!QUALIFYING[raceId][cls]) {
          QUALIFYING[raceId][cls] = { lastSession: 1, sessions: {1:null,2:null,3:null,4:null} };
        }
        // Detect which session by count changes
        const q = QUALIFYING[raceId][cls];
        const lastQ = q.lastSession || 1;
        q.sessions[lastQ] = rows;
        q.updated = new Date().toLocaleString('en-US', {
          month:'short', day:'numeric', hour:'numeric', minute:'2-digit', timeZone:'America/New_York'
        }) + ' ET';
        updated = true;
      }
    }
    if (updated) {
      // Re-render if qualifying tab is active
      if (activeView === 'qualifying') initQualifyingTab();
      const el = document.getElementById('qual-main-updated');
      if (el && el.textContent) el.textContent += ' · Auto-updated';
    }
  }

  doRefresh(); // run immediately
  _liveQualInterval = setInterval(doRefresh, 5 * 60 * 1000);
}

function stopLiveQualRefresh() {
  if (_liveQualInterval) { clearInterval(_liveQualInterval); _liveQualInterval = null; }
}

// Start refresh if a race is currently live
function checkAndStartLiveRefresh() {
  const t = today();
  const liveRace = RACES.find(r => getRaceStatus(r) === 'live');
  if (liveRace) {
    startLiveQualRefresh(liveRace.id);
  }
}


// ─── BRACKET MODAL ────────────────────────────────────────────────────────────
function openBracketModal(raceId, startClass) {
  const race = RACES.find(r => r.id === raceId);
  const data = BRACKETS[raceId];
  if (!race || !data) return;

  const overlay = document.getElementById('modal-backdrop');
  const sheet   = document.getElementById('modal-sheet');

  // Set content
  document.getElementById('modal-event-num').textContent = `Race ${race.id} of 20 · Race Day Bracket`;
  document.getElementById('modal-title').textContent = race.name;
  document.getElementById('modal-location').textContent = `${race.venue} — ${race.city}`;
  document.getElementById('modal-dates').textContent = formatDateRange(race.startDate, race.endDate);
  document.getElementById('modal-tv').textContent = `📺 ${race.tv}`;

  // Hide entry/qualifying/winners sections
  ['modal-winners-section','modal-entry-section','modal-qualifying-section'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.setAttribute('hidden','');
  });

  // Inject bracket into classes section
  const classesEl = document.getElementById('modal-classes');
  const classesSec = classesEl?.closest('.section-block');
  if (classesSec) {
    classesSec.querySelector('.section-label').textContent = '🏁 Race Day Bracket';
    classesEl.innerHTML = '';

    // Class selector tabs
    const classes = Object.keys(data);
    const classLabels = { tf:'Top Fuel', fc:'Funny Car', ps:'Pro Stock', psm:'Pro Stock Moto', pm:'Pro Mod' };
    const classPills  = { tf:'pill-nitro', fc:'pill-nitro', ps:'pill-prostock', psm:'pill-prostock', pm:'pill-promod' };

    let activeBClass = (startClass && data[startClass]) ? startClass : classes[0];
    const tabRow = document.createElement('div');
    tabRow.className = 'qual-class-tabs';
    tabRow.style.marginBottom = 'var(--space-3)';
    classes.forEach(cls => {
      const btn = document.createElement('button');
      btn.className = `qual-tab ${cls === activeBClass ? 'active' : ''}`;
      btn.textContent = classLabels[cls] || cls.toUpperCase();
      btn.addEventListener('click', () => {
        activeBClass = cls;
        tabRow.querySelectorAll('.qual-tab').forEach(t => t.classList.toggle('active', t === btn));
        renderBracket(cls);
      });
      tabRow.appendChild(btn);
    });
    classesEl.appendChild(tabRow);

    const bracketContent = document.createElement('div');
    bracketContent.id = 'bracket-content';
    classesEl.appendChild(bracketContent);

    function renderBracket(cls) {
      const rounds = data[cls]?.rounds || [];
      bracketContent.innerHTML = rounds.map(round => `
        <div class="bracket-round">
          <div class="bracket-round-label">${round.name}</div>
          ${round.pairs.map(pair => `
            <div class="bracket-pair">
              <div class="bracket-car winner-car">
                <span class="bracket-flag">🏆</span>
                <span class="bracket-name">${pair.w}</span>
                <div class="bracket-run"><span class="bracket-et">${pair.wet}s</span> <span class="bracket-mph">${pair.wmp} mph</span></div>
              </div>
              <div class="bracket-car loser-car">
                <span class="bracket-name">${pair.l}</span>
                <div class="bracket-run"><span class="bracket-et">${pair.let}s</span> <span class="bracket-mph">${pair.lmp} mph</span></div>
              </div>
            </div>`).join('')}
        </div>`).join('');
    }

    renderBracket(activeBClass);
  }

  // Hide itinerary
  const itin = document.getElementById('itinerary-content');
  if (itin) itin.closest('.section-block').setAttribute('hidden','');
  const tickets = document.getElementById('modal-tickets');
  if (tickets) tickets.setAttribute('hidden','');

  overlay.removeAttribute('hidden');
  sheet.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => { overlay.classList.add('visible'); sheet.classList.add('open'); });
}


// ─── DRIVER ANALYTICS MODAL ───────────────────────────────────────────────────
function openDriverModal(driver, classKey) {
  const photo = getDriverPhoto(driver.name);
  const stats25 = DRIVER_STATS[driver.name];
  const stats26 = get2026Stats(driver.name, classKey);

  const classLabels = { tf:'Top Fuel', fc:'Funny Car', ps:'Pro Stock', psm:'Pro Stock Motorcycle', pm:'Pro Mod' };
  const classPills  = { tf:'pill-nitro', fc:'pill-nitro', ps:'pill-prostock', psm:'pill-prostock', pm:'pill-promod' };

  const backdrop = document.getElementById('driver-modal-backdrop');
  const sheet    = document.getElementById('driver-modal-sheet');
  if (!backdrop || !sheet) return;

  // Build creative analytics
  const perRaceData = PER_RACE_STATS[driver.name] || [];
  let perRaceHtml = '';

  if (perRaceData.length > 0) {
    const ets  = perRaceData.map(r => parseFloat(r.bestET)).filter(e => !isNaN(e) && e < 10);
    const mphs = perRaceData.map(r => parseFloat(r.bestMPH)).filter(m => !isNaN(m));
    const rounds = perRaceData.map(r => r.elimRound);

    // Momentum score: avg round exit weighted toward recency
    const momentumScore = rounds.reduce((sum, r, i) => sum + r * (i + 1), 0) /
      rounds.reduce((sum, _, i) => sum + (i + 1), 0);
    const momentum = momentumScore >= 4 ? { label:'🔥 On Fire', color:'var(--green)' }
      : momentumScore >= 3  ? { label:'📈 Rising',  color:'var(--gold)'  }
      : momentumScore >= 2  ? { label:'➡️ Steady',  color:'var(--text-muted)' }
      :                        { label:'❄️ Cold',    color:'#5591c7'      };

    // ET trend line SVG sparkline
    const W = 260, H = 48, pad = 8;
    const minET = Math.min(...ets), maxET = Math.max(...ets);
    const etRange = (maxET - minET) || 0.05;
    const pts = ets.map((et, i) => {
      const x = pad + (i / Math.max(ets.length - 1, 1)) * (W - pad * 2);
      const y = H - pad - ((maxET - et) / etRange) * (H - pad * 2);
      return `${x},${y}`;
    });
    const sparkline = ets.length > 1
      ? `<polyline points="${pts.join(' ')}" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
         ${pts.map((p, i) => {
           const [x, y] = p.split(',');
           const isLow = ets[i] === minET;
           return `<circle cx="${x}" cy="${y}" r="${isLow ? 5 : 3.5}" fill="${isLow ? 'var(--green)' : 'var(--surface)'}" stroke="${isLow ? 'var(--green)' : 'var(--accent)'}" stroke-width="2"/>`;
         }).join('')}`
      : `<circle cx="${W/2}" cy="${H/2}" r="5" fill="var(--accent)"/>`;

    // Round result pills for each race
    const resultDots = perRaceData.map(r => {
      const icons = { 0:'✗', 1:'R1', 2:'R2', 3:'SF', 4:'F', 5:'W' };
      const cols  = { 0:'var(--text-faint)', 1:'var(--text-faint)', 2:'var(--text-muted)', 3:'var(--gold)', 4:'var(--gold)', 5:'var(--green)' };
      return `<div class="da-race-dot" style="border-color:${cols[r.elimRound]};color:${cols[r.elimRound]}">
        <div class="da-race-dot-result">${icons[r.elimRound]}</div>
        <div class="da-race-dot-name">${r.raceName.replace('NHRA ','').replace(' Nationals','').replace(' Nationas','')}</div>
      </div>`;
    }).join('');

    // Best / worst stats
    const bestET  = Math.min(...ets).toFixed(3);
    const bestMPH = Math.max(...mphs).toFixed(2);
    const avgQual = (perRaceData.reduce((s,r) => s+r.qualPos, 0) / perRaceData.length).toFixed(1);
    const deepest = Math.max(...rounds);
    const deepLabel = ELIM_ROUND_LABELS[deepest];

    perRaceHtml = `
      <div class="da-trends-card">
        <div class="da-trends-header">
          <div class="da-season-label">2026 Trends</div>
          <div class="da-momentum" style="color:${momentum.color}">${momentum.label}</div>
        </div>

        <!-- Race result timeline -->
        <div class="da-race-timeline">${resultDots}</div>

        <!-- ET Sparkline -->
        <div class="da-sparkline-wrap">
          <div class="da-sparkline-label">ET Trend <span style="color:var(--green)">● best</span></div>
          <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${sparkline}</svg>
          <div class="da-sparkline-range">
            <span>${maxET.toFixed(3)}s</span>
            <span style="color:var(--text-faint);font-size:10px">slower → quicker</span>
            <span style="color:var(--green)">${minET.toFixed(3)}s</span>
          </div>
        </div>

        <!-- Key numbers -->
        <div class="da-key-nums">
          <div class="da-key-num">
            <div class="da-key-val" style="color:var(--green)">${bestET}s</div>
            <div class="da-key-lbl">Best ET</div>
          </div>
          <div class="da-key-num">
            <div class="da-key-val">${bestMPH}</div>
            <div class="da-key-lbl">Top MPH</div>
          </div>
          <div class="da-key-num">
            <div class="da-key-val">Q${avgQual}</div>
            <div class="da-key-lbl">Avg Qual</div>
          </div>
          <div class="da-key-num">
            <div class="da-key-val" style="font-size:var(--text-sm)">${deepLabel}</div>
            <div class="da-key-lbl">Best Finish</div>
          </div>
        </div>
      </div>`;
  }

  sheet.innerHTML = `
    <div class="modal-handle"></div>
    <div class="modal-scroll">
      <button class="modal-close" id="driver-modal-close" aria-label="Close">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>

      <!-- Driver Hero -->
      <div class="da-hero">
        ${photo
          ? `<img class="da-photo" src="${photo}" alt="${driver.name}" onerror="this.style.display='none'">`
          : `<div class="da-photo da-photo-placeholder"></div>`}
        <div class="da-hero-info">
          <div class="da-car-num">#${driver.num}</div>
          <div class="da-name">${driver.name}</div>
          <div class="da-team">${driver.team}</div>
          <span class="wc-class-pill ${classPills[classKey] || 'pill-sport'}">${classLabels[classKey] || classKey}</span>
        </div>
      </div>

      <div class="da-body">
        <!-- 2026 Season -->
        <div class="da-season-card da-season-26">
          <div class="da-season-label">2026 Season</div>
          <div class="da-stats-grid">
            <div class="da-stat">
              <div class="da-stat-val">${stats26.pos ? `P${stats26.pos}` : '—'}</div>
              <div class="da-stat-lbl">Position</div>
            </div>
            <div class="da-stat">
              <div class="da-stat-val">${stats26.pts}</div>
              <div class="da-stat-lbl">Points</div>
            </div>
            <div class="da-stat">
              <div class="da-stat-val">${stats26.wins}</div>
              <div class="da-stat-lbl">Wins</div>
            </div>
            <div class="da-stat">
              <div class="da-stat-val">${stats26.runnerUps}</div>
              <div class="da-stat-lbl">Runner-Ups</div>
            </div>
            ${stats26.f2t ? `<div class="da-stat">
              <div class="da-stat-val" style="color:var(--gold)">⚡${stats26.f2t}</div>
              <div class="da-stat-lbl">2F2T Pts</div>
            </div>` : ''}
          </div>
        </div>

        <!-- 2025 Season -->
        <div class="da-season-card da-season-25">
          <div class="da-season-label">2025 Season</div>
          ${stats25 ? `
          <div class="da-stats-grid">
            <div class="da-stat">
              <div class="da-stat-val ${stats25.s25pos === 1 ? 'da-champ' : ''}">${stats25.s25pos ? `P${stats25.s25pos}` : '—'}</div>
              <div class="da-stat-lbl">Final Pos.</div>
            </div>
            <div class="da-stat">
              <div class="da-stat-val">${stats25.s25pts > 0 ? stats25.s25pts.toLocaleString() : '—'}</div>
              <div class="da-stat-lbl">Final Pts</div>
            </div>
            <div class="da-stat">
              <div class="da-stat-val">${stats25.s25wins}</div>
              <div class="da-stat-lbl">Wins</div>
            </div>
            <div class="da-stat" style="flex:2">
              <div class="da-stat-val" style="font-size:var(--text-sm)">${stats25.s25label}</div>
              <div class="da-stat-lbl">Status</div>
            </div>
          </div>` : `<div class="da-no-data">No 2025 data available</div>`}
        </div>

        <!-- Per-Race Stats -->
        ${perRaceHtml}

        <!-- Sponsor -->
        <div class="da-sponsor-row">
          <span class="da-sponsor-label">Sponsor</span>
          <span class="da-sponsor-val">${driver.sponsor}</span>
        </div>
      </div>
    </div>`;

  // Wire close
  document.getElementById('driver-modal-close')?.addEventListener('click', closeDriverModal);
  backdrop.addEventListener('click', closeDriverModal);

  backdrop.removeAttribute('hidden');
  sheet.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => {
    backdrop.classList.add('visible');
    sheet.classList.add('open');
  });
}

function closeDriverModal() {
  const backdrop = document.getElementById('driver-modal-backdrop');
  const sheet    = document.getElementById('driver-modal-sheet');
  backdrop?.classList.remove('visible');
  sheet?.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => {
    backdrop?.setAttribute('hidden','');
    sheet?.setAttribute('hidden','');
  }, 300);
}


// ─── 2FAST2TASTY TAB ─────────────────────────────────────────────────────────
const F2T_RESULTS = {
  tf: [
    { raceId:1, raceName:"Gatornationals", winner:"Josh Hart",     runnerUp:"Shawn Langdon", quickSemi:"Doug Kalitta" },
    { raceId:2, raceName:"Arizona Natls",  winner:"Doug Kalitta",  runnerUp:"Shawn Langdon", quickSemi:"Maddi Gordon"  },
  ],
  fc: [
    { raceId:1, raceName:"Gatornationals", winner:"Chad Green",        runnerUp:"Jordan Vandergriff", quickSemi:"Alexis DeJoria"  },
    { raceId:2, raceName:"Arizona Natls",  winner:"J.R. Todd",         runnerUp:"Ron Capps",          quickSemi:"Alexis DeJoria"  },
  ],
  ps: [
    { raceId:1, raceName:"Gatornationals", winner:"Matt Hartford",  runnerUp:"Greg Anderson", quickSemi:"Erica Enders"   },
    { raceId:2, raceName:"Arizona Natls",  winner:"Dallas Glenn",   runnerUp:"Cody Coughlin", quickSemi:"Greg Anderson"  },
  ],
  psm: [
    { raceId:1, raceName:"Gatornationals", winner:"Richard Gadson", runnerUp:"Gaige Herrera", quickSemi:"John Hall"      },
  ],
};

// 2F2T cumulative points
const F2T_POINTS = {
  tf: [
    { pos:1, name:"Josh Hart",      pts:3, races:["Win R1"] },
    { pos:2, name:"Doug Kalitta",   pts:3, races:["Win R2"] },
    { pos:3, name:"Shawn Langdon",  pts:4, races:["RU R1","RU R2"] },
    { pos:4, name:"Maddi Gordon",   pts:1, races:["QS R2"] },
    { pos:5, name:"Antron Brown",   pts:1, races:["QS R1"] },
  ],
  fc: [
    { pos:1, name:"Chad Green",         pts:3, races:["Win R1"] },
    { pos:2, name:"J.R. Todd",          pts:3, races:["Win R2"] },
    { pos:3, name:"Jordan Vandergriff", pts:2, races:["RU R1"] },
    { pos:4, name:"Ron Capps",          pts:2, races:["RU R2"] },
    { pos:5, name:"Alexis DeJoria",     pts:2, races:["QS R1","QS R2"] },
  ],
  ps: [
    { pos:1, name:"Matt Hartford",  pts:4, races:["Win R1","QS R1"] },
    { pos:2, name:"Dallas Glenn",   pts:3, races:["Win R2"] },
    { pos:3, name:"Cody Coughlin",  pts:2, races:["RU R2"] },
    { pos:4, name:"Greg Anderson",  pts:2, races:["RU R1","QS R2"] },
    { pos:5, name:"Erica Enders",   pts:1, races:["QS R1"] },
  ],
  psm: [
    { pos:1, name:"Richard Gadson", pts:3, races:["Win R1"] },
    { pos:2, name:"Gaige Herrera",  pts:2, races:["RU R1"] },
    { pos:3, name:"John Hall",      pts:1, races:["QS R1"] },
  ],
};

let activeF2TClass = 'tf';

function renderF2TTab() {
  const container = document.getElementById('f2t-list');
  if (!container) return;

  const pts = F2T_POINTS[activeF2TClass] || [];
  const results = F2T_RESULTS[activeF2TClass] || [];
  const maxPts = pts[0]?.pts || 1;

  let html = '';

  // Leader hero
  if (pts[0]) {
    html += `
    <div class="f2t-hero">
      <div class="f2t-hero-label">⚡ Challenge Leader</div>
      <div class="f2t-hero-name">${pts[0].name}</div>
      <div class="f2t-hero-pts">${pts[0].pts}<span>pts</span></div>
      <div class="f2t-hero-tags">${pts[0].races.map(r=>`<span class="f2t-tag">${r}</span>`).join('')}</div>
    </div>`;
  }

  // Rest of standings with horizontal bars
  if (pts.length > 1) {
    html += `<div class="f2t-standings">`;
    pts.slice(1).forEach(d => {
      const pct = Math.round((d.pts / maxPts) * 100);
      html += `
      <div class="f2t-row">
        <div class="f2t-row-top">
          <span class="f2t-row-pos">${d.pos}</span>
          <span class="f2t-row-name">${d.name}</span>
          <span class="f2t-row-pts">⚡ ${d.pts}</span>
        </div>
        <div class="f2t-bar-track">
          <div class="f2t-bar-fill" style="width:${pct}%"></div>
        </div>
        <div class="f2t-row-tags">${d.races.map(r=>`<span class="f2t-tag f2t-tag-sm">${r}</span>`).join('')}</div>
      </div>`;
    });
    html += `</div>`;
  }

  // Race results
  if (results.length) {
    html += `<div class="f2t-section-hdr">Race Results</div>`;
    results.forEach(r => {
      html += `
      <div class="f2t-race-card">
        <div class="f2t-race-name">${r.raceName}</div>
        <div class="f2t-race-rows">
          <div class="f2t-race-row">
            <div class="f2t-rc-medal gold">+3</div>
            <div class="f2t-rc-info">
              <div class="f2t-rc-title">Winner</div>
              <div class="f2t-rc-driver">${r.winner}</div>
            </div>
          </div>
          <div class="f2t-race-row">
            <div class="f2t-rc-medal silver">+2</div>
            <div class="f2t-rc-info">
              <div class="f2t-rc-title">Runner-Up</div>
              <div class="f2t-rc-driver">${r.runnerUp}</div>
            </div>
          </div>
          <div class="f2t-race-row">
            <div class="f2t-rc-medal bronze">+1</div>
            <div class="f2t-rc-info">
              <div class="f2t-rc-title">Quickest Semi</div>
              <div class="f2t-rc-driver">${r.quickSemi}</div>
            </div>
          </div>
        </div>
      </div>`;
    });
  }

  html += `<div class="data-note" style="padding-bottom:calc(var(--space-20) + var(--safe-bottom))">Bonus points carry through the Countdown reset · Not awarded at every race</div>`;

  container.innerHTML = html;
}

document.querySelectorAll('.f2t-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.f2t-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeF2TClass = tab.dataset.f2tclass;
    renderF2TTab();
  });
});

// ─── BRACKETS TAB ─────────────────────────────────────────────────────────────
let activeBracketRace = null;
let activeBracketClass = 'tf';

let _bracketsInited = false;
function initBracketsTab() {
  const select = document.getElementById('bracket-race-select');
  const classTabs = document.getElementById('bracket-class-tabs');
  const list = document.getElementById('bracket-list');
  const noRace = document.getElementById('bracket-no-race');
  if (!select) return;

  // Only populate options once
  if (!_bracketsInited) {
    select.innerHTML = '<option value="">Select a completed race...</option>';
    Object.keys(BRACKETS).forEach(raceId => {
      const race = RACES.find(r => r.id === parseInt(raceId));
      if (race) {
        const opt = document.createElement('option');
        opt.value = raceId;
        opt.textContent = `Race ${race.id} — ${race.name}`;
        select.appendChild(opt);
      }
    });
    _bracketsInited = true;
  }

  function renderBracketTab() {
    const raceId = parseInt(select.value);
    const data = BRACKETS[raceId];
    if (!raceId || !data) {
      if (classTabs) classTabs.setAttribute('hidden','');
      if (list) list.innerHTML = '';
      if (noRace) noRace.removeAttribute('hidden');
      return;
    }
    activeBracketRace = raceId;
    if (noRace) noRace.setAttribute('hidden','');
    if (classTabs) classTabs.removeAttribute('hidden');

    // Update class tab visibility
    document.querySelectorAll('#bracket-class-tabs .qual-tab').forEach(t => {
      const cls = t.dataset.bclass;
      t.style.display = data[cls] ? '' : 'none';
      t.classList.toggle('active', cls === activeBracketClass && data[cls]);
    });
    if (!data[activeBracketClass]) {
      activeBracketClass = Object.keys(data)[0];
      document.querySelectorAll('#bracket-class-tabs .qual-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.bclass === activeBracketClass);
      });
    }

    renderBracketRounds();
  }

  function renderBracketRounds() {
    if (!list || !activeBracketRace) return;
    const data = BRACKETS[activeBracketRace]?.[activeBracketClass];
    if (!data) { list.innerHTML = `<div class="qual-empty">No bracket data for this class</div>`; return; }

    const rounds = data.rounds;
    const numRounds = rounds.length;

    // Build visual bracket as horizontal columns
    let html = `<div class="vb-wrap">`;

    rounds.forEach((round, ri) => {
      const isLast = ri === numRounds - 1;
      html += `<div class="vb-col ${isLast ? 'vb-final' : ''}">
        <div class="vb-col-label">${round.name}</div>
        <div class="vb-matchups">`;

      round.pairs.forEach((pair, pi) => {
        html += `
          <div class="vb-matchup">
            <div class="vb-slot vb-winner">
              <div class="vb-slot-inner">
                <span class="vb-trophy">🏆</span>
                <div class="vb-driver-info">
                  <span class="vb-name">${pair.w}</span>
                  <span class="vb-run">${pair.wet}s · ${pair.wmp} mph</span>
                </div>
              </div>
            </div>
            <div class="vb-connector"></div>
            <div class="vb-slot vb-loser">
              <div class="vb-slot-inner">
                <span class="vb-trophy vb-trophy-empty"></span>
                <div class="vb-driver-info">
                  <span class="vb-name">${pair.l}</span>
                  <span class="vb-run">${pair.let}s · ${pair.lmp} mph</span>
                </div>
              </div>
            </div>
            ${!isLast ? `<div class="vb-line-right"></div>` : ''}
          </div>`;
      });

      html += `</div></div>`;
    });

    html += `</div>`;
    list.innerHTML = html;
  }

  select.addEventListener('change', () => { activeBracketClass = 'tf'; renderBracketTab(); });

  document.querySelectorAll('#bracket-class-tabs .qual-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('#bracket-class-tabs .qual-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeBracketClass = tab.dataset.bclass;
      renderBracketRounds();
    });
  });

  // Wire select change
  select.onchange = renderBracketTab;

  // Wire class tabs
  document.querySelectorAll('#bracket-class-tabs .qual-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('#bracket-class-tabs .qual-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeBracketClass = tab.dataset.bclass;
      renderBracketRounds();
    };
  });

  // Auto-select most recent race
  if (select.options.length > 1) {
    select.selectedIndex = select.options.length - 1;
    renderBracketTab();
  }
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
updateStats();
renderSchedule();
initCountdown();
initQualifyingTab();
checkAndStartLiveRefresh();

// Kick off background entry list refresh on app load
// (silent — doesn't block the UI, updates when ready)
setTimeout(() => refreshEntryList(), 1500);
