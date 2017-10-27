/**
 * Created by RJS on 2017/7/11.
 */
import Vue from "vue";
import VueRouter from "vue-router";
import * as $$ from "../assets/js/common";
Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            name: "home",
            path: "/",
	          components: {
		          default: ()=>import('../views/index.vue'),
		          nav: ()=>import('../components/nav.vue'),
	        },
        },
      {
        name:'login',
        path:'/login',
        components:{
          default:()=>import('../views/login.vue')
        }
      },
      {
        name:'register',
        path:'/register',
        components:{
          default:()=>import('../views/register.vue'),
         
        }
      },
      {
        name:'mart',
        path:'/mart',
        components:{
          default:()=>import('../views/mart.vue'),
          nav: ()=>import('../components/nav.vue'),
        }
      }
	   /* {
		    name: "home",
		    path: "",
		    components: {
			    default: Index,
			    nav: Nav
		    },
	    },*/
       /* {
            name: "login",
            path: "/login", component: Login,
	        meta:{
		        title:'登录',
		        requireProgress:true,
	        }

        },*/
      
	   /* { path: '*', component: NotFoundComponent }*/
    ]
});
export default  router;
