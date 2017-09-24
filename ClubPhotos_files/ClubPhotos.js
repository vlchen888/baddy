// Created by iWeb 3.0.4 local-build-20120415

function createMediaStream_id1()
{return IWCreatePhotocast("http://badminton.caltech.edu/Caltech_JPL_Badminton_Club/ClubPhotos_files/rss.xml",false);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://badminton.caltech.edu/Caltech_JPL_Badminton_Club',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://badminton.caltech.edu/Caltech_JPL_Badminton_Club',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(4,new IWSize(137,137),new IWSize(137,24),new IWSize(165,176),27,27,0,new IWSize(0,12)),new IWPhotoFrame([IWCreateImage('ClubPhotos_files/GraphPaper_01.png'),IWCreateImage('ClubPhotos_files/GraphPaper_02.png'),IWCreateImage('ClubPhotos_files/GraphPaper_01_1.png'),IWCreateImage('ClubPhotos_files/GraphPaper_01_2.png'),IWCreateImage('ClubPhotos_files/GraphPaper_09.png'),IWCreateImage('ClubPhotos_files/GraphPaper_08.png'),IWCreateImage('ClubPhotos_files/GraphPaper_07.png'),IWCreateImage('ClubPhotos_files/GraphPaper_01_3.png')],null,0,0.450000,90.000000,0.000000,90.000000,0.000000,89.000000,11.000000,89.000000,7.000000,11.000000,11.000000,11.000000,11.000000,'ClubPhotos_files/graphpaper_tape.png',new IWPoint(0.500000,0),new IWSize(155,47),0.300000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:9},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('ClubPhotos_files/Modern_C_TL.png'),IWCreateImage('ClubPhotos_files/Modern_S_T.png'),IWCreateImage('ClubPhotos_files/Modern_C_TR.png'),IWCreateImage('ClubPhotos_files/Modern_S_R.png'),IWCreateImage('ClubPhotos_files/Modern_C_BR.png'),IWCreateImage('ClubPhotos_files/Modern_S_B.png'),IWCreateImage('ClubPhotos_files/Modern_C_BL.png'),IWCreateImage('ClubPhotos_files/Modern_S_L.png')],null,2,0.700000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,20.000000,40.000000,40.000000,40.000000,240.000000,null,null,null,0.100000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('ClubPhotos_files/ClubPhotosMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupIECSS3Opacity('id2');fixupAllIEPNGBGs();fixupIECSS3Opacity('id3');applyEffects()
initializeMediaStream_id1()}
function onPageUnload()
{Widget.onunload();}
