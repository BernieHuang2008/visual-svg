function parse(rawcode) {
    // only allow 'Z'
    rawcode = rawcode.replaceAll('z', 'Z');
    // add spliter
    rawcode = rawcode.replaceAll(/[A-Za-z]/g, '\0$&');
    // split
    var lines = rawcode.split('\0');
    // remove empty lines
    lines = lines.filter(function (line) {
        return line.length > 0;
    });
    // format each line
    lines = lines.map(function (line) {
        var command = line[0];
        var paras = line.substring(1).split(/[,|\s]/g);

        // remove empty paras
        paras = paras.filter(function (para) {
            return para.length > 0;
        });

        // turn paras into numbers
        paras = paras.map(function (para) {
            return parseFloat(para);
        });

        return {
            cmd: command,
            par: paras,
            code: `${command} ${paras.join(' ')}`
        }
    });
    return lines;
}