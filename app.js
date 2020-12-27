const counters = document.querySelectorAll('#counter')

counters.forEach(counter =>{
    counter.innerText = '0'
    function updateCounter(){
        const target = +counter.getAttribute('data-target')
        const result = +counter.innerText
        const interval = target / 500
        if (result < target ){
            counter.innerText = `${Math.ceil(result + interval)}`
          setInterval(updateCounter, 1)
        } else{
            counter.innerText = target
        }
    }
    updateCounter()
})