import React, { useEffect, useState } from 'react'
import { ModelComponent } from './ModelComponent';
import { Selection, EffectComposer, Outline } from '@react-three/postprocessing'

//set to true to load models from server

export function ModelManager(props) {

    const [models, setModels] = useState(getModels());

    useEffect(() => {
        setModels(getModels())
    }, [props.rootPoints, props.modelToHighlight])

    function getModels() {
        let a = [];
        a.push({ name: props.rootPoints[2].name, model: "/generic_tp.glb", id: props.rootPoints[2].id, show: props.rootPoints[2].showModel, highlight: (props.modelToHighlight === 2) })
        a.push({ name: props.rootPoints[3].name, model: "/generic_jacket.glb", id: props.rootPoints[3].id, show: props.rootPoints[3].showModel, highlight: (props.modelToHighlight === 3) })
        a.push({ name: props.rootPoints[1].name, model: "/generic_wtg.glb", id: props.rootPoints[1].id, show: props.rootPoints[1].showModel, highlight: (props.modelToHighlight === 1) })
        return a;
    }

    return (
        <Selection>
            <EffectComposer multisampling={8} autoClear={false}>
                <Outline blur visibleEdgeColor="red" edgeStrength={1000} width={1000} />
            </EffectComposer>
            {
                models.map((model) => {
                    return <ModelComponent conf={model}/>
                })
            }
        </Selection>
    );
}


