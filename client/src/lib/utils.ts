import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetUrl(path: string) {
  if (path.startsWith("http")) return path;
  const baseUrl = import.meta.env.BASE_URL;
  // Strip leading slash from path
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  // Ensure base url ends with slash
  const cleanBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  return `${cleanBase}${cleanPath}`;
}
