(function () {

    wand("#exportpackage").tag.onchange = e => {
        let fileText = document.createTextNode(" - File Attached")
        e.target.parentElement.appendChild(fileText)
    }

}())
