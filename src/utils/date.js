import { formatISO } from 'date-fns';

export const formatDate = (date) => formatISO(date, { representation: 'date' });
export const DATE_FORMAT = 'yyyy-MM-dd';
