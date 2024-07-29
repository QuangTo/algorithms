//when would keys be unknown until runtime?

function testMaps() {
  const map1 = new Map();
  const obj = {};
  map1.set("a", 1);
  map1.set(obj, 2);

  //   console.log(map1.get(obj));
  // Expected output: 1

  for (let key of map1.keys()) {
    console.log(key, map1.values(key));
  }
}

testMaps();
