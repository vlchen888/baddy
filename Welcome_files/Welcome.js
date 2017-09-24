// Created by iWeb 3.0.4 local-build-20120913

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.75,offset:1.50}),stroke_1:new IWPhotoFrame([IWCreateImage('Welcome_files/Modern_C_TL.png'),IWCreateImage('Welcome_files/Modern_S_T.png'),IWCreateImage('Welcome_files/Modern_C_TR.png'),IWCreateImage('Welcome_files/Modern_S_R.png'),IWCreateImage('Welcome_files/Modern_C_BR.png'),IWCreateImage('Welcome_files/Modern_S_B.png'),IWCreateImage('Welcome_files/Modern_C_BL.png'),IWCreateImage('Welcome_files/Modern_S_L.png')],null,2,0.700000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,20.000000,40.000000,40.000000,40.000000,240.000000,null,null,null,0.100000),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,342),url:'Welcome_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Welcome_files/stroke_1.png'},{rect:new IWRect(1,-1,256,2),url:'Welcome_files/stroke_2.png'},{rect:new IWRect(257,-1,2,2),url:'Welcome_files/stroke_3.png'},{rect:new IWRect(257,1,2,342),url:'Welcome_files/stroke_4.png'},{rect:new IWRect(257,343,2,2),url:'Welcome_files/stroke_5.png'},{rect:new IWRect(1,343,256,2),url:'Welcome_files/stroke_6.png'},{rect:new IWRect(-1,343,2,2),url:'Welcome_files/stroke_7.png'}],new IWSize(258,344))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
detectBrowser();adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id2');applyEffects()}
function onPageUnload()
{Widget.onunload();}
