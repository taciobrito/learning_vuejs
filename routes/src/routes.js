import Home from './components/Home';
import Products from './components/Products';
import Tasks from './components/Tasks';
import Error404 from './components/Error404';

export default [
    { path: '/', component: Home },
    { path: '/produtos', component: Products, name: 'products' },
    { path: '/tarefa/:id', component: Tasks, name: 'task', props: true },
    { path: '/redirect', redirect: '/produtos' },
    { path: '*', component: Error404 }
];