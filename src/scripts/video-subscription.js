;(function (document, config) {
    console.table(config);

    const init = () => {
        // add the Data-attr
        this.elem = document.getElementsByClassName(config.targetElementClass)[0];
        setElemBottomOffset();
        this.handle = document.getElementsByClassName(config.handleElementClass)[0];
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
        const classList = this.elem.classList;
        if (config.isExpanded) {
            classList.add(config.slideDownClass);
            classList.remove(config.slideUpClass);
            this.elem.setAttribute("class", classList.value);
            config.isExpanded = false;
        } else {
            classList.add(config.slideUpClass);
            classList.remove(config.slideDownClass);
            this.elem.setAttribute("class", classList.value);
            config.isExpanded = true;
        }
        this.setElemBottomOffset();

    }

    init();
})(window.document,
    {
        slideDownClass: "slide-down",
        slideUpClass: "slide-up",
        targetElementClass: "video-container",
        handleElementClass: "drag-handle",
        slideDownBottomOffset: "-960px",
        slideUpBottomOffset: "-350px",
        isExpanded: false
    });
