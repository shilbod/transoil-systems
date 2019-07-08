// Карта
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
						zoom: 8,
						controls: ['smallMapDefaultSet']
        }),
        
    // Создаем геообъект с типом геометрии "Точка".
        myObjects = new ymaps.Placemark([
        ], {
        });

    myMap.geoObjects
        .add(new ymaps.Placemark([55.77356269758877,37.589742499999886], {
          balloonContentBody: '<b>1-я Тверская Ямская</b> <br/>' + '<img src="img/map/1-я тверская ямская.JPG" height="100%" width="220">',
          hintContent: '1-я Тверская Ямская'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
        }))
        .add(new ymaps.Placemark([55.76215556896336,37.56911749999993], {
          balloonContentBody:'<b>GoalCenter ул. Красная Пресня 26с2</b> <br/>' + '<img src="img/map/GoalCenter ул Красная Пресня 26с2.JPG" height="100%" width="220">',
          hintContent: 'GoalCenter ул. Красная Пресня 26с2'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
        }))
        .add(new ymaps.Placemark([55.77020065996976,37.677108499999974], {
          balloonContentBody:'<b>Tribeca</b> <br/>' + '<img src="img/map/Tribeca.JPG" height="100%" width="220">',
          hintContent: 'Tribeca'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.94677135532621,36.873682], {
          balloonContentBody:'<b>Андреевское Истринский р-н</b> <br/>' + '<img src="img/map/андреевское истринский р-н.JPG" height="100%" width="220">',
          hintContent: 'Андреевское Истринский р-н'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.718699508657544,37.271289499999966], {
          balloonContentBody:'<b>Барвиха-клаб</b> <br/>' + '<img src="img/map/барвиха-клаб.JPG" height="100%" width="220">',
          hintContent: 'Барвиха-клаб'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.65668127756559,37.54007449999998], {
          balloonContentBody:'<b>БЦ GeoNeo м. Калужская</b> <br/>' + '<img src="img/map/БЦ  GeoNeo м. Калужская.JPG" height="100%" width="220">',
          hintContent: 'БЦ GeoNeo м. Калужская'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.59334683471375,38.12225049999998], {
          balloonContentBody:'<b>г. жуковский</b> <br/>' + '<img src="img/map/г. жуковский.JPG" height="100%" width="220">',
          hintContent: 'г. жуковский'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([56.00200986461445,38.1617945], {
          balloonContentBody:'<b>Д Здехово Щелковское шоссе</b> <br/>' + '<img src="img/map/Д Здехово Щелковское шоссе.JPG" height="100%" width="220">',
          hintContent: 'Д Здехово Щелковское шоссе'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.88737970738465,37.16358199999992], {
          balloonContentBody:'<b>Д Нефедьево округ. Красногорск</b> <br/>' + '<img src="img/map/Д Нефедьево округ. Красногорск.JPG" height="100%" width="220">',
          hintContent: 'Д Нефедьево округ. Красногорск'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([56.36891051367118,36.961303999999956], {
          balloonContentBody:'<b>Д. Ананьино Каширское шоссе</b> <br/>' + '<img src="img/map/Д. Ананьино Каширское шоссе.JPG" height="100%" width="220">',
          hintContent: 'Д. Ананьино Каширское шоссе'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([58.625272534726314,35.72515449999998], {
          balloonContentBody:'<b>д. дмитровское. красногорский р-н</b> <br/>' + '<img src="img/map/д. дмитровское. красногорский р-н.JPG" height="100%" width="220">',
          hintContent: 'д. дмитровское. красногорский р-н'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.18793610497345,38.21000649999995], {
          balloonContentBody:'<b>д. Ламоново Пятницкое шоссе</b> <br/>' + '<img src="img/map/д. Ламоново Пятницкое шоссе.JPG" height="100%" width="220">',
          hintContent: 'д. Ламоново Пятницкое шоссе'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.670254692530726,36.765030999999894], {
          balloonContentBody:'<b>д. ястребки. можайское шоссе</b> <br/>' + '<img src="img/map/д. ястребки. можайское шоссе.JPG" height="100%" width="220">',
          hintContent: 'д. ястребки. можайское шоссе'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.67363833973206,37.15338999999997], {
          balloonContentBody:'<b>Деревня Никольское. Одинцовский р-н</b> <br/>' + '<img src="img/map/Деревня Никольское. Одинцовский р-н.JPG" height="100%" width="220">',
          hintContent: 'Деревня Никольское. Одинцовский р-н'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.93908383845105,38.71938632958981], {
          balloonContentBody:'<b>ельдигино. ярославское шоссе.JPG</b> <br/>' + '<img src="img/map/ельдигино. ярославское шоссе.JPG" height="100%" width="220">',
          hintContent: 'ельдигино. ярославское шоссе'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([56.95496900126336,40.98031699999998], {
          balloonContentBody:'<b>ЖК Зеленая роща 2. Можайское шоссе</b> <br/>' + '<img src="img/map/ЖК Зеленая роща 2. Можайское шоссе.JPG" height="100%" width="220">',
          hintContent: 'ЖК Зеленая роща 2. Можайское шоссе'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.75766050018169,37.240036999999994], {
          balloonContentBody:'<b>ильинское. красногорский округ</b> <br/>' + '<img src="img/map/ильинское. красногорский округ.JPG" height="100%" width="220">',
          hintContent: 'ильинское. красногорский округ'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.89121584203518,37.17922149999999], {
          balloonContentBody:'<b>козино. красногорский р-н</b> <br/>' + '<img src="img/map/козино. красногорский р-н.JPG" height="100%" width="220">',
          hintContent: 'козино. красногорский р-н'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.805067670638024,37.36603049999996], {
          balloonContentBody:'<b>кп береста</b> <br/>' + '<img src="img/map/кп береста.JPG" height="100%" width="220">',
          hintContent: 'кп береста'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.39980352839693,37.36028549999986], {
          balloonContentBody:'<b>кп булгаков подольск</b> <br/>' + '<img src="img/map/кп булгаков подольск.JPG" height="100%" width="220">',
          hintContent: 'кп булгаков подольск'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([56.099997703606086,38.00369500000001], {
          balloonContentBody:'<b>кп визендорф. ярославское шоссе</b> <br/>' + '<img src="img/map/кп визендорф. ярославское шоссе.JPG" height="100%" width="220">',
          hintContent: 'кп визендорф. ярославское шоссе'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.40410506932215,37.4907395], {
          balloonContentBody:'<b>кп европа-3. красногорский округ</b> <br/>' + '<img src="img/map/кп европа-3. красногорский округ.JPG" height="100%" width="220">',
          hintContent: 'кп европа-3. красногорский округ'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.354967538342635,37.24084599999998], {
          balloonContentBody:'<b>КП Никольские Озера</b> <br/>' + '<img src="img/map/КП Никольские Озера.JPG" height="100%" width="220">',
          hintContent: 'КП Никольские Озера'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.83707276761228,36.92954399999992], {
          balloonContentBody:'<b>кп новорижский</b> <br/>' + '<img src="img/map/кп новорижский.JPG" height="100%" width="220">',
          hintContent: 'кп новорижский'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.983438568756085,35.852517500000005], {
          balloonContentBody:'<b>кп новорижский1</b> <br/>' + '<img src="img/map/кп новорижский1.JPG" height="100%" width="220">',
          hintContent: 'кп новорижский1'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.983176568755425,35.85270649999996], {
          balloonContentBody:'<b>кп новорижский2</b> <br/>' + '<img src="img/map/кп новорижский2.JPG" height="100%" width="220">',
          hintContent: 'кп новорижский2'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.92330661982343,36.602705499999985], {
          balloonContentBody:'<b>кп оранж клаб</b> <br/>' + '<img src="img/map/кп оранж клаб.JPG" height="100%" width="220">',
          hintContent: 'кп оранж клаб'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.80378987058328,37.11207249999992], {
          balloonContentBody:'<b>кп павлово</b> <br/>' + '<img src="img/map/кп павлово.JPG" height="100%" width="220">',
          hintContent: 'кп павлово'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.8320445785124,37.12242099999994], {
          balloonContentBody:'<b>кп павловы озера</b> <br/>' + '<img src="img/map/кп павловы озера.JPG" height="100%" width="220">',
          hintContent: 'кп павловы озера'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([56.11549655727759,37.601982], {
          balloonContentBody:'<b>кп пестово. мытищинский р-н</b> <br/>' + '<img src="img/map/кп пестово. мытищинский р-н.JPG" height="100%" width="220">',
          hintContent: 'кп пестово. мытищинский р-н'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.4286765149686,36.025438999999956], {
          balloonContentBody:'<b>кп полесье. рублевское шоссе</b> <br/>' + '<img src="img/map/кп пестово. мытищинский р-н.JPG" height="100%" width="220">',
          hintContent: 'кп полесье. рублевское шоссе'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.559832330581216,37.26572499999996], {
          balloonContentBody:'<b>кп променад</b> <br/>' + '<img src="img/map/кп променад.JPG" height="100%" width="220">',
          hintContent: 'кп променад'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.559832330581216,37.26572499999996], {
          balloonContentBody:'<b>кп променад. киевское шоссе</b> <br/>' + '<img src="img/map/кп променад. киевское шоссе.JPG" height="100%" width="220">',
          hintContent: 'кп променад. киевское шоссе'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.9185976654778,37.22740249999997], {
          balloonContentBody:'<b>КП Середниково Пятницкое шоссе</b> <br/>' + '<img src="img/map/КП Середниково Пятницкое шоссе.JPG" height="100%" width="220">',
          hintContent: 'КП Середниково Пятницкое шоссе'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.82824002802805,36.98524799999995], {
          balloonContentBody:'<b>кп старая рига</b> <br/>' + '<img src="img/map/кп старая рига.JPG" height="100%" width="220">',
          hintContent: 'кп старая рига'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.63848506909226,37.66664750000001], {
          balloonContentBody:'<b>москва. ул. кантемировская 16к1</b> <br/>' + '<img src="img/map/москва. ул. кантемировская 16к1.JPG" height="100%" width="220">',
          hintContent: 'москва. ул. кантемировская 16к1'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.918206568827415,37.75912900000001], {
          balloonContentBody:'<b>мытищи. ул. воровского 5</b> <br/>' + '<img src="img/map/мытищи. ул. воровского 5.JPG" height="100%" width="220">',
          hintContent: 'мытищи. ул. воровского 5'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.75229539602204,37.17144650000001], {
          balloonContentBody:'<b>петрово-дальнее. красногорский р-н</b> <br/>' + '<img src="img/map/петрово-дальнее. красногорский р-н.JPG" height="100%" width="220">',
          hintContent: 'петрово-дальнее. красногорский р-н'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([45.977062707307034,41.589954000000006], {
          balloonContentBody:'<b>покровское. красногорский округ</b> <br/>' + '<img src="img/map/покровское. красногорский округ.JPG" height="100%" width="220">',
          hintContent: 'покровское. красногорский округ'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.78181777712743,37.5986895], {
          balloonContentBody:'<b>ресторан коптильня. м. менделеевская</b> <br/>' + '<img src="img/map/ресторан коптильня. м. менделеевская.JPG" height="100%" width="220">',
          hintContent: 'ресторан коптильня. м. менделеевская'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.32611265232208,37.97221349999999], {
          balloonContentBody:'<b>снт ветеран. домодедовский р-н</b> <br/>' + '<img src="img/map/снт ветеран. домодедовский р-н.JPG" height="100%" width="220">',
          hintContent: 'снт ветеран. домодедовский р-н'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.75458759585229,37.10179248947138], {
          balloonContentBody:'<b>снт зеленый ветер. красногорский округ</b> <br/>' + '<img src="img/map/снт зеленый ветер. красногорский округ.JPG" height="100%" width="220">',
          hintContent: 'снт зеленый ветер. красногорский округ'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.667477561159586,37.14088149999994], {
          balloonContentBody:'<b>СНТ Лапино</b> <br/>' + '<img src="img/map/СНТ Лапино.JPG" height="100%" width="220">',
          hintContent: 'СНТ Лапино'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
				}))
				.add(new ymaps.Placemark([55.667477561159586,37.14088149999994], {
          balloonContentBody:'<b>снт лапино. одинцовский р-н</b> <br/>' + '<img src="img/map/снт лапино. одинцовский р-н.JPG" height="100%" width="220">',
          hintContent: 'снт лапино. одинцовский р-н'
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: '#00a9a7'
        }))
}