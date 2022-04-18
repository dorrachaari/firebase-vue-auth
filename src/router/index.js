import {createRouter,createWebHistory } from "vue-router"

const router = createRouter(
    {
        history:createWebHistory(),
        routes:[
            {
                path: '/',
                name: 'login',
                component: () => import('./views/LoginPage.vue'),
                beforeEnter : (to , from , next) =>{
                if(localStorage.getItem('user')){
                        next({ name: 'default' })
                    }else{
                        next()

                    }
                }
            }, 
            {
                path: '/home',
                name: 'default',
                meta: {
                  authRequired: true,
                },
                component: () => import('./views/Home.vue'),
                beforeEnter : (to , from , next) =>{
                    if(localStorage.getItem('user')){
                        next()
                    }else{
                        next(false)
                    }
                }
            },
          
        ],

    }
)

export default router;