import { route } from './router/index';

route('/', 'home', () => {
   return `<div>Ola</div>`;
});

route('/page1', 'template1',  () => {
    
});