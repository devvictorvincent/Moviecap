

const usefetchData =({endpoint, body}) => {
    const token = localStorage.getItem('token');
    const api_url = "http://localhost:8000/api";

   // const [topMovies, setTopMovies] =useState(null);
    //      const [myData, setmyData] = useState(null);

    let output = null;

    const rheaders ={
        'Authorization' : `Bearer ${token}`,
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json'
      };
      const url = api_url + endpoint;

    
        // Function to fetch user data from the API
        const fetchData = async () => {
          try {
            // Make API request using fetch or Axios
            const response = await fetch(url, {
              method: 'GET',
              headers: rheaders,
            });
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            // Parse JSON response and update user data state
            const data = await response.json();
            output= data.data.data;
            //console.log(myData);
          } catch (error) {
            // Handle fetch or JSON parsing errors here
            console.error('Error:', error);
            output =null;
          }
        };
    
        // Call the fetchUserData function when the component mounts
        fetchData();
    
        // Cleanup function (optional)
        return () => {
          // Cleanup tasks, if any
        };
      // Empty dependency array ensures the effect runs once after the initial render
    
      return (output);
}

 