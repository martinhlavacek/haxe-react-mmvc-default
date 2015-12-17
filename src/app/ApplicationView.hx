package app;

import imageapp.view.ImageListView;
import js.Browser;
import mmvc.api.IViewContainer;
class ApplicationView implements IViewContainer
{
    public var viewAdded:Dynamic -> Void;
    public var viewRemoved:Dynamic -> Void;

    public function new()
    {

    }

    public function createViews()
    {
//        var image = new js.html.Image(150,200);
//        image.src = "http://haxe.org/img/targets/all-targets.svg";
//
//        var div = Browser.document.createDivElement();
//        div.align = "center";
//        div.appendChild(image);
//
//        Browser.document.getElementById('defaultApp').appendChild(div);


        var imageListView = new ImageListView();
        viewAdded(imageListView);

    }

    public function isAdded(view:Dynamic):Bool
    {
        return true;
    }
}
