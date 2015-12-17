package parser;

import js.html.DivElement;
import js.Browser;

class HtmlParser {
    public function new() {
    }

    public function generate(data: Array<String>){
        for(img in data){
            var image = createImage(img);
            var div = createDivWithImage(image);


            Browser.document.getElementById('defaultApp').appendChild(div);
        }
    }
    function createImage(img: String): js.html.Image{
        var image = new js.html.Image(150,200);
        image.src = img;

        return image;
    }

    function createDivWithImage(image: js.html.Image): DivElement{
        var div = Browser.document.createDivElement();
        div.align = "center";
        div.appendChild(image);
        return div;
    }
}
