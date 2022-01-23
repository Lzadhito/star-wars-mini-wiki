export const camelCaseToSentence = (text: string) => {
  const result = text
    .replace(/([A-Z]+)/g, " $1")
    .replace(/([A-Z][a-z])/g, " $1");
  return `${result[0].toUpperCase()}${result.slice(1)}`;
};
