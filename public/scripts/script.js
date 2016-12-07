(function () {

    console.log(__dirname)

    var fs = require('fs'),
        $ = require('jquery'),
        path = require('path'),
        appenderSection = require(path.join(__dirname, 'scripts', 'appender')),
        writetoXML = require(path.join(__dirname, 'scripts', 'writetoXML'))

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
                    dates_due = $xml.find('item[date_due]'),
                    output = $('#output'),
                    endContain = $('<div><h2>End Dates</h2></div>'),
                    startContain = $('<div><h2>Start Dates</h2></div>'),
                    dueContain = $('<div><h2>Due Dates</h2></div>')

                $.each(dates_end, (index, value) => {
                    let currDate = $(value).attr('date_end')
                    appenderSection(currDate, endContain)
                })

                $.each(dates_start, (index, value) => {
                    let currDate = $(value).attr('date_start')
                    appenderSection(currDate, startContain)
                })

                $.each(dates_due, (index, value) => {
                    let currDate = $(value).attr('date_due')
                    appenderSection(currDate, dueContain)
                })

                output
                    .append(startContain)
                    .append(dueContain)
                    .append(endContain)

//                writetoXML($xml)

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
