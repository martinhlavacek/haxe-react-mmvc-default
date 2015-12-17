package imageapp.loader;

import msignal.Signal.Signal1;

class ImageLoader
{
    // Completed signal
    public var completed = new Signal1(String);
    var _url:String;

    // Constructor
    public function new(url:String)
    {
        _url = url;
    }

    // Get images from url (json)
    public function getImages()
    {
        var response = new haxe.Http(_url);
        response.onError = js.Browser.alert;
        response.onData = onComplete;
        response.request(false);
    }

    // handle response from url and we have to call dispatch on responseArrived(signal)
    function onComplete(data:String)
    {
        completed.dispatch(data);
    }


}
