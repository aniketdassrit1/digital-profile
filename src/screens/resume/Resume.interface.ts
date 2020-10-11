export interface Result {
  className: string;
  schoolName: string;
  percentage: string;
  iconName: string;
}

export interface Option {
  defaultValue: string;
  key: "className" | "schoolName" | "percentage" | "iconName";
}

export interface Detail {
  options: Result;
  id: string;
}
