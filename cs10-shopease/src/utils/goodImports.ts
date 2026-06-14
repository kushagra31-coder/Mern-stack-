// GOOD — imports only what's needed (tree-shakable)
import debounce from 'lodash/debounce';
import sortBy from 'lodash/sortBy';
import { format } from 'date-fns';

export function goodDebounce(fn: () => void, delay: number) {
  return debounce(fn, delay);
}

export function goodFormatDate(date: Date): string {
  return format(date, 'dd MMM yyyy');
}

export function goodSortProducts(names: string[]): string[] {
  return sortBy(names);
}