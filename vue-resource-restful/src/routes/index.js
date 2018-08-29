import Home from '../components/home/Home'
import Product from '../components/products/Product'
import ProductCreate from '../components/products/ProductCreate'
import ProductEdit from '../components/products/ProductEdit'

export default [
    { path: '/', component: Home },
    { path: '/product', component: Product },
    { path: '/product/create', component: ProductCreate },
    { path: '/product/:id/edit', component: ProductEdit, name: 'product.edit', props: true },
]