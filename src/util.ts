export function camelCaseToWords(input: string): string {
  const result = input
    .replace(/([A-Z])/g, " $1")
    .replace(/^ /, "")
    .toLowerCase();
  return result;
}
