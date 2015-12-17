package imageapp.view;

import imageapp.model.Image;
import js.html.DivElement;
import js.Browser;

class ImageListView
{
    public function new() { }

    public function generate(data: Array<Image>)
    {
        for (img in data)
        {
            var image = createImage(img.url);
            var div = createDivWithImage(image);

            Browser.document.getElementById('defaultApp').appendChild(div);
        }
    }
    function createImage(img: String): js.html.Image
    {
        var image = new js.html.Image(150,200);
        image.src = img;

        return image;
    }

    function createDivWithImage(image: js.html.Image): DivElement
    {
        var div = Browser.document.createDivElement();
        div.align = "center";
        div.appendChild(image);
        return div;
    }
}
