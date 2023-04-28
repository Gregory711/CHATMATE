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
- Run the server with `npx live-server --port=N` where N is the port number you want to use

## Short-Term Roadmap
- [x] Provide options to use local host port or OpenAI API key
- [ ] Build function to interact with API
- [ ] Build prompt function to turn chess event into message
- [ ] Add user interface element to choose chatbot personality
- [ ] Connect engine to prompt and use selected personality to generate message
- [ ] Display chatbot messages
- [ ] Add documented process to create chatbots using simple json format

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