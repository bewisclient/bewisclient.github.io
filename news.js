const container = document.getElementById("div-news-container");

const apiUrl = `https://bewisclient.github.io/news.json`;
  
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const news = data[0];
    
    const title = news.title;
    const element = document.createElement('div');
    const image = document.createElement('img');
    const text = document.createElement('div');
    image.src = `https://bewisclient.github.io/images/`+news.image+'.png';
    image.style.width = "50%";
    image.style.borderRadius = "10px";
    console.info(image.src);
    element.innerHTML = title;
    text.innerHTML = news.text;
    text.style.fontSize = "20px";
    element.style.fontSize = "27px";
    container.appendChild(document.createElement('p'));
    container.appendChild(element);
    container.appendChild(image);
    container.appendChild(text);
  })
  .catch(error => {
    console.log('Error: ', error);
  });