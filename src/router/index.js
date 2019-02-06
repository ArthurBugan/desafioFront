// Inicialize as rotas
const routes = {};

/**
 *
 *
 * @param {string} path
 * @param {string} templateId
 * @param {function} controller
 */
export function route(path, templateId, controller) {
    routes[path] = { templateId: templateId, controller: controller };
}

var el = null;
function router() {
    // Inicializa a rota
    el = el || document.getElementById('view');
    // Captura a rota atual
    const url = location.hash.slice(1) || '/';
    // Seleciona a rota pela URL
    const route = routes[url];
    // Verifica se existe a view da rota e a rota registrada
    if (el && route.controller) {
        // Renderiza a rota
        el.innerHTML = typeof route.controller !== 'undefined' ? route.controller() : '<div></div>';
    }
}
// Listen on hash change:
window.addEventListener('hashchange', router);
// Listen on page load:
window.addEventListener('load', router);