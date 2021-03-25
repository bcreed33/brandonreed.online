import './app/css/reset.scss';
import './app/css/style.scss';
// import './img/linkedin-logo.png';


//this is importing all the images from the src/img folder
const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));