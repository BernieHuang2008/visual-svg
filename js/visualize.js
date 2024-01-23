function showsvg(rawcode) {
    var svg = document.getElementById('svg');

    // Remove all previous paths
    svg.innerHTML = '';

    // Generate a new path
    var newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

    // Write the rawcode into the new path
    newPath.setAttribute("d", rawcode);

    // Append the new path to the SVG element
    svg.appendChild(newPath);
}

function focus(details) {
    // Remove the previous focused path
    var prev_focused_path = document.getElementById('focused-path');
    if (prev_focused_path) {
        prev_focused_path.remove();
    }

    var svg = document.getElementById('svg');

    // Generate a new path
    var newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    newPath.id="focused-path";

    // Write the rawcode into the new path
    newPath.setAttribute("d", `M ${details.start[0]} ${details.start[1]} ` + details.code);

    // Append the new path to the SVG element
    svg.appendChild(newPath);

    // Set the red stroke
    newPath.setAttribute("stroke", "red");
    
    // Write the explaination
    document.getElementById('explain').innerHTML = details.explain;
}