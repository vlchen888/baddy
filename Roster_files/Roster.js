// Created by iWeb 3.0.4 local-build-20120913

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,250),url:'Roster_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Roster_files/stroke_1.png'},{rect:new IWRect(1,-1,187,2),url:'Roster_files/stroke_2.png'},{rect:new IWRect(188,-1,2,2),url:'Roster_files/stroke_3.png'},{rect:new IWRect(188,1,2,250),url:'Roster_files/stroke_4.png'},{rect:new IWRect(188,251,2,2),url:'Roster_files/stroke_5.png'},{rect:new IWRect(1,251,187,2),url:'Roster_files/stroke_6.png'},{rect:new IWRect(-1,251,2,2),url:'Roster_files/stroke_7.png'}],new IWSize(189,252)),stroke_1:new IWPhotoFrame([IWCreateImage('Roster_files/Modern_C_TL.png'),IWCreateImage('Roster_files/Modern_S_T.png'),IWCreateImage('Roster_files/Modern_C_TR.png'),IWCreateImage('Roster_files/Modern_S_R.png'),IWCreateImage('Roster_files/Modern_C_BR.png'),IWCreateImage('Roster_files/Modern_S_B.png'),IWCreateImage('Roster_files/Modern_C_BL.png'),IWCreateImage('Roster_files/Modern_S_L.png')],null,2,0.700000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,20.000000,40.000000,40.000000,40.000000,240.000000,null,null,null,0.100000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Roster_files/RosterMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('Media/transparent.gif');Widget.onload();IMpreload('Roster_files','shapeimage_4','0');IMpreload('Roster_files','shapeimage_6','0');fixupAllIEPNGBGs();fixupIECSS3Opacity('id1');applyEffects()}
function onPageUnload()
{Widget.onunload();}
