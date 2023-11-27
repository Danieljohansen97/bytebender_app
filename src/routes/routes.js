import HomePage from "../pages/homePage/HomePage";
import AboutPage from "../pages/aboutPage/AboutPage";
import ContactPage from "../pages/contactPage/ContactPage";
import GameServerPage from "../pages/gameServerPage/GameServerPage";

const routes = [
  { path: '/', component: <HomePage />, exact: true },
  { path: '/about', component: <AboutPage /> },
  { path: '/contact', component: <ContactPage /> },
  { path: '/gameserver', component: <GameServerPage /> },
];

export default routes;