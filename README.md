# Discord Message Logger

## Info
This bot logs messages that are edited and deleted to the channels specified in the config.json file. 
Note: Messages sent before the bot starts (or restarts) cannot be tracked as the cache gets cleared when the bot restarts.

## Setup
There is a missing (but critical) file called `token.json`. This should contain the bot's token in this format: 
`{
  "token": "DISCORD TOKEN HERE"
}`

## Future
- Add (slash) commands that update the channel IDs instead of having to update the config file manually
