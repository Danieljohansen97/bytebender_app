import HomePage from "../pages/homePage/HomePage";
import AboutPage from "../pages/aboutPage/AboutPage";
import ContactPage from "../pages/contactPage/ContactPage";
import GameServerPage from "../pages/gameServerPage/GameServerPage";
import DrinkingGamePage from "../pages/drinkingGamePage/DrinkingGamePage";

/* Add routes for use in the Navbar component */
const routes = [
  { path: '/', component: <HomePage />, exact: true },
  { path: '/about', component: <AboutPage /> },
  { path: '/contact', component: <ContactPage /> },
  { path: '/gameserver', component: <GameServerPage /> },
  { path: '/drinking-game', component: <DrinkingGamePage /> },
];

export default routes;