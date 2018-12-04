// Pages
import HomeView from './pages/home';
import AboutView from './pages/about';
import FirebaseView from './pages/firebase-example';
import MapboxView from './pages/mapbox-example';
import RegisterView from './pages/register';
import LoginView from './pages/login';
import MenuView from './pages/menu';

export default [
  { path: '/', view: HomeView },
  { path: '/about', view: AboutView },
  { path: '/firebase', view: FirebaseView },
  { path: '/mapbox', view: MapboxView },
  { path: '/register', view: RegisterView },
  { path: '/login', view: LoginView },
  { path: '/menu', view: MenuView },

];
