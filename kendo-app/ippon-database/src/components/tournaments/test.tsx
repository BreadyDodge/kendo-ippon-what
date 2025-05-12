const tournaments = [
  { id: "something", name: "what", year: "2025" },
  { id: "something", name: "what", year: "2026" },
  { id: "something", name: "what", year: "2027" },
  { id: "something", name: "not", year: "2025" },
];

tournaments.filter((t) => t.name == "what")?.map((y) => y.year);
