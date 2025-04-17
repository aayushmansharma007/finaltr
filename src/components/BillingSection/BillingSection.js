import React from 'react';
import './BillingSection.css';

const BillingSection = () => {
  const invoices = [
    {
      id: "INV-2024-001",
      date: "2024-03-01",
      amount: 12500,
      status: "Pending",
      dueDate: "2024-03-15"
    },
    {
      id: "INV-2024-002",
      date: "2024-02-01",
      amount: 15000,
      status: "Paid",
      dueDate: "2024-02-15"
    },
    {
      id: "INV-2024-003",
      date: "2024-01-01",
      amount: 11000,
      status: "Paid",
      dueDate: "2024-01-15"
    }
  ];

  return (
    <section className="billing-section">
      <h2>Billing & Invoices</h2>
      <div className="invoices-table">
        <table>
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map(invoice => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.date}</td>
                <td>${invoice.amount.toLocaleString()}</td>
                <td>{invoice.dueDate}</td>
                <td>
                  <span className={`status-badge ${invoice.status.toLowerCase()}`}>
                    {invoice.status}
                  </span>
                </td>
                <td>
                  <button className="download-btn">Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BillingSection;