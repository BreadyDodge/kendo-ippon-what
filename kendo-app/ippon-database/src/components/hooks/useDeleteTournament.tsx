import { useMutation, useQueryClient } from "@tanstack/react-query";
import ky from "ky";

export function useDeleteTournament(onSuccess: () => void) {
  const queryClient = useQueryClient();
  const deleteTournamentMutation = useMutation({
    mutationFn: async (id: string) => {
      await ky.delete(`api/tournament/${id}`);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["tournaments"] });
      onSuccess();
    },
  });
  return { ...deleteTournamentMutation };
}
