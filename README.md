#TypeScript

TypeScript and Greedy Snake game

## nodejs install typescript
```npm install -g typescript```

use ```tsc [file name]``` to transfer .ts file to .js file

```npm install -g ts-node```

Then you can use VS code plugin "run code" to show the result in output.

## Watch mode

1. create tsconfig.json
2. ```tsc -w``` starting compilation in watch mode

## Webpack
#### 1. ```npm init -y``` create package.json
#### 2. ``npm i -D webpack webpack-cli typescript ts-loader``
  
    
   ```
   "devDependencies": {
           "ts-loader": "^8.0.18",
           "typescript": "^4.2.3",
           "webpack": "^5.26.0",
           "webpack-cli": "^4.5.0"
         }
   ```
#### 3. create webpack.config.js
```

const path = require('path');

//all the config info of webpack is in module.exports
module.exports = {

    entry: "./src/index.ts",

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },

    mode: 'development',

    module:{
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',

                exclude:/node-modules/
            }
        ]
    }

}
```
#### 4. create tsconfig.json
```
{
  "compilerOptions": {
    "module": "ES2015",
    "target": "ES2015",
    "strict": true
  }
}
```
#### 5. add build in package.json
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
```

#### 6. install html dependency

```npm i -D html-webpack-plugin```

in webpack.config.js:
add:

```const HTMLWebpackPlugin = require('html-webpack-plugin')```

```plugins: [
           new HTMLWebpackPlugin({
               // title: "custom title"
               template: "./src/index.html"
           }),
       ]
```

#### 7. install webpack-dev-server
```npm i -D webpack-dev-server```

Live Reloading enabled

add 
```
"scripts": {
           "test": "echo \"Error: no test specified\" && exit 1",
           "build": "webpack",
           "start": "webpack serve --open chrome.exe"
         },
``` 
to package.json

#### 8. add clean webpack plugin

## babel
#### 1. install
```npm i -D @babel/core @babel/preset-env babel-loader core-js```


## Class

## Code 4
