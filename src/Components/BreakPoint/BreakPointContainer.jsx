
import React from 'react';
import { Container, Description, BreakPointElement } from '../index'

export function BreakPointContainer( { description, breakPoints, vertical } ) {

    let breakPointsComputed = [];
    Object.keys(breakPoints).forEach(breakPoint => {
        breakPointsComputed.push({
            name: breakPoint,
            breakPoint: breakPoints[breakPoint],
            computed: getComputed(breakPoints[breakPoint]) 
        })
    });

    breakPointsComputed.sort((a,b) =>  b.computed - a.computed);

    breakPointsComputed.forEach(breakPoint => {
        let computed = breakPoint.computed
        let p = 100;
        let first = breakPointsComputed[0]?.computed;
        if(computed !== first) {
            p = 100 / first * computed
        };
        breakPoint.percent = p;
    });

    function getComputed( { value }) {
        return parseInt(value.substring(0, value.length - 2));
    }

    return <div>
        <Container alignedBottom>
        <h2 className="text-xl leading-xl mb-sm">Breakpoint</h2>
        { description && 
            <Description>
                <p>Kurzer Beschreibungstext</p>
            </Description>
        }
            </Container>
        <div className={`block w-full`}>
            { breakPointsComputed.map((breakPoint, index) => (
                <BreakPointElement 
                    name={ breakPoint.name } 
                    breakPoint={ breakPoint.breakPoint } 
                    percent={ breakPoint.percent } 
                    index={index} key={ breakPoint.name }
                    length={ breakPointsComputed.length }></BreakPointElement>
            ))}
        </div>
    </div>
};

BreakPointContainer.defaultProps = {
    description: true
};  