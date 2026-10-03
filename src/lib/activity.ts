import { getCollection, type CollectionEntry } from 'astro:content';

export type Activity = CollectionEntry<'activity'>;

export function today(): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Brussels', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(new Date());
}

export async function publishedActivity(): Promise<Activity[]> {
  const entries = await getCollection('activity', ({ data }) => !data.draft && data.date <= today());
  return entries.sort((a, b) => b.data.date.localeCompare(a.data.date) || a.id.localeCompare(b.id));
}

export function formatDate(date: string, short = false): string {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: 'UTC', day: '2-digit', month: short ? 'short' : 'long', ...(short ? {} : { year: 'numeric' }),
  }).format(new Date(`${date}T12:00:00Z`));
}

export function readingTime(entry: Activity): number {
  const words = (entry.body || '').replace(/<[^>]+>/g, '').trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function typeLabel(type: string): string {
  return type.charAt(0).toUpperCase() + type.slice(1);
}
