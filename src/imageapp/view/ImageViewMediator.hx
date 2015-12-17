package imageapp.view;

import imageapp.model.ImageList2;
import imageapp.model.ImageList;
import mmvc.impl.TriggerMediator;
class ImageViewMediator extends TriggerMediator<ImageListView>
{

    @inject
    public var imageList:ImageList;

    @inject
    public var imageList2:ImageList2;

    public function new()
    {
        super();
    }

    override function onRegister()
    {
        super.onRegister();
        trace("register - imageviewmediator");
        trace(imageList);
        trace(imageList2);
        mediate(imageList2.changed.addOnce(loadCompleted));
        triggerMap.dispatch(ImageList);
    }


    function loadCompleted()
    {
        view.generate(imageList);
    }




}
