/**
 * Created by RJS on 2017/7/11.
 */
import Vue from "vue";
import VueRouter from "vue-router";
import * as $$ from "../assets/js/common";
Vue.use(VueRouter);
const router = new VueRouter({
    mode: "hash",
    routes: [
      {
        name: "home",
        path: "/",
        redirect:'/mart',
        // components:{
        //   default:()=>import('../views/mart.vue'),
        //   nav: ()=>import('../components/nav-black.vue'),
        //   footer:()=>import('../components/footer.vue')
        // },
        // meta:{
        //   title:'交易中心',
        //   // requireAuth:true,
        // }
      },
        {
            name: "index",
            path: "/index",
	          components: {
		          default: ()=>import('../views/index.vue'),
		          nav: ()=>import('../components/nav.vue'),
              footer:()=>import('../components/footer.vue')
	        },
         
        },
      {
        name:'login',
        path:'/login',
        components:{
          default:()=>import('../views/login.vue')
        },
        meta:{
          title:'登录',
        }
      },
      {
        name:'register',
        path:'/register',
        components:{
          default:()=>import('../views/register.vue'),
        },
        meta:{
          title:'注册',
        }
      },
      {
        name:'mart',
        path:'/mart',
        components:{
          default:()=>import('../views/mart.vue'),
          nav: ()=>import('../components/nav-black.vue'),
          footer:()=>import('../components/footer.vue')
        },
        meta:{
          title:'交易中心',
          // requireAuth:true,
        }
      },
      {
        name:'my',
        path:'/my',
        components:{
          default:()=>import('../views/my/my.vue'),
          nav: ()=>import('../components/nav-black.vue'),
          footer:()=>import('../components/footer.vue'),
          meta:{
            requireAuth:true,
            title:'个人中心',
          }
        },
        children:[
          {
            name:'my-profile',
            path:'profile',
            components:{
              default:()=>import('../views/my/profile.vue'),
              nav: ()=>import('../views/my/nav.vue'),
            },
            meta:{
              requireAuth:true,
              title:'基本资料',
            }
          },
          {
            name:'my-password',
            path:'password',
            components:{
              default:()=>import('../views/my/password.vue'),
              nav: ()=>import('../views/my/nav.vue'),
            },
            meta:{
              requireAuth:true,
              title:'修改密码',
            }
          },
          {
            name:'my-package',
            path:'package',
            components:{
              default:()=>import('../views/my/package.vue'),
              nav: ()=>import('../views/my/nav.vue'),
            },
            meta:{
              requireAuth:true,
              title:'钱包地址',
            }
          },
          {
            name:'my-exchange',
            path:'exchange',
            components:{
              default:()=>import('../views/my/exchange.vue'),
              nav: ()=>import('../views/my/nav.vue'),
            },
            meta:{
              requireAuth:true,
              title:'兑换记录',
            }
          },
          {
            name:'my-payment',
            path:'payment',
            components:{
              default:()=>import('../views/my/payment.vue'),
              nav: ()=>import('../views/my/nav.vue'),
            },
            meta:{
              requireAuth:true,
              title:'结款记录',
            }
          },
        ]
      }
      
	   /* { path: '*', component: NotFoundComponent }*/
    ]
});

router.beforeEach((to, from, next) => {
  var title=to.meta.title;
  if(title){
    title=[to.meta.title,'51兑换'].join('-')
  }else{
    title='51兑换'
  }
  document.title = title;
  // 是否需要登录
  var sessionToken=$$.getCookie('wms_user_identity');
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (sessionToken) {
      next();
    }
    else {
      let redirect=to.fullPath;
      next({
        name:'login',
        query: {redirect: encodeURIComponent(redirect)}
      })
    }
  }
  else {
    next();
  }
});
export default  router;
