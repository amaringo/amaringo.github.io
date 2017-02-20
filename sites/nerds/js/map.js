var container = document.querySelector("[id=map]");

ymaps.ready(function ()  {
  var myMap = new ymaps.Map(container, {
    center: [59.939124, 30.320088],
    zoom: 17,
    controls: ["zoomControl"]
  });
  myMap.behaviors.disable("scrollZoom");
  myMap.controls.add("zoomControl", {});

  var myPlacemark = new ymaps.Placemark([59.938631, 30.323055] , {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/pin.png",
      iconImageSize: [231, 190],
      iconImageOffset: [-40, -190] });

    myMap.geoObjects.add(myPlacemark);
});
