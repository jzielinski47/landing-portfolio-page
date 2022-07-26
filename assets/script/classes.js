class Project {
    constructor(root, id, url, name, tech) {
        this.root = root;
        this.id = id;
        this.url = url;

        this.name = name
        this.tech = tech

        this.create()
    }

    create = () => {
        let project = document.createElement('div');
        project.id = "project-" + this.id;
        project.className = "project";

        let imageHolder = document.createElement('div')
        imageHolder.className = "image-holder";

        let link = document.createElement('a')
        let button = document.createElement('button')
        button.id = "project-" + this.id + "-btn"
        button.className = "btn-3 hidden"
        button.innerHTML = "launch project >"

        let image = document.createElement('img')
        image.id = "project-" + this.id + "-img"
        image.className = "project-image"
        // image.style.background = `url(${this.url})`        
        imageHolder.onmouseover = () => {
            image.classList.add('darken')
            button.classList.remove('hidden')
        }
        imageHolder.onmouseout = () => {
            button.classList.add('hidden')
            image.classList.remove('darken')
        }

        link.href = "#"; link.append(button)
        imageHolder.append(image, link);
        project.append(imageHolder)

        for (let x = 0; x < 3; x++) {
            let p = document.createElement('p')
            p.classList.add('bold')

            switch (x) {
                case 0:
                    p.classList.add('featured')
                    p.innerHTML = 'featured'
                    break;
                case 1:
                    p.classList.add('project-name')
                    p.id = 'project-' + this.id + '-name'
                    p.innerHTML = this.name
                    
                    p.onmouseenter = async () => {                        
                        let content = this.name;
                        p.innerHTML = ''
                        for (let i = 0; i < content.length; i++) {
                            await sleep(100)
                            console.log(content[i])
                            p.innerHTML += content[i]
                        }
                    }

                    break;
                case 2:
                    p.classList.add('technology')
                    p.id = 'project-' + this.id + '-tech'
                    p.innerHTML = this.tech
                    break;
            }

            project.append(p)

        }

        this.root.append(project)
        console.log('created')

    }

}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}