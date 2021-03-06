;(function () {
  'use strict'

  const shops = [
    {
      id: 1292273001,
      name: '매콤돈가스&칡불냉면 판교점',
      lat: 37.40189834738935,
      lng: 127.10624455094185,
    },
    {
      id: 1151112822,
      name: '탄탄면공방 판교테크노밸리점',
      lat: 37.40193038525563,
      lng: 127.11060980539878,
    },
    {
      id: 15775065,
      name: '파리바게뜨 판교테크노점',
      lat: 37.40133360873933,
      lng: 127.10801128231743,
    },
  ]

  const defaultPos = {
    lat: 37.4020589,
    lng: 127.1064401,
  }

  const get = (target) => {
    return document.querySelector(target)
  }

  const $mapContainer = get('#map')
  const $currentLocationBtn = get('.geolocation_button')

  const options = {
    center: new kakao.maps.LatLng(defaultPos.lat, defaultPos.lng),
    level: 3,
  }
  const map = new kakao.maps.Map($mapContainer, options)

  const createMarkerImage = () => {
    const markerImagesrc = 'assets/marker.png'
    const imageSize = new kakao.maps.Size(24, 35)
    return new kakao.maps.MarkerImage(markerImagesrc, imageSize)
  }

  const createMarker = (title, lat, lng) => {
    const marker = new kakao.maps.Marker({
      map,
      position: new kakao.maps.LatLng(lat, lng),
      title,
      image: createMarkerImage(),
    })
    return marker
  }

  const createShopElement = () => {
    shops.map((shop) => {
      const { name, lat, lng } = shop
      const marker = createMarker(name, lat, lng)
      const infoWindow = new kakao.maps.InfoWindow({
        content: `<div style="width:150px;text-align:center;padding:6px 2px;">
        <a href="https://place.map.kakao.com/${shop.id}" target="_blank">${shop.name}</a>
      </div>`,
      })
      infoWindow.open(map, marker)
    })
  }

  const successGeolocation = (position) => {
    const { latitude: lat, longitude: lng } = position.coords
    map.setCenter(new kakao.maps.LatLng(lat, lng))
    createMarker('현위치', lat, lng)
  }
  const errorGeolocation = (error) => {
    if (error.code === 1) {
      alert('위치정보를 허용해주세요')
    } else if (error.code === 2) {
      alert('사용할 수 없는 위치입니다..')
    } else if (error.code === 3) {
      alert('타임아웃이 발생했습니다.')
    } else {
      alert('오류가 발생했습니다.')
    }
  }

  const getLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        successGeolocation,
        errorGeolocation,
        options
      )
    } else {
      alert('지도 API사용 불가')
    }
  }

  const init = () => {
    $currentLocationBtn.addEventListener('click', () => {
      getLocation()
    })
    createShopElement()
  }

  init()
})()
