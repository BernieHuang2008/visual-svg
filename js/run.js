function run(rawcode) {
    var code = parse(rawcode);
    var CURRENT_POS = [0, 0];
    var START_POS = [0, 0];
    var details_list = code.map(function (code) {
        var d = details(code, CURRENT_POS, START_POS);
        CURRENT_POS = d.end;

        if (d.cmd.toLowerCase() == 'm') {
            START_POS = d.end;
        }

        return d;
    });
    return details_list;
}

function virtualize(details_list) {
    document.getElementById('virtual').innerHTML = '';
    var table = document.createElement('table');
    table.classList.add('table');

    table.innerHTML = `
        <thead>
            <tr>
                <th>Code</th>
                <th>Description</th>
                <th>Command</th>
                <th>Format</th>
                <th>Endpoint</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;
    var tbody = table.querySelector('tbody');

    details_list.forEach(details => {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td><code>${details.code}</code><p class="explain">${details.explain}</p></td>
            <td>${details.desc}</td>
            <td>${details.format}</td>
            <td>${details.cmd}</td>
            <td>${details.end[0]}, ${details.end[1]}</td>
        `;
        row.onclick = function () {
            focus(details); // focus is defined in js/visualize.js
        }
        tbody.appendChild(row);
    });

    document.getElementById('virtual').appendChild(table);
}

function runv(rawcode) {
    showsvg(rawcode);
    var details_list = run(rawcode);
    virtualize(details_list);
}

function search_path(input) {
    var details_list = [];
    fullcode = '';
    input.replace(/<path d="(.+?)"/g, function (match, p1) {
        fullcode += p1;
    });
    runv(fullcode);
}