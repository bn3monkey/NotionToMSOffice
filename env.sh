# 1. Install Node.js in https://nodejs.org/en/download/
#    https://nodejs.org/en/download/에서 Node.js를 다운로드하세요

# 5. install typescript globally for compile
#npm install -g typescript
#npm upgrade typescript

# If you're using a Mac and don't have the Azure CLI installed on your machine, you must install Homebrew. 
# The SSO configuration script that you'll run during this quick start will use Homebrew to install the Azure CLI, 
# and will then use the Azure CLI to configure SSO within Azure.

# 6. install Yeoman generator for Office Add-ins
# Please do it with CMD not git-bash
# npm install -g yo generator-office

# 2. npm install yarn

# 3. yarn init

# 4. install express
yarn add express

# 5. install notion client 
yarn add @notionhq/client

# 6. install office package
yarn add @microsoft/office-js
yarn add --dev @types/office-js

# 7. install vm for import office library
yarn add vm

# 6. steal dependency from project created by 'yo office'

# Dependencies
yarn add core-js regenerator-runtime
# devDependiencies

#yarn add --dev @types/office-js @types/office-runtime eslint-plugin-office-addins office-addin-cli office-addin-debugging office-addin-dev-certs office-addin-lint office-addin-manifest office-addin-prettier-config office-addin-test-helpers office-addin-test-server
# yarn add --dev copy-webpack-plugin clean-webpack-plugin webpack webpack-cli webpack-dev-server html-webpack-plugin

# for Ployfill
yarn add --dev @babel/core @babel/preset-typescript 
#yarn add --dev @types/node  
# For Web Pack
yarn add --dev babel-loader
# For Web Pack
yarn add --dev html-loader
# For WebPack
yarn add --dev file-loader

# For Find Process
yarn add --dev find-process @types/find-process
# For Test Framework of javascript
yarn add --dev mocha @type/mocha


