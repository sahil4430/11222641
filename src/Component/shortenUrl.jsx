
export const shortenUrl = (originalUrl) => {
  if (!originalUrl || typeof originalUrl !== 'string') return '';

  const randomSuffix = Math.random().toString(36).substring(2, 8);
  return `https://clip.ly/${randomSuffix}`;
};