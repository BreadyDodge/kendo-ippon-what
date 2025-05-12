import { useMutation, useQueryClient } from "@tanstack/react-query";
import ky from "ky";

type TournamentVars = {
  name: string;
  year: number;
  rounds: number;
};

export function useAddTournament(onSuccess: () => void) {
  const queryClient = useQueryClient();
  const addTournamentMutation = useMutation<void, unknown, TournamentVars>({
    mutationFn: async ({ name, year, rounds }) => {
      await ky.post("/api/tournament/", {
        json: { name, year, rounds },
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["tournaments"] });
      onSuccess();
    },
    onError: (err) => console.error(err),
  });
  return { ...addTournamentMutation };
}
