import TeamIppon from "~/components/team-ippon";
import Layout from "~/components/layout";
import TournamentSelect from "~/components/select/tournament-select";

export default function StartMatch() {
  return (
    <Layout>
      <form className="relative flex w-fit flex-col items-center justify-center gap-2 rounded-md bg-pink-400 p-5 shadow-lg">
        <h1 className="text-lg">Tournament</h1>
        <TournamentSelect />

        <button className="rounded-full bg-white px-2 py-1">Submit</button>
      </form>
    </Layout>
  );
}
