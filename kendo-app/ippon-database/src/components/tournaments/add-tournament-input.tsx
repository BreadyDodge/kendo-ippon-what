import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { useAddTournament } from "../hooks/useAddTournament";

const AddTournamentInput = () => {
  const [tournament, setTournament] = useState("");
  const [tournamentErrorMessage, setTournamentErrorMessage] = useState("");
  const [year, setYear] = useState("");
  const [yearErrorMessage, setYearErrorMessage] = useState("");
  const [rounds, setRounds] = useState("");
  const [roundsErrorMessage, setRoundsErrorMessage] = useState("");

  const {
    mutateAsync: AddTournament,
    isSuccess,
    isError,
    isPending,
  } = useAddTournament(() => {
    setTournament("");
    setYear("");
    setRounds("");
  });

  const ThisYear = new Date().getFullYear();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = true;

    setTournamentErrorMessage("");
    setYearErrorMessage("");
    setRoundsErrorMessage("");

    if (tournament.trim() === "") {
      setTournamentErrorMessage("Please enter the tournament name!");
      isValid = false;
    }
    const yearNum = Number(year);
    if (!year || yearNum < 1000 || yearNum > ThisYear) {
      setYearErrorMessage("Enter a valid year between 1000 and " + ThisYear);
      isValid = false;
    }
    const roundsNum = Number(rounds);
    if (
      rounds.trim() === "" ||
      roundsNum <= 0 ||
      roundsNum > 9 ||
      roundsNum % 1 !== 0
    ) {
      setRoundsErrorMessage("Enter a 1-digit whole number between 1 and 9");
      isValid = false;
    }
    if (!isValid) return;

    await AddTournament({
      name: tournament,
      year: yearNum,
      rounds: roundsNum,
    });
  };
  return (
    <form className="relative flex w-fit flex-col items-center justify-center gap-5 rounded-md bg-neutral-300 p-5 shadow-lg">
      <h1 className="text-xl">Add New Tournament</h1>
      <div className="flex gap-5">
        <div className="flex flex-col gap-1">
          <p>Name</p>
          <Input
            value={tournament}
            onChange={(e) => setTournament(e.target.value)}
            placeholder="e.g. World Kendo Championship"
          />
          <p className="text-red-600">{tournamentErrorMessage}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p>Year</p>
          <Input
            type="number"
            max={new Date().getFullYear()}
            onChange={(e) => setYear(e.target.value)}
            placeholder="e.g. 2025"
          />
          <p className="text-red-600">{yearErrorMessage}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p>How many rounds?</p>
          <Input
            value={rounds}
            onChange={(e) => setRounds(e.target.value)}
            placeholder="e.g. 1-9"
          />
          <p className="text-red-600">{roundsErrorMessage}</p>
        </div>
      </div>
      <Button
        onClick={handleSubmit}
        disabled={isPending}
        className="disabled:bg-red-600"
      >
        Submit
      </Button>
    </form>
  );
};

export default AddTournamentInput;
