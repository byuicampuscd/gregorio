var $ = require('jquery')

function appenderSection(a, b, c) {
    var readabledate = new Date(a),
        appender = $(`<div class="assignmentLabel">
                        <label>
                            <p>Assignment: ${c}</p>
                            <p>Date: ${readabledate}</p>
                            <input type="date">
                        </label>
                      </div>`)
    b.append(appender)
}

module.exports = appenderSection
