// @ts-nocheck
const projectList = document.querySelector('.projects-list')
// console.log(projectList)

for (let i = 1; i <= 6; i++) {
    let project = new Project(projectList, i, 'assets/img/project.jpg', 'project', 'Java Script')
}

function reveal() {
    let queue = document.querySelectorAll('.reveal')

    for (let i = 0; i < queue.length; i++) {

        let elemTopDistance = queue[i].getBoundingClientRect().top;
        let revealRange = 10;

        // console.log(elemTopDistance, window.innerHeight - revealRange)

        if (elemTopDistance < window.innerHeight - revealRange) {
            queue[i].classList.add('active')
        } else {
            queue[i].classList.remove('active')
        }
    }
}


window.addEventListener('scroll', reveal);
window.onload = () => {
    // document.querySelector('#name')?.classList.add('name-move')
    // document.querySelector('.hero-content-illustration')?.classList.add('illustration-move')
    // document.querySelector('.hero-content')?.classList.add('revealup')
}

window.onscroll = () => {
    let arrow = document.querySelector('#arrow')
    // arrow.style.animationPlayState = 'paused';
}



