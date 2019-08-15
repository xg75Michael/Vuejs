# Gravity
## 熟练Vue全家桶： Vue Router, Veux, Vue-resource, Axios  
-Install all the packages using `npm install ...` and import them, you can check package.json file to have a look.  
-WaterFall images effect in the `/gallery` page, responsive layout using `.$nextTick()` to add a listener.
## 安装了一些Package，比如： `vue-fontawesome element-ui ...`
## Google Firebase installetion
-`npm install --save firebase` to using Real-Time data and Storage for retrieving images in the cloud.
-`npm install -g firebase-tools` to install globally.
-`git reset -- src/firebaseStorage.js` to not update the private file.
-Hosting the web app at `Firebase Hosting`,live page direct to:
```
https://exgravityinfo.firebaseapp.com   
or   
https://exgravityinfo.web.app
```
## reCAPTCHA integration
-Choose reCAPTCHA version 2 > Explicitly render widget.
-Set setTimeout to loading the script.
-After success, the callback function set this.isBot to false for form sending.
-Add Invisible reCAPTCHA to protect timeline posting page.



### Go to `/timelinepost` to add new timeline story.  
`this.$http.post('https://exgravityinfo.firebaseio.com/timelines.json', {...}).then(...)`

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
