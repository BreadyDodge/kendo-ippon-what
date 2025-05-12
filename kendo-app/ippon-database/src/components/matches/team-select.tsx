import { Input } from "../ui/input";

const TeamSelect = () => {
  return (
    <>
      <div className="flex items-center gap-5">
        <div className="flex flex-col gap-1">
          <Input className="bg-neutral-300" placeholder="Red Team" />
        </div>
        <div className="flex flex-col gap-1">
          <Input placeholder="White Team" className="bg-neutral-300" />
        </div>
      </div>
    </>
  );
};

export default TeamSelect;
