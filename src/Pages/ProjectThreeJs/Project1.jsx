import * as THREE from "three"
import { FBXLoader } from "three/examples/jsm/Addons.js";


export function Project1() {

    //Init
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true, precision: "highp" });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setAnimationLoop( animate );
    document.body.appendChild( renderer.domElement );

    //Light
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
    directionalLight.position.set( 0, 1, 0 ); //default; light shining from top
    directionalLight.castShadow = true; // default false
    scene.add( directionalLight );
    const targetObject = new THREE.Object3D();
    targetObject.position.set(10, 0, 10);
    scene.add(targetObject); // Add target object to the scene

    directionalLight.target = targetObject;

    directionalLight.shadow.mapSize.width = 512; // default
    directionalLight.shadow.mapSize.height = 512; // default
    directionalLight.shadow.camera.near = 0.5; // default
    directionalLight.shadow.camera.far = 500; // default

    const ambientLight = new THREE.AmbientLight( 0x404040, 0.1); // soft white light
    scene.add( ambientLight );

    scene.background = new THREE.Color(0xffffff);

    //Camera
    const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = -200;
    camera.position.x = 200;
    camera.position.y = 150;
    camera.lookAt(0,0,0);

    //Objects
    const loader = new FBXLoader();
    loader.load( "/ThreeJS/Lille1.fbx", function ( object ) {
        object.scale.set(0.1, 0.1, 0.1);
        object.rotation.y = 0; 

        object.castShadow = true;
        object.receiveShadow = true;

        scene.add( object );
    });

    const geometry = new THREE.PlaneGeometry( 500, 500 );
    const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    const plane = new THREE.Mesh( geometry, material );
    plane.rotation.x = Math.PI / 2;
    plane.position.y = -50;
    plane.receiveShadow = true;
    scene.add( plane );

    //MainLoop
    function animate() {

        renderer.render( scene, camera );

    }

    return(
        <></>
    )
}