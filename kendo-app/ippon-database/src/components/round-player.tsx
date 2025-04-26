const RoundAndPlayer = () => {
  return (
    <>
      <h1>Round</h1>
      <div>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>Quarter</option>
          <option>Semi</option>
          <option>Final</option>
        </select>
      </div>
      <h1>Player</h1>
      <div className="flex items-center gap-5">
        <div className="flex flex-col">
          <p>Red Player</p>
          <input placeholder="Red Player" />
        </div>
        <h1>VS</h1>
        <div className="flex flex-col">
          <p className="ml-auto">White Player</p>
          <input placeholder="White Player" />
        </div>
      </div>
    </>
  );
};

export default RoundAndPlayer;
