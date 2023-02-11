'use client';

import '../components/displayInvoiceList.css';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import GetDate from './GetDateFunction';

function DisplayInvoiceList({ invoice }) {
  const [isPaid, setPaidStatus] = useState([]);
  const [paidRender, setPaidRender] = useState(false);

  function findPaid() {
    let paid = invoice.filter((invoice) => invoice.paid === true);
    setPaidStatus(paid);
    setPaidRender(true);
  }
  function findUnpaid() {
    let unPaid = invoice.filter((invoice) => invoice.paid === false);
    setPaidStatus(unPaid);
    setPaidRender(true);
  }

  function allInvoices() {
    setPaidRender(false);
  }
  
  return (
    <>
      <ChakraProvider>
        <div className='filter-buttons'>
          <button onClick={findUnpaid}>OUTSTANDING </button>
          <button onClick={findPaid}>PAID</button>
          <button onClick={allInvoices}>ALL INVOICES</button>
        </div>

        <table className='GeneratedTable'>
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Client</th>
              <th>Due Date</th>
              <th>Due</th>
            </tr>
          </thead>

          {!paidRender ? (
            <tbody>
              {invoice.map((invoice) => (
                <tr key={invoice._id}>
                  <td>
                    <Link href={`/members-only/invoice/${invoice._id}`}>
                      #{invoice.purchaseOrderNumber}
                    </Link>
                  </td>
                  <td>{invoice.clientFullName}</td>
                  <td>{GetDate(invoice.date)}</td>
                  <td>£{invoice.rate}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              {isPaid.map((invoice) => (
                <tr key={invoice._id}>
                  <td>
                    <Link href={`/members-only/invoice/${invoice._id}`}>
                      {`#${invoice.purchaseOrderNumber}`}
                    </Link>
                  </td>
                  <td>{invoice.clientFullName}</td>
                  <td>{GetDate(invoice.date)}</td>
                  <td>£{invoice.rate}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </ChakraProvider>
    </>
  );
}

export default DisplayInvoiceList;
