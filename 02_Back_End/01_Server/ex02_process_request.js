/** 
 * Import the `http` module.
 * To use the `import` (ES6 module), the `"type": "module"` must be added in the `package.json`.
 * 
 * The `require` (Common JS) can be used without adding the `"type": "module"` in the `package.json`.
 * Usage: const http = require('http');
 */
import * as http from 'http';
/**
 * Communication port
 */
const PORT = 3000;


/** create a server object */
http.createServer((req, res) => {

    /**
     * Write the `http header` to client.
     */

    res.writeHead(200, { 'Content-Type': 'text/html' });

    /** Check the request from the client and send the appropriate response back to the client */
    if (req.url == `/`) {
        res.write('Welcome to the backend programming world!');
    }
    else if (req.url == `/Hello`) {
        res.write('World');
    }
    else if (req.url == `/H1`) {
        res.write(`<h3 style="color:green">Header1</h3>`);
    }
    else if (req.url == `/temp`) {
        let temp = 35 + Math.random() * 40;
        res.write(`<h3>Machine Temperature: <span style="color:orange">${temp.toFixed(3)}</span></h3>`);
    }
    else {
        res.write(`<h3>Command is not supported</h3>`);
    }

    /**
     * Write end response to client.
     */
    res.end();

}).listen(PORT, () => {
    /** The server object listens on the port PORT */
    console.log(`\nServer started and listening at port ${PORT}`);

    /**
     * 
     */
    console.log(`\nOpen a web browser and go to http://localhost:${PORT} or http://127.0.0.1:${PORT}`);
    console.log(`You can click one of the links above to open the default web browser.`);
    console.log(`After the server is restarted, refresh the web browser to check the latest result.`);
});