import { getInvoiceDataById } from '../../../utils/dataFetch';
import React from 'react';
import ClientViewInvoice from '../../../components/client-view-invoice';
import { Params } from '../../../utils/types';

const FetchInvoice = async ({ params }: Params) => {

  const id = params.id;
  let invoice;
  try {
    const data = await getInvoiceDataById(id);
    invoice = data;
  } catch (error) {
    console.log('error in getInvoiceDataById', error)
    
  }
  

  function GetDate(date: number) {
    const date2 = new Date();

    let month = date2.toLocaleString([], {
      month: 'numeric',
    });

    let day = date2.toLocaleString([], {
      day: 'numeric',
    });

    let year = date2.toLocaleString([], {
      year: 'numeric',
    });

    if (Number(month) < 10) {
      month = `0${month}`;
    };

    if (Number(day) < 10) {
      day = `0${day}`;
    };

    return `${day}/${month}/${year}`;
  }

  const finalRate: Number = invoice.quantity * invoice.rate;
  const amount: String = `£${finalRate}`;
  const currentDate = GetDate(Date.now());
  const dueDate = GetDate(invoice.date);

  return (
    <>
      <ClientViewInvoice
        invoice={invoice}
        amount ={amount}
        currentDate={currentDate}
        dueDate={dueDate}
      />
    </>
  );
};

export default FetchInvoice;
