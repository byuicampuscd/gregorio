/*eslint no-console: ['error', { allow: ['warn', 'error'] }] */

(function (global, factory) {

    'use strict'

    factory(global)

}(typeof window !== 'undefined' ? window : this, global => {
    'use strict'

    function Start(version, selector, callback) {
        this.wand_version = version
        this.selector = selector
        this.tag = ''
        this.child = ''

        this.queryTag(this.selector)

        if (this.tag === null) {
            this.createTag(this.selector)
        } else if (this.selector === undefined) {
            this.createTag(this.child)
        }
    }

    Start.prototype = {
        attachText: function (text) {

            let textNode = document.createTextNode(text)

            this.tag.appendChild(textNode)

            return this
        },
        queryTag: function (selector) {

            let nostar = selector.replace('*', '')

            if (selector.includes('*')) {
                this.tag = document.createElement(nostar)
            } else {
                this.tag = document.querySelector(selector)
            }

            return this
        },
        createTag: function (selector) {
            if (this.tag === null) {
                this.tag = document.createElement(selector)
            } else {
                this.child = selector

                var childElement = document.createElement(this.child)

                this.tag.appendChild(childElement)
            }

            return this
        }
    }

    global.wand = function (a) {

        let vers = '2.0.1',
            obj = new Start(vers, a)

        return obj
    }

}))
