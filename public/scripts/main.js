(function () {

    var fs = require('fs'),
        $ = require('jquery')

    wand("#exportpackage").tag.onchange = e => {

        var ele = e.target || e.srcElement,
            files = ele.files,
            fileText

        for (var i = 0; i < files.length; i++) {
            var filepath = files[i].path

            fs.readFile(filepath, 'utf8', (err, data) => {
                if (err) throw err

                var xmlData = $.parseXML(data),
                    parseXML = xml2json(xmlData),
                    removed = parseXML.replace("undefined", ""),
                    jsondata = JSON.parse(removed),
                    jsonString = JSON.stringify(jsondata),
                    backtoXML = json2xml(jsonString)

                console.log(jsonString)

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
