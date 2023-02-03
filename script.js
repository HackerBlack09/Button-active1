let btn1 = document.querySelectorAll('button');
let img = document.querySelectorAll('img')
let text = document.querySelector('.text');

let active = 1
function ochir(){
  img.forEach(item => {
    item.style.display = 'none'
  })
}
ochir()
btn1[active - 1].classList.add('kor')
img[active -1].style.display = 'block'

let btndis = () => {
  btn1.forEach(item => {
    item.classList.remove('kor')
  })
}


btn1.forEach((item, index) => {
  item.innerHTML = index + 1;

  item.addEventListener('click', () => {
    if(index < img.length) {
      ochir()
      btndis();
      item.classList.add('kor')
      img[index].style.display = 'block'
    }
    else {
      alert('bunday orinda rasim yo')
    }
  })
});