package app;

import imageapp.view.ImageListView;
import mmvc.api.IViewContainer;

class ApplicationView implements IViewContainer
{
    public var viewAdded:Dynamic -> Void;
    public var viewRemoved:Dynamic -> Void;

    public function new() { }

    public function createViews()
    {
        var imageListView = new ImageListView();
        viewAdded(imageListView);
    }

    public function isAdded(view:Dynamic):Bool
    {
        return true;
    }
}
