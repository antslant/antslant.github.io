export const getYearsExperience = () => {
  const currentYear = new Date().getFullYear();
  const yearStarted = 2021;

  return currentYear - yearStarted;
};
