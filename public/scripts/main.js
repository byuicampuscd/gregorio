(function () {

    var fs = require('fs'),
        $ = require('jquery')

    $('#exportpackage').change(e => {

        var ele = e.target || e.srcElement,
            files = ele.files,
            fileText

        for (var i = 0; i < files.length; i++) {
            var filepath = files[i].path

            fs.readFile(filepath, 'utf8', (err, data) => {
                if (err) throw err

                var removeXMLType = data.replace('<?xml version="1.0" encoding="UTF-8"?>', ''),
                    xmltype = data.split('\n')[0],
                    xmlData = $.parseXML(removeXMLType),
                    $xml = $(xmlData),
                    dates_end = $xml.find('item[date_end]'),
                    dates_start = $xml.find('item[date_start]'),
                    dates_due = $xml.find('item[date_due]')

                $.each(dates_end, (index, value) => {
                    $(value).attr('date_end', 'FALSE')
                })

                $.each(dates_start, (index, value) => {
                    $(value).attr('date_start', 'FALSE')
                })

                $.each(dates_due, (index, value) => {
                    $(value).attr('date_due', 'FALSE')
                })

                var newXMLData = $xml[0].firstChild.outerHTML,
                    newXMLwType = xmltype + newXMLData

                fs.writeFile('examplerewrite.xml', newXMLwType, (err) => {
                    console.log("written!")
                })

            })

        }

        if (files.length === 1) {
            fileText = document.createTextNode(' - File Attached')
        } else {
            fileText = document.createTextNode(' - Files Attached')
        }

        e.target.parentElement.appendChild(fileText)
    })

}())
