gdjs.Scene1_452Code = {};
gdjs.Scene1_452Code.GDwhiteObjects1= [];
gdjs.Scene1_452Code.GDwhiteObjects2= [];
gdjs.Scene1_452Code.GDb1Objects1= [];
gdjs.Scene1_452Code.GDb1Objects2= [];
gdjs.Scene1_452Code.GDb2Objects1= [];
gdjs.Scene1_452Code.GDb2Objects2= [];
gdjs.Scene1_452Code.GDb3Objects1= [];
gdjs.Scene1_452Code.GDb3Objects2= [];
gdjs.Scene1_452Code.GDditoeduObjects1= [];
gdjs.Scene1_452Code.GDditoeduObjects2= [];
gdjs.Scene1_452Code.GDb5Objects1= [];
gdjs.Scene1_452Code.GDb5Objects2= [];
gdjs.Scene1_452Code.GDimg0Objects1= [];
gdjs.Scene1_452Code.GDimg0Objects2= [];
gdjs.Scene1_452Code.GDimg1Objects1= [];
gdjs.Scene1_452Code.GDimg1Objects2= [];
gdjs.Scene1_452Code.GDimg2Objects1= [];
gdjs.Scene1_452Code.GDimg2Objects2= [];
gdjs.Scene1_452Code.GDtap1Objects1= [];
gdjs.Scene1_452Code.GDtap1Objects2= [];
gdjs.Scene1_452Code.GDtap2Objects1= [];
gdjs.Scene1_452Code.GDtap2Objects2= [];
gdjs.Scene1_452Code.GDconObjects1= [];
gdjs.Scene1_452Code.GDconObjects2= [];


gdjs.Scene1_452Code.mapOfGDgdjs_46Scene1_95452Code_46GDb1Objects1Objects = Hashtable.newFrom({"b1": gdjs.Scene1_452Code.GDb1Objects1});
gdjs.Scene1_452Code.mapOfGDgdjs_46Scene1_95452Code_46GDb2Objects1Objects = Hashtable.newFrom({"b2": gdjs.Scene1_452Code.GDb2Objects1});
gdjs.Scene1_452Code.mapOfGDgdjs_46Scene1_95452Code_46GDb3Objects1Objects = Hashtable.newFrom({"b3": gdjs.Scene1_452Code.GDb3Objects1});
gdjs.Scene1_452Code.mapOfGDgdjs_46Scene1_95452Code_46GDb5Objects1Objects = Hashtable.newFrom({"b5": gdjs.Scene1_452Code.GDb5Objects1});
gdjs.Scene1_452Code.mapOfGDgdjs_46Scene1_95452Code_46GDtap1Objects1Objects = Hashtable.newFrom({"tap1": gdjs.Scene1_452Code.GDtap1Objects1});
gdjs.Scene1_452Code.mapOfGDgdjs_46Scene1_95452Code_46GDtap2Objects1Objects = Hashtable.newFrom({"tap2": gdjs.Scene1_452Code.GDtap2Objects1});
gdjs.Scene1_452Code.mapOfGDgdjs_46Scene1_95452Code_46GDconObjects1Objects = Hashtable.newFrom({"con": gdjs.Scene1_452Code.GDconObjects1});
gdjs.Scene1_452Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("con"), gdjs.Scene1_452Code.GDconObjects1);
gdjs.copyArray(runtimeScene.getObjects("img1"), gdjs.Scene1_452Code.GDimg1Objects1);
gdjs.copyArray(runtimeScene.getObjects("img2"), gdjs.Scene1_452Code.GDimg2Objects1);
gdjs.copyArray(runtimeScene.getObjects("tap2"), gdjs.Scene1_452Code.GDtap2Objects1);
{for(var i = 0, len = gdjs.Scene1_452Code.GDimg1Objects1.length ;i < len;++i) {
    gdjs.Scene1_452Code.GDimg1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1_452Code.GDimg2Objects1.length ;i < len;++i) {
    gdjs.Scene1_452Code.GDimg2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1_452Code.GDtap2Objects1.length ;i < len;++i) {
    gdjs.Scene1_452Code.GDtap2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1_452Code.GDconObjects1.length ;i < len;++i) {
    gdjs.Scene1_452Code.GDconObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingDown(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) < 400;
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (20), "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingUp(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) >= 50;
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (20), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b1"), gdjs.Scene1_452Code.GDb1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1_452Code.mapOfGDgdjs_46Scene1_95452Code_46GDb1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b2"), gdjs.Scene1_452Code.GDb2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1_452Code.mapOfGDgdjs_46Scene1_95452Code_46GDb2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b3"), gdjs.Scene1_452Code.GDb3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1_452Code.mapOfGDgdjs_46Scene1_95452Code_46GDb3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("b5"), gdjs.Scene1_452Code.GDb5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1_452Code.mapOfGDgdjs_46Scene1_95452Code_46GDb5Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "90078e02408bca868f78b80e55a11c52843f852419787239d90b060642d87d45_Teleport 3.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene10", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tap1"), gdjs.Scene1_452Code.GDtap1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1_452Code.mapOfGDgdjs_46Scene1_95452Code_46GDtap1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("img0"), gdjs.Scene1_452Code.GDimg0Objects1);
gdjs.copyArray(runtimeScene.getObjects("img1"), gdjs.Scene1_452Code.GDimg1Objects1);
/* Reuse gdjs.Scene1_452Code.GDtap1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("tap2"), gdjs.Scene1_452Code.GDtap2Objects1);
{for(var i = 0, len = gdjs.Scene1_452Code.GDimg0Objects1.length ;i < len;++i) {
    gdjs.Scene1_452Code.GDimg0Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene1_452Code.GDtap1Objects1.length ;i < len;++i) {
    gdjs.Scene1_452Code.GDtap1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene1_452Code.GDimg1Objects1.length ;i < len;++i) {
    gdjs.Scene1_452Code.GDimg1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene1_452Code.GDtap2Objects1.length ;i < len;++i) {
    gdjs.Scene1_452Code.GDtap2Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tap2"), gdjs.Scene1_452Code.GDtap2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1_452Code.mapOfGDgdjs_46Scene1_95452Code_46GDtap2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("con"), gdjs.Scene1_452Code.GDconObjects1);
gdjs.copyArray(runtimeScene.getObjects("img1"), gdjs.Scene1_452Code.GDimg1Objects1);
gdjs.copyArray(runtimeScene.getObjects("img2"), gdjs.Scene1_452Code.GDimg2Objects1);
/* Reuse gdjs.Scene1_452Code.GDtap2Objects1 */
{for(var i = 0, len = gdjs.Scene1_452Code.GDimg1Objects1.length ;i < len;++i) {
    gdjs.Scene1_452Code.GDimg1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene1_452Code.GDtap2Objects1.length ;i < len;++i) {
    gdjs.Scene1_452Code.GDtap2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene1_452Code.GDconObjects1.length ;i < len;++i) {
    gdjs.Scene1_452Code.GDconObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Scene1_452Code.GDimg2Objects1.length ;i < len;++i) {
    gdjs.Scene1_452Code.GDimg2Objects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "923517cfc7f1500e851f0bbcdd357fe2b982745b128fcb3acc40d1a229575882_Click_02.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("con"), gdjs.Scene1_452Code.GDconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1_452Code.mapOfGDgdjs_46Scene1_95452Code_46GDconObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "2e004a9391c46f0de998f83d9e1da1cd4277899ee97e36886cc38b3f8a232cc9_Teleport 2.aac", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene2", true);
}}

}


};

