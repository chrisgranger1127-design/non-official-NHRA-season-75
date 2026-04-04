/* ═══════════════════════════════════════════════════════
   NHRA 2026 PWA — Full App Logic
   Features: Schedule · Winners Circle · Points Standings · Entry List (live refresh)
   ═══════════════════════════════════════════════════════ */


// ─── DRIVER HEADSHOTS (from NHRA.com) ────────────────────────────────────────
const DRIVER_PHOTOS = {
  // TOP FUEL
  "Doug Kalitta":    "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-03/kalitta-head.png.webp",
  "Shawn Langdon":   "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2025-03/langdon-head.jpg.webp",
  "Justin Ashley":   "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-03/ashley-head.png.webp",
  "Tony Stewart":    "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/stewart-head.png.webp",
  "Clay Millican":   "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-03/clay-head.png.webp",
  "Steve Torrence":  "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-03/torrence-head.png.webp",
  "Shawn Reed":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/reed-head.png.webp",
  "Antron Brown":    "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-03/antron-head.png.webp",
  "Josh Hart":       "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2026-03/hart-head.png.webp",
  "Ida Zetterström": "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/ida-head.png.webp",
  "Jasmine Salinas": "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/jasmine-head.png.webp",
  "Dan Mercier":     "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-03/mercier-head.png.webp",
  "Tony Schumacher": "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2025-09/tony-head.png.webp",
  "Kyle Wurtzel":    "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2017-04/wurtzel.png.webp",
  "Cameron Ferre":   "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2022-03/ferre-head.jpg.webp",
  "Tripp Tatum III": "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/tatum-head.png.webp",
  "Billy Torrence":  "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2022-06/btorrence.jpg.webp",
  "Will Smith":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-12/smith-head.png.webp",
  "Madison Gordon":  "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2026-01/gordon-head.png.webp",
  "Maddi Gordon":    "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2026-01/gordon-head.png.webp",
  "Leah Pruett":     "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2026-03/leah-head.png.webp",
  "Ron August Jr":   "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-03/kalitta-head.png.webp",
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
  // PRO STOCK
  "Dallas Glenn":       "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/glenn-head.png.webp",
  "Greg Anderson":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/greg-head.png.webp",
  "Matt Hartford":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/hartford-head.png.webp",
  "Aaron Stanfield":    "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/stanfield-head.png.webp",
  "Erica Enders":       "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/erica-head.png.webp",
  "Eric Latino":        "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/latino-head.png.webp",
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
  "Stephen Bell":       "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-03/kalitta-head.png.webp",
  "Joey Grose":         "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/grose-head.png.webp",
  "Matthew Latino":     "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/latino-head.png.webp",
  "Matt Latino":        "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/latino-head.png.webp",
  "Chris Vang":         "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/greg-head.png.webp",
  // PRO STOCK MOTORCYCLE
  "Richard Gadson":     "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/erica-head.png.webp",
  "Gaige Herrera":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/stanfield-head.png.webp",
  "Matt Smith":         "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/greg-head.png.webp",
  "Angie Smith":        "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/erica-head.png.webp",
  "John Hall":          "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/beckman-head.png.webp",
  "Steve Johnson":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/capps-head.png.webp",
  "Brayden Davis":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-12/hyde-head.jpg.webp",
  "Chase Van Sant":     "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/dwilk-head.png.webp",
  "Clayton Howey":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/lee-had.png.webp",
  // PRO MOD
  "Rickie Smith":       "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2017-01/Rickie%20Smith.jpg.webp",
  "Bob Rahaim":         "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2017-01/Bob%20Rahaim.jpg.webp",
  "Steve Jackson":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/green-headshot.png.webp",
  "Derek Menholt":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/capps-head.png.webp",
  "Mike Stavrinos":     "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-03/tasca-head.png.webp",
  "Todd Tutterow":      "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2024-07/beckman-head.png.webp",
  "Billy Banaka":       "https://www.nhra.com/sites/default/files/styles/driver_headshot_listing/public/2023-03/antron-head.png.webp",
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
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Pro Mod"],
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
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Mod"],
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
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle"],
    entries: { tf:{entered:15,qualified:16}, fc:{entered:18,qualified:16}, ps:{entered:19,qualified:16}, psm:null, pm:null },
    itinerary: [
      { day: "Thursday, Apr 9", sessions: [
        { time: "9:00 AM", event: "Gates Open / Tech Inspection", key: false },
        { time: "12:00 PM", event: "Qualifying — Pro Stock / PSM (Q1)", key: true },
        { time: "3:00 PM", event: "Qualifying — Top Fuel / Funny Car (Q1)", key: true },
        { time: "6:00 PM", event: "Qualifying — Top Fuel / Funny Car (Q2, Night Show)", key: true },
      ]},
      { day: "Friday, Apr 10", sessions: [
        { time: "9:00 AM", event: "Gates Open", key: false },
        { time: "1:00 PM", event: "Qualifying — Pro Stock / PSM (Q3)", key: true },
        { time: "3:30 PM", event: "Qualifying — Top Fuel / Funny Car (Q3)", key: true },
        { time: "6:00 PM", event: "Qualifying — Top Fuel / Funny Car (Q4, Night Show)", key: true },
      ]},
      { day: "Saturday, Apr 11", sessions: [
        { time: "9:00 AM", event: "Gates Open", key: false },
        { time: "11:00 AM", event: "Qualifying — Top Fuel / Funny Car (Q5, Mission 2Fast2Tasty)", key: true },
        { time: "12:00 PM", event: "Qualifying — Pro Stock / PSM (Q5)", key: true },
        { time: "3:00 PM", event: "Final Qualifying — All Pro Classes (Q6)", key: true },
      ]},
      { day: "Sunday, Apr 12", sessions: [
        { time: "8:30 AM", event: "Gates Open", key: false },
        { time: "9:30 AM", event: "Track Walk & Driver Introductions", key: false },
        { time: "10:30 AM", event: "Mission Foods Drag Racing Eliminations Begin", key: true },
      ]},
    ]
  },
  {
    id: 4, name: "NHRA 4-Wide Nationals",
    fullName: "16th annual American Rebel Light NHRA 4-Wide Nationals",
    venue: "zMAX Dragway", city: "Concord, NC",
    timezone: "America/New_York", startDate: "2026-04-24", endDate: "2026-04-26",
    tv: "FS1", phase: "regular", tags: ["4-wide"], winners: null,
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Pro Mod"],
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
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Pro Mod"],
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
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle"],
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
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle"],
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
    classes: ["Top Fuel","Funny Car","Pro Stock"],
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
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Pro Mod"],
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
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle"],
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
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle"],
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
    classes: ["Top Fuel","Funny Car","Pro Stock"],
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
    classes: ["Top Fuel","Funny Car","Pro Stock"],
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
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Pro Mod","Top Alcohol","Sportsman"],
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
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle"],
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
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle","Pro Mod"],
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
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle"],
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
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle"],
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
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle"],
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
    classes: ["Top Fuel","Funny Car","Pro Stock","Pro Stock Motorcycle"],
    entries: { tf:{entered:18,qualified:16}, fc:{entered:17,qualified:16}, ps:{entered:18,qualified:16}, psm:{entered:14,qualified:8}, pm:null },
    itinerary: [
      { day: "Sunday, Nov 15", sessions: [
        { time: "10:30 AM", event: "Championship Eliminations — World Titles On The Line", key: true },
      ]},
    ]
  },
];

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
    { pos:1,  name:"Doug Kalitta",    pts:176, behind:0 },
    { pos:2,  name:"Josh Hart",       pts:174, behind:-2 },
    { pos:3,  name:"Shawn Langdon",   pts:170, behind:-6 },
    { pos:4,  name:"Leah Pruett",     pts:158, behind:-18 },
    { pos:5,  name:"Maddi Gordon",    pts:152, behind:-24 },
    { pos:6,  name:"Tony Stewart",    pts:108, behind:-68 },
    { pos:7,  name:"Antron Brown",    pts:107, behind:-69 },
    { pos:8,  name:"Tony Schumacher", pts:101, behind:-75 },
    { pos:9,  name:"Billy Torrence",  pts:78,  behind:-98 },
    { pos:10, name:"Justin Ashley",   pts:65,  behind:-111 },
    { pos:11, name:"Shawn Reed",      pts:65,  behind:-111 },
    { pos:12, name:"Clay Millican",   pts:62,  behind:-114 },
    { pos:13, name:"Tripp Tatum III", pts:53,  behind:-123 },
    { pos:14, name:"Cameron Ferre",   pts:41,  behind:-135 },
    { pos:15, name:"Will Smith",      pts:41,  behind:-135 },
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
    { pos:14, name:"Austin Prock",        pts:33,  behind:-141 },
    { pos:15, name:"Bob Tasca III",       pts:32,  behind:-142 },
  ],
  ps: [
    { pos:1,  name:"Dallas Glenn",      pts:195, behind:0 },
    { pos:2,  name:"Matt Hartford",     pts:160, behind:-35 },
    { pos:3,  name:"Cody Coughlin",     pts:158, behind:-37 },
    { pos:4,  name:"Greg Anderson",     pts:142, behind:-53 },
    { pos:5,  name:"Erica Enders",      pts:128, behind:-67 },
    { pos:6,  name:"Greg Stanfield",    pts:118, behind:-77 },
    { pos:7,  name:"Matt Latino",       pts:109, behind:-86 },
    { pos:8,  name:"Jeg Coughlin Jr.",  pts:107, behind:-88 },
    { pos:9,  name:"Aaron Stanfield",   pts:106, behind:-89 },
    { pos:10, name:"Cody Anderson",     pts:83,  behind:-112 },
    { pos:11, name:"Chris McGaha",      pts:82,  behind:-113 },
    { pos:12, name:"Deric Kramer",      pts:67,  behind:-128 },
    { pos:13, name:"Eric Latino",       pts:65,  behind:-130 },
    { pos:14, name:"Troy Coughlin Jr.", pts:64,  behind:-131 },
    { pos:15, name:"Stephen Bell",      pts:62,  behind:-133 },
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
    { num:"100", name:"Billy Banaka",       sponsor:"Billy Banaka Racing",             team:"Billy Banaka Racing" },
    { num:"31",  name:"Derek Menholt",      sponsor:"Menholt Auto Group",              team:"Menholt Racing" },
    { num:"32",  name:"Mike Stavrinos",     sponsor:"Stavrinos Racing",                team:"Stavrinos Racing" },
    { num:"33",  name:"Rickie Smith",       sponsor:"Jerry Bickel Race Cars",          team:"Rickie Smith Racing" },
    { num:"4",   name:"Ty Tutton",          sponsor:"Traction Tire",                   team:"Tutton Racing" },
    { num:"44",  name:"Jim Whiteley",       sponsor:"Whiteley Racing",                 team:"Whiteley Racing" },
    { num:"55",  name:"Mason Wright",       sponsor:"ProFlow Plumbing Solutions",      team:"Elite Motorsports" },
    { num:"66",  name:"Todd Tutterow",      sponsor:"Tutterow Racing",                 team:"Tutterow Racing" },
    { num:"72",  name:"Troy Coughlin Jr.",  sponsor:"JEGS.com",                        team:"Elite Motorsports" },
    { num:"77",  name:"Bob Rahaim",         sponsor:"Rahaim Racing",                   team:"Rahaim Racing" },
    { num:"88",  name:"Steve Jackson",      sponsor:"Great Clips",                     team:"Steve Jackson Racing" },
    { num:"99",  name:"Jose Gonzalez",      sponsor:"JG Motorsports",                  team:"JG Motorsports" },
  ]
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

    card.innerHTML = `
      <div class="wc-card-header">
        <div class="wc-race-info">
          <div class="wc-race-num">Race ${race.id} of 20 · ${race.phase==='countdown'?'Countdown':'Regular Season'}</div>
          <div class="wc-race-name">${race.name}</div>
          <div class="wc-race-venue">${race.venue} · ${race.city}</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div class="wc-race-date">${MONTHS3U[sDate.getMonth()]} ${sDate.getDate()}</div>
          <div style="font-size:var(--text-xs);color:var(--text-faint);margin-top:2px">${sDate.getFullYear()}</div>
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

  const classNames = { tf:'Top Fuel', fc:'Funny Car', ps:'Pro Stock', psm:'Pro Stock Motorcycle', pm:'Pro Mod' };

  const subtitle = document.getElementById('entry-subtitle');
  if (subtitle) subtitle.textContent = `${data.length} ${classNames[activeEntryClass]} competitors · 2026 Season`;

  data.forEach((driver, i) => {
    const photo = getDriverPhoto(driver.name);
    const imgHtml = photo
      ? `<img class="driver-tab-photo" src="${photo}" alt="${driver.name}" loading="lazy" onerror="this.style.display='none'">`
      : `<div class="driver-tab-photo driver-tab-photo-placeholder"></div>`;
    const row = document.createElement('div');
    row.className = `entry-row ${driver._new ? 'entry-new' : ''}`;
    row.innerHTML = `
      ${imgHtml}
      <div class="entry-num">${driver.num}</div>
      <div class="entry-info">
        <div class="entry-name">${driver.name}${driver._new ? ' <span class="new-badge">NEW</span>' : ''}</div>
        <div class="entry-team">${driver.team}</div>
        <div class="entry-sponsor">${driver.sponsor}</div>
      </div>`;
    container.appendChild(row);
  });

  if (!data.length) {
    container.innerHTML = `<div class="empty-state"><p>No entry data available</p></div>`;
  }
}

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

  // Entry list — accordion: click class name to expand/collapse driver list
  const entrySection = document.getElementById('modal-entry-section');
  const accordion    = document.getElementById('modal-entry-accordion');
  if (entrySection && accordion) {
    const raceEntries = RACE_ENTRY_LISTS[race.id];
    const hasNamedList = raceEntries && Object.values(raceEntries).some(v => v && v.length > 0);
    const hasCounts    = race.entries && Object.values(race.entries).some(v => v);

    if (hasNamedList || hasCounts) {
      entrySection.removeAttribute('hidden');
      const badge = document.getElementById('modal-entry-badge');
      if (badge) badge.textContent = hasNamedList ? 'Official' : 'Field Size';

      const classMap = [
        { key:'tf',  label:'Top Fuel',       pill:'pill-tf'  },
        { key:'fc',  label:'Funny Car',       pill:'pill-fc'  },
        { key:'ps',  label:'Pro Stock',       pill:'pill-ps'  },
        { key:'psm', label:'Pro Stock Moto',  pill:'pill-psm' },
        { key:'pm',  label:'Pro Mod',         pill:'pill-pm'  },
      ];

      accordion.innerHTML = '';

      classMap.forEach(({ key, label, pill }) => {
        const hasDrivers = hasNamedList && raceEntries?.[key]?.length > 0;
        const hasCount   = hasCounts && race.entries?.[key];
        if (!hasDrivers && !hasCount) return; // skip classes not at this race

        const count = hasDrivers
          ? raceEntries[key].length
          : race.entries[key]?.entered || 0;

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

        // Populate body
        if (hasDrivers) {
          body.innerHTML = raceEntries[key].map(d => {
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
        } else {
          const e = race.entries[key];
          body.innerHTML = `<div class="modal-entry-count-only">
            <div class="ecount-big">${e.qualified}</div>
            <div class="ecount-label">cars qualified</div>
            <div class="ecount-entered">${e.entered} entered</div>
          </div>`;
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

  // Classes
  const proClasses = ['Top Fuel','Funny Car','Pro Stock','Pro Stock Motorcycle','Pro Mod'];
  document.getElementById('modal-classes').innerHTML = race.classes.map(c =>
    `<span class="class-pill ${proClasses.includes(c)?'pro':''}">${c}</span>`
  ).join('');

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

// ─── INIT ─────────────────────────────────────────────────────────────────────
updateStats();
renderSchedule();
initCountdown();

// Kick off background entry list refresh on app load
// (silent — doesn't block the UI, updates when ready)
setTimeout(() => refreshEntryList(), 1500);
