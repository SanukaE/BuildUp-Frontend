function setBanner() {
    const banners = 5;
    let randomNum = Math.floor(Math.random() * banners) + 1;
    const banner = `./images/banners/banner${randomNum}.png`;

    document.getElementById('banner').src = banner;
}

setInterval(setBanner, 5000);

const colors = [
    '#ff0000', // Red
    '#00ff00', // Green
    '#0000ff', // Blue
    '#ffff00', // Yellow
    '#ff00ff', // Magenta
    '#00ffff', // Cyan
    '#ff8000', // Orange
    '#8000ff', // Purple
    '#00ff80', // Lime
    '#0080ff' // Azure
];

function setRandBoxShadow(elementID, spread) {
    let element = document.getElementById(elementID);

    element.style.boxShadow = 'none';    
    element.style.boxShadow = `0 0 ${spread}px ` + colors[Math.floor(Math.random() * 10)];
}

setInterval(() => setRandBoxShadow('dronModel', 20), 10000);

document.addEventListener('keydown', function(event) {
    if (event.shiftKey) {
        document.getElementById('sanuka-pfp').src = "https://th.bing.com/th?id=OSK.HEROPxgDsXEWDn_-ef5vNAIMLq-j75NVt09uEhb8laHxDQE&w=312&h=200&c=15&rs=2&o=6&pid=SANGAM";
        document.getElementById('nathan-pfp').src = "https://www.bing.com/th?id=OIP.MqV4xHfF5uk_io4cfGkKtAHaF6&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2";
        document.getElementById('callum-pfp').src = "https://th.bing.com/th/id/OIP.nN84QB4ssBsxIY7hlLFt4wHaKD?w=130&h=180&c=7&r=0&o=5&pid=1.7";
        document.getElementById('derrick-pfp').src = "https://th.bing.com/th/id/OIP.rULV3hP3uCDhvkNRP4ljvgHaEK?w=305&h=180&c=7&r=0&o=5&pid=1.7";

        setTimeout(() => {
            document.getElementById('sanuka-pfp').src = "../images/sanuka-pfp.jpg";
            document.getElementById('nathan-pfp').src = "../images/nathan-pfp.png";
            document.getElementById('callum-pfp').src = "../images/callum-pfp.png";
            document.getElementById('derrick-pfp').src = "../images/derrick-pfp.png";
        }, 60000);
    }
});