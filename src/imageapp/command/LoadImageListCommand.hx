package imageapp.command;

import imageapp.utils.Common;
import imageapp.loader.ImageLoader;
import imageapp.model.Image;
import imageapp.model.ImageList2;
import yloader.valueObject.Response;
import yloader.valueObject.Request;
import yloader.impl.js.XMLHttpRequestLoader;
import imageapp.model.ImageList;
import mmvc.impl.TriggerCommand;

class LoadImageListCommand extends TriggerCommand<ImageList>
{
//    @inject
//    public var list2:ImageList2;

    @inject
    public var imageList:ImageList;

    var loader:ImageLoader;

    public function new()
    {
        super();
    }

    override public function execute():Void
    {
        var request = new Request(Common.Url);
        var xmlLoader = new XMLHttpRequestLoader(request);
        xmlLoader.onResponse = onResponse;
        xmlLoader.load();
    }

    function onResponse(response: Response)
    {
        if (response.success)
        {
            var listData:ImageList2 = haxe.Json.parse(response.data);
            var arrayList:Array<Image> = new Array<Image>();

            for (image in listData.images)
            {
                var img = new Image(image.url);
                arrayList.push(img);
            }

            imageList.addAll(arrayList);
        }
    }

}
