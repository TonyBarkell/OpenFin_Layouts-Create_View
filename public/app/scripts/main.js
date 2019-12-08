var serverPort;

async function getWindow(){
    currentView = fin.View.getCurrentSync();
    return currentView.getCurrentWindow();
}

async function createView(){
    await getWindow().then((win)=>{
        let { identity } = win;
        fin.Layout.createView({
            name: 'test_view',
            url: 'https://openfin.co'
        }, identity).then(console.log);
    });
};

//Once the DOM has loaded and the OpenFin API is ready
function onMain() {
    console.log("on main");
        fin.Window.getCurrentSync().getOptions()
            .then(opts => {
                serverPort = opts.customData;
                console.log("Server Port: " + serverPort);
            }).catch(err => console.log(err));
};

