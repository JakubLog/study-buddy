export const getDate = () => {
  const date = new Date();
  let minutes = date.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;
  let hours = date.getHours();
  if (hours < 10) hours = `0${hours}`;
  return `${hours}:${minutes}`;
};
