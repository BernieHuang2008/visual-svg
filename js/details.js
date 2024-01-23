function details(code, CURRENT_POS, START_POS) {
    var meaning = meanings[code.cmd];   // meanings is defined in js/meanings_sheet.js

    var paraname = meaning.par;
    var explain = meaning.explain;

    var mapped_paras = {};
    paraname.forEach(function (name, index) {
        mapped_paras[name] = code.par[index];
    });

    explain = (function venv() {
        // set paras
        console.log(`var [${paraname.join(',')}] = code.par;`)
        eval(`var [${paraname.join(',')}] = code.par;`);

        // calculate expressions
        explain = explain.replace(/\{(.+?)\}/g, (match, p1) => `<span class="number">${eval(p1)}</span>`);

        // underline
        explain = explain.replace(/\_(.+?)\_/g, "<u>$1</u>");

        return explain;
    })();

    var endpos = [0, 0];
    endpos[0] = mapped_paras.x || (CURRENT_POS[0]+mapped_paras.dx) || CURRENT_POS[0];
    endpos[1] = mapped_paras.y || (CURRENT_POS[1]+mapped_paras.dy) || CURRENT_POS[1];

    return {
        code: code.code,
        cmd: code.cmd,
        format: meaning.format,
        desc: meaning.desc,
        par: mapped_paras,
        explain: explain,
        start: [CURRENT_POS[0], CURRENT_POS[1]],
        end: endpos,
    }
}