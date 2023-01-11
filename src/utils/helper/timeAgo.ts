export const timeAgo = (date: Date) => {
  const secondsElapsed = (date.getTime() - Date.now()) / 1000;
  const dateFormatter = new Intl.RelativeTimeFormat('en-US');

  const dateRanges: { [index: string]: number } = {
    years: 3600 * 24 * 365,
    months: 3600 * 24 * 30,
    weeks: 3600 * 24 * 7,
    days: 3600 * 24,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  } as const;

  for (const range in dateRanges) {
    if ((dateRanges[range] as number) < Math.abs(secondsElapsed)) {
      const time = secondsElapsed / (dateRanges[range] as number);
      return dateFormatter.format(Math.round(time), range as Intl.RelativeTimeFormatUnit);
    }
  }
};
