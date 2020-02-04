import Home from '@/components/Home.vue'
import Contact from '@/components/Contact.vue'
import About from '@/components/About.vue'
import Services from '@/components/Services.vue'
import RouterDemo from '@/components/RouterDemo.vue'
import postList from '@/components/postList.vue'
import postDetails from '@/components/postDetails.vue'
import userProfile from '@/components/userProfile.vue'
//routes
export default [
     {
       path: "/",
       component: Home
     },
    {
      path: "/posts",
      component: postList
    },
    {
      path: "/profile/:id",
      component: userProfile,
    },
    {
      path: "/post/:id",
      component: postDetails
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/contact",
      component: Contact
    },
    {
      path: "/services",
      component: Services
    },
    {
      path: "/allPosts",
      component: RouterDemo
    },
  ];
