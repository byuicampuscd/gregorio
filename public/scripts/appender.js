var $ = require('jquery')

function appenderSection(a, b) {
    var readable = new Date(a),
        appender = $(`<div>
                                        <label>
                                            ${readable}
                                            <input type="date">
                                        </label>
                                        </div>`)
    b.append(appender)
}

module.exports = appenderSection
