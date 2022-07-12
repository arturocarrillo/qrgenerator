const containerQR = document.getElementById('containerQr');
const formQr = document.getElementById('form');

const QR = new QRCode(containerQR);

formQr.addEventListener('submit', (e) => {
    e.preventDefault();
    QR.makeCode(formQr.link.value);
});