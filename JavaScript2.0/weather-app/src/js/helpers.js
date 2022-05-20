export const convertTime = (unix) => {
  const date = new Date(unix * 1000);

  const hours = date.getHours();

  const minutes = '0' + date.getMinutes();

  return `${hours}:${minutes}`;
};
