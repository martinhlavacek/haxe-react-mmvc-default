package imageapp.model;

import msignal.Signal;

class ImageList2
{
    public var changed:Signal0;

    public var images:Array<Image>;

    public function new()
    {
        this.images = new Array<Image>();
        changed = new Signal0();
    }
}
