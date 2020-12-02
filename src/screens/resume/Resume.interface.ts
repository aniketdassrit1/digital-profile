export interface Result {
  line1?: string;
  line2?: string;
  line3?: string;
  line4?: string;
}

export interface Option {
  defaultValue: string;
  key:
    | "className"
    | "schoolName"
    | "percentage"
    | "iconName"
    | "designation"
    | "duration";
}

export interface Detail {
  options: Result;
  id: string;
}
