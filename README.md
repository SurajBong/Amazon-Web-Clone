Payment with Stripe 💪🏼 ---
•	Create a Stripe Account.
•	Go to Developers and grab the API key/ publishable key.
•	Install important dependencies – 
o	npm i @stripe/stripe-js
o	npm i @stripe/react-stripe-js
  
Backend with Firebase Cloud Functions 💪🏼 --
•	Run firebase init.
•	select functions and hit enter.
•	Select Javascript. And proceed with Y for further steps.
•	After the process, you can see a functions folder (Backend).
•	Go to the functions folder in the terminal.
•	Run npm i express cors stripe
•	To run the backend -- Run firebase emulators:start
•	You will get a http function initialized i.e our API end point

Deployment steps with Firebase💪🏼💪🏼💪🏼💪🏼💪🏼
•	Deploy Firebase functions / Backend --
•	Go to --> functions folder --> run firebase deploy --only functions.
•	Go to Firebase console --> click on functions --> grab the api url.
•	Go to Axios.js and replace the local api url with the copied url.

Build front end --
•	Run npm run build
•	Run firebase deploy
