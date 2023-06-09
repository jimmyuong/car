<template>
    <div id="container"></div>
</template>
<script>
import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js"; // 导入 RGBELoader 类
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"; // 导入 OrbitControls 类
//import veniceSunset from "@/assets/venice_sunset_1k.hdr"; // 导入环境贴图路径
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
    console.log(process.env);
    let camera, scene, renderer;
    let stats;

    let grid;
    let controls;
    // 存储车轮
    //const wheels = [];

    function init() {
      // 获取容器元素
      const container = document.getElementById("container");
      // 创建 WebGLRenderer 实例，设置参数
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setAnimationLoop(render);
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.85;
      container.appendChild(renderer.domElement);
      // 监听窗口大小变化事件
      window.addEventListener("resize", onWindowResize);

      // 创建性能监视器
      stats = new Stats();
     // container.appendChild(stats.dom);

      // 创建相机
      camera = new THREE.PerspectiveCamera(
        40,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      );
      camera.position.set(4.25, 1.4, -4.5);
      // 创建轨道控制器
      controls = new OrbitControls(camera, container);
      controls.enableDamping = true;
      controls.maxDistance = 9;
      controls.target.set(0, 0.5, 0);
      controls.update();

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x00000000);
      scene.environment = new RGBELoader().load( veniceSunset );
      scene.environment.mapping = THREE.EquirectangularReflectionMapping;
      //雾效
      scene.fog = new THREE.Fog(0x333333, 10, 15);

      //世界网格
      grid = new THREE.GridHelper(20, 40, 0x00ffff, 0x00ffff);
      grid.material.opacity = 0.2;
      grid.material.depthWrite = false;
      grid.material.transparent = true;
      scene.add(grid);

      //加载模型
      const loader = new GLTFLoader();
      loader.load( gltfpath ,gltf => {
        scene.add(gltf.scene);
      })

    }

    // 窗口大小改变时触发的函数，重新设置相机的长宽比和渲染器的大小
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight; // 设置相机的长宽比
      camera.updateProjectionMatrix(); // 更新相机投影矩阵
      renderer.setSize(window.innerWidth, window.innerHeight); // 设置渲染器的大小
    }

    // 渲染函数，每帧调用一次，更新控制器、车轮旋转和网格位置，并渲染场景
    function render() {
      controls.update(); // 更新控制器状态
      const time = -performance.now() / 1000; // 获取当前时间（单位：秒）
      grid.position.z = -time % 1; // 设置网格的 Z 轴位置
      renderer.render(scene, camera); // 渲染场景
      stats.update(); // 更新性能监视器
    }

    init();

  },
};
</script>

<style lang="scss">
#container {
  left: 0;
  top: 0;
  position: absolute;
}
#info {
  position: absolute;
  top: 0;
}
.colorPicker {
  display: inline-block;
  margin: 0 10px;
}
</style>
