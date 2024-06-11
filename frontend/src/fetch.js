import { useState, useEffect } from 'react';

const useFetch = ({ endpoint, body = null }) => {
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
    // Function to fetch user data from the API
    const fetchData = async () => {
      try {
        // Make API request using fetch or Axios
        const response = await fetch(url, {
          method: body ? 'POST' : 'GET',
          headers: rheaders,
          body: body ? JSON.stringify(body) : null
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parse JSON response and update user data state
        const data = await response.json();
        //setOutput(data.data.data);
        
        setOutput(data);
        //console.log(output)
      } catch (error) {
        // Handle fetch or JSON parsing errors here
        console.error('Error:', error);
        setError(error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, [endpoint, body, token, url]); // Dependency array

  return { output, error, url };
};

export default useFetch;
