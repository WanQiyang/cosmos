import regl from 'regl';
import { CoreModule } from "../core-module";
import { CosmosInputNode, CosmosInputLink } from "../../types";
export declare class Points<N extends CosmosInputNode, L extends CosmosInputLink> extends CoreModule<N, L> {
    currentPositionFbo: regl.Framebuffer2D | undefined;
    previousPositionFbo: regl.Framebuffer2D | undefined;
    velocityFbo: regl.Framebuffer2D | undefined;
    selectedFbo: regl.Framebuffer2D | undefined;
    colorFbo: regl.Framebuffer2D | undefined;
    hoveredFbo: regl.Framebuffer2D | undefined;
    greyoutStatusFbo: regl.Framebuffer2D | undefined;
    sizeFbo: regl.Framebuffer2D | undefined;
    trackedIndicesFbo: regl.Framebuffer2D | undefined;
    trackedPositionsFbo: regl.Framebuffer2D | undefined;
    sampledNodesFbo: regl.Framebuffer2D | undefined;
    private drawCommand;
    private drawHighlightedCommand;
    private updatePositionCommand;
    private findPointsOnAreaSelectionCommand;
    private findHoveredPointCommand;
    private clearHoveredFboCommand;
    private clearSampledNodesFboCommand;
    private fillSampledNodesFboCommand;
    private trackPointsCommand;
    private trackedIds;
    private trackedPositionsById;
    private sizeByIndex;
    create(): void;
    initPrograms(): void;
    updateColor(): void;
    updateGreyoutStatus(): void;
    updateSize(): void;
    updateSampledNodesGrid(): void;
    trackPoints(): void;
    draw(): void;
    updatePosition(): void;
    findPointsOnAreaSelection(): void;
    findHoveredPoint(): void;
    getNodeRadiusByIndex(index: number): number | undefined;
    trackNodesByIds(ids: string[]): void;
    getTrackedPositions(): Map<string, [number, number]>;
    getSampledNodePositionsMap(): Map<string, [number, number]>;
    destroy(): void;
    private swapFbo;
    private rescaleInitialNodePositions;
}
