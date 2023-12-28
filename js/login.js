
const input = document.querySelector('.login__input')
// console.log(input);
const button = document.querySelector('.login__buttom')
// console.log(button);
const form = document.querySelector('.login__form')





const validadeInput = ({target})=>{
        if(target.value.length > 4){
            button.removeAttribute('disabled');
        }else{
            button.setAttribute('disabled', '');
        }
    }

    const handleSubmit=(event) =>{
        event.preventDefault();
       
        localStorage.setItem('player', input.value);
        window.location = './pages/game.html'
    }

input.addEventListener('input', validadeInput);
form.addEventListener('submit', handleSubmit);



