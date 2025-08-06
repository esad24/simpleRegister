const http = require('http');
const url = require('url');

const port = 8080;

const server = http.createServer((req,res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method;

    res.setHeader('Content-Type', 'application/json');

    // CORS-Header hinzufügen (für alle Ursprünge)
    res.setHeader('Access-Control-Allow-Origin', '*');  // erlaubt alle Domains
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // CORS Preflight-Anfrage (OPTIONS) abfangen und sofort antworten
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if(path === "/register" && method === "POST") {
        res.writeHead(200);
        res.end(JSON.stringify({ message: "Registrierung erfolgreich"}))

    }

    else{
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Nicht gefunden"}));
    }
});

server.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`)
});