
export const applyRippleEffect = (button) => {
    button.addEventListener('click', e => {
        let x = e.clientX - e.target.offsetLeft
        let y = e.clientY - e.target.offsetTop

        let ripples = document.createElement('span')
        ripples.classList.add('ripple')
        ripples.style.left = x + 'px'
        ripples.style.top = y + 'px'
        button.appendChild(ripples)
        
        setTimeout(() => ripples.remove(), 1000)
    })
}