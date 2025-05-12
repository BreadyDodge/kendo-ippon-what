import { useQuery } from "@tanstack/react-query";
import ky from "ky";

interface Tournament {
  id: string;
  name: string;
  year: number;
  rounds: number;
}
interface GetTournamentResponse {
  data: Tournament[];
}

export function useTournaments() {
  const tournamentQuery = useQuery({
    queryKey: ["tournaments"],
    queryFn: async () => {
      const response = await ky
        .get<GetTournamentResponse>(`api/tournament/`)
        .json();
      return response.data;
    },
  });
  const tournaments = tournamentQuery.data;

  return { ...tournamentQuery, tournaments };
}
