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
    camera.position.set(0, 0, 20);

    const ambient = new THREE.AmbientLight(0xffffff, 8);
    scene.add(ambient);

    // LIGHTS
    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(0, 50, 0);
    scene.add(light);

    const light10 = new THREE.DirectionalLight(0xffffff, 2);
    light10.position.set(20, 0, 20);
    scene.add(light10);

    const light2 = new THREE.DirectionalLight(0x00ffff, 2);
    light2.position.set(0, 10, -10);
    scene.add(light2);

    const light3 = new THREE.DirectionalLight(0xffffff, 2);
    light3.position.set(0, -10, -5);
    scene.add(light3);

    // const light4 = new THREE.PointLight(0xcccccc, 0.8, 100, 20);
    // light4.position.set(0, 10, 50);
    // scene.add(light4);

    // const light5 = new THREE.DirectionalLight(0xaaddaa, 1.2);
    // light5.position.set(10, 10, 10);
    // scene.add(light5);

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
    const control = new THREE.OrbitControls(camera, renderer.domElement);
    control.update();
}

function animate() {
    requestAnimationFrame(animate);
    snowden.rotation.z -= 0.0003075;
    snowden.rotation.x -= 0.0003655;
    snowden.rotation.y += 0.0003895;
    renderer.render(scene, camera);
}

init();

function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener('resize', onWindowResize);
