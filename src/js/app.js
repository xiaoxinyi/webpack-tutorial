// 把css当作module引入到js module中
import '../css/main.css'
import '../css/input-elements.css'
// 使用webpack时，需要告诉webpack导入了哪些包
// 所以不需要考虑js的导入顺序了
import {secretButton, secretParagraph} from "./dom-loader";

'./dom-loader'

var showSecret = false;

secretButton.addEventListener('click', toggleSecretState);
updateSecretParagraph();

function toggleSecretState() {
    showSecret = !showSecret;
    updateSecretParagraph();
    updateSecretButton()
}

function updateSecretButton() {
    if (showSecret) {
        secretButton.textContent = 'Hide the Secret';
    } else {
        secretButton.textContent = 'Show the Secret';
    }
}

function updateSecretParagraph() {
    if (showSecret) {
        secretParagraph.style.display = 'block';
    } else {
        secretParagraph.style.display = 'none';
    }
}