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
npx electron-builder build --win portable
```

## Operation

One token equals to approximately 4 characters in English language. Other languages consume more tokens, resulting in shorter replies.

Set token amount in the app to specify the maximum number of tokens to be used for each completion. A range between 50 and 200 tokens is typically optimal. Fewer tokens result in shorter and less clever responses, so for intelligent responses, use 150-200 tokens. 

Twitch messages have a character limit (approx. 500). If OpenAI's reply is too lengthy, the bot will divide the message.

To prompt a GPT-3 completion, simply type !ai `<prompt>` in the Twitch chat. The bot will respond with a completion generated by GPT-3. For instance, if you type `!ai The quick brown fox jumps over the lazy dog`, the bot might respond with 
`The quick brown fox jumps over the lazy dog, but turns around and jumps back just for fun.`


## Disclaimer
* This bot relies on the OpenAI GPT-3 API, which may produce offensive or inappropriate completions. Use at your own discretion.
* Also, be aware the bot employs the commercial OpenAI API. As of December 2022, OpenAI provides $18 of
free credit and several months for testing. Continued use of GPT