function getTotalDownloads() {
    const apiUrl = `https://api.modrinth.com/v2/project/bewisclient`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const downloads = data.downloads;
        const meinDivElement = document.getElementById('div-download-count');
        meinDivElement.style.color = "white";
        meinDivElement.innerText = 'Download Count: '+downloads;
        meinDivElement.classList.add("show");
      })
      .catch(error => {
        console.log('', error);
      });
}

getTotalDownloads();