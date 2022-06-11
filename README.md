# Games
*The Maroon's* [Games Page](https://games.chicagomaroon.com).

## Adding crosswords
1. Log in to our account on [Amuse Labs](https://amuselabs.com/) and upload the .puz file.
2. Click "Embed puzzle" and find the URL in the "src" field inside the HTML it gives you.
3. In this Git repository, add a line to the end of the file [data.json](./data.json) with the format
```
["YYYY-MM-DD", "{Crossword Title}", "{src URL}"]
```
Don't forget to add a trailing comma on the line before!
4. Commit the file change.

## Requirements
1. Install `npm` (from node).

## Running the server locally
1. Navigate to project's root directory (the one with `package.json`).
2. To start the dev server, enter `npm run dev` in the terminal. 

The server is hotloading, meaning that it should automatically update upon changes made to the code. If this doesn't work, try the standard page refresh.

## Deployment
To deploy to Netlify, simply commit to the remote repository. Upon commit, Netlify will run `yarn build && yarn export` and host the site using the outputted `out` folder.
