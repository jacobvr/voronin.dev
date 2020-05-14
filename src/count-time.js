export const countTime = (dateFrom, dateTo) => {
  const from = new Date(dateFrom);
  const to = (dateTo === 'now') ? new Date() : new Date(dateTo);

  const fromMonth = from.getMonth();
  const fromYear = from.getFullYear();

  const toMonth = to.getMonth();
  const toYear = to.getFullYear();

  const additionalMonth = 1;

  const totalMonths = ((toYear - fromYear) * 12 + (toMonth - fromMonth) + additionalMonth);

  const years = (totalMonths < 12) ? 0 : Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearsString = (years < 1) ? '' : `${years} yr${(years > 1) ? 's' : ''}`;
  const monthsString = (months < 1) ? '' : `${months} mo${(months > 1) ? 's' : ''}`;
  const space = (yearsString.length && monthsString.length) ? ' ' : '';

  return `${yearsString}${space}${monthsString}`;
};
