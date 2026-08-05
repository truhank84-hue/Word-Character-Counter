downloadBtn.addEventListener("click", () => {

  const canvas = qrContainer.querySelector("canvas");

  if (!canvas) {
    alert("Generate a QR Code first.");
    return;
  }

  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = "qr-code.png";
  link.click();

});
