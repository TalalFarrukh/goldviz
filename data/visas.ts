export interface VisaCountry {
  name: string;
  flag: string;
  notes?: string;
}

export interface UsaRoute {
  from: string;
  fromFlag: string;
}

export const USA_VISA_CATEGORIES = ["B1", "B2", "F1", "F2"];

export const USA_APPOINTMENT_ROUTES: UsaRoute[] = [
  { from: "Dubai", fromFlag: "🇦🇪" },
  { from: "Abu Dhabi", fromFlag: "🇦🇪" },
  { from: "UAE (other)", fromFlag: "🇦🇪" },
  { from: "United Kingdom", fromFlag: "🇬🇧" },
  { from: "Canada", fromFlag: "🇨🇦" },
  { from: "Oman", fromFlag: "🇴🇲" },
  { from: "Muscat", fromFlag: "🇴🇲" },
];

export const VISA_PURPOSES = ["Visit", "Work", "Study", "Family"];

export const SCHENGEN_COUNTRIES: VisaCountry[] = [
  { name: "France", flag: "🇫🇷" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Italy", flag: "🇮🇹", notes: "Visit & Study visa" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "Switzerland", flag: "🇨🇭" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Belgium", flag: "🇧🇪" },
  { name: "Austria", flag: "🇦🇹" },
  { name: "Greece", flag: "🇬🇷" },
];

export const OTHER_VISA_COUNTRIES: VisaCountry[] = [
  { name: "Qatar", flag: "🇶🇦", notes: "QVC appointment" },
  { name: "Japan", flag: "🇯🇵", notes: "Tourist visa" },
];
