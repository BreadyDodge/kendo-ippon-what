import TournamentSelect from "./matches/tournament-select";
import { useState } from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

const TeamIppon = () => {
  const [threeTeam, setThreeTeam] = useState(false);
  return (
    <>
      <div className="absolute right-3 top-3 flex items-center space-x-2">
        <Switch checked={threeTeam} onCheckedChange={setThreeTeam} />
        <Label>3 team match</Label>
      </div>
      <h1 className="text-lg">Tournament</h1>
      <TournamentSelect />
      <p>This is teams</p>
      <button className="rounded-full bg-white px-2 py-1">Submit</button>
    </>
  );
};

export default TeamIppon;
