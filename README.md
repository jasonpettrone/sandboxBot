# sandboxBot
S&box is a new game coming out that is the successor to Garry's Mod. The only way to get access to the game is through https://asset.party/get/developer/preview, which requires you to click the "Enter" button when it's enabled. Garry (the creator of S&box) does this randomly, so I've created this bot which automatically monitors the webpage and clicks.

Built using: https://webdriver.io/

# Getting started with the bot

## Installing dependencies
* Install NodeJS: https://nodejs.org/en/. For reference, I currently have version 14.15.4. Any version later than 14.0.0 should work. You can check your Node version by running the command ```node -v``` in your terminal.
* Install Python 3 (https://www.python.org/downloads/release/python-3106/)
* Install Visual Studio Workload "Desktop development with C++" (Use Visual Studio Installer)

## Running the bot
1. Clone this repo to your local machine
2. Open the repo in an IDE (Visual Studio Code recommended) or navigate to the repo folder in your terminal of choice.
3. In the terminal, run the command ```npm install```
4. To start the bot, run the command ```npm run wdio```
5. The bot will pause on the Steam login page. I'm not parsing or storing your credentials in ANY way with this bot. Login to your Steam profile.
6. The bot will take care of the rest for you!

## Glorious success!
On 8/21/2022 at around 2:30am EST, I was able to get access to s&box using this bot!
![image](https://user-images.githubusercontent.com/16530058/185804973-06a83372-758e-4d26-a22f-4080933f06b1.png)
