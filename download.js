// Funktion zum Abrufen der Mod-Versionen von Modrinth
function getModVersions(all) {

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

        const button = document.getElementsByClassName("button_all")[0];

        var delChild = versionsDiv.lastChild;
        while (delChild) {
            versionsDiv.removeChild(delChild);
            delChild = versionsDiv.lastChild;
        }

        button.textContent = all ? "Show only newest" : "Show all"
        button.onclick = function click() {getModVersions(!all)};
        
        var cVersion = null;
        
        // Links oder Schaltflächen für jede Mod-Version erstellen
        versions.forEach(version => {
          const downloadUrl = version.files[0].url;
          const gameVersion = version.game_versions[0];
          if(gameVersion != cVersion || all) {
            var isNotNew = cVersion == gameVersion;
            cVersion = gameVersion;
            const versionName = version.name;
            const downloadLink = document.createElement('a');
            downloadLink.href = downloadUrl;
            downloadLink.textContent = `${versionName} (`+version.version_type+") "+gameVersion;
            downloadLink.classList.add('version-link');
            if(version.version_type == "beta") {
              downloadLink.style.backgroundColor = "red";
            }
            if(isNotNew) {
                downloadLink.style.backgroundColor = "gray";
                setTimeout(function() {
                    downloadLink.classList.add('show');
                }, 10);
            } else {
                downloadLink.classList.add('there')
            }
            versionsDiv.appendChild(downloadLink);
          }
            });
      })
      .catch(error => {
        console.log('Fehler beim Abrufen der Mod-Versionen:', error);
      });
  }
  
  const modId = "bewisclient";
  getModVersions(false);
  