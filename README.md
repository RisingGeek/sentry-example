## Start Dev Build

```
> cp .sample.env .env
> npm ci
> npm run less
> npm run dev
then open http://localhost:3000/
```
## Create Prod Build
```
> npm run build
```

## Server Prod Build
```
> npm start
```

## Add/Update npm package
If you want to add a new dependency, you still run `npm install {dependency}`. If you want to upgrade, use either `npm update {dependency}` or `npm install ${dependendency}@{version}` and commit the changed package-lock.json.

Read here for more details [Link](https://stackoverflow.com/a/56254478/2980047)


## New deployment Steps
```
git pull
nano .env 
npm i
npm run less
create serverless.yml
npm run deploy
```

## Code Guidelines

### Generic
- Any static page code should go to modules/static-pages/<page-path>/files.js
- Use `PageContainer` or `MainContainer` to warp your page.
- When use axios import use `import axios from "axios/axios";` .js at last is required.
- check for session 
> const isLoadingSession = useSelector((state: RootState) => state.authenticationState.refreshStatus !== "complete");

### CSS
- File Name `component-name.module.css`
- Dont' use StyledComponents and less file for css
- Don't use `useScreenSize`, `react-responsive`, `browser.greaterThan.*`, `browser.is.*` instead use bootstrap css grid system classes.
- Write css in mobile first approach i.e write media query only for tablet and desktop screen size.
- Media query break points - `375px, 425px, 768px, 1024px, 1440px`
- All screen must be testing on these screen sizes - 1024px is must.
- 

### Files and folder naming covention 
- Compoent file name -  `PascalCase.jsx` jsx is must to have in component and follow PascalCase
- Helper/Constants/Other js files - `file-name.js` 
- 

### React JS
 - Use functional components where ever possible 
 - Never keep same variable name in props and state.
 - Destructure object keys before use
 - boolean props should be name with is like `isOutOfStock` insted of `outOfStock`

### PR 
 - Self review your PR before assing it to developer.
 - All PRs will be merged into master before start to testing for that release(integration and manual)
 - 

## Testing
 - We have two test methods:
    - Cypress
    - Jest
 - Run jest tests and make necessary changes to spec files if any.
 - To run jest test use command `npm run test`
 - Run Cypress tests using the command `npx cypress run --headless` (-use --headed in case you want to test in browser or just run `npx cypress open`)
 - While making changes to the cypress tests, in cypress.json, start the dev server and then replace `baseUrl` to your localhost url (`localhost:3000` or whichever port the server is running) such that it fetches the changes from your local machine.
 - Make sure all of Jest and Cypress tests passing.
 - While running cypress test make sure that aws env properties `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_SECURITY_TOKEN` are set.
 - To geneate these values please [refer this page](https://partsavatar.atlassian.net/wiki/spaces/DC/pages/818085920/Setting+up+an+AWS+profile+for+use+with+AWS+CLI#Receiving-your-credentials)

### Tech Docs
 - For creating forms, refer to `src/container/footer/newsletterFooter.tsx`. We have an inbuilt form wrapper

#### How to scroll to element  
- static scroll ca be done via URL Fragments 
- dynamically - https://stackoverflow.com/questions/43441856/how-to-scroll-to-an-element/51828976#51828976



### Test setup

```
> sudo npm install -g env-cmd
```




TODO
- Fix import useDidUpdateEffect from "@use-effect/did-update";
- update formsy-react to 2.3.0
- udpate google-map-react to 2.2.1
- Fix react-facebook-login
- Fix React360Viewer
- Replaced react-image-magnify + clean old code
- update react-jsbarcode to 0.4.2
- update react-lazy-load to 4.0.1
- update react-share to 4.4.1
- remove react-slick
- update use-carousel-hook to react 18.

v4 change points in Product in productAggrigation
- jsonExtendedDescription removed from
- category removed - repalced with primaryCategory
- extendedDescription - will be removed in future.
- pickUpAvailable, deliveryAvailable, shippingAvailable 
- productSpecifications - removed 
- socialData - boughtInLastMonth - in all places
- fitmentDetails on PRODUCT_MAKE_MODEL_PAGE, PRODUCT_FITMENT_PAGE
- description as added as filter request.

NOT TODO
- enDescription, enCategory -> revert
