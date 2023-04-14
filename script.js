const darkmode = document.querySelector('.dark-mode')

darkmode.addEventListener('click', () => {
    const body = document.body;
    const img = document.querySelector('.resting')

    if(body.classList.contains('light') && img.src.includes('img/nuit.png')){

        body.classList.add('dark')
        body.classList.remove('light')
        
        img.src = 'img/soleil.png'

    }else if(body.classList.contains('dark') && img.src.includes('img/soleil.png')){

        body.classList.add('light')
        body.classList.remove('dark')

        img.src = 'img/nuit.png'

    }
})

