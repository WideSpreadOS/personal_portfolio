import Landing from "./views/Landing.js";
import Experience from "./views/Experience.js";
import Contact from "./views/Contact.js";
import Projects from "./views/Projects.js";
import ProjectView from "./views/ProjectView.js";
import Register from "./views/Register.js";

const app = document.getElementById('app')


const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
    console.log(keys)
    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Landing },
        { path: "/experience", view: Experience },
        { path: "/contact", view: Contact },
        { path: "/projects", view: Projects },
        { path: "/project/:id", view: ProjectView },
        { path: "/user/register", view: Register },
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

const scanPage = new Event("scan", { "bubbles": true, "cancelable": false });
document.addEventListener("DOMContentLoaded", () => {
    
    document.dispatchEvent(scanPage)
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });



    router();
});


console.log(app)
app.addEventListener('onchange', () => {
    console.log('Page was Scanned')
    const spreadImages = app.querySelectorAll('img')
    console.log(spreadImages)
    spreadImages.forEach(image => {
        console.log(image)
        image.addEventListener('click', e => {
            console.log(e.target)
        })
})
})


function addCustomEventListener(selector, event) {
    let rootElement = document.querySelector('#app');
    //since the root element is set to be body for our current dealings
    rootElement.addEventListener(event, function (evt) {
        var targetElement = evt.target;
        while (targetElement != null) {
            if (targetElement.matches(selector)) {
                console.log(evt.path[0])
                const img = evt.path[0]
                const imgSrc = img.getAttribute('src')
                console.log(imgSrc)
                fullscreenPhoto(imgSrc)



                return;
            }
            targetElement = targetElement.parentElement;
        }
    },
        true
    );
}

addCustomEventListener('img', 'click');


function fullscreenPhoto(imgSrc) {
    const fullscreenContainer = document.getElementById('fullscreenContainer')
    fullscreenContainer.classList.toggle('hidden')

    let exitBtn = document.createElement('button')
    exitBtn.innerText = 'X'
    exitBtn.classList.add('exit-button')
    exitBtn.addEventListener('click', e => {
        fullscreenContainer.removeChild(imageEl)
        fullscreenContainer.removeChild(exitBtn)
        fullscreenContainer.classList.toggle('hidden')
    })
    let imageEl = document.createElement('img')
    imageEl.setAttribute('src', imgSrc)

    fullscreenContainer.appendChild(exitBtn)
    fullscreenContainer.appendChild(imageEl)
}



function getFormData(selector, event) {
    let rootElement = document.querySelector('#app');
    //since the root element is set to be body for our current dealings
    rootElement.addEventListener(event, function (evt) {
        var targetElement = evt.target;
        while (targetElement != null) {
            if (targetElement.matches(selector)) {
                console.log(evt.path[0])
                const formEl = targetElement.parentElement
                let formData = []
                formEl.querySelectorAll('input').forEach(input => {
                    const inputData = input.value
                    const inputName = input.getAttribute('name')
                    console.log(inputName)
                    console.log(inputData)
                    const inputObj = {
                        "inputName": inputName,
                        "data": inputData
                    }
                    formData.push(inputObj)
                })
                console.log(formData)
                formData.forEach(dataSet => {
                    console.log(dataSet)
                })
                const options = {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                    fetch('http://localhost:8000/user/register', options)
                        .then(res => {
                            // code to handle the response data
                            res.json()

                        }).catch(err => {
                            // code to handle request errors
                            console.log('Error: ', err)
                        });

                



                return;
            }
            targetElement = targetElement.parentElement;
        }
    },
        true
    );
}

getFormData('button', 'click');