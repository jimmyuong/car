<template>
  <div ref="canvasContainer">
  </div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'ThreeModel', 
  data () {
    return {
       width:'100%',
       height:'100%',
    }
  },
  mounted() {    
   // 创建场景    
   const scene = new THREE.Scene();    
   
   // 创建相机    
   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);    
   
   // 创建渲染器    
   const renderer = new THREE.WebGLRenderer({alpha:true}); 
   renderer.setSize( window.innerWidth /1.5, window.innerHeight / 1.5);
   this.$refs.canvasContainer.appendChild(renderer.domElement);    
   
   // 添加一个立方体    
   const geometry = new THREE.BoxGeometry(); 
   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
   const cube = new THREE.Mesh(geometry, material); 
   scene.add(cube); 
   camera.position.z = 5;   


   // 渲染场景    
   function animate() {
     requestAnimationFrame( animate ); 
     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;
     renderer.render(scene,camera);
   }
   animate();


  },
}; 
</script>
      
      <style lang="scss">
      </style>