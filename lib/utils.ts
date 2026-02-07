import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatProjectDate(date: string): string {
  if (!date) return "";
  if (date.toLowerCase() === "present") return "Present";

  const parts = date.split("-");
  if (parts.length < 2) return date;

  const [year, month] = parts;
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthIndex = parseInt(month, 10) - 1;
  const monthName = monthNames[monthIndex] || month;

  return `${monthName} ${year}`;
}

export function formatProjectTimeline(startDate: string, endDate: string): string {
  if (!startDate || !endDate) return "";
  return `${formatProjectDate(startDate)} – ${formatProjectDate(endDate)}`;
}
