import { CoreModule } from "../core-module";
import { CosmosInputNode, CosmosInputLink } from "../../types";
export declare class Lines<N extends CosmosInputNode, L extends CosmosInputLink> extends CoreModule<N, L> {
    private drawCurveCommand;
    private colorBuffer;
    private widthBuffer;
    private arrowBuffer;
    private curveLineGeometry;
    private curveLineBuffer;
    create(): void;
    initPrograms(): void;
    draw(): void;
    updateColor(): void;
    updateWidth(): void;
    updateArrow(): void;
    updateCurveLineGeometry(): void;
    destroy(): void;
}
