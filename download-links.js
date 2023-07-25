function getModVersions() {

    // API-Endpunkt-URL mit der Mod-ID
    const apiUrl = `https://api.modrinth.com/v2/project/bewisclient/version`;
  
    // HTTP-Anfrage an die API senden
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Mod-Versionen aus der API-Antwort extrahieren
        const versions = data;
  
        // Div-Element für die Versionen
        const versionsDiv = document.getElementById('versions');
        
        var cVersion = null;
        
        versions.forEach(version => {
          const downloadUrl = version.files[0].url;
          const gameVersion = version.game_versions[0];
          if(gameVersion != cVersion) {
            cVersion = gameVersion;
            const versionName = version.name;
            const container = document.createElement('div');
            container.classList.add('download-container');
            const downloadLink = document.createElement('div');
            const download = document.createElement('a');
            download.classList.add('div-download-button')
            downloadLink.textContent = `${versionName} (`+version.version_type+") "+gameVersion;
            downloadLink.classList.add('div-download-element');
            if(version.version_type == "beta") {
              downloadLink.style.backgroundColor = "coral";
            }
            container.appendChild(downloadLink);
            container.appendChild(download);
            download.href = downloadUrl;
            versionsDiv.appendChild(container);
          }
        });
      })
      .catch(error => {
        console.log('Fehler beim Abrufen der Mod-Versionen:', error);
      });
  }
  
  getModVersions();

  document.addEventListener('mousedown', function(event) {
      if (event.target.classList.contains('div-download-button')) {
          event.target.style.scale = 0.8;
      }
  });

  document.addEventListener('mouseup', function(event) {  
      const downloadButtons = document.getElementsByClassName('div-download-button');
      for (const button of downloadButtons) {
          button.style.scale = 1;
      }
  });