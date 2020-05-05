let btn = document.getElementById('btn')
btn.addEventListener('click', (event) => {
    let elMsg = document.getElementById('loc')

    navigator.geolocation.getCurrentPosition(position => {
        let latitude = document.getElementById('latitude')
        let longitude = document.getElementById('longitude')
        
        latitude.value = position.coords.latitude
        longitude.value = position.coords.longitude

        elMsg.classList.add('success')
        elMsg.textContent = 'Deu todo certo'
    }, error => {
        elMsg.classList.add('error')
        elMsg.textContent = 'Houve um erro!'
    })

    elMsg.classList.add('loading')
    elMsg.textContent = 'Checando Localização...'
})

