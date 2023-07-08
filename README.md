# twenders
a web archive of twenders, served publicly at [twenders.netlify.app](https://twenders.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/e3537254-fb7f-4194-a066-fe5908744756/deploy-status)](https://app.netlify.com/sites/twenders/deploys)

_To modify the serving of the site, go to [app.netlify.com/sites/twenders](https://app.netlify.com/sites/twenders), and use "Log in with GitHub", using the credentials for GitHub user `twenders`_

## Adding a twender

The site is structured as a blog using [jekyll](https://jekyllrb.com/).  Each twender has a post, which is a markdown file.

To add a twender:

1. make a new folder in `_posts`. The folder can have any name, but use the convention of naming it starting with the date YYYY-MM-DD.  If what you're adding consists of just a single page document, it doesn't need to be in a folder, but be sure to name it as described below.

2. Within that folder, make a markdown (or HTML) file **which must be titled `YYYY-MM-DD-[title].md`** (or .html), like, for example, `2020-05-10-bluebird.md`.  You can also put images you want to use, or other files involved into that folder, so you'll have something like this.

  ```
  _posts
  └── 2016-07-03-bluebird
      ├── 2020-05-10-bluebird.md
      ├── done-kiss.jpg
      ... etc
  ```

  The `.md` file should start with a YAML header between triple dashes like this, with some specific info about the twender:

  ```yaml
  ---
  layout: post
  title: bluebird
  published: true
  organizers: 
    - M
  twendercrafters:
    - IH and JS
    - AH and JL
    - ZH and ZC
    - KB and JH (Tacko & Jebia)
  for: M&P 36th anniversary
  description: This puzzle was made as a way for M to deliver a surprise anniversary present to P.
  ---
  ````

  then, whatever markdown (or html) content you want, like

  ```markdown
  This is a twender which led to a tandem bicycle!

  Here's a link to an image in the same folder: [image title here](image.jpg).

  Here's an inline image: ![alt text](image.jpg)

  Here's an inline image with size specified:
  <a  href="done1.jpg"><img src="done1.jpg" width="200"/></a>

  Here's a link to an outside site: [thetwender](http://thetwender.wordpress.com).
  ```

Take a look at what's in the repository already for an idea of how it works.  _Note: any post with a date in the future will be ignored, so you can put drafts up like that.  You can also hide a post by setting `published: false` in the header._

For more on markdown formatting, [see here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).


## ReactJS app

Updating:

Go into the dev folder for the app
```bash
cd dev-${APPNAME}
```

To test the app, run
```bash
npm run start
```

To build and deploy the ReactJS app to `/${APPNAME}/` (see scripts defined in `dev-${APPNAME}/package.json`), run
```bash
npm run deploy
```

Then just git add the updated app folder, commit, push.

For the `cookle` app, for instance, to update the wordlist:

1. edit wordlist in `dev-cookle/src/constants/wordlist.ts`
2. in dev-cookle directory, run

  ```bash
  npm run deploy && cd .. && git add cookle dev-cookle && git comm
  it -m 'routine wordlist update' && git push
  ```
