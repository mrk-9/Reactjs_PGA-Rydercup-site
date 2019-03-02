# Ryder Cup website



Production website:
https://attend.rydercup.com/
Sandbox website
https://attend.sandbox.rydercup.com

## Install

`npm install`
`npm start`

## How to use

First, you need a way to pass environment variables to the build process, so secrets and other secured data aren't committed to source control. Ask your project manager or lead engineer to get right environment variables. Then you can _use_ these environment variables inside `.env.development` or `.env.production`.

### Working Offline

If you don't have internet connection you can add `export GATSBY_CONTENTFUL_OFFLINE=true` to tell the plugin to fallback to the cached data, if there is any.

## Notes on Contentful Content Models

We are working on Contentful Content Models right now and sometimes you could get build errors while you are working on your local copy of the project. 
If you will get something like `error GraphQL Error Unknown Type 'Something'. Did you mean ...` then just try to get latest changes from the master branch.
