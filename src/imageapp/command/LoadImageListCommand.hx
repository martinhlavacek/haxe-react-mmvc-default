package imageapp.command;

import imageapp.model.ImageList2;
//import imageapp.model.Image;
import yloader.valueObject.Response;
import yloader.valueObject.Request;
import yloader.impl.js.XMLHttpRequestLoader;
import utils.Common;
import loader.UrlLoader;
import imageapp.model.ImageList;
import mmvc.impl.TriggerCommand;

typedef ImageItem = {
    var url:String;
}

typedef ImageListItem = {
    var images: Array<ImageItem>;
}


class LoadImageListCommand extends TriggerCommand<ImageList>
{

    @inject
    public var list:ImageList;

    @inject
    public var list2:ImageList2;

    var loader:UrlLoader;


    public function new()
    {
        trace("command init");
        super();
    }

    override public function execute():Void
    {
        trace("command");
        var request = new Request(Common.Url);
        var xmlLoader = new XMLHttpRequestLoader(request);
        xmlLoader.onResponse = onResponse;
        xmlLoader.load();
    }

    function onResponse(response: Response)
    {
        if(response.success)
        {

            list2 = haxe.Json.parse(response.data);
            list2.changed.dispatch();
//            var items:ImageListItem = haxe.Json.parse(response.data);
//
//            for(image in items.images)
//            {
//                var img = new Image(image.url);
//                this.list.add(img);
//            }
//
//
//            this.list.changed.dispatch();
        }
    }

}
