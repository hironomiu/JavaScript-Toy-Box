import * as THREE from 'three'
import TrackballControls from 'three-trackballcontrols'

window.addEventListener('DOMContentLoaded', init)

function init() {
  const width = 960
  const height = 540

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas'),
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(width, height)

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x404040)

  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000)
  camera.position.set(0, 0, +1000)

  const trackball = new TrackballControls(camera, renderer.domElement)
  trackball.rotateSpeed = 5.0 //回転速度
  trackball.zoomSpeed = 0.5 //ズーム速度
  trackball.panSpeed = 2.0 //パン速度

  const geometry = new THREE.TorusGeometry(150, 60, 50, 150)
  const material = new THREE.MeshStandardMaterial({
    color: 0x25b7c0,
  })

  const torus = new THREE.Mesh(geometry, material)
  torus.position.set(300, -100, 0)
  scene.add(torus)

  const geometry2 = new THREE.BoxGeometry(300, 300, 300)
  const box = new THREE.Mesh(geometry2, material)
  box.position.set(-200, 100, 0)
  scene.add(box)

  const directionalLight = new THREE.DirectionalLight(0xffffff)
  directionalLight.position.set(1, 1, 1)
  scene.add(directionalLight)

  tick()

  function tick() {
    requestAnimationFrame(tick)

    torus.rotation.x += 0.02
    torus.rotation.y += 0.02

    box.rotation.x -= 0.01
    box.rotation.y -= 0.01

    renderer.render(scene, camera)
    trackball.update()
  }
}
