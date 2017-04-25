(function() {
    console.log('hello world');
    $(function () {
     // here we'll put the Three.js stuff
        console.log('awesome stuff in here');
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(45
        , window.innerWidth / window.innerHeight
        , 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        renderer.setClearColorHex(0xEEEEEE);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMapEnabled = true;
        var axes = new THREE.AxisHelper(20);
        scene.add(axes);
        var planeGeometry = new THREE.PlaneGeometry(80, 40);
        var planeMaterial = new THREE.MeshLambertMaterial(
        {color: 0xcccccc});
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 25;
        plane.position.y = 0;
        plane.position.z = 0;
        plane.receiveShadow = true;
        scene.add(plane);
        var cubeGeometry = new THREE.CubeGeometry(4, 4, 4);
        var cubeMaterial = new THREE.MeshLambertMaterial(
        {color: 0xff0000});
        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.x = -4;
        cube.position.y = 3;
        cube.position.z = 0;
        cube.castShadow = true;
        scene.add(cube);
        var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
        var sphereMaterial = new THREE.MeshLambertMaterial(
        {color: 0x7777ff});
        var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.x = 20;
        sphere.position.y = 4;
        sphere.position.z = 2;
        sphere.castShadow = true;
        scene.add(sphere);
        var spotLight = new THREE.SpotLight( 0xffffff );
        spotLight.position.set( -40, 60, 100 );
        var spotLight2 = new THREE.SpotLight( 0x0000ff );
        spotLight2.position.set( -40, 60, -10 );
        spotLight.castShadow = true;
        spotLight2.castShadow = true;2
        scene.add(spotLight);
        scene.add(spotLight2);
        camera.position.x = -30;
        camera.position.y = 40;
        camera.position.z = 30;
        camera.lookAt(scene.position);
        $('#main-container').append(renderer.domElement);
        /*var effect = new THREE.AsciiEffect( renderer );
        effect.setSize( window.innerWidth, window.innerHeight );
        $("#main-container").append(effect.domElement);*/
        var stats = initStats();
        var gui = new dat.GUI();
        var controls = new function() {
            this.rotationSpeed = 0.02;
            this.bouncingSpeed = 0.03;
        }
        gui.add(controls, 'rotationSpeed',0,0.5);
        gui.add(controls, 'bouncingSpeed',0,0.5);
        renderScene();
        var step = 0;
        function renderScene() {
            stats.update();
            cube.rotation.x += controls.rotationSpeed;
            cube.rotation.y += controls.rotationSpeed;
            cube.rotation.z += controls.rotationSpeed;
            camera.position.x += controls.rotationSpeed;
            step += controls.bouncingSpeed;
            sphere.position.x = 20+( 10*(Math.cos(step)));
            sphere.position.y = 2 +( 10*Math.abs(Math.sin(step)));
            requestAnimationFrame(renderScene);
            renderer.render(scene, camera);
            //effect.render(scene,camera)
        }
        function initStats() {
            var stats = new Stats();
            stats.setMode(0);
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.left = '0px';
            stats.domElement.style.top = '0px';
            $("#Stats-output").append( stats.domElement );
            return stats;
        }
    });

}());
