import LoadHomePage from './components/LoadHomePage.vue'
import AboutPage from './components/AboutPage.vue'
import TimeLinePage from './components/TimeLineComponent.vue'
import TimeLinePostPage from './components/TimeLinePostComponent.vue'
import GalleryPhotoPage from './components/GalleryPhotoComponent.vue'
import PricingPlanPage from './components/PricingPlanComponent.vue'
import ContactFormPage from './components/ContactFormComponent.vue'

export default [
	{path: '/', component: LoadHomePage },
	{path: '/about', component: AboutPage},
	{path: '/timeline', component: TimeLinePage},
	{path: '/timelinepost', component: TimeLinePostPage},
	{path: '/gallery', component: GalleryPhotoPage},
	{path: '/pricing', component: PricingPlanPage},
	{path: '/contact', component: ContactFormPage}
]