export function goodbye(name?: string): string {
  if (name) {
    return `Goodbye, ${name}!`;
  }
  return "Goodbye, world!";
}
