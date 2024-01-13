

export type ModelExtra = {
    // Structure du ModelExtra
    model_id: number;
    modelSpecificProp: string;
}

export type BaselineExtra = {
    // Structure du BaselineExtra
    baseline_id: number;
    baselineSpecificProp: string;
}

// Type conditionnel pour DocumentA
export type DocumentA<DocumentT extends ModelExtra | BaselineExtra> = {
    sections: DocumentT extends ModelExtra ? Array<Section<SectionModel>> : Array<Section<SectionBaseline>>;
    document_id: number;
    // Autres propriétés de DocumentA
} & DocumentT;


export type SectionModel = {
    // Propriétés spécifiques à SectionModel
    section_model: number;
}

export type SectionBaseline = {
    // Propriétés spécifiques à SectionBaseline
    section_baseline: number;
}


// Type conditionnel pour Section
export type Section<SectionT extends SectionModel | SectionBaseline> = {
    blocks: SectionT extends SectionModel ? Array<Block<BlockModel>> : Array<Block<BlockBaseline>>;
    name: string;
    // Autres propriétés de Section
} & SectionT;


export type BlockModel = {
    // Propriétés spécifiques à BlockModel
    block_model: number;
}

export type BlockBaseline = {
    // Propriétés spécifiques à BlockBaseline
    block_baseline: number;
}

// Type pour Block
export type Block<BlockT extends BlockModel | BlockBaseline> = {
    name: string;
    // Propriétés de Block
} & BlockT;

// Document de type Model
const documentModel: DocumentA<ModelExtra> = {
    document_id: 1,
    model_id: 101,
    modelSpecificProp: "Spécifique au modèle",
    sections: [
        {
            name: "Section 1 pour Modèle",
            section_model: 201,
            blocks: [
                {
                    name: "Block 1 pour Modèle",
                    block_model: 301
                },
                {
                    name: "Block 2 pour Modèle",
                    block_model: 302
                }
            ]
        },
        {
            name: "Section 2 pour Modèle",
            section_model: 202,
            blocks: [
                {
                    name: "Block 3 pour Modèle",
                    block_model: 303
                }
            ]
        }
    ]
};

// Document de type Baseline
const documentBaseline: DocumentA<BaselineExtra> = {
    document_id: 2,
    baseline_id: 102,
    baselineSpecificProp: "Spécifique au Baseline",
    sections: [
        {
            name: "Section 1 pour Baseline",
            section_baseline: 203,
            blocks: [
                {
                    name: "Block 1 pour Baseline",
                    block_baseline: 304
                }
            ]
        }
    ]
};

console.log(documentModel);
console.log(documentBaseline);
