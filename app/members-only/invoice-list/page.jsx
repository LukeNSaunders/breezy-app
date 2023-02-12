import { getData } from '../../../utils/dataFetch';
import React from 'react';
import '../../../components/displayInvoiceList.css';
import DisplayInvoiceList from '../../../components/displayInvoiceList';

export default async function FetchInvoiceList() {
  const data = await getData();
  const invoice = data;

  return (
    <>
      <DisplayInvoiceList invoice={invoice} />
    </>
  );
}
