const BASE_URL = 'http://192.168.1.17:5253'; // Ensure this IP is accessible from your network

export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    var data = '';
    try{
      data = await response.text();
    }
    catch{
      try{
        data = await response.json();
      }
      catch{
        data = "Could not parse!"
      }
      
    }
    
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
