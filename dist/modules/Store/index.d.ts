import { mat3 } from 'gl-matrix';
export declare const ALPHA_MIN = 0.001;
export declare const MAX_POINT_SIZE = 64;
declare type Hovered<Node> = {
    node: Node;
    index: number;
    position: [number, number];
};
declare type Focused<Node> = {
    node: Node;
    index: number;
};
export declare class Store<N> {
    pointsTextureSize: number;
    linksTextureSize: number;
    alpha: number;
    transform: mat3;
    backgroundColor: [number, number, number, number];
    screenSize: [number, number];
    mousePosition: number[];
    screenMousePosition: number[];
    selectedArea: number[][];
    isSimulationRunning: boolean;
    simulationProgress: number;
    selectedIndices: Float32Array | null;
    maxPointSize: number;
    hoveredNode: Hovered<N> | undefined;
    focusedNode: Focused<N> | undefined;
    adjustedSpaceSize: number;
    hoveredNodeRingColor: number[];
    focusedNodeRingColor: number[];
    private alphaTarget;
    private scaleNodeX;
    private scaleNodeY;
    private random;
    addRandomSeed(seed: number | string): void;
    getRandomFloat(min: number, max: number): number;
    /**
     * If the config parameter `spaceSize` exceeds the limits of WebGL,
     * it reduces the space size without changing the config parameter.
     */
    adjustSpaceSize(configSpaceSize: number, webglMaxTextureSize: number): void;
    updateScreenSize(width: number, height: number): void;
    scaleX(x: number): number;
    scaleY(y: number): number;
    setHoveredNodeRingColor(color: string): void;
    setFocusedNodeRingColor(color: string): void;
    setFocusedNode(node?: N, index?: number): void;
    addAlpha(decay: number): number;
    private alphaDecay;
}
export {};
