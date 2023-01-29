document.addEventListener(
    "DOMContentLoaded", () => {
        console.log(55)
        new Mmenu( "#menu", {
            // options
        }, {
            // configuration
            offCanvas: {
                page: {
                    selector: "#page"
                }
            }
        });
    }
);