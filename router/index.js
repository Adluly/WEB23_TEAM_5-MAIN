import Vue from 'vue'
import Router from 'vue-router'

// User
import User from '../views/user/list'
import AddUser from '../views/user/add'
import EditUser from '../views/user/edit'
import DetailUser from '../views/user/detail'

// Product
import Product from '../views/product/list'
// Delivery 
import DeliveryMethod from '../views/deliverymethod/deliverymethod'
import AddDeliveryMethod from '../views/deliverymethod/deliveryadd'
import UpdateDelivery from '../views/deliverymethod/deliveryupdate'
import DetailDelivery from '../views/deliverymethod/deliverydetail'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'list-user',
			component: User
		},
		{
			path: '/list-user',
			name: 'list-user',
			component: User
		},
		{
			path: '/add-user',
			name: 'add-user',
			component: AddUser
		},
		{
			path: '/edit-user',
			name: 'edit-user',
			component: EditUser
		},
		{
			path: '/detail-user',
			name: 'detail-user',
			component: DetailUser
		},
		{
			path: '/list-product',
			name: 'list-product',
			component: Product
		},
		{
			path: '/delivery-method',
			name: 'delivery-method',
			component: DeliveryMethod
		},
		{
			path: '/add-delivery',
			name: 'add-delivery',
			component: AddDeliveryMethod
		},
		{
			path: '/delivery-update',
			name: 'delivery-update',
			component: UpdateDelivery
		},
		{
			path: '/delivery-detail',
			name: 'delivery-detail',
			component: DetailDelivery
		}



	]
})
