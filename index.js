const btn = document.querySelector('button')
const color = document.querySelectorAll('.color')
const hex = document.getElementsByClassName('hex')
const copyMessage = document.querySelector('.copy-message')

btn.addEventListener('click', generateColor);

function generateColor()  {
    for(let i = 0; i < color.length ; i++) {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        console.log(hex,randomColor);
        
        //selecting the color container
        color[i].style.backgroundColor = `#${randomColor}`;
        console.log(i);

        color[i].classList.add('fade-in');

        setTimeout( () => color[i].classList.remove('fade-in'), 400);

        //selecting the hex container
        hex[i].innerHTML = "#"+randomColor;
        hex[i].style.color = `#${randomColor}`;

        //copy to clipboard 
        hex[i].onclick = function() {
            navigator.clipboard.writeText(hex[i].innerHTML)
            .then(function() {
                copyMessage.innerHTML = `Copied  ${hex[i].innerHTML}` ;
                copyMessage.classList.remove('hidden')
                copyMessage.classList.add('message-visible');

                setTimeout(() => {
                    copyMessage.classList.add('hidden');
                    copyMessage.classList.remove('message-visible');
                    copyMessage.innerHTML = ""
                }, 3000);

              }, function(err) {
                alert(' Could not copy text: ');
                console.log(' Could not copy text: ', err);
              });
        }
        
        

        
    }
}


generateColor();