export function cn(...classes: Array<string | undefined>): string {
  return classes.filter(Boolean).join(' ');
}