gdjs.Scene1_452Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene1_452Code.GDwhiteObjects1.length = 0;
gdjs.Scene1_452Code.GDwhiteObjects2.length = 0;
gdjs.Scene1_452Code.GDb1Objects1.length = 0;
gdjs.Scene1_452Code.GDb1Objects2.length = 0;
gdjs.Scene1_452Code.GDb2Objects1.length = 0;
gdjs.Scene1_452Code.GDb2Objects2.length = 0;
gdjs.Scene1_452Code.GDb3Objects1.length = 0;
gdjs.Scene1_452Code.GDb3Objects2.length = 0;
gdjs.Scene1_452Code.GDditoeduObjects1.length = 0;
gdjs.Scene1_452Code.GDditoeduObjects2.length = 0;
gdjs.Scene1_452Code.GDb5Objects1.length = 0;
gdjs.Scene1_452Code.GDb5Objects2.length = 0;
gdjs.Scene1_452Code.GDimg0Objects1.length = 0;
gdjs.Scene1_452Code.GDimg0Objects2.length = 0;
gdjs.Scene1_452Code.GDimg1Objects1.length = 0;
gdjs.Scene1_452Code.GDimg1Objects2.length = 0;
gdjs.Scene1_452Code.GDimg2Objects1.length = 0;
gdjs.Scene1_452Code.GDimg2Objects2.length = 0;
gdjs.Scene1_452Code.GDtap1Objects1.length = 0;
gdjs.Scene1_452Code.GDtap1Objects2.length = 0;
gdjs.Scene1_452Code.GDtap2Objects1.length = 0;
gdjs.Scene1_452Code.GDtap2Objects2.length = 0;
gdjs.Scene1_452Code.GDconObjects1.length = 0;
gdjs.Scene1_452Code.GDconObjects2.length = 0;

gdjs.Scene1_452Code.eventsList0(runtimeScene);

return;

}

gdjs['Scene1_452Code'] = gdjs.Scene1_452Code;
