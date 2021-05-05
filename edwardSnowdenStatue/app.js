//Variables for setup

let container;
let camera;
let renderer;
let scene;
let snowden;

function init() {
  container = document.querySelector(".scene");

  //Create scene
  scene = new THREE.Scene();

  const fov = 35;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 1000;

  //Camera setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 30);

  const ambient = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(50, 50, 100);
  scene.add(light);

  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);
  


  //Load Model
  let loader = new THREE.GLTFLoader();
  loader.load("3D/scene.gltf", function(gltf) {
    scene.add(gltf.scene);
    snowden = gltf.scene.children[0];
    animate();
  });


  console.log(renderer);
  const control = new THREE.OrbitControls(camera, renderer.domElement);
  control.update();
}

console.log(renderer);
// const control = new THREE.OrbitControls(camera, renderer.domElement);
// control.update();

function animate() {
  requestAnimationFrame(animate);
  // snowden.rotation.z += 0.005;
  // snowden.rotation.x += 0.005;
  // snowden.rotation.y += 0.005;
  snowden.rotation.z += 0.0075;
  snowden.rotation.x += 0.0055;
  snowden.rotation.y += -0.0105;
  renderer.render(scene, camera);
}

init();

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);
