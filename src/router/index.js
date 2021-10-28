import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import ContactUs from '../views/ContactUs.vue'
import LoginScreen from '../views/Login.vue'
import SignUpScreen from '../views/SignUp.vue'
import HowItWorks from '../views/HowItWorks.vue'
import BrowseQuestions from '../views/BrowseQuestions.vue'


const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/contact',
        name: 'ContactUs',
        component: ContactUs
    },
    {

        path: '/login',
        name: 'Login',
        component: LoginScreen
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUpScreen
    },
    {

        path: '/howitwork',
        name: 'HowItWork',
        component: HowItWorks
    },
    {

        path: '/browsequestions',
        name: 'BrowseQuestions',
        component: BrowseQuestions

    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router