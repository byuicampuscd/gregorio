(function () {

    var fs = require('fs'),
        $ = require('jquery')

    $("#exportpackage").change( e => {

        var ele = e.target || e.srcElement,
            files = ele.files,
            fileText

        for (var i = 0; i < files.length; i++) {
            var filepath = files[i].path

            fs.readFile(filepath, 'utf8', (err, data) => {
                if (err) throw err

                var removerXML = data.replace('<?xml version="1.0" encoding="UTF-8"?>', ''),
                    xmltype = data.split('\n')[0],
                    xmlData = $.parseXML(removerXML),
                    $xml = $(xmlData),
                    date_end = $xml.find('item[date_end]'),
                    date_start = $xml.find('item[date_start]'),
                    date_due = $xml.find('item[date_due]')

                $.each(date_end, (index, value) => {
                    console.log($(value).attr('date_end'))
                })

                $.each(date_start, (index, value) => {
                    console.log($(value).attr('date_start'))
                })

                $.each(date_due, (index, value) => {
                    console.log($(value).attr('date_due'))
                })

            })

        }

        if (files.length === 1) {
            fileText = document.createTextNode(" - File Attached")
        } else {
            fileText = document.createTextNode(" - Files Attached")
        }

        e.target.parentElement.appendChild(fileText)
    })

}())
