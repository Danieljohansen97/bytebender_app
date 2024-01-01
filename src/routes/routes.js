import HomePage from "../pages/homePage/HomePage";
import AboutPage from "../pages/aboutPage/AboutPage";
import ContactPage from "../pages/contactPage/ContactPage";
import GameServerPage from "../pages/gameServerPage/GameServerPage";
import DrinkingGamePage from "../pages/drinkingGamePage/DrinkingGamePage";
import MusicPage from "../pages/musicPage/MusicPage";

/* Add routes for use in the Navbar component */
const routes = [
  { path: '/', component: <HomePage />, exact: true },
  { path: '/music', component: <MusicPage /> },
  { path: '/gameserver', component: <GameServerPage /> },
  { path: '/drinking-game', component: <DrinkingGamePage /> },
  { path: '/about', component: <AboutPage /> },
  { path: '/contact', component: <ContactPage /> },
];

export default routes;