import { NamedVariableMap } from '../types';
import { Optimizer } from './optimizer';
export declare class RMSPropOptimizer extends Optimizer {
    protected learningRate: number;
    private c;
    private epsilon;
    private decay;
    private momentum;
    private oneMinusDecay;
    private accumulatedMeanSquares;
    private accumulatedMoments;
    constructor(learningRate: number, decay?: number, momentum?: number, epsilon?: number);
    applyGradients(variableGradients: NamedVariableMap): void;
    dispose(): void;
}
