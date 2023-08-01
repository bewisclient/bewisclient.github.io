<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
        $targetDir = 'uploads/'; // Hier wird das Verzeichnis für die hochgeladenen Dateien angegeben
        $targetFile = $targetDir . basename($_FILES['file']['name']);

        // Überprüfe, ob die Datei bereits existiert
        if (file_exists($targetFile)) {
            echo "Die Datei existiert bereits.";
        } else {
            // Verschiebe die hochgeladene Datei in das Zielverzeichnis
            if (move_uploaded_file($_FILES['file']['tmp_name'], $targetFile)) {
                echo "Die Datei wurde erfolgreich hochgeladen: " . basename($_FILES['file']['name']);
            } else {
                echo "Beim Hochladen der Datei ist ein Fehler aufgetreten.";
            }
        }
    } else {
        echo "Es wurde keine Datei ausgewählt oder ein Fehler ist aufgetreten.";
    }
}
?>
