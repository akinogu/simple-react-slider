import React from 'react';
interface Props {
    width: string;
    itemWidth: number;
    lastDisplayItemCounts: number;
    type: string;
    onClickPrevButton: (e: Event) => void;
    onClickNextButton: (e: Event) => void;
}
declare const Slider: React.FC<Props>;
export default Slider;
