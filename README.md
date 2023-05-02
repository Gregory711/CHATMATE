# CHATMATE (Chessbot with Heuristic and Analytical Talking Mechanism for Advanced Tactical Evaluation)

> The goal of this project is to let users play chess against chatbots with unique personalities powered by modern large language models.

## Setup
- Note: The AI chatbots are still under development
- Download or clone this repository
- Install NodeJS and NPM
- Install dependencies with `npm install`
- Navigate to chatbots folder and create .env file following .env.template format containing your local host or OpenAI information
- LocalAI is the recommended local host option (https://github.com/go-skynet/LocalAI) and gpt4all-j is the recommended local host model option
- gpt-3.5-turbo is the recommended OpenAI API model option
- Navigate to chatbots folder and run chatbots server with 'node app.js'
- Run the website server with `npx live-server --port=N` where N is the port number you want to use

## Developer Notes
- Can list available chatbots with command npm run list-chatbots
- Can list available prompts for each chatbot with command npm run list-prompts "chatbot name"
e.g. if Cartoon Villain name printed from npm run list-chatbots then can run npm run list-prompts "Cartoon Villain"
- Can create new chatbots with command npm run create-chatbot "Cartoon Villain" "he,him,his" "a cartoonish villain" "the villains" as explained in chatbots/prompts-documentation.md
- Can create new prompts for each chatbot with command npm run create-prompt "chatbot name" "prompt text"

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
- [ ] Create chat.js function to use Local Storage chatbot selection and move type to select prompt
- [ ] Create jest test to check that chat.js function works
- [ ] Create getResponse function in chat.js to use getPrompt function to get prompt and use prompt to get response from local host or OpenAI or throw error that server isn't working and stub isn't available
- [ ] Create jest test to check that getResponse function works
- [ ] Create responses folder and metadata file for stubs and document usage
- [ ] Create npm CLI to list chatbots in response file and document usage
- [ ] Add ability to list responses for each chatbot in CLI and document usage
- [ ] Add ability to upload responses for each chatbot in CLI and document usage
- [ ] Create stub.js function getStubResponse and add to chat.js getResponse instead of throwing error
- [ ] Create jest test to check that stub.js function works
- [ ] Add user interface element to choose chatbot personality
- [ ] Display chatbot messages
- [ ] Fix bug where user and chatbot are mixed up when user toggles to play black instead of white
- [ ] Add documented process to create chatbots
- [ ] Add other move types e.g. capture, check, checkmate, etc

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