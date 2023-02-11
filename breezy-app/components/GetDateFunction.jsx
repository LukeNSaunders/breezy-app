import React from 'react';

function GetDate(date) {
  date = new Date(date);

  let month = date.toLocaleString([], {
    month: 'short',
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

  const formatedDate = `${month} ${day}, ${year}`;
  return formatedDate;
}

export default GetDate;
