function GetDate(date) {
  date = new Date(date);

  let month = date.toLocaleString([], {
    month: 'numeric',
  });
  let day = date.toLocaleString([], {
    day: 'numeric',
  });

  let year = date.toLocaleString([], {
    year: 'numeric',
  });

  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }

  const formatedDate = `${day}/${month}/${year}`;

  return formatedDate;
}

export default GetDate;
