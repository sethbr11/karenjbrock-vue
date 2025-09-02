import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import AboutView from "../views/LandingPages/AboutUs/AboutView.vue";
import ContactView from "../views/LandingPages/ContactUs/ContactView.vue";
import ConsultingView from "../views/LandingPages/Consulting/ConsultingView.vue";
import PublicationsView from "../views/LandingPages/Publications/PublicationsView.vue";
import PodcastsAndWebinarsView from "../views/LandingPages/PodcastsAndWebinars/PodcastsAndWebinarsView.vue";
import ResourcesView from "../views/LandingPages/Resources/ResourcesView.vue";
import NotFoundView from "../views/LandingPages/NotFound/NotFoundView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/contact",
      name: "contactus",
      component: ContactView,
    },
    {
      path: "/consulting",
      name: "consulting",
      component: ConsultingView,
    },
    {
      path: "/publications",
      name: "publications",
      component: PublicationsView,
    },
    {
      path: "/podcasts-and-webinars",
      name: "podcasts-and-webinars",
      component: PodcastsAndWebinarsView,
    },
    {
      path: "/resources",
      name: "resources",
      component: ResourcesView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
