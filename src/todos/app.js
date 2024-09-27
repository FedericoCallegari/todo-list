import html from './app.html?raw';

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId)=>{


    const displayTodos = () => {

    }
    //Funcion anonima auto invocada
    // Cuando la funcion App se llama 
    (()=>{
        const app = document.createElement('div');
        app.innerHTML= html;
        document.querySelector(elementId).append(app)
        displayTodos()
    })();

}