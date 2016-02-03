# GitHub issue template bookmarklet
Easily add a template to every GitHub issue. Customize it on [CodePen - http://codepen.io/fabien-d/pen/eJjXMa](http://codepen.io/fabien-d/pen/eJjXMa)

### Template
To edit the template, open `index.js` and modify the markdown inside the `getTemplate` method.

```js
function getTemplate ( story ) {
    let template =
`
{Insert template markdown here}
`;

    return template;
}
```

**Note:** The template is using ES2015 (ES6) template strings and whitespace is **NOT** removed.

## Install bookmarklet

First time:

1. Clone the repo: `git clone git@github.com:fabien-d/github-issue-template-bookmarklet.git`
2. Install dependencies: `npm install`

To build and install:

1. `gulp`
2. Copy contents of `dist/index.min.js`
3. Create a new bookmarklet, give it a name and paste the content into the "URL" field

## Using the bookmarklet

With a "new issue" screen open, click the added bookmarklet and the description box will get prefilled with your given template.
