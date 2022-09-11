const url= document.querySelector("#url")
 url.addEventListener('keyup', () => {
   const api= `https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=${url.value}`
   document.querySelector('#qrcode').src= api
   document.querySelector('p').innerText="Escaneie o Qr code"
})