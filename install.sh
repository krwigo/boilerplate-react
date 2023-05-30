#!/bin/bash
# ES="esbuild"
PR="prettier"
RE="react react-dom react-router-dom"
WP="webpack webpack-cli webpack-dev-server css-loader style-loader file-loader esbuild-loader html-webpack-plugin"
BS="bootstrap react-bootstrap react-bootstrap-icons"
# MU="@mui/material @mui/lab @mui/icons-material @emotion/react @emotion/styled"
BA="@babel/core @babel/node @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties @babel/plugin-transform-strict-mode "

npm i -D $ES $PR $WP
npm i $RE $BS $MU $BA
npm pkg set scripts.lint="prettier -w ."
# npm pkg set scripts.build-esbuild="npm run lint && mkdir -p dist && esbuild frontend.js --bundle --outfile=dist/main.js --loader:.js=jsx"
npm pkg set scripts.build="npm run lint && webpack build --config .webpack.config.js --mode production"
npm pkg set scripts.serve="webpack serve --config .webpack.config.js"
cat package.json
