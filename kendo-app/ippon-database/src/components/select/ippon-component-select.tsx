import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

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
    <div className="flex items-center gap-2 border-b pb-2">
      <p>Order</p>
      <Select>
        <SelectTrigger className="bg-neutral-300">
          <SelectValue placeholder="Point Order?" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
        </SelectContent>
      </Select>
      <RadioGroup>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="R" />
          <Label>Red</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="W" />
          <Label>White</Label>
        </div>
      </RadioGroup>
      <Select>
        <SelectTrigger className="bg-neutral-300">
          <SelectValue placeholder="Ippon Target?" />
        </SelectTrigger>
        <SelectContent>
          {targets.map((target) => (
            <SelectItem value={target.value} key={target.value}>
              {target.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="bg-neutral-300">
          <SelectValue placeholder="Waza?" />
        </SelectTrigger>
        <SelectContent>
          {wazatypes.map((wazatype) => (
            <SelectItem value={wazatype}>{wazatype}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="flex items-center space-x-2">
        <Checkbox />
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Encho?
        </label>
      </div>
    </div>
  );
};

export default IpponComponent;
