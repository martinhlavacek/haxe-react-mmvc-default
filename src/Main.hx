package ;

/**
    Main class
*/
import app.ApplicationContext;
import app.ApplicationView;

class Main
{

    static function main()
    {
        var view = new ApplicationView();
        var context = new ApplicationContext(view);
    }
}
