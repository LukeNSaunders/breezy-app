import { getInvoiceDataById } from '../../../utils/dataFetch';
import React from 'react';
import ClientViewInvoice from '../../../components/client-view-invoice';

export default async function FetchInvoice({ params }) {
  const id = params.id;
  const data = await getInvoiceDataById(id);
  const invoice = data;

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

  const amount = `£${invoice.quantity * invoice.rate}`;
  const currentDate = GetDate(Date.now());
  const dueDate = GetDate(invoice.date);

  return (
    <>
      <ClientViewInvoice
        invoice={invoice}
        amount={amount}
        currentDate={currentDate}
        dueDate={dueDate}
      />
    </>
  );
}
