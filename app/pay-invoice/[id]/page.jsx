import { getDataById } from '../../../utils/dataFetch';
import React from 'react';
import ClientViewInvoice from '../../../components/client-view-invoice';
import GetDate from '../../../components/GetDateFunction';

export default async function FetchInvoice({ params }) {
  const id = params.id;
  const data = await getDataById(id);
  const invoice = data;

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
