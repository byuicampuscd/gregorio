function writetoXML($xml) {
    var newXMLData = $xml[0].firstChild.outerHTML,
        newXMLwType = xmltype + newXMLData

    fs.writeFile('examplerewrite.xml', newXMLwType, (err) => {
        console.log('written!')
    })
}

module.exports = writetoXML
