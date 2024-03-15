function calculate() {
    const typeChoice = document.getElementById("type_choice").value;

    if (typeChoice === '1') {
        try {
            const fcc = parseFloat(document.getElementById("fcc").value);
            const fy = parseFloat(document.getElementById("fy").value);
            const b = parseFloat(document.getElementById("b").value);
            const h = parseFloat(document.getElementById("h").value);
            const cc = parseFloat(document.getElementById("cc").value);
            const ass = parseFloat(document.getElementById("ass").value);
            const m = parseFloat(document.getElementById("m").value);

            const fc = fcc * 0.45;
            const fs = fy * 0.4;
            const fr = 7.5 * Math.sqrt(fcc);
            const ec = 57000 * Math.sqrt(fcc);
            const es = 29 * Math.pow(10, 6);
            const n = es / ec;
            const ae = (n - 1) * ass;
            const d = h - cc;
            const cg = ((b * h * (h / 2)) + ae * (h - cc)) / (b * h + ae);
            const mi = ((b * Math.pow(h, 3)) / 12) + (b * h * (h / 2 - cg) * 2) + (ae * (d - cg) * 2);
            const fcbot = ((m * 1000 * 12) * (h - cg)) / mi;
            const ftop = ((m * 1000 * 12) * (cg)) / mi;
            const fsteel = (((m * 1000 * 12) * (d - cg)) / mi) * n;

            document.getElementById("output").innerHTML = `
                <p>Stress in bottom: ${fcbot.toFixed(3)}</p>
                <p>Stress in steel: ${fsteel.toFixed(3)}</p>
            `;

            if (fcbot > fr) {
                document.getElementById("output").innerHTML += "<p>Section is cracked</p>";
            } else {
                document.getElementById("output").innerHTML += "<p>Section is uncracked</p>";
            }
        } catch (error) {
            document.getElementById("output").innerText = "Please enter valid numeric inputs.";
        }
    } else if (typeChoice === '2') {
        document.getElementById("output").innerText = "USD method calculation not implemented yet.";
    } else {
        document.getElementById("output").innerText = "Invalid choice";
    }
}
