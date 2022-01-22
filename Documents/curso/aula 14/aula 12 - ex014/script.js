function carregar(){
var msg = window.document.querySelector('div#msg')
var pic = window.document.querySelector('img#pic')
var date = new Date()
var hora = date.getHours()

var bg = window.document.querySelector('body')

msg.innerHTML = `Agora são ${hora} horas`

if (hora >=0 && hora <=12){
    pic.src='/aula 14/aula 12 - ex014/assets/manhã.png'
    bg.style.background = ('rgb(32, 120, 252)')

}else if (hora >=12 && hora <= 18){
    pic.src='/aula 14/aula 12 - ex014/assets/tarde.png'
    bg.style.background = ('rgb(225, 160, 40)')

}else{
    pic.src='/aula 14/aula 12 - ex014/assets/noite.png'
    bg.style.background = ('rgb(14, 0, 143)')
}
}