import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.CHATBOTSPORT || 3000;
const mode = process.env.MODE || 'stub';
import request from 'request';
const max_tokens = 50;

app.listen(port, () => {
    console.log(`Chatbots server listening on port ${port}`);
});

async function chat(contents) {
    var options;

    if (process.env.MODE === 'local') {
        options = {
            url: 'http://localhost:' + process.env.LOCALHOSTPORT + '/v1/chat/completions',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              model: process.env.LOCALHOSTMODEL,
              messages: [
                {
                  role: 'user',
                  content: contents
                }
              ],
              temperature: 0,
              max_tokens: max_tokens
            })
          };
    }
    else {
        options = {
            url: 'https://api.openai.com/v1/chat/completions',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            auth: {
                'bearer': process.env.OPENAIKEY
            },
            body: JSON.stringify({
                model: process.env.OPENAIMODEL,
                messages: [
                    {
                        role: 'user',
                        content: contents
                    }
                ],
                temperature: 0,
                max_tokens: max_tokens
            })
        };
    }

    return new Promise(function (resolve, reject) {
        request(options, (error, response, body) => {
            if (error) {
                console.error('Error:', error);
                return reject(error);
            }
            try {
                resolve(JSON.parse(body).choices[0].message.content);
            } catch (error) {
                reject(error);
            }
        });
    });
}

// Returns the mode set in the .env file
app.get('/mode', (req, res) => {
    res.send({mode});
});

// Returns a response from the chatbot
app.get('/chat', async (req, res) => {
    try {
        const message = await chat(req.query.message);
        res.send({message});
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).send(error);
    }
});