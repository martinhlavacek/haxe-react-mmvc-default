package app;


import imageapp.model.ImageList2;
import mmvc.base.TriggerMap;
import imageapp.command.LoadImageListCommand;
import imageapp.model.ImageList;
import imageapp.view.ImageViewMediator;
import imageapp.view.ImageListView;
import mmvc.api.IViewContainer;
import mmvc.impl.Context;
class ApplicationContext extends Context
{
    public function new(?contextView:IViewContainer=null)
    {
        super(contextView);
    }

    override public function startup()
    {
        trace("startup");
        var ll:TriggerMap = cast triggerMap;
        ll.mapClass(ImageList, LoadImageListCommand);
        injector.mapSingleton(ImageList);
        injector.mapSingleton(ImageList2);
        mediatorMap.mapView(ImageListView,ImageViewMediator);
        mediatorMap.mapView(ApplicationView, ApplicationViewMediator);
    }

    override public function shutdown():Void
    {

    }

}
