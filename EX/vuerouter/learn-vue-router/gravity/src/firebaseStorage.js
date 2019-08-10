import firebase from 'firebase/app'
import 'firebase/storage'

// config for firebase
const firebaseConfig = {
	apiKey: "AIzaSyAQzGJlKMlTGWvh95y9G4LuiKJphP3CxqQ",
	authDomain: "exgravityinfo.firebaseapp.com",
	databaseURL: "https://exgravityinfo.firebaseio.com",
	projectId: "exgravityinfo",
	storageBucket: "exgravityinfo.appspot.com",
	messagingSenderId: "941545108852",
	appId: "1:941545108852:web:48fabf502f1dd1be"
}
// initialize firebase
firebase.initializeApp(firebaseConfig);

const HomeBannerRef = firebase.storage().ref().child('homeCarouselImage');
var HomeBannerList = [];
HomeBannerRef.listAll().then(response => {
	response.items.forEach(item => {
		item.getDownloadURL().then(response => {
			HomeBannerList.push(response);
		})
	})
}).catch(error => console.log(error));


export default HomeBannerList
