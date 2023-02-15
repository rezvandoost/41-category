const menu = document.querySelector('.menu').children;
const product = document.querySelector('.items').children;

for(let i = 0; i<menu.length; i++){  
    menu[i].onclick = function(){
        for(let x = 0; x < menu.length; x++){
            menu[x].classList.remove('active');
        }
        this.classList.add('active');
        const displayItem = this.getAttribute('data-filter');
        for(let z=0; z<product.length; z++){
            product[z].style.display = 'none';
            if(product[z].getAttribute('data-category') == displayItem || displayItem == 'all'){
                product[z].style.display = 'block';
            }
        } 
    } 
}