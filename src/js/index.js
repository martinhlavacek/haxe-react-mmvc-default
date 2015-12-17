(function (console, $global) { "use strict";
var $hxClasses = {},$estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Main = function() { };
$hxClasses["Main"] = Main;
Main.__name__ = ["Main"];
Main.main = function() {
	var view = new app_ApplicationView();
	var context = new app_ApplicationContext(view);
};
Math.__name__ = ["Math"];
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		return null;
	}
};
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.compare = function(a,b) {
	if(a == b) return 0; else if(a > b) return 1; else return -1;
};
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
};
Reflect.isEnumValue = function(v) {
	return v != null && v.__enum__ != null;
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) return false;
	delete(o[field]);
	return true;
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
var ValueType = { __ename__ : true, __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] };
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null; else return js_Boot.getClass(o);
};
Type.getSuperClass = function(c) {
	return c.__super__;
};
Type.getClassName = function(c) {
	var a = c.__name__;
	if(a == null) return null;
	return a.join(".");
};
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw new js__$Boot_HaxeError("Too many arguments");
	}
	return null;
};
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
};
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = js_Boot.getClass(v);
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
};
var mmvc_api_IContext = function() { };
$hxClasses["mmvc.api.IContext"] = mmvc_api_IContext;
mmvc_api_IContext.__name__ = ["mmvc","api","IContext"];
var mmvc_impl_Context = function(contextView,autoStartup) {
	if(autoStartup == null) autoStartup = true;
	this.autoStartup = autoStartup;
	this.set_contextView(contextView);
};
$hxClasses["mmvc.impl.Context"] = mmvc_impl_Context;
mmvc_impl_Context.__name__ = ["mmvc","impl","Context"];
mmvc_impl_Context.__interfaces__ = [mmvc_api_IContext];
mmvc_impl_Context.prototype = {
	startup: function() {
	}
	,set_contextView: function(value) {
		if(this.contextView != value) {
			this.contextView = value;
			this.commandMap = null;
			this.mediatorMap = null;
			this.viewMap = null;
			this.triggerMap = null;
			this.mapInjections();
			this.checkAutoStartup();
		}
		return value;
	}
	,get_injector: function() {
		if(this.injector == null) return this.createInjector();
		return this.injector;
	}
	,get_reflector: function() {
		if(this.reflector == null) this.reflector = new minject_Reflector();
		return this.reflector;
	}
	,get_commandMap: function() {
		if(this.commandMap == null) this.commandMap = new mmvc_base_CommandMap(this.createChildInjector());
		return this.commandMap;
	}
	,get_mediatorMap: function() {
		if(this.mediatorMap == null) this.mediatorMap = new mmvc_base_MediatorMap(this.contextView,this.createChildInjector(),this.get_reflector());
		return this.mediatorMap;
	}
	,get_viewMap: function() {
		if(this.viewMap == null) this.viewMap = new mmvc_base_ViewMap(this.contextView,this.get_injector());
		return this.viewMap;
	}
	,get_triggerMap: function() {
		if(this.triggerMap == null) this.triggerMap = new mmvc_base_TriggerMap(this.get_injector());
		return this.triggerMap;
	}
	,mapInjections: function() {
		this.get_injector().mapValue(minject_Reflector,this.get_reflector());
		this.get_injector().mapValue(minject_Injector,this.get_injector());
		this.get_injector().mapValue(mmvc_api_IViewContainer,this.contextView);
		this.get_injector().mapValue(mmvc_api_ICommandMap,this.get_commandMap());
		this.get_injector().mapValue(mmvc_api_IMediatorMap,this.get_mediatorMap());
		this.get_injector().mapValue(mmvc_api_IViewMap,this.get_viewMap());
		this.get_injector().mapValue(mmvc_api_ITriggerMap,this.get_triggerMap());
	}
	,checkAutoStartup: function() {
		if(this.autoStartup && this.contextView != null) this.startup();
	}
	,createInjector: function() {
		this.injector = new minject_Injector();
		return this.get_injector();
	}
	,createChildInjector: function() {
		return this.get_injector().createChildInjector();
	}
	,__class__: mmvc_impl_Context
	,__properties__: {get_triggerMap:"get_triggerMap",get_viewMap:"get_viewMap",get_reflector:"get_reflector",get_mediatorMap:"get_mediatorMap",get_injector:"get_injector",get_commandMap:"get_commandMap",set_contextView:"set_contextView"}
};
var app_ApplicationContext = function(contextView) {
	mmvc_impl_Context.call(this,contextView);
};
$hxClasses["app.ApplicationContext"] = app_ApplicationContext;
app_ApplicationContext.__name__ = ["app","ApplicationContext"];
app_ApplicationContext.__super__ = mmvc_impl_Context;
app_ApplicationContext.prototype = $extend(mmvc_impl_Context.prototype,{
	startup: function() {
		console.log("startup");
		var ll = this.get_triggerMap();
		ll.mapClass(imageapp_model_ImageList,imageapp_command_LoadImageListCommand);
		this.get_injector().mapSingleton(imageapp_model_ImageList);
		this.get_injector().mapSingleton(imageapp_model_ImageList2);
		this.get_mediatorMap().mapView(imageapp_view_ImageListView,imageapp_view_ImageViewMediator);
		this.get_mediatorMap().mapView(app_ApplicationView,app_ApplicationViewMediator);
	}
	,__class__: app_ApplicationContext
});
var mmvc_api_IViewContainer = function() { };
$hxClasses["mmvc.api.IViewContainer"] = mmvc_api_IViewContainer;
mmvc_api_IViewContainer.__name__ = ["mmvc","api","IViewContainer"];
mmvc_api_IViewContainer.prototype = {
	__class__: mmvc_api_IViewContainer
};
var app_ApplicationView = function() {
};
$hxClasses["app.ApplicationView"] = app_ApplicationView;
app_ApplicationView.__name__ = ["app","ApplicationView"];
app_ApplicationView.__interfaces__ = [mmvc_api_IViewContainer];
app_ApplicationView.prototype = {
	createViews: function() {
		var imageListView = new imageapp_view_ImageListView();
		this.viewAdded(imageListView);
	}
	,__class__: app_ApplicationView
};
var mmvc_api_IMediator = function() { };
$hxClasses["mmvc.api.IMediator"] = mmvc_api_IMediator;
mmvc_api_IMediator.__name__ = ["mmvc","api","IMediator"];
mmvc_api_IMediator.prototype = {
	__class__: mmvc_api_IMediator
};
var mmvc_base_MediatorBase = function() {
	this.slots = [];
};
$hxClasses["mmvc.base.MediatorBase"] = mmvc_base_MediatorBase;
mmvc_base_MediatorBase.__name__ = ["mmvc","base","MediatorBase"];
mmvc_base_MediatorBase.__interfaces__ = [mmvc_api_IMediator];
mmvc_base_MediatorBase.prototype = {
	preRegister: function() {
		this.removed = false;
		this.onRegister();
	}
	,onRegister: function() {
	}
	,preRemove: function() {
		this.removed = true;
		this.onRemove();
	}
	,onRemove: function() {
		var _g = 0;
		var _g1 = this.slots;
		while(_g < _g1.length) {
			var slot = _g1[_g];
			++_g;
			slot.remove();
		}
	}
	,getViewComponent: function() {
		return this.view;
	}
	,setViewComponent: function(viewComponent) {
		this.view = viewComponent;
	}
	,mediate: function(slot) {
		this.slots.push(slot);
	}
	,__class__: mmvc_base_MediatorBase
};
var mmvc_impl_Mediator = function() {
	mmvc_base_MediatorBase.call(this);
};
$hxClasses["mmvc.impl.Mediator"] = mmvc_impl_Mediator;
mmvc_impl_Mediator.__name__ = ["mmvc","impl","Mediator"];
mmvc_impl_Mediator.__super__ = mmvc_base_MediatorBase;
mmvc_impl_Mediator.prototype = $extend(mmvc_base_MediatorBase.prototype,{
	__class__: mmvc_impl_Mediator
});
var app_ApplicationViewMediator = function() {
	mmvc_impl_Mediator.call(this);
};
$hxClasses["app.ApplicationViewMediator"] = app_ApplicationViewMediator;
app_ApplicationViewMediator.__name__ = ["app","ApplicationViewMediator"];
app_ApplicationViewMediator.__super__ = mmvc_impl_Mediator;
app_ApplicationViewMediator.prototype = $extend(mmvc_impl_Mediator.prototype,{
	onRegister: function() {
		console.log("appviewmediator");
		mmvc_impl_Mediator.prototype.onRegister.call(this);
		this.view.createViews();
	}
	,onRemove: function() {
		mmvc_impl_Mediator.prototype.onRemove.call(this);
	}
	,__class__: app_ApplicationViewMediator
});
var haxe_IMap = function() { };
$hxClasses["haxe.IMap"] = haxe_IMap;
haxe_IMap.__name__ = ["haxe","IMap"];
var haxe_ds_BalancedTree = function() { };
$hxClasses["haxe.ds.BalancedTree"] = haxe_ds_BalancedTree;
haxe_ds_BalancedTree.__name__ = ["haxe","ds","BalancedTree"];
haxe_ds_BalancedTree.prototype = {
	get: function(key) {
		var node = this.root;
		while(node != null) {
			var c = this.compare(key,node.key);
			if(c == 0) return node.value;
			if(c < 0) node = node.left; else node = node.right;
		}
		return null;
	}
	,compare: function(k1,k2) {
		return Reflect.compare(k1,k2);
	}
	,__class__: haxe_ds_BalancedTree
};
var haxe_ds_TreeNode = function() { };
$hxClasses["haxe.ds.TreeNode"] = haxe_ds_TreeNode;
haxe_ds_TreeNode.__name__ = ["haxe","ds","TreeNode"];
haxe_ds_TreeNode.prototype = {
	__class__: haxe_ds_TreeNode
};
var haxe_ds_EnumValueMap = function() { };
$hxClasses["haxe.ds.EnumValueMap"] = haxe_ds_EnumValueMap;
haxe_ds_EnumValueMap.__name__ = ["haxe","ds","EnumValueMap"];
haxe_ds_EnumValueMap.__interfaces__ = [haxe_IMap];
haxe_ds_EnumValueMap.__super__ = haxe_ds_BalancedTree;
haxe_ds_EnumValueMap.prototype = $extend(haxe_ds_BalancedTree.prototype,{
	compare: function(k1,k2) {
		var d = k1[1] - k2[1];
		if(d != 0) return d;
		var p1 = k1.slice(2);
		var p2 = k2.slice(2);
		if(p1.length == 0 && p2.length == 0) return 0;
		return this.compareArgs(p1,p2);
	}
	,compareArgs: function(a1,a2) {
		var ld = a1.length - a2.length;
		if(ld != 0) return ld;
		var _g1 = 0;
		var _g = a1.length;
		while(_g1 < _g) {
			var i = _g1++;
			var d = this.compareArg(a1[i],a2[i]);
			if(d != 0) return d;
		}
		return 0;
	}
	,compareArg: function(v1,v2) {
		if(Reflect.isEnumValue(v1) && Reflect.isEnumValue(v2)) return this.compare(v1,v2); else if((v1 instanceof Array) && v1.__enum__ == null && ((v2 instanceof Array) && v2.__enum__ == null)) return this.compareArgs(v1,v2); else return Reflect.compare(v1,v2);
	}
	,__class__: haxe_ds_EnumValueMap
});
var haxe_ds_ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe_ds_ObjectMap;
haxe_ds_ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
haxe_ds_ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe_ds_ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,get: function(key) {
		return this.h[key.__id__];
	}
	,exists: function(key) {
		return this.h.__keys__[key.__id__] != null;
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) return false;
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,__class__: haxe_ds_ObjectMap
};
var haxe_ds__$StringMap_StringMapIterator = function(map,keys) {
	this.map = map;
	this.keys = keys;
	this.index = 0;
	this.count = keys.length;
};
$hxClasses["haxe.ds._StringMap.StringMapIterator"] = haxe_ds__$StringMap_StringMapIterator;
haxe_ds__$StringMap_StringMapIterator.__name__ = ["haxe","ds","_StringMap","StringMapIterator"];
haxe_ds__$StringMap_StringMapIterator.prototype = {
	hasNext: function() {
		return this.index < this.count;
	}
	,next: function() {
		return this.map.get(this.keys[this.index++]);
	}
	,__class__: haxe_ds__$StringMap_StringMapIterator
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe_ds_StringMap;
haxe_ds_StringMap.__name__ = ["haxe","ds","StringMap"];
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	set: function(key,value) {
		if(__map_reserved[key] != null) this.setReserved(key,value); else this.h[key] = value;
	}
	,get: function(key) {
		if(__map_reserved[key] != null) return this.getReserved(key);
		return this.h[key];
	}
	,exists: function(key) {
		if(__map_reserved[key] != null) return this.existsReserved(key);
		return this.h.hasOwnProperty(key);
	}
	,setReserved: function(key,value) {
		if(this.rh == null) this.rh = { };
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		if(this.rh == null) return null; else return this.rh["$" + key];
	}
	,existsReserved: function(key) {
		if(this.rh == null) return false;
		return this.rh.hasOwnProperty("$" + key);
	}
	,arrayKeys: function() {
		var out = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) out.push(key);
		}
		if(this.rh != null) {
			for( var key in this.rh ) {
			if(key.charCodeAt(0) == 36) out.push(key.substr(1));
			}
		}
		return out;
	}
	,iterator: function() {
		return new haxe_ds__$StringMap_StringMapIterator(this,this.arrayKeys());
	}
	,__class__: haxe_ds_StringMap
};
var haxe_rtti_Meta = function() { };
$hxClasses["haxe.rtti.Meta"] = haxe_rtti_Meta;
haxe_rtti_Meta.__name__ = ["haxe","rtti","Meta"];
haxe_rtti_Meta.getType = function(t) {
	var meta = haxe_rtti_Meta.getMeta(t);
	if(meta == null || meta.obj == null) return { }; else return meta.obj;
};
haxe_rtti_Meta.getMeta = function(t) {
	return t.__meta__;
};
haxe_rtti_Meta.getFields = function(t) {
	var meta = haxe_rtti_Meta.getMeta(t);
	if(meta == null || meta.fields == null) return { }; else return meta.fields;
};
var mmvc_api_ICommand = function() { };
$hxClasses["mmvc.api.ICommand"] = mmvc_api_ICommand;
mmvc_api_ICommand.__name__ = ["mmvc","api","ICommand"];
mmvc_api_ICommand.prototype = {
	__class__: mmvc_api_ICommand
};
var mmvc_impl_TriggerCommand = function() { };
$hxClasses["mmvc.impl.TriggerCommand"] = mmvc_impl_TriggerCommand;
mmvc_impl_TriggerCommand.__name__ = ["mmvc","impl","TriggerCommand"];
mmvc_impl_TriggerCommand.__interfaces__ = [mmvc_api_ICommand];
mmvc_impl_TriggerCommand.prototype = {
	execute: function() {
	}
	,__class__: mmvc_impl_TriggerCommand
};
var imageapp_command_LoadImageListCommand = function() { };
$hxClasses["imageapp.command.LoadImageListCommand"] = imageapp_command_LoadImageListCommand;
imageapp_command_LoadImageListCommand.__name__ = ["imageapp","command","LoadImageListCommand"];
imageapp_command_LoadImageListCommand.__super__ = mmvc_impl_TriggerCommand;
imageapp_command_LoadImageListCommand.prototype = $extend(mmvc_impl_TriggerCommand.prototype,{
	execute: function() {
		console.log("command");
		var request = new yloader_valueObject_Request(utils_Common.Url);
		var xmlLoader = new yloader_impl_js_XMLHttpRequestLoader(request);
		xmlLoader.onResponse = $bind(this,this.onResponse);
		xmlLoader.load();
	}
	,onResponse: function(response) {
		if(response.success) {
			this.list2 = JSON.parse(response.data);
			this.list2.changed.dispatch();
		}
	}
	,__class__: imageapp_command_LoadImageListCommand
});
var imageapp_model_Image = function() { };
$hxClasses["imageapp.model.Image"] = imageapp_model_Image;
imageapp_model_Image.__name__ = ["imageapp","model","Image"];
imageapp_model_Image.prototype = {
	__class__: imageapp_model_Image
};
var mcore_data_Collection = function() { };
$hxClasses["mcore.data.Collection"] = mcore_data_Collection;
mcore_data_Collection.__name__ = ["mcore","data","Collection"];
var mcore_data_CollectionBase = function() { };
$hxClasses["mcore.data.CollectionBase"] = mcore_data_CollectionBase;
mcore_data_CollectionBase.__name__ = ["mcore","data","CollectionBase"];
mcore_data_CollectionBase.__interfaces__ = [mcore_data_Collection];
mcore_data_CollectionBase.prototype = {
	iterator: function() {
		return HxOverrides.iter(this.source);
	}
	,__class__: mcore_data_CollectionBase
};
var mcore_data_ArrayList = function() { };
$hxClasses["mcore.data.ArrayList"] = mcore_data_ArrayList;
mcore_data_ArrayList.__name__ = ["mcore","data","ArrayList"];
mcore_data_ArrayList.__super__ = mcore_data_CollectionBase;
mcore_data_ArrayList.prototype = $extend(mcore_data_CollectionBase.prototype,{
	__class__: mcore_data_ArrayList
});
var imageapp_model_ImageList = function() { };
$hxClasses["imageapp.model.ImageList"] = imageapp_model_ImageList;
imageapp_model_ImageList.__name__ = ["imageapp","model","ImageList"];
imageapp_model_ImageList.__super__ = mcore_data_ArrayList;
imageapp_model_ImageList.prototype = $extend(mcore_data_ArrayList.prototype,{
	__class__: imageapp_model_ImageList
});
var imageapp_model_ImageList2 = function() { };
$hxClasses["imageapp.model.ImageList2"] = imageapp_model_ImageList2;
imageapp_model_ImageList2.__name__ = ["imageapp","model","ImageList2"];
imageapp_model_ImageList2.prototype = {
	__class__: imageapp_model_ImageList2
};
var imageapp_view_ImageListView = function() {
	console.log("init imagelistview");
};
$hxClasses["imageapp.view.ImageListView"] = imageapp_view_ImageListView;
imageapp_view_ImageListView.__name__ = ["imageapp","view","ImageListView"];
imageapp_view_ImageListView.prototype = {
	generate: function(data) {
		var $it0 = data.iterator();
		while( $it0.hasNext() ) {
			var img = $it0.next();
			var image = this.createImage(img.url);
			var div = this.createDivWithImage(image);
			window.document.getElementById("defaultApp").appendChild(div);
		}
	}
	,createImage: function(img) {
		var image = new Image(150,200);
		image.src = img;
		return image;
	}
	,createDivWithImage: function(image) {
		var div;
		var _this = window.document;
		div = _this.createElement("div");
		div.align = "center";
		div.appendChild(image);
		return div;
	}
	,__class__: imageapp_view_ImageListView
};
var mmvc_impl_TriggerMediator = function() {
	mmvc_impl_Mediator.call(this);
};
$hxClasses["mmvc.impl.TriggerMediator"] = mmvc_impl_TriggerMediator;
mmvc_impl_TriggerMediator.__name__ = ["mmvc","impl","TriggerMediator"];
mmvc_impl_TriggerMediator.__super__ = mmvc_impl_Mediator;
mmvc_impl_TriggerMediator.prototype = $extend(mmvc_impl_Mediator.prototype,{
	dispatch: function(trigger) {
		this.triggerMap.dispatch(trigger);
	}
	,__class__: mmvc_impl_TriggerMediator
});
var imageapp_view_ImageViewMediator = function() {
	mmvc_impl_TriggerMediator.call(this);
};
$hxClasses["imageapp.view.ImageViewMediator"] = imageapp_view_ImageViewMediator;
imageapp_view_ImageViewMediator.__name__ = ["imageapp","view","ImageViewMediator"];
imageapp_view_ImageViewMediator.__super__ = mmvc_impl_TriggerMediator;
imageapp_view_ImageViewMediator.prototype = $extend(mmvc_impl_TriggerMediator.prototype,{
	onRegister: function() {
		mmvc_impl_TriggerMediator.prototype.onRegister.call(this);
		console.log("register - imageviewmediator");
		console.log(this.imageList);
		console.log(this.imageList2);
		this.mediate(this.imageList2.changed.addOnce($bind(this,this.loadCompleted)));
		this.triggerMap.dispatch(imageapp_model_ImageList);
	}
	,loadCompleted: function() {
		this.view.generate(this.imageList);
	}
	,__class__: imageapp_view_ImageViewMediator
});
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
$hxClasses["js._Boot.HaxeError"] = js__$Boot_HaxeError;
js__$Boot_HaxeError.__name__ = ["js","_Boot","HaxeError"];
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
$hxClasses["js.Boot"] = js_Boot;
js_Boot.__name__ = ["js","Boot"];
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js_Boot.__nativeClassName(o);
		if(name != null) return js_Boot.__resolveNativeClass(name);
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) return true;
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js_Boot.__cast = function(o,t) {
	if(js_Boot.__instanceof(o,t)) return o; else throw new js__$Boot_HaxeError("Cannot cast " + Std.string(o) + " to " + Std.string(t));
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var js_Browser = function() { };
$hxClasses["js.Browser"] = js_Browser;
js_Browser.__name__ = ["js","Browser"];
js_Browser.createXMLHttpRequest = function() {
	if(typeof XMLHttpRequest != "undefined") return new XMLHttpRequest();
	if(typeof ActiveXObject != "undefined") return new ActiveXObject("Microsoft.XMLHTTP");
	throw new js__$Boot_HaxeError("Unable to create XMLHttpRequest object.");
};
var minject_ClassMap = function() {
	this.map = new haxe_ds_StringMap();
};
$hxClasses["minject.ClassMap"] = minject_ClassMap;
minject_ClassMap.__name__ = ["minject","ClassMap"];
minject_ClassMap.__interfaces__ = [haxe_IMap];
minject_ClassMap.prototype = {
	get: function(k) {
		var key = Type.getClassName(k);
		return this.map.get(key);
	}
	,set: function(k,v) {
		var key = Type.getClassName(k);
		this.map.set(key,v);
	}
	,exists: function(k) {
		var key = Type.getClassName(k);
		return this.map.exists(key);
	}
	,iterator: function() {
		return this.map.iterator();
	}
	,__class__: minject_ClassMap
};
var minject_InjectionConfig = function(request,injectionName) {
	this.request = request;
	this.injectionName = injectionName;
};
$hxClasses["minject.InjectionConfig"] = minject_InjectionConfig;
minject_InjectionConfig.__name__ = ["minject","InjectionConfig"];
minject_InjectionConfig.prototype = {
	getResponse: function(injector) {
		if(this.injector != null) injector = this.injector;
		if(this.result != null) return this.result.getResponse(injector);
		var parentConfig = injector.getAncestorMapping(this.request,this.injectionName);
		if(parentConfig != null) return parentConfig.getResponse(injector);
		return null;
	}
	,hasResponse: function(injector) {
		return this.result != null;
	}
	,hasOwnResponse: function() {
		return this.result != null;
	}
	,setResult: function(result) {
		if(this.result != null && result != null) console.log("Warning: Injector contains " + this.toString() + ".\nAttempting to overwrite this " + ("with mapping for [" + result.toString() + "].\nIf you have overwritten this mapping ") + "intentionally you can use `injector.unmap()` prior to your replacement mapping " + "in order to avoid seeing this message.");
		this.result = result;
	}
	,toString: function() {
		var named;
		if(this.injectionName != null && this.injectionName != "") named = " named \"" + this.injectionName + "\" and"; else named = "";
		return "rule: [" + Type.getClassName(this.request) + ("]" + named + " mapped to [" + Std.string(this.result) + "]");
	}
	,__class__: minject_InjectionConfig
};
var minject_Injector = function() {
	this.injectionConfigs = new haxe_ds_StringMap();
	this.injecteeDescriptions = new minject_ClassMap();
	this.attendedToInjectees = new minject_InjecteeSet();
};
$hxClasses["minject.Injector"] = minject_Injector;
minject_Injector.__name__ = ["minject","Injector"];
minject_Injector.prototype = {
	mapValue: function(whenAskedFor,useValue,named) {
		if(named == null) named = "";
		var config = this.getMapping(whenAskedFor,named);
		config.setResult(new minject_result_InjectValueResult(useValue));
		return config;
	}
	,mapSingleton: function(whenAskedFor,named) {
		if(named == null) named = "";
		return this.mapSingletonOf(whenAskedFor,whenAskedFor,named);
	}
	,mapSingletonOf: function(whenAskedFor,useSingletonOf,named) {
		if(named == null) named = "";
		var config = this.getMapping(whenAskedFor,named);
		config.setResult(new minject_result_InjectSingletonResult(useSingletonOf));
		return config;
	}
	,getMapping: function(forClass,named) {
		if(named == null) named = "";
		var requestName = this.getClassName(forClass) + "#" + named;
		if(this.injectionConfigs.exists(requestName)) return this.injectionConfigs.get(requestName);
		var config = new minject_InjectionConfig(forClass,named);
		this.injectionConfigs.set(requestName,config);
		return config;
	}
	,injectInto: function(target) {
		if(this.attendedToInjectees.contains(target)) return;
		this.attendedToInjectees.add(target);
		var targetClass = Type.getClass(target);
		var injecteeDescription = null;
		if(this.injecteeDescriptions.exists(targetClass)) injecteeDescription = this.injecteeDescriptions.get(targetClass); else injecteeDescription = this.getInjectionPoints(targetClass);
		if(injecteeDescription == null) return;
		var injectionPoints = injecteeDescription.injectionPoints;
		var length = injectionPoints.length;
		var _g = 0;
		while(_g < length) {
			var i = _g++;
			var injectionPoint = injectionPoints[i];
			injectionPoint.applyInjection(target,this);
		}
	}
	,construct: function(theClass) {
		var injecteeDescription;
		if(this.injecteeDescriptions.exists(theClass)) injecteeDescription = this.injecteeDescriptions.get(theClass); else injecteeDescription = this.getInjectionPoints(theClass);
		var injectionPoint = injecteeDescription.ctor;
		return injectionPoint.applyInjection(theClass,this);
	}
	,instantiate: function(theClass) {
		var instance = this.construct(theClass);
		this.injectInto(instance);
		return instance;
	}
	,unmap: function(theClass,named) {
		if(named == null) named = "";
		var mapping = this.getConfigurationForRequest(theClass,named);
		if(mapping == null) throw new js__$Boot_HaxeError("Error while removing an injector mapping: No mapping defined for class " + this.getClassName(theClass) + ", named \"" + named + "\"");
		mapping.setResult(null);
	}
	,hasMapping: function(forClass,named) {
		if(named == null) named = "";
		var mapping = this.getConfigurationForRequest(forClass,named);
		if(mapping == null) return false;
		return mapping.hasResponse(this);
	}
	,createChildInjector: function() {
		var injector = new minject_Injector();
		injector.set_parentInjector(this);
		return injector;
	}
	,getAncestorMapping: function(forClass,named) {
		var parent = this.parentInjector;
		while(parent != null) {
			var parentConfig = parent.getConfigurationForRequest(forClass,named,false);
			if(parentConfig != null && parentConfig.hasOwnResponse()) return parentConfig;
			parent = parent.parentInjector;
		}
		return null;
	}
	,getInjectionPoints: function(forClass) {
		var typeMeta = haxe_rtti_Meta.getType(forClass);
		if(typeMeta != null && Object.prototype.hasOwnProperty.call(typeMeta,"interface")) throw new js__$Boot_HaxeError("Interfaces can't be used as instantiatable classes.");
		var fieldsMeta = this.getFields(forClass);
		var ctorInjectionPoint = null;
		var injectionPoints = [];
		var postConstructMethodPoints = [];
		var _g = 0;
		var _g1 = Reflect.fields(fieldsMeta);
		while(_g < _g1.length) {
			var field = _g1[_g];
			++_g;
			var fieldMeta = Reflect.field(fieldsMeta,field);
			var inject = Object.prototype.hasOwnProperty.call(fieldMeta,"inject");
			var post = Object.prototype.hasOwnProperty.call(fieldMeta,"post");
			var type = Reflect.field(fieldMeta,"type");
			var args = Reflect.field(fieldMeta,"args");
			if(field == "_") {
				if(args.length > 0) ctorInjectionPoint = new minject_point_ConstructorInjectionPoint(fieldMeta.args);
			} else if(Object.prototype.hasOwnProperty.call(fieldMeta,"args")) {
				if(inject) {
					var point = new minject_point_MethodInjectionPoint(field,fieldMeta.args);
					injectionPoints.push(point);
				} else if(post) {
					var order;
					if(fieldMeta.post == null) order = 0; else order = fieldMeta.post[0];
					var point1 = new minject_point_PostConstructInjectionPoint(field,order);
					postConstructMethodPoints.push(point1);
				}
			} else if(type != null) {
				var name;
				if(fieldMeta.inject == null) name = null; else name = fieldMeta.inject[0];
				var point2 = new minject_point_PropertyInjectionPoint(field,fieldMeta.type[0],name);
				injectionPoints.push(point2);
			}
		}
		if(postConstructMethodPoints.length > 0) {
			postConstructMethodPoints.sort(function(a,b) {
				return a.order - b.order;
			});
			var _g2 = 0;
			while(_g2 < postConstructMethodPoints.length) {
				var point3 = postConstructMethodPoints[_g2];
				++_g2;
				injectionPoints.push(point3);
			}
		}
		if(ctorInjectionPoint == null) ctorInjectionPoint = new minject_point_NoParamsConstructorInjectionPoint();
		var injecteeDescription = new minject_InjecteeDescription(ctorInjectionPoint,injectionPoints);
		this.injecteeDescriptions.set(forClass,injecteeDescription);
		return injecteeDescription;
	}
	,getConfigurationForRequest: function(forClass,named,traverseAncestors) {
		if(traverseAncestors == null) traverseAncestors = true;
		var requestName = this.getClassName(forClass) + "#" + named;
		if(!this.injectionConfigs.exists(requestName)) {
			if(traverseAncestors && this.parentInjector != null && this.parentInjector.hasMapping(forClass,named)) return this.getAncestorMapping(forClass,named);
			return null;
		}
		return this.injectionConfigs.get(requestName);
	}
	,set_parentInjector: function(value) {
		if(this.parentInjector != null && value == null) this.attendedToInjectees = new minject_InjecteeSet();
		this.parentInjector = value;
		if(this.parentInjector != null) this.attendedToInjectees = this.parentInjector.attendedToInjectees;
		return this.parentInjector;
	}
	,getClassName: function(forClass) {
		if(forClass == null) return "Dynamic"; else return Type.getClassName(forClass);
	}
	,getFields: function(type) {
		var meta = { };
		while(type != null) {
			var typeMeta = haxe_rtti_Meta.getFields(type);
			var _g = 0;
			var _g1 = Reflect.fields(typeMeta);
			while(_g < _g1.length) {
				var field = _g1[_g];
				++_g;
				Reflect.setField(meta,field,Reflect.field(typeMeta,field));
			}
			type = Type.getSuperClass(type);
		}
		return meta;
	}
	,__class__: minject_Injector
	,__properties__: {set_parentInjector:"set_parentInjector"}
};
var minject_InjecteeSet = function() {
};
$hxClasses["minject.InjecteeSet"] = minject_InjecteeSet;
minject_InjecteeSet.__name__ = ["minject","InjecteeSet"];
minject_InjecteeSet.prototype = {
	add: function(value) {
		value.__injected__ = true;
	}
	,contains: function(value) {
		return value.__injected__ == true;
	}
	,remove: function(value) {
		Reflect.deleteField(value,"__injected__");
	}
	,__class__: minject_InjecteeSet
};
var minject_InjecteeDescription = function(ctor,injectionPoints) {
	this.ctor = ctor;
	this.injectionPoints = injectionPoints;
};
$hxClasses["minject.InjecteeDescription"] = minject_InjecteeDescription;
minject_InjecteeDescription.__name__ = ["minject","InjecteeDescription"];
minject_InjecteeDescription.prototype = {
	__class__: minject_InjecteeDescription
};
var minject_Reflector = function() {
};
$hxClasses["minject.Reflector"] = minject_Reflector;
minject_Reflector.__name__ = ["minject","Reflector"];
minject_Reflector.prototype = {
	classExtendsOrImplements: function(classOrClassName,superClass) {
		var actualClass = null;
		if(js_Boot.__instanceof(classOrClassName,Class)) actualClass = js_Boot.__cast(classOrClassName , Class); else if(typeof(classOrClassName) == "string") try {
			actualClass = Type.resolveClass(js_Boot.__cast(classOrClassName , String));
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			throw new js__$Boot_HaxeError("The class name " + Std.string(classOrClassName) + " is not valid because of " + Std.string(e) + "\n" + Std.string(e.getStackTrace()));
		}
		if(actualClass == null) throw new js__$Boot_HaxeError("The parameter classOrClassName must be a Class or fully qualified class name.");
		var classInstance = Type.createEmptyInstance(actualClass);
		return js_Boot.__instanceof(classInstance,superClass);
	}
	,getFQCN: function(value) {
		var fqcn;
		if(typeof(value) == "string") return js_Boot.__cast(value , String);
		return Type.getClassName(value);
	}
	,__class__: minject_Reflector
};
var minject_point_InjectionPoint = function() { };
$hxClasses["minject.point.InjectionPoint"] = minject_point_InjectionPoint;
minject_point_InjectionPoint.__name__ = ["minject","point","InjectionPoint"];
minject_point_InjectionPoint.prototype = {
	__class__: minject_point_InjectionPoint
};
var minject_point_MethodInjectionPoint = function(name,args) {
	this.name = name;
	this.args = args;
	var _g = 0;
	while(_g < args.length) {
		var arg = args[_g];
		++_g;
		if(arg.type == "Dynamic") throw new js__$Boot_HaxeError("Error in method definition of injectee. Required parameters can't have non class type.");
	}
};
$hxClasses["minject.point.MethodInjectionPoint"] = minject_point_MethodInjectionPoint;
minject_point_MethodInjectionPoint.__name__ = ["minject","point","MethodInjectionPoint"];
minject_point_MethodInjectionPoint.__interfaces__ = [minject_point_InjectionPoint];
minject_point_MethodInjectionPoint.prototype = {
	applyInjection: function(target,injector) {
		Reflect.callMethod(target,Reflect.field(target,this.name),this.gatherArgs(target,injector));
		return target;
	}
	,gatherArgs: function(target,injector) {
		var values = [];
		var _g = 0;
		var _g1 = this.args;
		while(_g < _g1.length) {
			var arg = _g1[_g];
			++_g;
			var name;
			if(arg.name == null) name = ""; else name = arg.name;
			var config = injector.getMapping(Type.resolveClass(arg.type),arg.name);
			var injection = config.getResponse(injector);
			if(injection == null && !arg.opt) {
				var targetName = Type.getClassName(Type.getClass(target));
				var requestName = Type.getClassName(config.request);
				throw new js__$Boot_HaxeError("Injector is missing a rule to handle injection into target " + targetName + ". " + ("Target dependency: " + requestName + ", method: " + name + ", named: ") + arg.name);
			}
			values.push(injection);
		}
		return values;
	}
	,__class__: minject_point_MethodInjectionPoint
};
var minject_point_ConstructorInjectionPoint = function(args) {
	minject_point_MethodInjectionPoint.call(this,"new",args);
};
$hxClasses["minject.point.ConstructorInjectionPoint"] = minject_point_ConstructorInjectionPoint;
minject_point_ConstructorInjectionPoint.__name__ = ["minject","point","ConstructorInjectionPoint"];
minject_point_ConstructorInjectionPoint.__super__ = minject_point_MethodInjectionPoint;
minject_point_ConstructorInjectionPoint.prototype = $extend(minject_point_MethodInjectionPoint.prototype,{
	applyInjection: function(target,injector) {
		return Type.createInstance(target,this.gatherArgs(target,injector));
	}
	,__class__: minject_point_ConstructorInjectionPoint
});
var minject_point_NoParamsConstructorInjectionPoint = function() {
};
$hxClasses["minject.point.NoParamsConstructorInjectionPoint"] = minject_point_NoParamsConstructorInjectionPoint;
minject_point_NoParamsConstructorInjectionPoint.__name__ = ["minject","point","NoParamsConstructorInjectionPoint"];
minject_point_NoParamsConstructorInjectionPoint.__interfaces__ = [minject_point_InjectionPoint];
minject_point_NoParamsConstructorInjectionPoint.prototype = {
	applyInjection: function(target,injector) {
		return Type.createInstance(target,[]);
	}
	,__class__: minject_point_NoParamsConstructorInjectionPoint
};
var minject_point_PostConstructInjectionPoint = function(name,order) {
	if(order == null) order = 0;
	this.name = name;
	this.order = order;
};
$hxClasses["minject.point.PostConstructInjectionPoint"] = minject_point_PostConstructInjectionPoint;
minject_point_PostConstructInjectionPoint.__name__ = ["minject","point","PostConstructInjectionPoint"];
minject_point_PostConstructInjectionPoint.__interfaces__ = [minject_point_InjectionPoint];
minject_point_PostConstructInjectionPoint.prototype = {
	applyInjection: function(target,injector) {
		Reflect.callMethod(target,Reflect.field(target,this.name),[]);
		return target;
	}
	,__class__: minject_point_PostConstructInjectionPoint
};
var minject_point_PropertyInjectionPoint = function(name,type,injectionName) {
	this.name = name;
	this.type = type;
	this.injectionName = injectionName;
};
$hxClasses["minject.point.PropertyInjectionPoint"] = minject_point_PropertyInjectionPoint;
minject_point_PropertyInjectionPoint.__name__ = ["minject","point","PropertyInjectionPoint"];
minject_point_PropertyInjectionPoint.__interfaces__ = [minject_point_InjectionPoint];
minject_point_PropertyInjectionPoint.prototype = {
	applyInjection: function(target,injector) {
		var injectionConfig = injector.getMapping(Type.resolveClass(this.type),this.injectionName);
		var injection = injectionConfig.getResponse(injector);
		if(injection == null) throw new js__$Boot_HaxeError("Injector is missing a rule to handle injection into property \"" + this.name + "\" " + ("of object \"" + Std.string(target) + "\". Target dependency: \"" + this.type + "\", named \"" + this.injectionName + "\""));
		Reflect.setProperty(target,this.name,injection);
		return target;
	}
	,__class__: minject_point_PropertyInjectionPoint
};
var minject_result_InjectionResult = function() {
};
$hxClasses["minject.result.InjectionResult"] = minject_result_InjectionResult;
minject_result_InjectionResult.__name__ = ["minject","result","InjectionResult"];
minject_result_InjectionResult.prototype = {
	getResponse: function(injector) {
		return null;
	}
	,toString: function() {
		return "";
	}
	,__class__: minject_result_InjectionResult
};
var minject_result_InjectSingletonResult = function(responseType) {
	minject_result_InjectionResult.call(this);
	this.responseType = responseType;
};
$hxClasses["minject.result.InjectSingletonResult"] = minject_result_InjectSingletonResult;
minject_result_InjectSingletonResult.__name__ = ["minject","result","InjectSingletonResult"];
minject_result_InjectSingletonResult.__super__ = minject_result_InjectionResult;
minject_result_InjectSingletonResult.prototype = $extend(minject_result_InjectionResult.prototype,{
	getResponse: function(injector) {
		if(this.response == null) {
			this.response = this.createResponse(injector);
			injector.injectInto(this.response);
		}
		return this.response;
	}
	,createResponse: function(injector) {
		return injector.construct(this.responseType);
	}
	,toString: function() {
		return "singleton " + Type.getClassName(this.responseType);
	}
	,__class__: minject_result_InjectSingletonResult
});
var minject_result_InjectValueResult = function(value) {
	minject_result_InjectionResult.call(this);
	this.value = value;
};
$hxClasses["minject.result.InjectValueResult"] = minject_result_InjectValueResult;
minject_result_InjectValueResult.__name__ = ["minject","result","InjectValueResult"];
minject_result_InjectValueResult.__super__ = minject_result_InjectionResult;
minject_result_InjectValueResult.prototype = $extend(minject_result_InjectionResult.prototype,{
	getResponse: function(injector) {
		return this.value;
	}
	,toString: function() {
		return "instance of " + Type.getClassName(Type.getClass(this.value));
	}
	,__class__: minject_result_InjectValueResult
});
var mmvc_api_ICommandMap = function() { };
$hxClasses["mmvc.api.ICommandMap"] = mmvc_api_ICommandMap;
mmvc_api_ICommandMap.__name__ = ["mmvc","api","ICommandMap"];
var mmvc_api_IMediatorMap = function() { };
$hxClasses["mmvc.api.IMediatorMap"] = mmvc_api_IMediatorMap;
mmvc_api_IMediatorMap.__name__ = ["mmvc","api","IMediatorMap"];
mmvc_api_IMediatorMap.prototype = {
	__class__: mmvc_api_IMediatorMap
};
var mmvc_api_ITriggerMap = function() { };
$hxClasses["mmvc.api.ITriggerMap"] = mmvc_api_ITriggerMap;
mmvc_api_ITriggerMap.__name__ = ["mmvc","api","ITriggerMap"];
mmvc_api_ITriggerMap.prototype = {
	__class__: mmvc_api_ITriggerMap
};
var mmvc_api_IViewMap = function() { };
$hxClasses["mmvc.api.IViewMap"] = mmvc_api_IViewMap;
mmvc_api_IViewMap.__name__ = ["mmvc","api","IViewMap"];
var mmvc_base_CommandMap = function(injector) {
	this.injector = injector;
	this.signalMap = new haxe_ds_ObjectMap();
	this.signalClassMap = new minject_ClassMap();
	this.detainedCommands = new haxe_ds_ObjectMap();
};
$hxClasses["mmvc.base.CommandMap"] = mmvc_base_CommandMap;
mmvc_base_CommandMap.__name__ = ["mmvc","base","CommandMap"];
mmvc_base_CommandMap.__interfaces__ = [mmvc_api_ICommandMap];
mmvc_base_CommandMap.prototype = {
	__class__: mmvc_base_CommandMap
};
var mmvc_base_ContextError = function(message,id) {
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.id = id;
};
$hxClasses["mmvc.base.ContextError"] = mmvc_base_ContextError;
mmvc_base_ContextError.__name__ = ["mmvc","base","ContextError"];
mmvc_base_ContextError.prototype = {
	__class__: mmvc_base_ContextError
};
var mmvc_base_ViewMapBase = function(contextView,injector) {
	this.viewListenerCount = 0;
	this.set_enabled(true);
	this.injector = injector;
	this.set_contextView(contextView);
};
$hxClasses["mmvc.base.ViewMapBase"] = mmvc_base_ViewMapBase;
mmvc_base_ViewMapBase.__name__ = ["mmvc","base","ViewMapBase"];
mmvc_base_ViewMapBase.prototype = {
	set_contextView: function(value) {
		if(value != this.contextView) {
			this.removeListeners();
			this.contextView = value;
			if(this.viewListenerCount > 0) this.addListeners();
		}
		return this.contextView;
	}
	,set_enabled: function(value) {
		if(value != this.enabled) {
			this.removeListeners();
			this.enabled = value;
			if(this.viewListenerCount > 0) this.addListeners();
		}
		return value;
	}
	,addListeners: function() {
	}
	,removeListeners: function() {
	}
	,__class__: mmvc_base_ViewMapBase
	,__properties__: {set_enabled:"set_enabled",set_contextView:"set_contextView"}
};
var mmvc_base_MediatorMap = function(contextView,injector,reflector) {
	mmvc_base_ViewMapBase.call(this,contextView,injector);
	this.reflector = reflector;
	this.mediatorByView = new haxe_ds_ObjectMap();
	this.mappingConfigByView = new haxe_ds_ObjectMap();
	this.mappingConfigByViewClassName = new haxe_ds_StringMap();
	this.mediatorsMarkedForRemoval = new haxe_ds_ObjectMap();
	this.hasMediatorsMarkedForRemoval = false;
};
$hxClasses["mmvc.base.MediatorMap"] = mmvc_base_MediatorMap;
mmvc_base_MediatorMap.__name__ = ["mmvc","base","MediatorMap"];
mmvc_base_MediatorMap.__interfaces__ = [mmvc_api_IMediatorMap];
mmvc_base_MediatorMap.__super__ = mmvc_base_ViewMapBase;
mmvc_base_MediatorMap.prototype = $extend(mmvc_base_ViewMapBase.prototype,{
	mapView: function(viewClassOrName,mediatorClass,injectViewAs,autoCreate,autoRemove) {
		if(autoRemove == null) autoRemove = true;
		if(autoCreate == null) autoCreate = true;
		var viewClassName = this.reflector.getFQCN(viewClassOrName);
		if(this.mappingConfigByViewClassName.get(viewClassName) != null) throw new js__$Boot_HaxeError(new mmvc_base_ContextError("Mediator Class has already been mapped to a View Class in this context - " + Std.string(mediatorClass)));
		if(this.reflector.classExtendsOrImplements(mediatorClass,mmvc_api_IMediator) == false) throw new js__$Boot_HaxeError(new mmvc_base_ContextError("Mediator Class does not implement IMediator - " + Std.string(mediatorClass)));
		var config = new mmvc_base_MappingConfig();
		config.mediatorClass = mediatorClass;
		config.autoCreate = autoCreate;
		config.autoRemove = autoRemove;
		if(injectViewAs) {
			if((injectViewAs instanceof Array) && injectViewAs.__enum__ == null) {
				var _this;
				_this = js_Boot.__cast(injectViewAs , Array);
				config.typedViewClasses = _this.slice();
			} else if(js_Boot.__instanceof(injectViewAs,Class)) config.typedViewClasses = [injectViewAs];
		} else if(js_Boot.__instanceof(viewClassOrName,Class)) config.typedViewClasses = [viewClassOrName];
		this.mappingConfigByViewClassName.set(viewClassName,config);
		if(autoCreate || autoRemove) {
			this.viewListenerCount++;
			if(this.viewListenerCount == 1) this.addListeners();
		}
		if(autoCreate && this.contextView != null && viewClassName == Type.getClassName(Type.getClass(this.contextView))) this.createMediatorUsing(this.contextView,viewClassName,config);
	}
	,registerMediator: function(viewComponent,mediator) {
		this.mediatorByView.set(viewComponent,mediator);
		var mapping;
		var key = Type.getClassName(Type.getClass(viewComponent));
		mapping = this.mappingConfigByViewClassName.get(key);
		this.mappingConfigByView.set(viewComponent,mapping);
		mediator.setViewComponent(viewComponent);
		mediator.preRegister();
	}
	,removeMediator: function(mediator) {
		if(mediator != null) {
			var viewComponent = mediator.getViewComponent();
			this.mediatorByView.remove(viewComponent);
			this.mappingConfigByView.remove(viewComponent);
			mediator.preRemove();
			mediator.setViewComponent(null);
		}
		return mediator;
	}
	,removeMediatorByView: function(viewComponent) {
		var mediator = this.removeMediator(this.retrieveMediator(viewComponent));
		this.injector.attendedToInjectees.remove(mediator);
		return mediator;
	}
	,retrieveMediator: function(viewComponent) {
		return this.mediatorByView.get(viewComponent);
	}
	,addListeners: function() {
		if(this.contextView != null && this.enabled) {
			this.contextView.viewAdded = $bind(this,this.onViewAdded);
			this.contextView.viewRemoved = $bind(this,this.onViewRemoved);
		}
	}
	,removeListeners: function() {
		if(this.contextView != null) {
			this.contextView.viewAdded = null;
			this.contextView.viewRemoved = null;
		}
	}
	,onViewAdded: function(view) {
		if(this.mediatorsMarkedForRemoval.get(view) != null) {
			this.mediatorsMarkedForRemoval.remove(view);
			return;
		}
		var viewClassName = Type.getClassName(Type.getClass(view));
		var config = this.mappingConfigByViewClassName.get(viewClassName);
		if(config != null && config.autoCreate) this.createMediatorUsing(view,viewClassName,config);
	}
	,onViewRemoved: function(view) {
		var config = this.mappingConfigByView.get(view);
		if(config != null && config.autoRemove) this.removeMediatorByView(view);
	}
	,createMediatorUsing: function(viewComponent,viewClassName,config) {
		var mediator = this.mediatorByView.get(viewComponent);
		if(mediator == null) {
			if(viewClassName == null) viewClassName = Type.getClassName(Type.getClass(viewComponent));
			if(config == null) config = this.mappingConfigByViewClassName.get(viewClassName);
			if(config != null) {
				var _g = 0;
				var _g1 = config.typedViewClasses;
				while(_g < _g1.length) {
					var claxx = _g1[_g];
					++_g;
					this.injector.mapValue(claxx,viewComponent);
				}
				mediator = this.injector.instantiate(config.mediatorClass);
				var _g2 = 0;
				var _g11 = config.typedViewClasses;
				while(_g2 < _g11.length) {
					var clazz = _g11[_g2];
					++_g2;
					this.injector.unmap(clazz);
				}
				this.registerMediator(viewComponent,mediator);
			}
		}
		return mediator;
	}
	,__class__: mmvc_base_MediatorMap
});
var mmvc_base_MappingConfig = function() {
};
$hxClasses["mmvc.base.MappingConfig"] = mmvc_base_MappingConfig;
mmvc_base_MappingConfig.__name__ = ["mmvc","base","MappingConfig"];
mmvc_base_MappingConfig.prototype = {
	__class__: mmvc_base_MappingConfig
};
var mmvc_base_TriggerMap = function(injector) {
	this.injector = injector;
};
$hxClasses["mmvc.base.TriggerMap"] = mmvc_base_TriggerMap;
mmvc_base_TriggerMap.__name__ = ["mmvc","base","TriggerMap"];
mmvc_base_TriggerMap.__interfaces__ = [mmvc_api_ITriggerMap];
mmvc_base_TriggerMap.prototype = {
	dispatch: function(trigger) {
		if(this.isClassInstance(trigger)) return this.dispatchClass(trigger);
		if(this.isString(trigger)) return this.dispatchString(trigger);
		if(this.isEnumValue(trigger)) return this.dispatchEnumValue(trigger);
		throw new js__$Boot_HaxeError("Unmapping type " + Std.string(Type["typeof"](trigger)) + " is not supported.");
	}
	,mapClass: function(trigger,command) {
		if(this.classToCommand == null) this.classToCommand = new haxe_ds_StringMap();
		var key = Type.getClassName(trigger);
		var list = this.classToCommand.get(key);
		if(list == null) this.classToCommand.set(key,[command]); else list.push(command);
	}
	,dispatchClass: function(trigger) {
		if(this.classToCommand == null) return;
		var triggerClass;
		if(trigger == null) triggerClass = null; else triggerClass = js_Boot.getClass(trigger);
		var key = Type.getClassName(triggerClass);
		var list = this.classToCommand.get(key);
		if(list != null) {
			var _g = 0;
			while(_g < list.length) {
				var commandClass = list[_g];
				++_g;
				this.invokeCommand(trigger,triggerClass,commandClass);
			}
		}
	}
	,dispatchString: function(trigger) {
		if(this.stringToCommand == null) return;
		var list = this.stringToCommand.get(trigger);
		if(list != null) {
			var _g = 0;
			while(_g < list.length) {
				var commandClass = list[_g];
				++_g;
				this.invokeCommand(trigger,String,commandClass);
			}
		}
	}
	,dispatchEnumValue: function(trigger) {
		if(this.enumValueToCommand == null) return;
		var triggerClass;
		if(trigger == null) triggerClass = null; else triggerClass = js_Boot.getClass(trigger);
		var list = this.enumValueToCommand.get(trigger);
		if(list != null) {
			var _g = 0;
			while(_g < list.length) {
				var commandClass = list[_g];
				++_g;
				this.invokeCommand(trigger,triggerClass,commandClass);
			}
		}
	}
	,invokeCommand: function(trigger,triggerClass,commandClass) {
		if(commandClass == null) return;
		var command = this.injector.instantiate(commandClass);
		if(js_Boot.__instanceof(command,mmvc_impl_TriggerCommand)) {
			var triggerCommand = command;
			triggerCommand.trigger = trigger;
		}
		command.execute();
	}
	,isString: function(source) {
		return typeof(source) == "string";
	}
	,isEnumValue: function(source) {
		return Reflect.isEnumValue(source);
	}
	,isClassInstance: function(source) {
		return Type.getClass(source) != null && !(typeof(source) == "string");
	}
	,__class__: mmvc_base_TriggerMap
};
var mmvc_base_ViewMap = function(contextView,injector) {
	mmvc_base_ViewMapBase.call(this,contextView,injector);
	this.mappedPackages = [];
	this.mappedTypes = new minject_ClassMap();
	this.injectedViews = new haxe_ds_ObjectMap();
};
$hxClasses["mmvc.base.ViewMap"] = mmvc_base_ViewMap;
mmvc_base_ViewMap.__name__ = ["mmvc","base","ViewMap"];
mmvc_base_ViewMap.__interfaces__ = [mmvc_api_IViewMap];
mmvc_base_ViewMap.__super__ = mmvc_base_ViewMapBase;
mmvc_base_ViewMap.prototype = $extend(mmvc_base_ViewMapBase.prototype,{
	addListeners: function() {
		if(this.contextView == null || !this.enabled) return;
		this.contextView.viewAdded = $bind(this,this.onViewAdded);
		this.contextView.viewRemoved = $bind(this,this.onViewAdded);
	}
	,removeListeners: function() {
		if(this.contextView == null) return;
		this.contextView.viewAdded = null;
		this.contextView.viewRemoved = null;
	}
	,onViewAdded: function(view) {
		if(this.injectedViews.exists(view)) return;
		var $it0 = this.mappedTypes.iterator();
		while( $it0.hasNext() ) {
			var type = $it0.next();
			if(js_Boot.__instanceof(view,type)) {
				this.injectInto(view);
				return;
			}
		}
		var len = this.mappedPackages.length;
		if(len > 0) {
			var className = Type.getClassName(Type.getClass(view));
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				var packageName = this.mappedPackages[i];
				if(className.indexOf(packageName) == 0) {
					this.injectInto(view);
					return;
				}
			}
		}
	}
	,injectInto: function(view) {
		this.injector.injectInto(view);
		this.injectedViews.set(view,true);
	}
	,__class__: mmvc_base_ViewMap
});
var msignal_Signal = function() { };
$hxClasses["msignal.Signal"] = msignal_Signal;
msignal_Signal.__name__ = ["msignal","Signal"];
msignal_Signal.prototype = {
	addOnce: function(listener) {
		return this.registerListener(listener,true);
	}
	,remove: function(listener) {
		var slot = this.slots.find(listener);
		if(slot == null) return null;
		this.slots = this.slots.filterNot(listener);
		return slot;
	}
	,registerListener: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		if(this.registrationPossible(listener,once)) {
			var newSlot = this.createSlot(listener,once,priority);
			if(!this.priorityBased && priority != 0) this.priorityBased = true;
			if(!this.priorityBased && priority == 0) this.slots = this.slots.prepend(newSlot); else this.slots = this.slots.insertWithPriority(newSlot);
			return newSlot;
		}
		return this.slots.find(listener);
	}
	,registrationPossible: function(listener,once) {
		if(!this.slots.nonEmpty) return true;
		var existingSlot = this.slots.find(listener);
		if(existingSlot == null) return true;
		if(existingSlot.once != once) throw new js__$Boot_HaxeError("You cannot addOnce() then add() the same listener without removing the relationship first.");
		return false;
	}
	,createSlot: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		return null;
	}
	,__class__: msignal_Signal
};
var msignal_Signal0 = function() { };
$hxClasses["msignal.Signal0"] = msignal_Signal0;
msignal_Signal0.__name__ = ["msignal","Signal0"];
msignal_Signal0.__super__ = msignal_Signal;
msignal_Signal0.prototype = $extend(msignal_Signal.prototype,{
	dispatch: function() {
		var slotsToProcess = this.slots;
		while(slotsToProcess.nonEmpty) {
			slotsToProcess.head.execute();
			slotsToProcess = slotsToProcess.tail;
		}
	}
	,createSlot: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		return new msignal_Slot0(this,listener,once,priority);
	}
	,__class__: msignal_Signal0
});
var msignal_Slot = function(signal,listener,once,priority) {
	if(priority == null) priority = 0;
	if(once == null) once = false;
	this.signal = signal;
	this.set_listener(listener);
	this.once = once;
	this.priority = priority;
	this.enabled = true;
};
$hxClasses["msignal.Slot"] = msignal_Slot;
msignal_Slot.__name__ = ["msignal","Slot"];
msignal_Slot.prototype = {
	remove: function() {
		this.signal.remove(this.listener);
	}
	,set_listener: function(value) {
		if(value == null) throw new js__$Boot_HaxeError("listener cannot be null");
		return this.listener = value;
	}
	,__class__: msignal_Slot
	,__properties__: {set_listener:"set_listener"}
};
var msignal_Slot0 = function(signal,listener,once,priority) {
	if(priority == null) priority = 0;
	if(once == null) once = false;
	msignal_Slot.call(this,signal,listener,once,priority);
};
$hxClasses["msignal.Slot0"] = msignal_Slot0;
msignal_Slot0.__name__ = ["msignal","Slot0"];
msignal_Slot0.__super__ = msignal_Slot;
msignal_Slot0.prototype = $extend(msignal_Slot.prototype,{
	execute: function() {
		if(!this.enabled) return;
		if(this.once) this.remove();
		this.listener();
	}
	,__class__: msignal_Slot0
});
var msignal_SlotList = function(head,tail) {
	this.nonEmpty = false;
	if(head == null && tail == null) {
		if(msignal_SlotList.NIL != null) throw new js__$Boot_HaxeError("Parameters head and tail are null. Use the NIL element instead.");
		this.nonEmpty = false;
	} else if(head == null) throw new js__$Boot_HaxeError("Parameter head cannot be null."); else {
		this.head = head;
		if(tail == null) this.tail = msignal_SlotList.NIL; else this.tail = tail;
		this.nonEmpty = true;
	}
};
$hxClasses["msignal.SlotList"] = msignal_SlotList;
msignal_SlotList.__name__ = ["msignal","SlotList"];
msignal_SlotList.prototype = {
	prepend: function(slot) {
		return new msignal_SlotList(slot,this);
	}
	,insertWithPriority: function(slot) {
		if(!this.nonEmpty) return new msignal_SlotList(slot);
		var priority = slot.priority;
		if(priority >= this.head.priority) return this.prepend(slot);
		var wholeClone = new msignal_SlotList(this.head);
		var subClone = wholeClone;
		var current = this.tail;
		while(current.nonEmpty) {
			if(priority > current.head.priority) {
				subClone.tail = current.prepend(slot);
				return wholeClone;
			}
			subClone = subClone.tail = new msignal_SlotList(current.head);
			current = current.tail;
		}
		subClone.tail = new msignal_SlotList(slot);
		return wholeClone;
	}
	,filterNot: function(listener) {
		if(!this.nonEmpty || listener == null) return this;
		if(Reflect.compareMethods(this.head.listener,listener)) return this.tail;
		var wholeClone = new msignal_SlotList(this.head);
		var subClone = wholeClone;
		var current = this.tail;
		while(current.nonEmpty) {
			if(Reflect.compareMethods(current.head.listener,listener)) {
				subClone.tail = current.tail;
				return wholeClone;
			}
			subClone = subClone.tail = new msignal_SlotList(current.head);
			current = current.tail;
		}
		return this;
	}
	,find: function(listener) {
		if(!this.nonEmpty) return null;
		var p = this;
		while(p.nonEmpty) {
			if(Reflect.compareMethods(p.head.listener,listener)) return p.head;
			p = p.tail;
		}
		return null;
	}
	,__class__: msignal_SlotList
};
var utils_Common = function() { };
$hxClasses["utils.Common"] = utils_Common;
utils_Common.__name__ = ["utils","Common"];
var yloader_ILoader = function() { };
$hxClasses["yloader.ILoader"] = yloader_ILoader;
yloader_ILoader.__name__ = ["yloader","ILoader"];
var yloader_enums_Method = { __ename__ : true, __constructs__ : ["CONNECT","DELETE","GET","HEAD","OPTIONS","POST","PUT"] };
yloader_enums_Method.CONNECT = ["CONNECT",0];
yloader_enums_Method.CONNECT.toString = $estr;
yloader_enums_Method.CONNECT.__enum__ = yloader_enums_Method;
yloader_enums_Method.DELETE = ["DELETE",1];
yloader_enums_Method.DELETE.toString = $estr;
yloader_enums_Method.DELETE.__enum__ = yloader_enums_Method;
yloader_enums_Method.GET = ["GET",2];
yloader_enums_Method.GET.toString = $estr;
yloader_enums_Method.GET.__enum__ = yloader_enums_Method;
yloader_enums_Method.HEAD = ["HEAD",3];
yloader_enums_Method.HEAD.toString = $estr;
yloader_enums_Method.HEAD.__enum__ = yloader_enums_Method;
yloader_enums_Method.OPTIONS = ["OPTIONS",4];
yloader_enums_Method.OPTIONS.toString = $estr;
yloader_enums_Method.OPTIONS.__enum__ = yloader_enums_Method;
yloader_enums_Method.POST = ["POST",5];
yloader_enums_Method.POST.toString = $estr;
yloader_enums_Method.POST.__enum__ = yloader_enums_Method;
yloader_enums_Method.PUT = ["PUT",6];
yloader_enums_Method.PUT.toString = $estr;
yloader_enums_Method.PUT.__enum__ = yloader_enums_Method;
var yloader_impl_js_XMLHttpRequestLoader = function(request) {
	this.request = request;
};
$hxClasses["yloader.impl.js.XMLHttpRequestLoader"] = yloader_impl_js_XMLHttpRequestLoader;
yloader_impl_js_XMLHttpRequestLoader.__name__ = ["yloader","impl","js","XMLHttpRequestLoader"];
yloader_impl_js_XMLHttpRequestLoader.__interfaces__ = [yloader_ILoader];
yloader_impl_js_XMLHttpRequestLoader.prototype = {
	createXHR: function() {
		return js_Browser.createXMLHttpRequest();
	}
	,load: function() {
		this.cancel();
		this.xhr = this.createXHR();
		this.prepareXHR(this.xhr);
		this.xhr.send(this.request.data);
	}
	,cancel: function() {
		if(this.xhr != null) this.disposeXHR(this.xhr);
		this.xhr = null;
	}
	,getStatus: function(xhr) {
		var result;
		try {
			result = xhr.status;
		} catch( error ) {
			if (error instanceof js__$Boot_HaxeError) error = error.val;
			result = -1;
		}
		if(result == undefined) return -1; else return result;
	}
	,getHeaders: function(xhr) {
		var text = xhr.getAllResponseHeaders();
		var result = yloader_util_HeaderUtil.toParameters(text);
		return result;
	}
	,getResponse: function(xhr) {
		var status = this.getStatus(xhr);
		var success = this.isSuccess(status);
		var headers = this.getHeaders(xhr);
		return new yloader_valueObject_Response(success,xhr.responseText,status,xhr.statusText,headers);
	}
	,isSuccess: function(status) {
		return status >= 200 && status < 400;
	}
	,handleResponse: function(xhr) {
		if(this.onResponse == null) return;
		var response = this.getResponse(xhr);
		this.onResponse(response);
	}
	,dispose: function() {
		this.cancel();
	}
	,prepareXHR: function(xhr) {
		var method = Std.string(this.request.method);
		xhr.onreadystatechange = $bind(this,this.onXHRReadyStateChange);
		xhr.open(method,this.request.get_urlWithQuery(),true);
		if(this.withCredentials) xhr.withCredentials = true;
		var _g = 0;
		var _g1 = this.request.headers;
		while(_g < _g1.length) {
			var header = _g1[_g];
			++_g;
			xhr.setRequestHeader(header.name,header.value);
		}
	}
	,disposeXHR: function(xhr) {
		xhr.onreadystatechange = null;
		try {
			xhr.abort();
		} catch( error ) {
			if (error instanceof js__$Boot_HaxeError) error = error.val;
		}
	}
	,onXHRReadyStateChange: function(event) {
		if(this.xhr.readyState != 4) return;
		this.handleResponse(this.xhr);
		this.dispose();
	}
	,__class__: yloader_impl_js_XMLHttpRequestLoader
};
var yloader_util_HeaderUtil = function() { };
$hxClasses["yloader.util.HeaderUtil"] = yloader_util_HeaderUtil;
yloader_util_HeaderUtil.__name__ = ["yloader","util","HeaderUtil"];
yloader_util_HeaderUtil.toParameters = function(text) {
	var lines = text.split("\n");
	var result = [];
	var _g = 0;
	while(_g < lines.length) {
		var line = lines[_g];
		++_g;
		if(line == "") continue;
		var data = line.split(":");
		var name = StringTools.trim(data.shift());
		var value = StringTools.trim(data.join(":"));
		result.push(new yloader_valueObject_Parameter(name,value));
	}
	return result;
};
var yloader_util_ParameterUtil = function() { };
$hxClasses["yloader.util.ParameterUtil"] = yloader_util_ParameterUtil;
yloader_util_ParameterUtil.__name__ = ["yloader","util","ParameterUtil"];
yloader_util_ParameterUtil.urlEncode = function(list) {
	var result = null;
	var _g = 0;
	while(_g < list.length) {
		var item = list[_g];
		++_g;
		result = (result == null?"":result + "&") + encodeURIComponent(item.name) + "=" + encodeURIComponent(item.value);
	}
	return result;
};
var yloader_valueObject_Parameter = function(name,value) {
	this.name = name;
	this.value = value;
};
$hxClasses["yloader.valueObject.Parameter"] = yloader_valueObject_Parameter;
yloader_valueObject_Parameter.__name__ = ["yloader","valueObject","Parameter"];
yloader_valueObject_Parameter.prototype = {
	__class__: yloader_valueObject_Parameter
};
var yloader_valueObject_Request = function(url) {
	this.url = url;
	this.method = yloader_enums_Method.GET;
	this.headers = [];
	this.getParameters = [];
};
$hxClasses["yloader.valueObject.Request"] = yloader_valueObject_Request;
yloader_valueObject_Request.__name__ = ["yloader","valueObject","Request"];
yloader_valueObject_Request.prototype = {
	get_urlWithQuery: function() {
		var query = yloader_util_ParameterUtil.urlEncode(this.getParameters);
		var result = this.url;
		if(query != null) result += (result.indexOf("?") == -1?"?":"&") + query;
		return result;
	}
	,__class__: yloader_valueObject_Request
	,__properties__: {get_urlWithQuery:"get_urlWithQuery"}
};
var yloader_valueObject_Response = function(success,data,status,statusText,headers) {
	this.success = success;
	this.data = data;
	this.status = status;
	this.statusText = statusText;
	this.headers = headers;
};
$hxClasses["yloader.valueObject.Response"] = yloader_valueObject_Response;
yloader_valueObject_Response.__name__ = ["yloader","valueObject","Response"];
yloader_valueObject_Response.prototype = {
	__class__: yloader_valueObject_Response
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
$hxClasses.Math = Math;
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
$hxClasses.Array = Array;
Array.__name__ = ["Array"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
var __map_reserved = {}
msignal_SlotList.NIL = new msignal_SlotList(null,null);
mmvc_api_IContext.__meta__ = { obj : { 'interface' : null}};
mmvc_api_IViewContainer.__meta__ = { obj : { 'interface' : null}};
mmvc_api_IMediator.__meta__ = { obj : { 'interface' : null}};
mmvc_impl_Mediator.__meta__ = { fields : { injector : { type : ["minject.Injector"], inject : null}, contextView : { type : ["mmvc.api.IViewContainer"], inject : null}, mediatorMap : { type : ["mmvc.api.IMediatorMap"], inject : null}}};
haxe_IMap.__meta__ = { obj : { 'interface' : null}};
haxe_ds_ObjectMap.count = 0;
mmvc_api_ICommand.__meta__ = { obj : { 'interface' : null}};
mmvc_impl_TriggerCommand.__meta__ = { fields : { contextView : { type : ["mmvc.api.IViewContainer"], inject : null}, commandMap : { type : ["mmvc.api.ICommandMap"], inject : null}, injector : { type : ["minject.Injector"], inject : null}, mediatorMap : { type : ["mmvc.api.IMediatorMap"], inject : null}, triggerMap : { type : ["mmvc.api.ITriggerMap"], inject : null}}};
imageapp_command_LoadImageListCommand.__meta__ = { fields : { list : { type : ["imageapp.model.ImageList"], inject : null}, list2 : { type : ["imageapp.model.ImageList2"], inject : null}}};
mcore_data_Collection.__meta__ = { obj : { 'interface' : null}};
mmvc_impl_TriggerMediator.__meta__ = { fields : { triggerMap : { type : ["mmvc.api.ITriggerMap"], inject : null}}};
imageapp_view_ImageViewMediator.__meta__ = { fields : { imageList : { type : ["imageapp.model.ImageList"], inject : null}, imageList2 : { type : ["imageapp.model.ImageList2"], inject : null}}};
js_Boot.__toStr = {}.toString;
minject_point_InjectionPoint.__meta__ = { obj : { 'interface' : null}};
mmvc_api_ICommandMap.__meta__ = { obj : { 'interface' : null}};
mmvc_api_IMediatorMap.__meta__ = { obj : { 'interface' : null}};
mmvc_api_ITriggerMap.__meta__ = { obj : { 'interface' : null}};
mmvc_api_IViewMap.__meta__ = { obj : { 'interface' : null}};
utils_Common.Url = "http://localhost:8888/images.json";
yloader_ILoader.__meta__ = { obj : { 'interface' : null}};
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);

//# sourceMappingURL=index.js.map