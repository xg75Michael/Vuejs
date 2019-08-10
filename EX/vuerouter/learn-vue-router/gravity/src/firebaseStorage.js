import firebase from 'firebase/app'
import 'firebase/storage'

// config for firebase
const firebaseConfig = {
	apiKey: "*******************",
	authDomain: "*******************",
	databaseURL: "*******************",
	projectId: "*******************",
	storageBucket: "*******************",
	messagingSenderId: "*******************",
	appId: "*******************"
}
// initialize firebase
firebase.initializeApp(firebaseConfig);

// get all HomeBannerImages URL
const HomeBannerRef = firebase.storage().ref().child('homeCarouselImage');
var HomeBannerList = [];
HomeBannerRef.listAll().then(response => {
	response.items.forEach(item => {
		item.getDownloadURL().then(response => {
			HomeBannerList.push(response);
		})
	})
}).catch(error => console.log(error));


export {HomeBannerList}
