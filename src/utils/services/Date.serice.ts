export const calculateYears = (dateString: string) => {
  const today = new Date();
  const birthDate = new Date(dateString);
  let years = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    years--;
  }
  return years;
};

export const formatBirthDate = (birthDate: Date) => {
  const day = birthDate.getDate();
  const month = birthDate.toLocaleDateString(undefined, { month: "short" });
  const year = birthDate.getFullYear();

  return `${day} ${month} ${year}`;
};
