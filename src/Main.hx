package ;

/**
    Main class
*/
import app.ApplicationContext;
import app.ApplicationView;
import parser.HtmlParser;
import model.ImageData;
import utils.Common;
import loader.UrlLoader;
class Main {

//    var _urlLoader: UrlLoader;
//    var _htmlParser: HtmlParser;
//
//    public function new() {
//        _urlLoader = new UrlLoader(Common.Url);
//        _htmlParser = new HtmlParser();
//
//        create();
//    }
//
//    public function create():Void{
//        _urlLoader.responseArrived.addOnce(renderImage);
//        _urlLoader.getImages();
//    }
//
//    function renderImage(responseData: String){
//        var list = new Array<String>();
//
//        var data:ImageData = haxe.Json.parse(responseData);
//
//        for(image in data.images){
//            list.push(image.url);
//        }
//
//        _htmlParser.generate(list);
//    }

    static function main(){
        var view = new ApplicationView();
        var context = new ApplicationContext(view);
    }
}
