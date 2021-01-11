/**
 * type-only imports from {@code babylonjs/core} that compiles to nothing.
 */
import { Mesh, MeshBuilder, TransformNode } from '@babylonjs/core/Meshes';
import { Vector3, Color4, Matrix } from '@babylonjs/core/Maths';

/**
 * babylon is a injected dependency rather than import/require-d
 * so that we can support different builds (es5 / es6 / standalone <script />)
 *
 * caller should ensure all deps (including transitive Material etc) are available
 */
export declare interface BabylonDeps {
  Mesh: typeof Mesh;
  MeshBuilder: typeof MeshBuilder;
  Vector3: typeof Vector3;
  Color4: typeof Color4;
  Matrix: typeof Matrix;
  TransformNode: typeof TransformNode;
}