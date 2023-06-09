<template>
  <div id="container" ref="container"></div>
</template>
<script>
import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import veniceSunset from "@/assets/car/venice.hdr";
import gltfpath from "@/assets/car/ferrari.gltf"

export default {
  data() {
    return {
      bodyColor: "#ff0000",
      detailsColor: "#ffffff",
      glassColor: "#ffffff",
    };
  },
  mounted() {
    const init = () => {
    let camera, scene, renderer;
    let stats;
    let grid;
    let controls;

    function init() {
      const container = this.$refs.container;
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setAnimationLoop(render);
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.85;
      container.appendChild(renderer.domElement);
      window.addEventListener("resize", onWindowResize);

      stats = new Stats();

      camera = new THREE.PerspectiveCamera(
        40,
        container.clientWidth / container.clientHeight,
        0.1,
        100
      );
      camera.position.set(4.25, 1.4, -4.5);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.maxDistance = 9;
      controls.target.set(0, 0.5, 0);
      controls.update();

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x00000000);
      scene.environment = new RGBELoader().load(veniceSunset);
      scene.environment.mapping = THREE.EquirectangularReflectionMapping;
      scene.fog = new THREE.Fog(0x333333, 10, 15);

      grid = new THREE.GridHelper(20, 40, 0x00ffff, 0x00ffff);
      grid.material.opacity = 0.2;
      grid.material.depthWrite = false;
      grid.material.transparent = true;
      scene.add(grid);

      const loader = new GLTFLoader();
      loader.load(gltfpath, (gltf) => {
        scene.add(gltf.scene);
      });
    }

    function onWindowResize() {
  const width = this.$refs.container.clientWidth;
  const height = this.$refs.container.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

    function render() {
      controls.update();
      const time = -performance.now() / 1000;
      grid.position.z = -time % 1;
      renderer.render(scene, camera);
      stats.update();
    }

    init();
  }
  },
};
</script>
<style lang="scss">
#container {
  width: 100%;
  height: 100%;
}
</style>