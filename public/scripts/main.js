(function () {

    var fs = require('fs')

    console.log(fs)

    wand("#exportpackage").tag.onchange = e => {

        var ele = e.target || e.srcElement,
            files = ele.files,
            fileText

        for (var i = 0; i < files.length; i++) {
            var filepath = files[i].path

            fs.readFile(filepath, 'utf8', (err, data) => {
                if (err) throw err
                console.log(data)
            })

        }

        if (files.length === 1) {
            fileText = document.createTextNode(" - File Attached")
        } else {
            fileText = document.createTextNode(" - Files Attached")
        }

        e.target.parentElement.appendChild(fileText)
    }

}())
