import { useState } from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import IpponComponent from "./matches/ippon-component-select";
import PlayerSelect from "./matches/player-select";
import { motion } from "framer-motion";
import TournamentSelect from "./matches/tournament-select";
import { CircleMinus, CirclePlus } from "lucide-react";
import TeamSelect from "./matches/team-select";

interface MatchInput {
  round: 1 | 2 | 3 | 4 | 5 | 6;
  whiteplayer: string;
  redplayer: string;
  target: "Men" | "Kote" | "Do" | "Tsuki" | "Hansoku";
  pointorder: 1 | 2 | 3;
  encho: boolean;
  wazatype?: "Tobikomi" | "Debana" | "Misete" | "Ouji" | "Hiki";
}

const IpponInput = () => {
  const [team, setTeam] = useState(false);
  const [formCount, setFormCount] = useState(1);
  return (
    <form className="relative flex w-fit flex-col items-center justify-center gap-2 rounded-md bg-pink-400 p-5 shadow-lg">
      <div className="absolute left-2 top-2 flex items-center space-x-2">
        <Switch checked={team} onCheckedChange={setTeam} />
        <Label>Team match</Label>
      </div>
      <h1 className="text-lg">Tournament</h1>
      <TournamentSelect />
      <h1 className="text-lg">Player</h1>
      <PlayerSelect />
      {team ? <TeamSelect /> : <></>}
      <h1 className="text-lg">Ippon</h1>
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
      <div className="relative flex w-full">
        {formCount < 3 ? (
          <div className="absolute left-0 flex -translate-y-1.5 items-center gap-1">
            <CirclePlus className="h-4 w-4" />
            <button
              type="button"
              onClick={() => setFormCount((prev) => prev + 1)}
              className="px-2 py-1"
            >
              Add ippon
            </button>
          </div>
        ) : (
          <></>
        )}
        {formCount > 1 ? (
          <div className="absolute right-0 flex -translate-y-1.5 items-center gap-1">
            <button
              type="button"
              onClick={() => setFormCount((prev) => prev - 1)}
              className="px-2 py-1"
            >
              Remove ippon
            </button>
            <CircleMinus className="h-4 w-4" />
          </div>
        ) : (
          <></>
        )}
      </div>
      <button className="rounded-full bg-white px-2 py-1">Submit</button>
    </form>
  );
};

export default IpponInput;
