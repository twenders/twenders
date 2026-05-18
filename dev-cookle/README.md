_To Run Locally:_
Clone the repository and perform the following command line actions to serve the site locally:
```bash
$ cd dev-$APPNAME
$ nvm install
$ nvm use
$ npm ci
$ npm run start
```

Cookle is a maintenance-only static React app. It is pinned to Node 22.22.3
and npm 10.9.8 so the archived app can still be rebuilt predictably. Prefer
`npm ci` over `npm install`, keep `package-lock.json` committed, and avoid
dependency churn unless there is a deliberate rebuild or security fix.

To update (like often updating wordlist)

```bash
nvm install
nvm use
npm ci
npm run deploy
cd ..
git add cookle dev-cookle
git commit -m 'routine wordlist update'
git push
```
