import React from 'react';
import { useParams, useNavigate } from 'react-router';

export default function ReactDocPage() {
  const params = useParams();
  const navigate = useNavigate();
  
  return (
    <>
      <button onClick={() => navigate('/')}>logo</button>
      <div>ReactDocPage #{params.docId}</div>
    </>
  );
}
