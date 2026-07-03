export interface Rule {
  title: string;
  description: string;
  severity?: "Info" | "Important" | "Critical";
}

export interface RuleCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  rules: Rule[];
}