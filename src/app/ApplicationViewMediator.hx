package app;

import mmvc.impl.Mediator;
class ApplicationViewMediator extends Mediator<ApplicationView>
{
    public function new()
    {
        super();
    }

    override function onRegister()
    {
        trace("appviewmediator");
        super.onRegister();
        view.createViews();
    }

    override public function onRemove():Void
    {
        super.onRemove();
    }
}
