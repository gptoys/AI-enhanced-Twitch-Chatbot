# AI-enhanced Twitch chat GPT-3 Completion Bot
![app preview](https://raw.githubusercontent.com/vodkabydlo/Kata-FE-16/main/src/img/app.png)

This bot enables Twitch users to access GPT-3 completions through chat. Simply type `!ai <text-to-complete>` and the bot responds with a completion generated by GPT-3. It's possible to either run the pre-built latest executable for windows, run the source code, or build your own executable.
## Latest .exe file to download and run 
[twitchGPTbotwin64.7z](https://drive.google.com/file/d/1hm3G1vBL0gW08mF7mzpL0_LKC7aI2A6d/view?usp=sharing)

## Prerequisites

* A Twitch account
* An OpenAI API key (register at their website and navigate to account -> api keys, review the disclaimer below for more detail)


## Setup

Download this repository to your local machine:

```git
git clone https://github.com/gptoys/AI-enhanced-Twitch-Chatbot.git
```

Then, navigate to the bot's directory and install all dependencies:
```
npm install
```

To launch the app from terminal
```
npm run start
```
to compile a standalone .exe 
```
npx electron-