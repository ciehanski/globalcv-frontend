import Home from '@/views/Home'
import Contact from '@/views/Contact'
import User from '@/components/User/User'
import Register from '@/components/User/Register'
import ForgotPassword from "@/components/User/ForgotPassword";
import Login from '@/components/User/Login'
import HowTo from '@/views/HowTo';

export const routes = [
    { path: '*', redirect: "/" },
    { name: 'home', path: '/', component: Home, meta: { title: 'globalcv - Home'}},
    { name: 'contact', path: '/contact', component: Contact, meta: { title: 'globalcv - Contact'}},
    { name: 'register', path: '/register', component: Register, meta: { title: 'globalcv - Register'}},
    { name: 'forgot', path: '/forgot', component: ForgotPassword, meta: { title: 'globalcv - Forgot Password :('}},
    { name: 'login', path: '/login', component: Login, meta: { title: 'globalcv - Log In'}},
    { name: 'user', path: '/user', component: User, meta: { title: 'globalcv - User'}},
    { name: 'howto', path: '/howto', component: HowTo, meta: { title: 'globalcv - How To Use'}},
];