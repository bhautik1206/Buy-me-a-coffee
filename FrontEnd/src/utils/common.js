import dateFormat from 'date-fns/format';
import intervalToDuration from 'date-fns/intervalToDuration';

import queryClient from './queryClient';

export const handleLogOutRequest = () => {
  localStorage.clear('');
  queryClient.removeQueries();
};

/**
 * Format list of breadcrumb for use in `Breadcrumb` component
 *
 * @param {array} list - list of breadcrumb from `useBreadcrumbs` hook
 * @returns formatted list of breadcrumb for use in Breadcrumb component
 */
export const constructBreadcrumbList = (list) => {
  return list.map(
    ({
      key,
      breadcrumb: {
        props: { children: breadcrumbText },
      },
    }) => ({ text: breadcrumbText, path: key })
  );
};

/**
 * Format bytes as human-readable text.
 *
 * @param bytes Number of bytes.
 *
 * @return Formatted string.
 *
 * See: https://stackoverflow.com/posts/34210131/revisions
 */
export const humanReadableFileSize = (bytes) => {
  const suffixes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));

  return (!bytes && '0 Bytes') || `${(bytes / 1024 ** i).toFixed(2)} ${suffixes[i]}`;
};

/**
 * Format Currency amount to Indian format
 *
 * @param {number} money - Amount of money
 * @returns Formatted amount in Indian currency format
 */
export const formatCurrency = (money) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
  }).format(money);
};

/**
 * Format Number
 *
 * @param {number} number
 * @returns Formatted number
 */
export const formatNumber = (number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'decimal',
  }).format(number);
};

/**
 * Convert currency amount in dominion of thousands
 *
 * @param {number} num - Amount of currency
 * @returns Abbreviated currency amount in dominions of thousands
 */
export const formatCurrencyAbbr = (num) => {
  return Math.abs(num) > 999
    ? `${Math.sign(num) * (Math.abs(num) / 1000).toFixed(1)}k`
    : Math.sign(num) * Math.abs(num);
};

/**
 * Format Date to `dd/mm/yyyy`
 *
 * @param {string} date date to format
 */
export const formatDate = (date, format = 'dd/MM/yyyy') => {
  return dateFormat(new Date(date), format);
};

export const sortAscend = (a, b) => a < b;

export const sortDescend = (a, b) => a > b;

export const generateAvatarInitials = (name) => {
  return name
    ?.split(/[^\w]+/g)
    .filter((v) => v.trim().length > 0)
    .map((e) => e.charAt(0))
    .slice(0, 2)
    .join('');
};

export const getDuration = (seconds) => {
  const zeroPad = (num) => String(num).padStart(2, '0');
  const duration = intervalToDuration({ start: 0, end: seconds * 1000 });

  return `${zeroPad(duration.minutes)}:${zeroPad(duration.seconds)}`;
};

export const findSuffix = (value) => {
  return value.split(/_/).slice(1).join('_');
};

export const calculateAge = (birthdate) => {
  const today = new Date();
  const birthDate = new Date(birthdate);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    // eslint-disable-next-line no-plusplus
    age--;
  }

  return age;
};

export const generateSubscriptionEndDate = (planType, joinDate) => {
  const durationInMonths = {
    MONTHLY: 1,
    QUARTERLY: 3,
    HALF_YEAR: 6,
    ANNUAL: 12,
  };

  const joinDateObj = new Date(joinDate);
  joinDateObj.setUTCHours(0, 0, 0, 0);

  let endYear = joinDateObj.getUTCFullYear();
  let endMonth = joinDateObj.getUTCMonth() + durationInMonths[planType];
  let endDay = joinDateObj.getUTCDate();

  if (endMonth > 11) {
    endYear += Math.floor(endMonth / 12);
    endMonth %= 12;
  }

  const lastDayOfMonth = new Date(endYear, endMonth + 1, 0).getUTCDate();

  if (endDay > lastDayOfMonth) {
    endDay = lastDayOfMonth;
  }

  const subscriptionEndDateUTC = new Date(Date.UTC(endYear, endMonth, endDay));

  const dayBeforeEndDate = new Date(subscriptionEndDateUTC);
  dayBeforeEndDate.setUTCDate(dayBeforeEndDate.getUTCDate() - 1);

  dayBeforeEndDate.setUTCHours(dayBeforeEndDate.getUTCHours() + 5, dayBeforeEndDate.getUTCMinutes() + 30, 0);

  return dayBeforeEndDate;
};

export const generateTimeSlots = (startTimeStr, endTimeStr) => {
  const slots = [];
  const startTime = new Date();
  const endTime = new Date();

  // Parse start time
  const [startHour, startMinute, startPeriod] = startTimeStr.split(/:| /);
  startTime.setHours(
    parseInt(startHour, 10) + (startPeriod.toUpperCase() === 'PM' && startHour !== '12' ? 12 : 0),
    parseInt(startMinute, 10),
    0
  );

  // Parse end time
  const [endHour, endMinute, endPeriod] = endTimeStr.split(/:| /);
  endTime.setHours(
    parseInt(endHour, 10) + (endPeriod.toUpperCase() === 'PM' && endHour !== '12' ? 12 : 0),
    parseInt(endMinute, 10),
    0
  );

  let currentSlot = new Date(startTime);

  while (currentSlot < endTime) {
    const start = currentSlot
      .toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })
      .toUpperCase();
    const nextSlot = new Date(currentSlot);
    nextSlot.setHours(nextSlot.getHours() + 1);

    // Check if the next slot exceeds the end time
    if (nextSlot > endTime) {
      break;
    }
    const end = nextSlot.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true }).toUpperCase();
    slots.push(`${start} - ${end}`);
    currentSlot = nextSlot;
  }

  return slots;
};

export const pluralizeLabel = (title, dataCount) => {
  if (dataCount <= 1) {
    return title;
  }

  if (title.endsWith('y') && !['a', 'e', 'i', 'o', 'u'].includes(title[title.length - 2])) {
    return `${title.slice(0, -1)}ies`;
  }

  if (
    title.endsWith('s') ||
    title.endsWith('ch') ||
    title.endsWith('sh') ||
    title.endsWith('x') ||
    title.endsWith('z')
  ) {
    return `${title}es`;
  }

  return `${title}s`;
};

export const generateTimeRangeBefore = (startTime) => {
  const [startHour, startMinute] = startTime.match(/\d+/g).map(Number);
  const isPM = startTime.includes('PM');
  let adjustedHour = startHour;

  if (isPM && startHour !== 12) {
    adjustedHour += 12;
  } else if (!isPM && startHour === 12) {
    adjustedHour = 0;
  }

  const fromHour = '00';
  const fromMinute = '00';
  const toHour = adjustedHour.toString().padStart(2, '0');
  const toMinute = startMinute.toString().padStart(2, '0');

  return {
    from: `${fromHour}:${fromMinute}`,
    to: `${toHour}:${toMinute}`,
  };
};
