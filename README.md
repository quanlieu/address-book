# Online address book
This is a webapp to store address book online.
Go to: https://address-book-bdae3.firebaseapp.com

## Usage
Sign in with your Google account.
You can add address by input into all the textboxes.
Or you can just click/tap on the Google map and let it fill for you.
Validation rules:
- Street textbox is always required, 
- if "city" is present, then "ward" and "district" are not required,
- if "city" is not present, then both "ward" and "district" are required.

## Tech
This webapp is written in React - Redux.
Store database and authenticate user with firebase.
Also hosted on firebase to simplify API configuration.
Used the following library:
- `react-redux-firebase` to combine redux store with firebase since they can both manage state
- `prop-types`
- `jest` and `enzyme`
- `less`
- `webpack`
- `prettier`, `eslint`

## Installation
### Start
`yarn install` then `yarn start`

### Before commit run
`yarn test` and `yarn lint`

### Unit testing
`yarn test` or `yarn test:coverage`

### Build
`yarn build`