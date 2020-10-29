
window.load = new function () {
    var Router = function (name, routes, file) {
        return {
            name: name,
            routes: routes,
            file: file
        }
    };

    var activeRoutes = Array.from(document.querySelectorAll('[route]'));


    activeRoutes.forEach(function (route) {
        route.addEventListener('click', navigate, false);
    });

    function navigate(event) {
        var route = event.target.attributes[1].value;
        var routeInfo = myRoute.routes.filter(function (r) {
            return r.path === route;
        })[0];
        if (!routeInfo) {
            $('#content').load('error.html')
        } else {
            window.history.pushState({}, '', routeInfo.path)
            $('#content').load(routeInfo.file);
            const menu = document.getElementById('menu');
            menu.classList.add('mobileHide');
        }

    }

    var myRoute = new Router('myRouter', [
        {
            path: '/',
            name: 'Home',
            file: 'home.html'
        },
        {
            path: '/about',
            name: 'About',
            file: 'about.html'
        },
        {
            path: '/contact',
            name: 'Contact',
            file: 'contact.html'
        },
        {
            path: '/website',
            name: 'Website',
            file: 'services/web.html'
        },
        {
            path: '/software',
            name: 'Software',
            file: 'services/Software.html'
        },
        {
            path: '/pc',
            name: 'PC',
            file: 'services/pc.html'
        }
        , {
            path: '/datadigitization',
            name: 'DataDigitization',
            file: 'services/data.html'
        },
        {
            path: '/graphic',
            name: 'Graphic',
            file: 'services/graphic.html'
        },
        {
            path: '/advertisement',
            name: 'Advertisement',
            file: 'services/advertisement.html'
        }

    ]);
    var currentPath = window.location.pathname;

    if (currentPath == '/') {
        //$('#content').load('home.html')
    } else {
        var route = myRoute.routes.filter(function (r) {
            return r.path.toString().toLowerCase() === currentPath.toString().toLowerCase()
        })[0];
        if (route) {
            //$('#content').load(route.file);
        } else {
            $('#content').load('error.html');
        }

    }

};

