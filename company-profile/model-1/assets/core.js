const toggle = () => {
    const open = localStorage.getItem('menu')
    const status = open === 'open' ? 'close' : 'open'
    localStorage.setItem('menu', status)

    const menu = document.getElementById('menu').classList
    if (status === 'close') menu.add('hidden')
    else menu.remove('hidden')
}