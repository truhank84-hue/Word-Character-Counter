const qrContainer = document.getElementById("qrcode");
const input = document.getElementById("qrText");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

generateBtn.addEventListener("click", () => {
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter a URL or text.");
        return;
    }

    qrContainer.innerHTML = "";

    new QRCode(qrContainer, {
        text: text,
        width: 220,
        height: 220
    });
});

downloadBtn.addEventListener("click", () => {

    const canvas = qrContainer.querySelector("canvas");

    if (!canvas) {
        alert("Generate a QR Code first.");
        return;
    }

    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = "qr-code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

});
