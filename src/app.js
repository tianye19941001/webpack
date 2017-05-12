/**
 * Created by paul on 2017/5/12.
 */
import './css/common.css'
import Layer from './components/layer/layer.js';

const App = function () {
    var dom = document.getElementById('app');
    var layer = new Layer();

    dom.innerHTML = layer.tpl({
        name:'ttyy',
        arr:['111','222']
    });
}

new App();