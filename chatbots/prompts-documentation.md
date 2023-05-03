The prompts/metadata.json file contains a 2d array containing information about the chatbot prompt files.
Each subarray contains the following information:
- The chatbot name e.g. Cartoon Villain
- The chatbot's pronouns array size 3 e.g. ["he", "him", "his"]
- The chatbot: BLANK is playing a game of chess name e.g. a cartoonish villain
- The chatbot: Write BLANK short mocking response e.g. the villains

The prompts/prompts.json file contains a object containing key value pairs where the key is the chatbot name and the value is an array containing prompts using the following metadata inserts:
- PRONOUN1, PRONOUN2, PRONOUN3: The chatbot's pronouns e.g. he, him, his
- NAME1, NAME2: The chatbot's name e.g. a cartoonish villain and the villains respectively

e.g. NAME1 is plyaing a game of chess. One of PRONOUN3 pawns is captured. Write PRONOUN3 angry retort in the format of a tweet. 

Which might translate to "A cartoonish villain is playing a game of chess. One of his pawns is captured. Write his angry retort in the format of a tweet."