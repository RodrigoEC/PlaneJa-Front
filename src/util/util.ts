export const capitalize = (string: string): string => {
  const words = string.split(" ");
  const wordsCapitalized = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );

  return wordsCapitalized.join(" ");
};
