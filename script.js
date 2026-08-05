const qrContainer = document.getElementById("qrcode");
const input = document.getElementById("qrText");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

generateBtn.addEventListener("click", () => {

const text = input.value.trim();

if(text === ""){
alert("Please enter a URL or text.");
return;
}

qrContainer.innerHTML = "";

new QRCode(qrContainer,{
text:text,
width:220,
height:220
});

});

downloadBtn.addEventListener("click",()=>{

const img = qrContainer.querySelector("img");

if(!img){
alert("Generate a QR Code first.");
return;
}

const link = document.createElement("a");
link.href = img.src;
link.download = "qr-code.png";
link.click();

});
