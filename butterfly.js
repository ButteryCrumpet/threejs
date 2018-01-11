
var butterly = function() {

  var vertices = new Float32Array([
    0.0, 0.0, 0.0,
    0.0, 1.0, 0.0,
    0.0, 0.0, 1.0,

    0.0, 0.0, 0.0,
    0.0, -1.0, 0.0,
    0.0, 0.0, -1.0,
  ]);

  this.geometry = new THREE.BufferGeometry()
  this.geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));
  this.material = new THREE.MeshBasicMaterial({color: 0xff0000});
  this.mesh = new THREE.Mesh(this.geometry, this.material);
}

var otherButterfly = function() {
  this.geometry = new THREE.Geometry()
  this.geometry.vertices.push(new THREE.Vector3(0, 0, 0));
  this.geometry.vertices.push(new THREE.Vector3(0, 1, 0));
  this.geometry.vertices.push(new THREE.Vector3(1, 0, 0));

  var face = new THREE.Face3(0, 1, 2);
  this.geometry.faces.push(face);
  this.geometry.computeFaceNormals();
  this.geometry.computeVertexNormals();

  this.material = new THREE.MeshBasicMaterial({color: 0xff0000});
  this.mesh = new THREE.Mesh(this.geometry, this.material);
}