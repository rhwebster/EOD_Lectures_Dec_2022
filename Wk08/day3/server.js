const http = require('http');
const fs = require('fs');

const url = "https://zenquotes.io/api/random";


const getQuote = () => {

};

const server = http.createServer((req, res) => {

    function redirectTo(urlPath) {
        res.statusCode = 302;
        res.setHeader('Location', urlPath);
        return res.end();
    }

    let reqBody = '';
    req.on('data', (data) => {
        reqBody += data;
    });

    req.on('end', async () => {
        if (req.method === "GET" && req.url === "/") {
            const htmlFile = fs.readFileSync("./views/index.html", "utf-8");
            const resBody = htmlFile
                .replace(/#{quote}/g, 'Click below for your first quote');

            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.write(resBody);
            return res.end();
        }

        if (req.method === "POST" && req.url === "/quote") {
            //retrieve the quote

            //console log data

            //if successfull

            //else

        }
    })
});

const port = 5000;
server.listen(port, () => console.log(`Server is listening on port: ${port}`));