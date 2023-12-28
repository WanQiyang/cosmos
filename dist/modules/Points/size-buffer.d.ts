import regl from 'regl';
import { NumericAccessor } from "../../config";
import { GraphData } from "../GraphData";
import { CosmosInputNode, CosmosInputLink } from "../../types";
export declare function getNodeSize<N extends CosmosInputNode>(node: N, sizeAccessor: NumericAccessor<N>, index?: number): number;
export declare function createSizeBufferAndFillSizeStore<N extends CosmosInputNode, L extends CosmosInputLink>(data: GraphData<N, L>, reglInstance: regl.Regl, pointTextureSize: number, sizeAccessor: NumericAccessor<N>, sizeStore: Float32Array): regl.Framebuffer2D | undefined;
