import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(input: string) {
  return `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${input}`
}

export function sortString(input: string[]) {
  return input.sort((a, b) => {
    if (a === null) return 1; // Move null to the end
    if (b === null) return -1; // Move null to the end
    return a.localeCompare(b); // Sort alphabetically
  });
}

export function capitalise(input: string) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export function nullishSort(a: number, b: number) {
  const defaultValue = 100;
  a = a?? defaultValue;
  b = b?? defaultValue;
  return a - b;
}