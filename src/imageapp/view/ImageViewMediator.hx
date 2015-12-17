package imageapp.view;

import imageapp.model.ImageList;
import imageapp.model.Image;
import mmvc.impl.TriggerMediator;

class ImageViewMediator extends TriggerMediator<ImageListView>
{

    @inject
    public var imageList:ImageList;

//    @inject
//    public var imageList2:ImageList2;

    public function new()
    {
        super();
    }

    override function onRegister()
    {
        super.onRegister();
        mediate(imageList.changed.addOnce(loadCompleted));
        triggerMap.dispatch(imageList);
    }

    function loadCompleted()
    {
        var data:Array<Image> = imageList.toArray();
        view.generate(data);
    }
}
