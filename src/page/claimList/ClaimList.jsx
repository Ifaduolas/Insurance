import React, { useState } from 'react';
import './ClaimList.css';

// Sample data for the claims
const claims = [
  { id: 1, claimNumber: 'CLM-001', claimType: 'Health Insurance', claimDate: '2024-08-20', status: 'Pending', amount: '₦50,000.00' },
  { id: 2, claimNumber: 'CLM-002', claimType: 'Auto Insurance', claimDate: '2024-08-18', status: 'Approved', amount: '₦150,000.00' },
  { id: 3, claimNumber: 'CLM-003', claimType: 'Property Insurance', claimDate: '2024-08-15', status: 'Rejected', amount: '₦200,000.00' },
];

// ClaimList component to display a list of claims with filtering
const ClaimList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClaims, setFilteredClaims] = useState(claims);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Filter claims based on search term
    const filtered = claims.filter((claim) =>
      claim.claimNumber.toLowerCase().includes(value.toLowerCase()) ||
      claim.claimType.toLowerCase().includes(value.toLowerCase()) ||
      claim.status.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredClaims(filtered);
  };

  return (
    <div className="claim-list">
      <h2>Insurance Claim Management System</h2>
      <input
        type="text"
        placeholder="Search claims..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Claim Number</th>
            <th>Claim Type</th>
            <th>Claim Date</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredClaims.map((claim) => (
            <tr key={claim.id}>
              <td>{claim.claimNumber}</td>
              <td>{claim.claimType}</td>
              <td>{claim.claimDate}</td>
              <td>{claim.status}</td>
              <td>{claim.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClaimList;
