export default async function getAllSlidingImages(){
    
    const response = await fetch(
        '/api/get_all_sliding_images/',
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify()
        }
    );
    const text = await response.text();
    if (response.status === 200) {
      return JSON.parse(text);
    } else {
      Object.entries(JSON.parse(text)).forEach(([key, value]) => {
        fail(`${key}: ${value}`);
      });
      return "no data";
    }

};