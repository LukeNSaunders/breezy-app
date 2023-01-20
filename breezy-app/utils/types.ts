import { Key } from "react";

export interface invoiceFields {
  _id: Key;
  fullName: String;
  phoneNumber: Number;
  email: String;
  clientFullName: String;
  clientAddress: String;
  clientPhoneNumber: Number;
  clientEmail: String;
  purchaseOrderNumber: Number;
  description: String;
  rate: Number;
  date: String;
  paid: Boolean;
}
