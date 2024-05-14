import "./style.css";
import * as THREE from "three";
import discusBag from "./images/discus-bag.png";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Scene Setup

const scene = new THREE.Scene();
scene.background = new THREE.Color("#FBC8FF");
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Textures

const texture = new THREE.TextureLoader().load(discusBag);
texture.colorSpace = THREE.SRGBColorSpace;

// Geometry

const geometry = new THREE.PlaneGeometry(221, 282);
const material = new THREE.MeshBasicMaterial({
  map: texture,
});
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

camera.position.z = 500;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Orbit Controls

const controls = new OrbitControls(camera, renderer.domElement);

// Render

function animate() {
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);
}
animate();
