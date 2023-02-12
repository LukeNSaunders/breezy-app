import { getDataById } from '../../../../utils/dataFetch';
import '../../../../components/displayInvoice.css';
import React from 'react';
import Logo from '../../../../public/For Web/png/Black logo - no background.png';
import Image from 'next/image';
import GetDate from '../../../../components/GetDateFunction';

export default async function FetchInvoice({ params }) {
  const id = params.id;
  const data = await getDataById(id);
  const invoice = data;
  
  const currentDate = GetDate(Date.now());
  const dueDate = GetDate(invoice.date);

  return (
    <>
      <div className='invoice-box'>
        <table cellPadding='0' cellSpacing='0'>
          <tr className='top'>
            <td colSpan='3'>
              <table>
                <tr>
                  <td className='title'>
                    <Image src={Logo} width={150}></Image>
                  </td>

                  <td>
                    INVOICE #1
                    <br />
                    <br />
                    <strong>PO Number:#{invoice.purchaseOrderNumber}</strong>
                    <br />
                    <strong>Date:</strong> {currentDate}
                    <br />
                    <strong>Due:</strong>{' '}
                    {dueDate === currentDate ? 'On Receipt' : dueDate}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr className='information'>
            <td colSpan='2'>
              <table>
                <tr>
                  <td>
                    {invoice.fullName}
                    <br />
                    {invoice.address}
                    <br />
                    {invoice.email}
                  </td>

                  <td>
                    <strong>Bill To</strong>
                    <br />
                    {invoice.clientFullName}
                    <br />
                    {invoice.clientAddress}
                    <br />
                    {invoice.clientEmail}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr className='heading'>
            <td>Item</td>
            <td>Price</td>
          </tr>

          <tr className='item'>
            <td>{invoice.description}</td>

            <td>£{invoice.rate}</td>
          </tr>

          <tr className='total'>
            <td></td>

            <td>Total: £{invoice.rate}</td>
          </tr>
        </table>
      </div>
    </>
  );
}
