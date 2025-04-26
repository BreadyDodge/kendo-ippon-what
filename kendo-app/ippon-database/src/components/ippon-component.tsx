const wazatypes = [
  "Tobikomi",
  "Shikake",
  "Debana",
  "Ouji",
  "Hiki",
  "Hikibana",
  "Ato-uchi",
];

const targets = [
  { label: "面 (men)", value: "M" },
  { label: "小手 (kote)", value: "K" },
  { label: "胴 (dou)", value: "D" },
  { label: "突き (tsuki)", value: "T" },
  { label: "反則 (hansoku)", value: "H" },
];

const IpponComponent = () => {
  return (
    <div className="flex gap-2">
      <p>Order</p>
      <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <select>
        <option value="red">Red</option>
        <option value="white">White</option>
      </select>
      <select>
        {targets.map((target) => (
          <option value={target.value} key={target.value}>
            {target.label}
          </option>
        ))}
      </select>
      <select>
        {wazatypes.map((wazatype) => (
          <option value={wazatype}>{wazatype}</option>
        ))}
      </select>
      <label className="flex items-center gap-1">
        <input type="checkbox" className="size-4" />
        <span>Encho</span>
      </label>
    </div>
  );
};

export default IpponComponent;
