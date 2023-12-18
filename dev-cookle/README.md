_To Run Locally:_
Clone the repository and perform the following command line actions to serve the site locally:
```bash
$ cd dev-$APPNAME
$ npm install
$ npm run start
```

Perhaps start with `nvm use 20` to ues node v20.

To update (like often updating wordlist)

```bash
npm run deploy
cd ..
git add cookle dev-cookle
git commit -m 'routine wordlist update'
git push
```
