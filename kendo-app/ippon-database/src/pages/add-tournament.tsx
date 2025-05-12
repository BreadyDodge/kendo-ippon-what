import { Input } from "~/components/ui/input";
import AddTournamentInput from "~/components/tournaments/add-tournament-input";
import Layout from "~/components/layout";
import { useState } from "react";
import TournamentDisplay from "~/components/tournaments/tournament-display";

export default function AddTournament() {
  const [password, setPassword] = useState("");

  return (
    <Layout>
      {password == "deeznuts" ? (
        <div className="flex flex-col items-center gap-5">
          <AddTournamentInput />
          <TournamentDisplay />
        </div>
      ) : (
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password?"
          className="bg-white"
        />
      )}
    </Layout>
  );
}
