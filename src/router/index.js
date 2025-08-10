import { createRouter,createWebHistory } from 'vue-router'
import DashboardLayout from '../layouts/DashboardLayout.vue'
import Dashboard from '../views/Dashboard.vue'
import Projects from '../views/Projects.vue'
import News from '../views/News.vue'
import Services from '../views/Services.vue'
import FormSubmissions from '../views/FormSubmissions.vue'
import Settings from '../views/Settings.vue'
// import Users from '../views/Users.vue'
        



const routes = [
    {
        path: '/',
        component: DashboardLayout,
        children: [
        { path: '/', name: 'Dashboard', component: Dashboard},
        { path: 'projects', name: 'Projects', component: Projects },
        { path: 'news', name: 'News', component: News },
        { path: 'services', name: 'Services', component: Services },
        { path: 'forms', name: 'FormSubmissions', component: FormSubmissions },
        { path: 'settings', name: 'Settings', component: Settings },
        // { path: 'users', name: 'Users', component: Users }
        ]
    }
]

export default createRouter({
    history: createWebHistory('/wfp-dashboard-using-vue/'),
    routes
})
