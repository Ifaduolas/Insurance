import React, {useEffect, useState} from 'react'
import "./ClaimList.css"
import axios from "axios"

const ClaimList = ({ claims }) => {
  const [claimList, setClaimList] = useState([]);

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/claims');
        setClaimList(response.data);
      } catch (error) {
        console.error('Error fetching claims:', error);
      }
    };

    fetchClaims();
  }, [claims]);

  return (
    <div className='claim-list-container'>
      <h2>Claims List</h2>
      <ul className='claim-list'>
        {claimList.map((claim, index) => (
          <li key={index} className='claim-list'>
            <p><strong>Name:</strong> {claim.name}</p>
            <p><strong>Policy Number:</strong> {claim.policyNumber}</p>
            <p><strong>Claim Amount:</strong> ${claim.claimAmount}</p>
            <p><strong>Description:</strong> {claim.description}</p>
            {claim.imageUrl && <img src={`http://localhost:5000${claim.imageUrl}`} alt="Claim" width="100" />}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClaimList;