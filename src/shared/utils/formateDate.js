const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

const formatDate = data => {
  const date = new Date(data);
  return `${addLeadingZero(String(date.getDate()))}.${addLeadingZero(
    String(date.getMonth() + 1)
  )}.${String(date.getFullYear())}`;
};

export default formatDate;
