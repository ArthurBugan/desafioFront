import { route } from './router/index';
import Home from './components/home';
import './style/home.css';

route('/', 'home', () => {
    const home = Home.render();
    return `${home}`;
});

route('/usuario', 'template1',  () => {
    
});