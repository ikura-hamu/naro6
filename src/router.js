import axios from "axios";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import NotFound from "./pages/NotFound.vue";
import AxiosPage from "./pages/AxiosPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import CityPage from "./pages/CityPage.vue";
import CountriesPage from "./pages/CountriesPage.vue";
import CitiesPage from "./pages/CitiesPage.vue";

export const routes = [
  { path: "/", name: "home", component: HomePage, meta: { isPublic: true } },
  { path: "/axios", name: "axios", component: AxiosPage },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
    meta: { isPublic: true },
  },
  { path: "/city/:cityName", name: "city", component: CityPage, props: true },
  {
    path: "/countries",
    name: "countries",
    component: CountriesPage,
    props: true,
  },
  {
    path: "/country/:countryName",
    name: "oneCountry",
    component: CitiesPage,
    props: true,
  },
  { path: "/:path(.*)", component: NotFound, meta: { isPublic: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  try {
    await axios.get("/api/whoami");
  } catch (_) {
    if (to.meta.isPublic) {
      return true;
    }
    return "/login";
  }
  return true;
});

export default router;
