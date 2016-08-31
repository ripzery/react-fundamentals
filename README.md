**This repository contains code from [egghead.io](https://egghead.io/courses/react-fundamentals) course.**

I hope this is helpful for the student who follows the course.

Each video is separate by branch start from video 2 to 17, so you can checkout and review individually.

# Branch guide
   * 01-hello-world: [React Fundamentals: Hello World - First Component](https://egghead.io/lessons/react-hello-world-first-component)
   * 02-the-render-method: [React Fundamentals: The Render Method](https://egghead.io/lessons/react-the-render-method)
   * 03-intro-to-properties: [React Fundamentals: Introduction to Properties](https://egghead.io/lessons/react-introduction-to-properties)
   * 04-state-basics: [React Fundamentals: State Basics](https://egghead.io/lessons/react-state-basics)
   * 05-owner-ownee-relationship: [React Fundamentals: Owner Ownee Relationship](https://egghead.io/lessons/react-owner-ownee-relationship)
   * 06-react-using-refs-to-access-components: [React Fundamentals: Using Refs to Access Components](https://egghead.io/lessons/react-using-refs-to-access-components)
   * 07-access-child-props: [React Fundamentals: Accessing Child Properties](https://egghead.io/lessons/react-accessing-child-properties)
   * 08-component-lifecycle: [React Fundamentals: Component Lifecycle - Mounting Basics](https://egghead.io/lessons/react-component-lifecycle-mounting-basics)
   * 09-component-lifecycle-mounting-usage: [React Fundamentals: Component Lifecycle Mounting Usage](https://egghead.io/lessons/react-component-lifecycle-mounting-usage)
   * 10-component-lifecycle-updating: [React Fundamentals: Component Lifecycle Updating](https://egghead.io/lessons/react-component-lifecycle-updating)
   * 11-higher-order-component-mixins: [React Fundamentals: Higher Order Component Mixins](https://egghead.io/lessons/react-react-fundamentals-higher-order-components-replaces-mixins)
   * 12-composable-components: [React Fundamentals: Composable Components](https://egghead.io/lessons/react-composable-components)
   * 13-dynamically-generated-components: [React Fundamentals: Dynamically Generated Components](https://egghead.io/lessons/react-dynamically-generated-components)
   * 14-build-jsx-live-compiler: [React Fundamentals: Build a JSX Live Compiler](https://egghead.io/lessons/build-a-jsx-live-compiler)
   * 15-jsx-deep-dive: [React Fundamentals: JSX Deep Dive](https://egghead.io/lessons/jsx-deep-dive)
   * 16-precompiled-jsx: [React Fundamentals: Precompile JSX](https://egghead.io/lessons/precompile-jsx)
   
# Setup by yourself
1. Create a project folder for example "react-fundamental"
2. run npm init
3. Install required dependencies as following command : npm install react react-dom babel-loader babel-core babel-preset-es2015 babel-preset-react --save
4. touch index.html App.js main.js webpack.config.js
5. paste following json to webpack.config.js and done!
    ```json
    module.exports = {
        entry: './main.js',
        output: {
            path: './',
            filename: 'index.js'
        },
        devServer: {
            inline: true,
            port: 8888
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel',
                    query: {
                        presets: ['es2015', 'react']
                    }
                }
            ]
        }
    }
    ```