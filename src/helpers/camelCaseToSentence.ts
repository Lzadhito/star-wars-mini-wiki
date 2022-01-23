export const camelCaseToSentence = (text: string) => {
  return text.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1");
};
