import { useState } from "react";
import CreatableSelect from "react-select/creatable";
import IpponComponent from "./ippon-component";
import RoundAndPlayer from "./round-player";
import { motion } from "framer-motion";

interface MatchInput {
  round: 1 | 2 | 3 | 4 | 5 | 6;
  whiteplayer: string;
  redplayer: string;
  target: "Men" | "Kote" | "Do" | "Tsuki" | "Hansoku";
  pointorder: 1 | 2 | 3;
  encho: boolean;
  wazatype?: "Tobikomi" | "Debana" | "Misete" | "Ouji" | "Hiki";
}

const tournaments = [
  { name: "all japan", years: [2025, 2024, 2023] },
  { name: "highschool", years: [2025, 2024, 2023, 2022] },
  { name: "world kendo championship", years: [2025, 2024, 2023, 2022, 2021] },
];

const IpponInput = () => {
  const [selectedTournament, setSelectedTournament] = useState(
    tournaments[0]?.name,
  );
  const [formCount, setFormCount] = useState(1);
  const [selectedYear, setSelectedYear] = useState(0);
  return (
    <form className="flex w-fit flex-col items-center justify-center gap-2 rounded-md bg-pink-400 p-5">
      <h1>Tournament</h1>
      <div className="flex gap-5">
        {/* change to create table later */}
        <select
          value={selectedTournament}
          onChange={(e) => setSelectedTournament(e.target.value)}
          className="border"
        >
          {tournaments.map((tournament) => (
            <option value={tournament.name} key={tournament.name}>
              {tournament.name}
            </option>
          ))}
        </select>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="border"
        >
          {tournaments
            .find((t) => t.name === selectedTournament)
            ?.years.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
        </select>
      </div>
      <RoundAndPlayer />
      <h1>Ippon</h1>
      {Array.from({ length: formCount }, (_, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <IpponComponent />
        </motion.div>
      ))}
      {formCount < 3 ? (
        <button
          type="button"
          onClick={() => setFormCount((prev) => prev + 1)}
          className="rounded-full bg-white px-2 py-1"
        >
          Add more ippon
        </button>
      ) : (
        <p>max 3 ippon</p>
      )}
      {formCount > 1 ? (
        <button
          type="button"
          onClick={() => setFormCount((prev) => prev - 1)}
          className="rounded-full bg-white px-2 py-1"
        >
          Remove ippon
        </button>
      ) : (
        ""
      )}
    </form>
  );
};

export default IpponInput;
