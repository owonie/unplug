/**
 * Atlas Loader — loads sprite atlas textures for items and VFX
 * Based on art handoff integration/three-atlas-loader.ts
 */
import * as THREE from 'three';

/**
 * Apply atlas frame coordinates to a texture (creates a cloned texture with UV offset/repeat)
 * Atlas JSON uses top-left origin; Three.js UV uses bottom-left.
 */
export function applyAtlasFrame(texture, atlas, frameName) {
  const entry = atlas.frames[frameName];
  if (!entry) { console.warn(`Unknown atlas frame: ${frameName}`); return texture; }
  const { x, y, w, h } = entry.frame;
  const atlasWidth = atlas.meta.size.w;
  const atlasHeight = atlas.meta.size.h;

  const frameTexture = texture.clone();
  frameTexture.needsUpdate = true;
  frameTexture.colorSpace = THREE.SRGBColorSpace;
  frameTexture.wrapS = THREE.ClampToEdgeWrapping;
  frameTexture.wrapT = THREE.ClampToEdgeWrapping;
  frameTexture.repeat.set(w / atlasWidth, h / atlasHeight);
  // Convert top-left origin to bottom-left origin
  frameTexture.offset.set(x / atlasWidth, 1 - (y + h) / atlasHeight);
  return frameTexture;
}

/** VFX material: additive blending, no depth write, not tone mapped */
export function makeVfxMaterial(texture) {
  return new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    depthTest: true,
    toneMapped: false,
  });
}

/** Item material: normal alpha blending */
export function makeItemMaterial(texture) {
  return new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    alphaTest: 0.02,
    depthWrite: false,
    depthTest: true,
    toneMapped: false,
  });
}

/**
 * Load and cache an atlas (texture + JSON)
 * Returns { texture, atlas, getFrame(name) }
 */
export async function loadAtlas(basePath) {
  const loader = new THREE.TextureLoader();
  const [atlas, texture] = await Promise.all([
    fetch(`${basePath}.json`).then(r => r.json()),
    loader.loadAsync(`${basePath}.png`),
  ]);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  return {
    texture,
    atlas,
    getFrame(name) {
      return applyAtlasFrame(texture, atlas, name);
    },
  };
}
