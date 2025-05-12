import { Check, Cross, Trash, X } from "lucide-react";
import { useTournaments } from "../hooks/useTournaments";
import { useDeleteTournament } from "../hooks/useDeleteTournament";
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "../ui/dialog";

const TournamentDisplay = () => {
  const [deleteId, setDeleteId] = useState("");
  const { data: Tournaments, isLoading, isError, error } = useTournaments();
  const { mutateAsync: deleteTournament, isError: DeleteError } =
    useDeleteTournament(() => setDeleteId(""));

  const tournamentYearsMap = Tournaments?.reduce(
    (acc, t) => {
      if (!acc[t.name]) acc[t.name] = [];
      if (!acc[t.name]?.includes(t.year)) acc[t.name]?.push(t.year);
      return acc;
    },
    {} as Record<string, number[]>,
  );

  const uniqueTournament = Object.keys(tournamentYearsMap || {});

  return (
    <div className="relative flex flex-col gap-2">
      {uniqueTournament?.map((name) => (
        <Dialog onOpenChange={() => setDeleteId("")}>
          <DialogTrigger asChild>
            <div
              key={name}
              className="flex flex-col items-center justify-between rounded bg-white p-2 shadow"
            >
              <h1 className="text-lg font-bold">{name}</h1>
              <h1>
                Years: <span>{tournamentYearsMap?.[name]?.join(", ")}</span>
              </h1>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{name}</DialogTitle>
            </DialogHeader>
            {Tournaments?.filter((t) => t.name == name).map((tournament) => {
              const isDeleting: boolean = tournament.id == deleteId;
              if (isDeleting) {
                return (
                  <div className="flex justify-between">
                    <p>
                      {" "}
                      Are you sure you want to delete{" "}
                      <span className="text-lg font-bold">
                        {tournament.id}
                      </span>{" "}
                      ?
                    </p>
                    <button
                      onClick={() => {
                        deleteTournament(tournament.id);
                        setDeleteId("");
                      }}
                    >
                      <Check />
                    </button>
                    <button onClick={() => setDeleteId("")}>
                      <X />
                    </button>
                  </div>
                );
              } else {
                return (
                  <div
                    className="flex justify-between gap-3"
                    key={tournament.id}
                  >
                    <p>Year: {tournament.year}</p>
                    <p>Number of rounds: {tournament.rounds}</p>
                    <button onClick={() => setDeleteId(tournament.id)}>
                      <Trash className="size-4" />
                    </button>
                  </div>
                );
              }
            })}
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default TournamentDisplay;
