package imageapp.model;

import msignal.Signal;
class ImageList2
{
    public var changed:Signal0;

    public var images:Array<Image>;


    public function new()
    {
        changed = new Signal0();
    }


}
