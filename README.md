# twenders
a web archive of twenders, served live at [twenders.netlify.app](https://twenders.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/e3537254-fb7f-4194-a066-fe5908744756/deploy-status)](https://app.netlify.com/sites/twenders/deploys)

## Adding a twender

The site is structured as a blog using [jekyll](https://jekyllrb.com/).  Each twender has a post.

To add a twender, make a new folder in `_posts`. The folder can have any name.

Within that folder, put a `.md` (or `.html`) file *which must be titled YYYY-MM-DD-[title]*, like `2020-05-10-bluebird.md`

This file should start with a YAML header between triple dashes like this, with some specific info about the twender:

```yaml
---
layout: post
title: bluebird
published: true
organizers: 
  - Mima
twendercrafters:
  - Ian and Jasmine
  - Aliza and John
  - Zevi and Zoe
  - Katie and Jacob (Tacko & Jebia)
for: M&P 36th anniversary
description: This puzzle was made as a way for Mama to deliver a surprise anniversary present to Papa.
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

Take a look at what's in the repository already for an idea of how it works.

For more on markdown formatting, [see here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).


## ReactJS app

To build and deploy the ReactJS app at /notwordle/, run
```
npm run predeploy
npm run deploy
```