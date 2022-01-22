export const camelCaseToSentence = (text: string) => {
  const result = text.replace(/([A-Z])/g, " $1");
  return (
    text
      .replace(/([A-Z])/g, " $1")
      .charAt(0)
      .toUpperCase() + result.slice(1)
  );
};
