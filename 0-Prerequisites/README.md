## Prerequisites

There are a few steps to complete before starting our journey towards making discord bots 
using Nodejs and Discordjs

### 0 - Creating a test server

1. Create a discord server and call it BotPlayground or anything you want, it's important that you're the
admin of such server

### 1 - Creating a discord app

First step is to create a discord app, this will serve as our "bot user", which will
join the server. As stated in [discordjs docs](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot), to create a new app:

1. Open up the Discord website and login.
2. Hover over the "Developers" drop-down menu and click on the Developer Portal link.
3. Click on the "New Application" button.
4. Enter a name and optionally select a team (if you want the bot to belong to one). Then confirm the pop-up window by clicking the "Create" button.

### 2 - Getting a login token for the app

1. In discord's developer website, after creating your Application, go to  the bot tab and create  abot
2. Press the button that says "Click to reveal token"
3. Save this token somewhere or remember where it is, you'll need it to connect discordjs

### 3 - Oauth2 and bot permissions
To invite the bot to our server we need to get a OAuth2 url, to do that:
1. Go to discord's developer website
2. Go to the Applications menu, select your application and click on OAuth2
3. In the scopes list, select "bot"
4. Selecting bot will open a new menu below, called Bot Permissions
5. Select the permission you need, for example Send Message and Read Messages history
6. This will change the url above, copy that URL using the copy button or manually
7. Paste the URL in your browser and select the server you've just created (or the one where you want the bot to be)
and click continue. This will add the bot to the server
   
### 4 - Setting up discord developer mode
### 5 - Creating a sandbox server
### 6 - Installing Nodejs
### 7 - Installing Discordjs
### 8 - Discordjs reference
