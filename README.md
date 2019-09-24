# apod-preact

NASA Astronomy Picture of the Day Preact app

Get your own free NASA API key here: https://api.nasa.gov/. To use this code for yourself, you will need to add a .env file to the root of the project and insert your NASA API key in it like so:

```
export const API_KEY = "your API key here"
```

## Branches

- `0-starting-point` - Standard Preact CLI default template with eslint removed
- `1-load-apod` - Load APOD in componentDidMount
- `2-show-apod` - Create the APOD view
- `3-input-date` - Show the APOD for a different date

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and preact-render-spy
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
