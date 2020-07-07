export enum Tech {
  TypeScript = "TypeScript",
  JavaScript = "JavaScript",
  CSS = "CSS",
  HTML = "HTML",
}

export type LangString = keyof typeof Tech

export const abbvTech = (tech: LangString | null): string => {
  switch (tech) {
    case Tech.TypeScript:
      return "TS"
    case Tech.JavaScript:
      return "JS"
    case Tech.CSS:
      return "css"
    case Tech.HTML:
      return "html"
    default:
      return "others"
  }
}
