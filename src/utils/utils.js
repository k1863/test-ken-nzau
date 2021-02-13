export const formatTime = (timer) => {
  const getCentiseconds = `0${timer}`.slice(-2);
  const getSeconds = `0${Math.floor((timer / 100) % 60)}`.slice(-2);
  const minutes = `${Math.floor(timer / 100 / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  /*   const getHours = `0${Math.floor(timer / 3600)}`.slice(-2); */

  return `${getMinutes} : ${getSeconds} : ${getCentiseconds}`;
};
