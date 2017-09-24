// Created by iWeb 3.0.4 local-build-20120407

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('BadFacts_files/Modern_C_TL.png'),IWCreateImage('BadFacts_files/Modern_S_T.png'),IWCreateImage('BadFacts_files/Modern_C_TR.png'),IWCreateImage('BadFacts_files/Modern_S_R.png'),IWCreateImage('BadFacts_files/Modern_C_BR.png'),IWCreateImage('BadFacts_files/Modern_S_B.png'),IWCreateImage('BadFacts_files/Modern_C_BL.png'),IWCreateImage('BadFacts_files/Modern_S_L.png')],null,2,0.700000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,20.000000,40.000000,40.000000,40.000000,240.000000,null,null,null,0.100000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('BadFacts_files/BadFactsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupIECSS3Opacity('id1');fixupAllIEPNGBGs();fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
