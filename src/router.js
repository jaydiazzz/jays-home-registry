import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use( VueRouter );

const routes = [
	{
		path      : '/',
		name      : 'home',
		component : () => import( '@/routes/Home.vue' ),
	},
	{
		path      : '/product-description',
		name      : 'product-description',
		component : () => import( '@/routes/ProductDesc.vue' ),
	},
];

const router = new VueRouter( {
	mode : 'history',
	base : process.env.BASE_URL,
	routes,
} );

export default router;
