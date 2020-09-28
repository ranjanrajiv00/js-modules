define(['math'], function(math){
    console.log(math.add(10, 20));

    document.querySelector("#loader").addEventListener("click", function(){
        // load on demand
        require(['load'], function(load) {
            console.log(load.load());
        });
    })
});