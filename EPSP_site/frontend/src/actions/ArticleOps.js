export default async  function getLastListArticle(){
    
    const response = await fetch(
        '/api/get_last_list_article/',
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



export async function getListArticle(){
    
    const response = await fetch(
        '/api/get_list_article/',
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


export async function getSelectedArticle(id){

    const response = await fetch(
      '/api/get_selected_article/'+id,
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
    return "no data";
  }
  
  };


