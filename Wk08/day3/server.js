const http = require('http');
const fs = require('fs');

const url = "https://zenquotes.io/api/random";


const getQuote = async () => {
    try {
        const res = await fetch(url);
        console.log(res);
        const quote = await res.json();
        const {q,a,h} = quote[0]

        return {q, a};
    } catch (error) {
        console.error(error);
    }
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
                .replace(/#{quote}/, 'Click below for your first quote');

            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.write(resBody);
            return res.end();
        }

        if (req.method === "POST" && req.url === "/quote") {
            //retrieve the quote using getQuote() helper
            const quote = await getQuote();
            
            
            
            //console log data
            console.log(quote);
            //if successful: show "'Text Body' - Author"
            if (quote) {
                const htmlFile = fs.readFileSync("./views/index.html", "utf-8");
                let resBody = htmlFile
                    .replace(/#{quote}/, `${quote.q} -${quote.a}`);
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/html");
                res.write(resBody);
                return res.end();
            } else {
                //else: redirect back to home page
                return redirectTo('/');
            }
        }
    })
});

const port = 5000;
server.listen(port, () => console.log(`Server is listening on port: ${port}`));