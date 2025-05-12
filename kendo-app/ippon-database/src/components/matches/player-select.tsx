import { Input } from "../ui/input";

const PlayerSelect = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-16">
          <p>Red Player</p>
          <p>White Player</p>
        </div>
        <div className="flex gap-10">
          <Input placeholder="Red Player" />
          <h1 className="text-lg font-bold">VS</h1>
          <Input placeholder="White Player" />
        </div>
      </div>
    </>
  );
};

export default PlayerSelect;
