//Variables for setup

let container;
let camera;
let renderer;
let scene;
let snowden;

function init() {
    container = document.querySelector('.scene');

    //Create scene
    scene = new THREE.Scene();

    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 1000;

    //Camera setup
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 30);

    const ambient = new THREE.AmbientLight(0x404040, 3.5);
    scene.add(ambient);

    // LIGHTS
    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(50, 50, 50);
    scene.add(light);

    const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
    light2.position.set(0, 10, -10);
    scene.add(light2);

    const light3 = new THREE.DirectionalLight(0xffffff, 0.6);
    light2.position.set(0, -10, -5);
    scene.add(light2);

    const light4 = new THREE.PointLight(0xff0000, 1, 100, 50);
    light4.position.set(0, 10, 50);
    scene.add(light4);

    //Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    //Load Model
    let loader = new THREE.GLTFLoader();
    loader.load('3D/scene.gltf', function (gltf) {
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
    snowden.rotation.z += 0.00275;
    snowden.rotation.x += 0.00455;
    snowden.rotation.y -= 0.00395;
    renderer.render(scene, camera);
}

init();

function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener('resize', onWindowResize);
