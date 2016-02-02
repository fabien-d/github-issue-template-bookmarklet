/**
 * Get the Markdown based template to insert into the GitHub issue
 *
 * @return {String}
 */
function getTemplate () {

    // template inserted into the issue textbox
    // indentation is due to ES2015 (ES6) template strings which support
    // multiline but keep whitespace
    let template =
`
#### Description:
A concise description of what the problem is.

#### Where is this happening?

**Windows 10**

- [ ] IE11
- [ ] Edge
- [ ] Chrome
- [ ] Firefox

**Windows 8.1**

- [ ] IE11
- [ ] Chrome
- [ ] Firefox

**OS X**

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Opera

#### Actual behaviour:

#### Expected behaviour:

#### What are the steps to reproduce?

#### Is there a workaround?

#### Screenshots:
`;

    return template;
}

let textbox = document.getElementById( 'issue_body' );

if ( textbox ) {
    textbox.value = getTemplate();
}
