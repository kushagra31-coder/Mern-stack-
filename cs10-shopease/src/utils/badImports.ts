// BAD — imports entire libraries (bloats bundle)
import _ from 'lodash';
import moment from 'moment';

export function badDebounce(fn: () => void, delay: number) {
  return _.debounce(fn, delay);
}

export function badFormatDate(date: Date): string {
  return moment(date).format('DD MMM YYYY');
}

export function badSortProducts(names: string[]): string[] {
  return _.sortBy(names);
}