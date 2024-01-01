import HomePage from "../pages/homePage/HomePage";
import AboutPage from "../pages/aboutPage/AboutPage";
import ContactPage from "../pages/contactPage/ContactPage";
import GameServerPage from "../pages/gameServerPage/GameServerPage";
import MusicPage from "../pages/musicPage/MusicPage";

const routes = [
  { path: '/', component: <HomePage />, exact: true },
  { path: '/about', component: <AboutPage /> },
  { path: '/contact', component: <ContactPage /> },
  { path: '/gameserver', component: <GameServerPage /> },
  { path: '/music', component: <MusicPage /> },
];

export default routes;