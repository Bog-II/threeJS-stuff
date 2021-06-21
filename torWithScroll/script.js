let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(
    35,
    window.innerWidth / window.innerHeight,
    0.1,
    3000
);

camera.position.z = 100;

let render = new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);
render.setClearColor(0x000000);

document.body.appendChild(render.domElement);

let forme = new THREE.Group();

let geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);

// let materiel = new THREE.MeshNormalMaterial({ color: 0x00ff00 });
let materiel = new THREE.MeshNormalMaterial({
    wireframe: true,
    wireframeLinewidth: 5,
});

forme.add(new THREE.Mesh(geometry, materiel));
scene.add(forme);

const control = new THREE.OrbitControls(camera, render.domElement);
control.update();

const animer = () => {
    requestAnimationFrame(animer);
    forme.rotation.x += 0.005;
    forme.rotation.y += 0.005;

    render.render(scene, camera);
};

animer();


// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
// );
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }
// animate();
