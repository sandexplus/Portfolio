import toggleContent from './components/toggleContent';
toggleContent();
import smoothScroll from './components/smoothScroll';
smoothScroll();
import smoothAppear from './components/smoothAppear';
smoothAppear();
import sendData from './components/sendData';

//serialize form data to object
function serialize(form) {
    var obj = {};
    var elements = form.querySelectorAll('input, select, textarea');
    for (var i = 0; i < elements.length; ++i) {
        var element = elements[i];
        var name = element.name;
        var value = element.value;
        if (name) {
            obj[name] = value;
        }
    }
    return obj;
}

sendData(serialize(document.querySelector('form')));