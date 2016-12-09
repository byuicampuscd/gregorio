var $ = require('jquery'),
    path = require('path'),
    allDatesAdjust = require(path.join(__dirname, 'scripts', 'allDatesAdjust'))

function header() {

    var output = $('#output'),
        outputheader = $('<div></div>'),
        headerlabel = $(`<label>
                            Adjust all dates by
                            <input type="number" value="2">
                         </label>`),
        submit = $('<input type="button" id="allDatesAdjust" value="Adjust">')

    submit.click(allDatesAdjust)

    outputheader.append(headerlabel)
    outputheader.append(submit)

    output
        .append(outputheader)
}

module.exports = header
