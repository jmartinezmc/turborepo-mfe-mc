const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.exports = () => ({
  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      },
    },
    optimization: {
      minimize: false,
      runtimeChunk: true,
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "dummyapp",
          filename: "remoteEntry.js",
          remotes: {
            movies: lazyLoadRemote(
              "http://localhost:3000/remoteEntry.js",
              "movies"
            ),
            playlist: lazyLoadRemote(
              "http://localhost:3001/remoteEntry.js",
              "playlist"
            ),
          },
          shared: {
            ...deps,
            card: {
              singleton: true,
            },
            "movies-content": {
              singleton: true,
            },
            "playlist-content": {
              singleton: true,
            },
            tsconfig: {
              singleton: true,
            },
            ui: {
              singleton: true,
            },
            store: {
              singleton: true,
            },
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
          },
        }),
      ],
    },
  },
});

function lazyLoadRemote(remoteUrl, appName) {
  return `promise new Promise(resolve => {
    const script = document.createElement('script')
    script.src = '${remoteUrl}'
    script.onload = () => {
      // remote cargado y disponibles
      const proxy = {
        get: (request) => {
          return window.${appName}.get(request);
        },
        init: (arg) => {
          try {
            return window.${appName}.init(arg)
          } catch(e) {
            console.log('remote container inicializado')
          }
        }
      }
      resolve(proxy)
    }
    script.onerror = (error) => {
      console.error('error cargando remote container')
      const proxy = {
        get: (request) => {
          // si el consumer está muerto, renderizar esto
          return Promise.resolve(() => () => "I'm a dead shell of an app. Reload later.");
        },
        init: (arg) => {
          return;
        }
      }
      resolve(proxy)
    }
    document.head.appendChild(script);
  })`;
}
