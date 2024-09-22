const colors = ['bg-violet-400','bg-violet-300','bg-violet-200', 'bg-gray-200', 'bg-gray-100', 'bg-yellow-300','bg-yellow-200','bg-yellow-100'];
    let currentColorIndex = 0;

    setInterval(() => {
        const div = document.getElementById('colorChangeDiv');
        div.classList.remove(colors[currentColorIndex]);
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        div.classList.add(colors[currentColorIndex]);
    }, 4000);