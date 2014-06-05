Email Template
======

Middleman <a href="http://middlemanapp.com/getting-started/#toc_6">project template</a> for building ExactTarget Email Templates. On build Middleman will automatically generate a modular responsive template consisting of Template, Saved Content Areas, and Ampscript files.

```
gem install middleman
```

```bash
git clone git://github.com/degdigital/MiddlemanEmailTemplate.git ~/.middleman/MiddlemanEmailTemplate
```

Then:

```bash
middleman init middleman_email_template --template=MiddlemanEmailTemplate --skip-git
```

## Mail Service Config

Create a __.mailconfig__ file and add the following contents:

```json
{
    "mailgun": {
        "key": "",
        "sender": "",
        "recipient": ""
    },
    "litmus": {
        "username": "",
        "password": "",
        "url": ""
    }
}
```