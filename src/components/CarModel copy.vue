<template>
    <div id="container"></div>
</template>
<script>
import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import gltfpath from "@/assets/untitled.gltf";
//import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
//import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

//import { GLTFLoader } from "gltf-loader";
//import { OrbitControls } from "three-orbitcontrols";


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
      scene.environment = new RGBELoader().load( "@/assets/venice_sunset_1k.hdr");
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

      // 创建材质

   //   const bodyMaterial = new THREE.MeshPhysicalMaterial({
   //     color: 0xff0000,
   //     metalness: 1.0,
   //     roughness: 0.5,
   //     clearcoat: 1.0,
   //     clearcoatRoughness: 0.03,
   //     sheen: 0.5,
   //   });

   //   const detailsMaterial = new THREE.MeshStandardMaterial({
   //     color: 0xffffff,
   //     metalness: 1.0,
   //     roughness: 0.5,
   //   });

   //   const glassMaterial = new THREE.MeshPhysicalMaterial({
   //     color: 0xffffff,
   //     metalness: 0.25,
   //     roughness: 0,
   //     transmission: 1.0,
   //   });
      // 监听颜色输入框的输入事件，根据输入改变材质颜色
  //    const bodyColorInput = document.getElementById("body-color");
  //    bodyColorInput.addEventListener("input", function () {
  //      bodyMaterial.color.set(this.value);
  //    });

  //    const detailsColorInput = document.getElementById("details-color");
  //    detailsColorInput.addEventListener("input", function () {
  //      detailsMaterial.color.set(this.value);
  //    });

  //    const glassColorInput = document.getElementById("glass-color");
  //    glassColorInput.addEventListener("input", function () {
  //      glassMaterial.color.set(this.value);
  //    });

      // 加载贴图
      //const shadow = new THREE.TextureLoader().load( "http://localhost:8083/img/ferrari_ao.2f3da8e1.png");
      // 创建 DRACO 解码器对象
  //    const dracoLoader = new DRACOLoader();
      //dracoLoader.setDecoderPath("three/jsm/libs/draco/gltf/");
      // 创建 GLTF 加载器对象，并设置 DRACO 解码器
  //    const loader = new GLTFLoader();
  //    loader.setDRACOLoader(dracoLoader);
      // 使用 GLTF 加载器加载模型文件
  //    loader.load("@/assets/ferrari.glb", function (gltf) {
  //      // 获取模型对象
  //      const carModel = gltf.scene.children[0];
  //      // 设置模型的材质
  //      carModel.getObjectByName("body").material = bodyMaterial;
  //      // 设置轮辋部分的材质
  //      carModel.getObjectByName("rim_fl").material = detailsMaterial;
  //      carModel.getObjectByName("rim_fr").material = detailsMaterial;
  //      carModel.getObjectByName("rim_rr").material = detailsMaterial;
  //      carModel.getObjectByName("rim_rl").material = detailsMaterial;
  //      carModel.getObjectByName("trim").material = detailsMaterial;
  //      // 设置玻璃部分的材质
  //      carModel.getObjectByName("glass").material = glassMaterial;
  //      // 将车轮对象添加到数组中
  //      wheels.push(
  //        carModel.getObjectByName("wheel_fl"),
  //        carModel.getObjectByName("wheel_fr"),
  //        carModel.getObjectByName("wheel_rl"),
  //        carModel.getObjectByName("wheel_rr")
  //      );

  //      // 创建阴影对象
  //      const mesh = new THREE.Mesh(
  //        new THREE.PlaneGeometry(0.655 * 4, 1.3 * 4), // 创建平面几何体
  //        new THREE.MeshBasicMaterial({
  //          // 创建基础网格材质
  //          map: shadow, // 设置纹理贴图
  //          blending: THREE.MultiplyBlending, // 设置混合模式为 MultiplyBlending
  //          toneMapped: false, // 不进行色调映射
  //          transparent: true, // 设置为透明材质
  //        })
  //      );
  //      mesh.rotation.x = -Math.PI / 2; // 绕 X 轴旋转 90 度
  //      mesh.renderOrder = 2; // 设置渲染顺序
  //      carModel.add(mesh); // 将阴影对象添加到模型中

  //      scene.add(carModel); // 将模型对象添加到场景中
  //    });
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
    //  for (let i = 0; i < wheels.length; i++) {
    //    // 循环遍历车轮数组
    //    wheels[i].rotation.x = time * Math.PI * 2; // 设置车轮的 X 轴旋转角度
    //  }
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
