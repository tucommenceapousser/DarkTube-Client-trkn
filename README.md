# DarkTube Client
React app for Download free and unlimited YouTube videos, audios, or thumbnails.

## Demo online

[https://darktubeclient-1-d7067140.deta.app](https://darktubeclient-1-d7067140.deta.app)

[https://dark-client-trkn.replit.app](https://dark-client-trkn.replit.app)

## Clone on plateforms

### Glitch
[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/tucommenceapousser/DarkTube-Client-trkn)

### Replit

[![Run on Replit](https://replit.com/badge/github/tucommenceapousser/DarkTube-Client-trkn)](https://replit.com/github/tucommenceapousser/DarkTube-Client-trkn)

### Deploy on deta.space


```
curl -fsSL https://get.deta.dev/space-cli.sh | sh
```
```
space login
```
```
space new
```


modify the Spacefile :

```code
# Spacefile Docs: https://go.deta.dev/docs/spacefile/v0
v: 0
micros:
  - name: DarkTube-Client-Trkn
    src: ./
    engine: react
    primary: true
    public_routes:
    - "/*"
    commands:
      - npm run build
    serve: build
```

```
space push
```

## Installation

To install and run this project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/tucommenceapousser/DarkTube-Client-trkn.git
```

2. Navigate into the project directory:

```bash
cd DarkTube-Client
```

3. Install the dependencies:

```bash
npm install
```

4. Replace API address:

The backend address is located in the path `src/Home.js`. In line 81, replace `https://dark-tube-trknb.replit.app/` with your backend address. Get the backend source from: [DarkTube-Server](https://github.com/tucommenceapousser/DarkTube-Server)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Developer Contact

For any queries or suggestions, you can reach out to the developer:

- Name: Hossein Pira
- Email: h3dev.pira@gmail.com
- Telegram: [@h3dev](https://t.me/h3dev)

## License

This project is licensed under the MIT License.
