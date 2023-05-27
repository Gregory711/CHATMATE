# CHATMATE (Chessbot with Heuristic and Analytical Talking Mechanism for Advanced Tactical Evaluation)

> The goal of this project is to let users play chess against chatbots with unique personalities powered by modern large language models.

## Setup
- Note: The AI chatbots are still under development
- Download or clone this repository
- Install NodeJS and NPM
- Install dependencies with `npm install`
- Build and package the chatbot code with npx webpack
- Navigate to chatbots folder and create .env file following .env.template format containing your local host or OpenAI information
- LocalAI is the recommended local host option (https://github.com/go-skynet/LocalAI) and gpt4all-j is the recommended local host model option
- gpt-3.5-turbo is the recommended OpenAI API model option
- Navigate to chatbots folder and run chatbots server with 'node app.js'
- Run the website server with `npx live-server --port=N` where N is the port number you want to use

## Developer Notes
- Can list available chatbots with command npm run list-chatbots
- Can list available prompts and their indexes for each chatbot with command npm run list-prompts "chatbot name"
e.g. if Cartoon Villain name printed from npm run list-chatbots then can run npm run list-prompts "Cartoon Villain"
- Can create new chatbots with command npm run create-chatbot "Cartoon Villain" "he,him,his" "a cartoonish villain" "the villains" as explained in chatbots/prompts-documentation.md
- Can create new prompts for each chatbot with command npm run create-prompt "chatbot name" "prompt text"
- Can list available responses for each chatbot prompt with command npm run list-responses "chatbot name" "prompt index" e.g. "Cartoon Villain" "0" where 0 is index from list-prompts
- Can create new response for each chatbot prompt with command npm run create-response "chatbot name" "prompt index" "response text" e.g. "Cartoon Villain" "0" "I will destroy you!"

## Short-Term Roadmap
- [x] Provide options to use local host port or OpenAI API key
- [x] Build function to interact with API
- [x] Store in LocalStorage whether it's the user's turn or the chatbot's turn and create file to document this
- [x] Store in LocalStorage the last move type (e.g. quiet move) and document this
- [x] Create prompts folder, metadata file, and document format
- [x] Create npm CLI to list chatbots in prompts file and document usage
- [x] Add ability to list prompts for each chatbot in CLI and document usage
- [x] Add ability to create new chatbots in CLI and document usage
- [x] Add ability to create new prompts for each chatbot in CLI and document usage
- [x] Store in LocalStorage the selected chatbot and document this
- [x] Refactor prompt storage to store all prompts in a single json file so they can be import by getPrompt function
- [x] Create chat.js function to return a random prompt for a given chatbot
- [x] Create chat.js function to use Local Storage chatbot selection or "Cartoon Villain" if none set and return result from calling getPrompt
- [x] Create jest test to check that chat.js function works
- [x] Create responses folder, responses.json, and document usage
- [x] Update create-chatbot.js to add chatbot to responses.json
- [x] Update responses id/indexing
- [x] Add ability to list responses for each chatbot prompt in CLI and document usage
- [x] Add ability to create new responses for each chatbot prompt in CLI and document usage
- [x] Create stub.js function getStubResponse
- [ ] Create jest test to check that stub.js function works
- [x] Create getChatbotResponse function in chat.js to use getPrompt function to get prompt and use prompt to get response from local host or OpenAI or stub based on getMode
- [ ] Create jest test to check that getResponse function works
- [x] Call getResponse function from board-action.js for each user move and console log result
- [ ] Display chatbot messages on webpage
- [ ] Add user interface element to choose chatbot personality
- [ ] Fix bug where user and chatbot are mixed up when user toggles to play black instead of white
- [ ] Add documented process to create chatbots
- [ ] Make prompts 2d arrays with different subarrays for different move types and document this
- [ ] Add other move types e.g. capture, check, checkmate, etc
- [ ] Add another dimension for prompts for when the chatbot makes a move

## Long-Term Goals
- [ ] Allow users to message the chatbots directly
- [ ] Add responding animation for chatbots
- [ ] Add togglable mode to have chatbots give user hints based on engine evaluation
- [ ] Add more prompt types e.g. taunting/joking/poetry/etc
- [ ] Add ability for personality to affect engine e.g. agressiveness could affect how often engine moves that capture pieces are selected

## License
### GNU GPLv3: https://www.gnu.org/licenses/gpl-3.0-standalone.html

## Credits
- This project is a fork of stockfish-web-gui: https://github.com/LabinatorSolutions/stockfish-chess-web-gui
- Stockfish: https://github.com/mcostalba/Stockfish
- Stockfish.js: https://github.com/nmrugg/stockfish.js
- Oakmac Chessboard: https://github.com/oakmac/chessboardjs
- Caustique Chessboard: https://github.com/caustique/chessboard-js
- LT-PGN-Viewer: http://www.lutanho.net/pgn/pgnviewer.html
- jQuery: https://github.com/jquery/jquery
- BoldChess: https://boldchess.com
- Labinator: https://labinator.com