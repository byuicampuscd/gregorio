var $ = require('jquery')

function appenderSection(a, b, c) {
    var readabledate = new Date(a),
        date = readabledate.getDate(),
        year = readabledate.getFullYear(),
        month = readabledate.getMonth() + 1,
        appender

    if (date < 10)
        date = "0" + date

    if (month < 10)
        month = "0" + month

    appender = $(`<div class="assignmentLabel">
                        <label>
                            <p>Assignment: ${c}</p>
                            <p>Date: ${readabledate}</p>
                            <input type="date" value="${year}-${month}-${date}">
                        </label>
                      </div>`)
    b.append(appender)
}

module.exports = appenderSection
