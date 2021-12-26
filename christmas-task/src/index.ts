import { SelfCheck } from './app/selfcheck';
import App from './app/app';
import './style.scss';

const app: App = new App();
app.init();

SelfCheck.mySelfCheck();

function allowDrop(event: MouseEvent) {
  event.preventDefault();
}

document.body.ondragover = allowDrop;
