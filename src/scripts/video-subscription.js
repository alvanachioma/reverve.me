;(function (document, config) {
    console.table(config);

    const init = () => {
        // add the Data-attr
        this.elem = document.getElementsByClassName(config.targetElementClass)[0];
        setElemBottomOffset();
        window.setTimeout(() =>{
            this.elem.style.transition="bottom 400ms ease-in";
        }, 200);
        
        this.handle = document.querySelector("."+config.handleElementClass);
        this.handle.addEventListener("click", onHandleClicked);
    }

    this.setElemBottomOffset = () => {
        if (config.isExpanded) {
            this.elem.style.bottom = config.slideUpBottomOffset;
        } else {
            this.elem.style.bottom = config.slideDownBottomOffset;
        }
    }

    const onHandleClicked = (evt) => {
        if (config.isExpanded) 
            config.isExpanded = false; 
        else 
            config.isExpanded = true;
        
        this.setElemBottomOffset();

    }

    init();
})(window.document,
    {
        targetElementClass: "video-container",
        handleElementClass: "drag-handle",
        slideDownBottomOffset: "-960px",
        slideUpBottomOffset: "-350px",
        isExpanded: false
    });
