import React, { useEffect, useRef } from 'react';

const Hero3DCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let scene, camera, renderer;
    let farmGroup, lorryGroup, portGroup, shipGroup, craneGroup;
    let floatingProductsGroup, floatingContainersGroup;

    const container = mountRef.current;
    if (!container) return;

    const initThree = () => {
      const THREE = window.THREE;
      if (!THREE) return;

      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;

      // 1. Scene & Fog
      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x071527, 0.012);

      // 2. Camera Setup
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(0, 4, 34);

      // 3. Renderer
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);

      // 4. Lighting System
      scene.add(new THREE.AmbientLight(0xffffff, 0.65));

      const mainSun = new THREE.DirectionalLight(0xE29578, 1.5);
      mainSun.position.set(25, 45, 20);
      mainSun.castShadow = true;
      scene.add(mainSun);

      const fillNavy = new THREE.PointLight(0x0A2540, 2.2, 70);
      fillNavy.position.set(-20, 10, 15);
      scene.add(fillNavy);

      const copperGlow = new THREE.PointLight(0xC87A58, 2.8, 80);
      copperGlow.position.set(20, 12, 18);
      scene.add(copperGlow);

      // ==========================================================================
      // PROCEDURAL 3D MESH CREATORS (Realistic & Detailed)
      // ==========================================================================

      // A. REALISTIC 3D SHIPPING CONTAINER
      const createContainerMesh = (colorHex, brandText = 'GLOBAL ROOOTS') => {
        const group = new THREE.Group();
        const w = 4.2, h = 2.1, d = 2.1;

        // Container Main Shell
        const shellMat = new THREE.MeshStandardMaterial({
          color: colorHex,
          metalness: 0.5,
          roughness: 0.4
        });
        const shell = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), shellMat);
        group.add(shell);

        // Corrugated Panel Ribs (Side Walls)
        const ribMat = new THREE.MeshStandardMaterial({ color: colorHex, metalness: 0.6, roughness: 0.3 });
        const numRibs = 10;
        for (let i = 0; i < numRibs; i++) {
          const xPos = -w / 2 + 0.4 + (i * (w - 0.8)) / (numRibs - 1);
          // Front wall rib
          const ribF = new THREE.Mesh(new THREE.BoxGeometry(0.12, h * 0.94, 0.08), ribMat);
          ribF.position.set(xPos, 0, d / 2 + 0.02);
          group.add(ribF);
          // Back wall rib
          const ribB = new THREE.Mesh(new THREE.BoxGeometry(0.12, h * 0.94, 0.08), ribMat);
          ribB.position.set(xPos, 0, -d / 2 - 0.02);
          group.add(ribB);
        }

        // Steel Corner Castings
        const cornerMat = new THREE.MeshStandardMaterial({ color: 0x1A202C, metalness: 0.8, roughness: 0.2 });
        const cornerSize = 0.22;
        const corners = [
          [-w/2, h/2, d/2], [w/2, h/2, d/2], [-w/2, -h/2, d/2], [w/2, -h/2, d/2],
          [-w/2, h/2, -d/2], [w/2, h/2, -d/2], [-w/2, -h/2, -d/2], [w/2, -h/2, -d/2]
        ];
        corners.forEach(([cx, cy, cz]) => {
          const corner = new THREE.Mesh(new THREE.BoxGeometry(cornerSize, cornerSize, cornerSize), cornerMat);
          corner.position.set(cx, cy, cz);
          group.add(corner);
        });

        // Rear Door Seams & Vertical Locking Latch Bars
        const latchMat = new THREE.MeshStandardMaterial({ color: 0xD4D4D4, metalness: 0.9, roughness: 0.1 });
        const latch1 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, h * 0.9), latchMat);
        latch1.position.set(w / 2 + 0.03, 0, 0.4);
        group.add(latch1);

        const latch2 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, h * 0.9), latchMat);
        latch2.position.set(w / 2 + 0.03, 0, -0.4);
        group.add(latch2);

        // GLOBAL ROOOTS Rose Gold Branding Stripe
        const brandMat = new THREE.MeshStandardMaterial({ color: 0xE29578, metalness: 0.8, roughness: 0.2 });
        const stripe = new THREE.Mesh(new THREE.BoxGeometry(w * 0.7, 0.35, d + 0.08), brandMat);
        stripe.position.set(0, 0, 0);
        group.add(stripe);

        return group;
      };

      // B. REALISTIC 3D JUTE PRODUCE & GRAIN SACK
      const createGrainSackMesh = (sackColor = 0xD4A373) => {
        const group = new THREE.Group();

        // Sack Body (Rounded Pillow Shape)
        const bodyMat = new THREE.MeshStandardMaterial({
          color: sackColor,
          roughness: 0.9,
          metalness: 0.05
        });
        const body = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.75, 2.0, 16), bodyMat);
        body.scale.set(1.1, 1, 0.85);
        group.add(body);

        // Gathered Tied Neck Ring
        const neckMat = new THREE.MeshStandardMaterial({ color: 0x8C6D46, roughness: 0.8 });
        const neck = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.09, 8, 16), neckMat);
        neck.rotation.x = Math.PI / 2;
        neck.position.y = 0.95;
        group.add(neck);

        // Tied Fabric Top Ears
        const ear1 = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.5, 6), bodyMat);
        ear1.position.set(-0.25, 1.2, 0);
        ear1.rotation.z = -0.3;
        group.add(ear1);

        const ear2 = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.5, 6), bodyMat);
        ear2.position.set(0.25, 1.2, 0);
        ear2.rotation.z = 0.3;
        group.add(ear2);

        // Stenciled Export Print Band
        const printMat = new THREE.MeshStandardMaterial({ color: 0x0A2540, roughness: 0.9 });
        const band = new THREE.Mesh(new THREE.CylinderGeometry(0.92, 0.92, 0.4, 16), printMat);
        band.position.y = 0.1;
        band.scale.set(1.11, 1, 0.86);
        group.add(band);

        return group;
      };

      // C. REALISTIC 3D AGRICULTURAL PRODUCE CRATE
      const createProduceCrateMesh = () => {
        const group = new THREE.Group();
        const crateMat = new THREE.MeshStandardMaterial({ color: 0xB58A59, roughness: 0.8, metalness: 0.1 });

        // Outer Frame Posts
        const postGeo = new THREE.BoxGeometry(0.12, 1.4, 0.12);
        [[-1.1, 0, -0.8], [1.1, 0, -0.8], [-1.1, 0, 0.8], [1.1, 0, 0.8]].forEach(([px, py, pz]) => {
          const post = new THREE.Mesh(postGeo, crateMat);
          post.position.set(px, py, pz);
          group.add(post);
        });

        // Horizontal Wooden Slats
        const sideSlatGeo = new THREE.BoxGeometry(2.3, 0.22, 0.06);
        [-0.45, 0, 0.45].forEach((sy) => {
          const slatFront = new THREE.Mesh(sideSlatGeo, crateMat);
          slatFront.position.set(0, sy, 0.8);
          group.add(slatFront);

          const slatBack = new THREE.Mesh(sideSlatGeo, crateMat);
          slatBack.position.set(0, sy, -0.8);
          group.add(slatBack);
        });

        // Inside Produce Contents (Golden Turmeric & Chillies)
        const insideMat = new THREE.MeshStandardMaterial({ color: 0x9E2A2B, roughness: 0.3 });
        const contents = new THREE.Mesh(new THREE.BoxGeometry(2.1, 1.1, 1.4), insideMat);
        contents.position.set(0, -0.1, 0);
        group.add(contents);

        return group;
      };

      // D. REALISTIC 3D CARGO / CONTAINER SHIP
      const createCargoShipMesh = () => {
        const group = new THREE.Group();

        // Dark Steel Bottom Hull
        const hullMat = new THREE.MeshStandardMaterial({ color: 0x041326, metalness: 0.7, roughness: 0.3 });
        const hull = new THREE.Mesh(new THREE.BoxGeometry(11, 2.2, 3.2), hullMat);
        hull.position.set(0, 0, 0);
        group.add(hull);

        // Bow Wedge (Front of ship)
        const bowMat = new THREE.MeshStandardMaterial({ color: 0x071D3A, metalness: 0.7 });
        const bow = new THREE.Mesh(new THREE.ConeGeometry(2.2, 3.5, 4), bowMat);
        bow.rotation.z = -Math.PI / 2;
        bow.rotation.y = Math.PI / 4;
        bow.position.set(6.5, -0.1, 0);
        group.add(bow);

        // Waterline Red Stripe
        const waterlineMat = new THREE.MeshStandardMaterial({ color: 0x8B0000 });
        const waterline = new THREE.Mesh(new THREE.BoxGeometry(13.5, 0.3, 3.25), waterlineMat);
        waterline.position.set(0.8, -1.0, 0);
        group.add(waterline);

        // Bridge Superstructure Tower (Rear)
        const bridgeMat = new THREE.MeshStandardMaterial({ color: 0xF8FAFC, metalness: 0.2, roughness: 0.3 });
        const bridge = new THREE.Mesh(new THREE.BoxGeometry(2.4, 3.2, 2.8), bridgeMat);
        bridge.position.set(-3.5, 2.5, 0);
        group.add(bridge);

        // Bridge Glass Window Band
        const glassMat = new THREE.MeshStandardMaterial({ color: 0x0F233F, roughness: 0.1 });
        const glass = new THREE.Mesh(new THREE.BoxGeometry(2.42, 0.45, 2.82), glassMat);
        glass.position.set(-3.5, 3.4, 0);
        group.add(glass);

        // Ship Stack Funnel with GLOBAL ROOOTS Rose Gold Stripe
        const funnelMat = new THREE.MeshStandardMaterial({ color: 0x0A2540 });
        const funnel = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.45, 1.8, 12), funnelMat);
        funnel.position.set(-4.2, 4.8, 0);
        group.add(funnel);

        const bandMat = new THREE.MeshStandardMaterial({ color: 0xE29578 });
        const band = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.4, 12), bandMat);
        band.position.set(-4.2, 4.9, 0);
        group.add(band);

        // Deck Container Stacks (Loaded Cargo)
        const containerColors = [0x0A2540, 0xC87A58, 0x1B4332, 0xD4A373];
        let colorIdx = 0;
        for (let x = -1.5; x <= 4.2; x += 1.8) {
          for (let y = 1.4; y <= 2.8; y += 1.3) {
            const shipCont = createContainerMesh(containerColors[colorIdx % containerColors.length], '');
            shipCont.scale.set(0.38, 0.55, 0.55);
            shipCont.position.set(x, y, 0);
            group.add(shipCont);
            colorIdx++;
          }
        }

        return group;
      };

      // E. REALISTIC 3D PORT CONTAINER CRANE
      const createPortCraneMesh = () => {
        const group = new THREE.Group();
        const steelMat = new THREE.MeshStandardMaterial({ color: 0xC87A58, metalness: 0.6, roughness: 0.3 });

        // Leg 1 & Leg 2 (A-Frame)
        const legGeo = new THREE.BoxGeometry(0.35, 12, 0.35);
        const leg1 = new THREE.Mesh(legGeo, steelMat);
        leg1.position.set(-1.5, 6, 0);
        leg1.rotation.z = -0.1;
        group.add(leg1);

        const leg2 = new THREE.Mesh(legGeo, steelMat);
        leg2.position.set(1.5, 6, 0);
        leg2.rotation.z = 0.1;
        group.add(leg2);

        // Overhead Boom Beam
        const boomMat = new THREE.MeshStandardMaterial({ color: 0x0A2540, metalness: 0.7 });
        const boom = new THREE.Mesh(new THREE.BoxGeometry(14, 0.6, 0.6), boomMat);
        boom.position.set(3, 11.5, 0);
        group.add(boom);

        // Trolley & Spreader Hoist
        const trolleyMat = new THREE.MeshStandardMaterial({ color: 0xE29578 });
        const trolley = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.6, 1.2), trolleyMat);
        trolley.position.set(5, 11, 0);
        group.add(trolley);

        const cableMat = new THREE.MeshStandardMaterial({ color: 0x1A202C });
        const cable1 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 4), cableMat);
        cable1.position.set(4.7, 8.8, 0.4);
        group.add(cable1);

        const cable2 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 4), cableMat);
        cable2.position.set(5.3, 8.8, -0.4);
        group.add(cable2);

        return group;
      };

      // F. REALISTIC 3D LOGISTICS TRUCK
      const createLogisticsTruckMesh = () => {
        const group = new THREE.Group();

        // Cab
        const cabMat = new THREE.MeshStandardMaterial({ color: 0xC87A58, metalness: 0.5, roughness: 0.3 });
        const cab = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.8, 1.8), cabMat);
        cab.position.set(2.2, 1.0, 0);
        group.add(cab);

        // Windshield
        const glassMat = new THREE.MeshStandardMaterial({ color: 0x071527, roughness: 0.1 });
        const glass = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.7, 1.6), glassMat);
        glass.position.set(3.11, 1.3, 0);
        group.add(glass);

        // Container Trailer
        const trailer = createContainerMesh(0x0A2540, 'GLOBAL ROOOTS');
        trailer.scale.set(0.9, 0.9, 0.9);
        trailer.position.set(-0.8, 1.1, 0);
        group.add(trailer);

        // Wheels
        const wheelMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.9 });
        [-1.8, 0, 2.2].forEach((wx) => {
          [-0.95, 0.95].forEach((wz) => {
            const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.35, 12), wheelMat);
            wheel.rotation.x = Math.PI / 2;
            wheel.position.set(wx, 0.4, wz);
            group.add(wheel);
          });
        });

        return group;
      };

      // G. CURVED 3D GUNTUR CHILLI POD
      const createChilliPodMesh = () => {
        const group = new THREE.Group();
        const podMat = new THREE.MeshStandardMaterial({ color: 0x9E2A2B, roughness: 0.2, metalness: 0.2 });

        const pod = new THREE.Mesh(new THREE.ConeGeometry(0.45, 2.6, 12), podMat);
        pod.rotation.z = Math.PI / 3;
        group.add(pod);

        const stemMat = new THREE.MeshStandardMaterial({ color: 0x2D6A4F });
        const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 0.6), stemMat);
        stem.position.set(-1.1, -0.6, 0);
        stem.rotation.z = -0.4;
        group.add(stem);

        return group;
      };

      // H. 3D GOLDEN TURMERIC ROOT
      const createTurmericRootMesh = () => {
        const group = new THREE.Group();
        const rootMat = new THREE.MeshStandardMaterial({ color: 0xD4A373, roughness: 0.5, metalness: 0.1 });

        const mainKnob = new THREE.Mesh(new THREE.DodecahedronGeometry(0.85), rootMat);
        group.add(mainKnob);

        const knob2 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.55), rootMat);
        knob2.position.set(0.7, 0.4, 0.3);
        group.add(knob2);

        const knob3 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.45), rootMat);
        knob3.position.set(-0.6, -0.4, -0.2);
        group.add(knob3);

        return group;
      };

      // ==========================================================================
      // SCENE ASSEMBLY & 3D ENVIRONMENT LAYERS
      // ==========================================================================

      // --- LAYER 1: Background Port & Cargo Ship (Z = -15 to -8) ---
      shipGroup = createCargoShipMesh();
      shipGroup.position.set(12, -2.5, -12);
      shipGroup.rotation.y = -0.3;
      scene.add(shipGroup);

      craneGroup = createPortCraneMesh();
      craneGroup.position.set(16, -3, -16);
      scene.add(craneGroup);

      // Stacked Port Containers (Far Right Background)
      const stackGroup = new THREE.Group();
      stackGroup.position.set(22, -3, -10);
      const bgColors = [0x0A2540, 0xC87A58, 0x1B4332];
      for (let bx = 0; bx < 3; bx++) {
        for (let by = 0; by < 3; by++) {
          const bgCont = createContainerMesh(bgColors[(bx + by) % bgColors.length], '');
          bgCont.scale.set(0.6, 0.6, 0.6);
          bgCont.position.set(bx * 2.6, by * 1.3, 0);
          stackGroup.add(bgCont);
        }
      }
      scene.add(stackGroup);

      // --- LAYER 2: Middle-ground Supply Journey Elements (Z = -5 to 0) ---

      // Indian Farm (Left)
      farmGroup = new THREE.Group();
      farmGroup.position.set(-15, -2, -6);

      const farmBase = new THREE.Mesh(
        new THREE.CylinderGeometry(6, 7, 1, 24),
        new THREE.MeshStandardMaterial({ color: 0x1B4332, roughness: 0.8 })
      );
      farmBase.position.y = -0.5;
      farmGroup.add(farmBase);

      // Farm Rice Sacks
      for (let i = 0; i < 4; i++) {
        const sack = createGrainSackMesh(i % 2 === 0 ? 0xD4A373 : 0xC29B38);
        sack.scale.set(0.6, 0.6, 0.6);
        sack.position.set(-2 + i * 1.2, 0.6, (i % 2) * 0.8);
        farmGroup.add(sack);
      }
      scene.add(farmGroup);

      // Logistics Truck / Lorry (Center Left)
      lorryGroup = createLogisticsTruckMesh();
      lorryGroup.position.set(-4.5, -2.2, -1);
      lorryGroup.rotation.y = 0.2;
      scene.add(lorryGroup);

      // Export Container Depot (Center Right)
      portGroup = new THREE.Group();
      portGroup.position.set(6, -2.2, -2);
      const depotCont1 = createContainerMesh(0x0A2540, 'GLOBAL ROOOTS');
      depotCont1.scale.set(0.7, 0.7, 0.7);
      depotCont1.position.set(0, 0.7, 0);
      portGroup.add(depotCont1);

      const depotCont2 = createContainerMesh(0xC87A58, 'GLOBAL ROOOTS');
      depotCont2.scale.set(0.7, 0.7, 0.7);
      depotCont2.position.set(0.4, 2.2, 0.2);
      depotCont2.rotation.y = -0.15;
      portGroup.add(depotCont2);
      scene.add(portGroup);

      // --- LAYER 3: Interactive Floating Agricultural & Container Objects ---
      // (Replaces generic cubes/cones with rich items distributed around the screen viewport)

      floatingProductsGroup = new THREE.Group();
      floatingContainersGroup = new THREE.Group();

      // Top-Left Floating Grain Sack
      const floatSack1 = createGrainSackMesh(0xD4A373);
      floatSack1.position.set(-13, 6, 8);
      floatSack1.rotation.set(0.2, 0.4, -0.3);
      floatingProductsGroup.add(floatSack1);

      // Top-Right Floating GLOBAL ROOOTS Container
      const floatCont1 = createContainerMesh(0xC87A58, 'GLOBAL ROOOTS');
      floatCont1.scale.set(0.6, 0.6, 0.6);
      floatCont1.position.set(13, 7, 6);
      floatCont1.rotation.set(-0.2, -0.5, 0.2);
      floatingContainersGroup.add(floatCont1);

      // Bottom-Left Floating Produce Crate
      const floatCrate = createProduceCrateMesh();
      floatCrate.position.set(-14, -5, 10);
      floatCrate.rotation.set(0.3, -0.4, 0.2);
      floatingProductsGroup.add(floatCrate);

      // Bottom-Right Floating GLOBAL ROOOTS Container
      const floatCont2 = createContainerMesh(0x0A2540, 'GLOBAL ROOOTS');
      floatCont2.scale.set(0.65, 0.65, 0.65);
      floatCont2.position.set(14, -5, 8);
      floatCont2.rotation.set(0.15, 0.6, -0.1);
      floatingContainersGroup.add(floatCont2);

      // Middle-Left Floating Guntur Chilli Pod
      const floatChilli = createChilliPodMesh();
      floatChilli.position.set(-9, 1, 14);
      floatChilli.rotation.set(0.4, 0.2, -0.5);
      floatingProductsGroup.add(floatChilli);

      // Middle-Right Floating Turmeric Root
      const floatTurmeric = createTurmericRootMesh();
      floatTurmeric.position.set(9, 2, 14);
      floatTurmeric.rotation.set(-0.3, 0.5, 0.4);
      floatingProductsGroup.add(floatTurmeric);

      scene.add(floatingProductsGroup);
      scene.add(floatingContainersGroup);

      // Floating Ambient Stars / Dust Particles
      const pCount = 180;
      const pGeo = new THREE.BufferGeometry();
      const pPos = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount * 3; i += 3) {
        pPos[i] = (Math.random() - 0.5) * 90;
        pPos[i + 1] = (Math.random() - 0.5) * 50 + 5;
        pPos[i + 2] = (Math.random() - 0.5) * 40 - 5;
      }
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
      const particlesMat = new THREE.PointsMaterial({
        size: 0.35,
        color: 0xE29578,
        transparent: true,
        opacity: 0.65
      });
      const particles = new THREE.Points(pGeo, particlesMat);
      scene.add(particles);

      // ==========================================================================
      // MOUSE & TOUCH INTERACTION ENGINE (Smooth Easing ~60 FPS)
      // ==========================================================================

      let mouseX = 0, mouseY = 0;
      let targetMouseX = 0, targetMouseY = 0;

      const handleMouseMove = (e) => {
        const rect = container.getBoundingClientRect();
        targetMouseX = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
        targetMouseY = -(((e.clientY - rect.top) / container.clientHeight) * 2 - 1);
      };

      const handleTouchMove = (e) => {
        if (e.touches.length > 0) {
          const rect = container.getBoundingClientRect();
          targetMouseX = ((e.touches[0].clientX - rect.left) / container.clientWidth) * 2 - 1;
          targetMouseY = -(((e.touches[0].clientY - rect.top) / container.clientHeight) * 2 - 1);
        }
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);

      const handleResize = () => {
        if (!container) return;
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener('resize', handleResize);

      // Render Loop
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        // Smooth Mouse Lerp Damping (Easing factor 0.045)
        mouseX += (targetMouseX - mouseX) * 0.045;
        mouseY += (targetMouseY - mouseY) * 0.045;

        // Camera Follow Response
        camera.position.x = mouseX * 2.8;
        camera.position.y = 4 + mouseY * 1.8;
        camera.lookAt(0, 0, 0);

        // Global Scene Subtle Rotation Tilt
        scene.rotation.y = mouseX * 0.12;
        scene.rotation.x = -mouseY * 0.08;

        // Distinct Layer Parallax Responses
        // 1. Foreground Floating Products & Containers (Highest Parallax Multiplier = 4.0)
        floatingProductsGroup.position.x = mouseX * 4.2;
        floatingProductsGroup.position.y = mouseY * 2.4;
        floatingProductsGroup.rotation.y += 0.004;

        floatingContainersGroup.position.x = mouseX * 3.8;
        floatingContainersGroup.position.y = mouseY * 2.2;
        floatingContainersGroup.rotation.y -= 0.003;

        // 2. Middle-ground Supply Chain Nodes (Medium Parallax Multiplier = 1.8)
        farmGroup.position.x = -15 + mouseX * 1.8;
        lorryGroup.position.x = -4.5 + mouseX * 1.5;
        portGroup.position.x = 6 + mouseX * 1.5;

        // 3. Background Cargo Ship & Crane (Subtle Parallax Multiplier = 0.8)
        shipGroup.position.x = 12 + mouseX * 0.8;
        shipGroup.position.y = -2.5 + mouseY * 0.4;
        craneGroup.position.x = 16 + mouseX * 0.5;

        // Subtle Continuous Floating Wave Motion
        const time = Date.now() * 0.0012;
        shipGroup.position.y = -2.5 + Math.sin(time * 1.2) * 0.25;
        shipGroup.rotation.z = Math.sin(time * 0.9) * 0.02;

        floatSack1.rotation.y += 0.008;
        floatCont1.rotation.y += 0.006;
        floatCrate.rotation.x += 0.005;
        floatCont2.rotation.y -= 0.007;
        floatChilli.rotation.y += 0.01;
        floatTurmeric.rotation.z += 0.009;

        particles.rotation.y = time * 0.015;

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        if (renderer && renderer.domElement) {
          container.removeChild(renderer.domElement);
        }
      };
    };

    if (!window.THREE) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
      script.async = true;
      script.onload = () => initThree();
      document.head.appendChild(script);
    } else {
      initThree();
    }
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    />
  );
};

export default Hero3DCanvas;
