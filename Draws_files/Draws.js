// Created by iWeb 3.0.4 local-build-20120415

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('Draws_files/Modern_C_TL.png'),IWCreateImage('Draws_files/Modern_S_T.png'),IWCreateImage('Draws_files/Modern_C_TR.png'),IWCreateImage('Draws_files/Modern_S_R.png'),IWCreateImage('Draws_files/Modern_C_BR.png'),IWCreateImage('Draws_files/Modern_S_B.png'),IWCreateImage('Draws_files/Modern_C_BL.png'),IWCreateImage('Draws_files/Modern_S_L.png')],null,2,0.700000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,20.000000,40.000000,40.000000,40.000000,240.000000,null,null,null,0.100000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Draws_files/DrawsMoz.css')
detectBrowser();adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id1');applyEffects()}
function onPageUnload()
{Widget.onunload();}
