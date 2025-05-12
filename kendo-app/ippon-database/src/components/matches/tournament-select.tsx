import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const tournaments = [
  { name: "all japan", years: [2025, 2024, 2023] },
  { name: "highschool", years: [2025, 2024, 2023, 2022] },
  { name: "world kendo championship", years: [2025, 2024, 2023, 2022, 2021] },
];
const rounds: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const TournamentSelect = () => {
  const [selectedTournament, setSelectedTournament] = useState(
    tournaments[0]?.name,
  );
  return (
    <div className="flex gap-5">
      {/* tournament can change to combobox */}
      <Select>
        <SelectTrigger className="bg-neutral-300">
          <SelectValue placeholder="Select a Tournament" />
        </SelectTrigger>
        <SelectContent>
          {tournaments.map((tournament) => (
            <SelectItem value={tournament.name} key={tournament.name}>
              {tournament.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="bg-neutral-300">
          <SelectValue placeholder="Select a Year" />
        </SelectTrigger>
        <SelectContent>
          {tournaments
            .find((t) => t.name === selectedTournament)
            ?.years.map((year) => (
              <SelectItem value={String(year)} key={year}>
                {year}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
      <div>
        <Select>
          <SelectTrigger className="bg-neutral-300">
            <SelectValue placeholder="Round?" />
          </SelectTrigger>
          <SelectContent>
            {rounds.map((round) => (
              <SelectItem value={String(round)}>Round {round}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default TournamentSelect;
