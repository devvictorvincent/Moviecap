import { useState, useEffect } from 'react';

const usePost = ({ endpoint, body = null }) => {
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  const api_url = "http://localhost:8000/api";
  const url = `${api_url}${endpoint}`;

  const rheaders = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/vnd.api+json',
    'Accept': 'application/vnd.api+json'
  };

  useEffect(() => {
    if (!body) return;

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: rheaders,
          body: JSON.stringify(body)
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setOutput(data);
      } catch (error) {
        console.error('Error:', error);
        setError(error);
      }
    };

    fetchData();
  }, [endpoint, body, url]); // Dependency array

  return { output, error };
};

export default usePost;
