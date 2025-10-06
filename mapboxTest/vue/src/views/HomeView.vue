<template>
  <!-- 지도 컨테이너 -->
  <div ref="mapContainer" style="width:1000px; height:500px;"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

// DOM에서 div를 참조할 변수
const mapContainer = ref(null)

onMounted(() => {
  // 1. 토큰 등록
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY

  // 2. 지도 생성
  new mapboxgl.Map({
    container: mapContainer.value, // 지도를 넣을 DOM
    style: 'mapbox://styles/junha13/cmfs9p31000h101srhe5m76gl', // 스타일
    center: [126.9784, 37.5667], // 서울 좌표 [경도, 위도]
    zoom: 10 // 확대 정도
  })
})
</script>