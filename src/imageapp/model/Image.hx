package imageapp.model;

class Image
{
    public var url:String;

    public function new(url:String)
    {
        this.url = url;
    }

    public function toString():String
    {
        return haxe.Json.stringify(this);
    }
}
