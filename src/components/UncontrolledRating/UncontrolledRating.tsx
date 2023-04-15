import React, { MouseEventHandler, useState } from 'react';
import styles from './UncontrolledRating.module.css'

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingPropsType) {
    // debugger
    // console.log('OnOff rendering')

    let [value, setValue] = useState(0)

    const onClickValueHandler = (value: number) => {
        setValue(value)
    }

    // const brnStyle = {
    //     margin: '0 5px',
    //     // backgroundColor: 'red',
    //     // backgroundColor: selected ? '#654ec2' : 'red',
    //     color: 'white'
    // }
    //
    // const btnStyle = {
    //     // backgroundColor: '#654ec2',
    // }

    return (
        <div>

            <Star selected={ value > 0 } onClickValueHandler={() => onClickValueHandler(1)}/>
            <Star selected={ value > 1 } onClickValueHandler={() => onClickValueHandler(2)}/>
            <Star selected={ value > 2 } onClickValueHandler={() => onClickValueHandler(3)}/>
            <Star selected={ value > 3 } onClickValueHandler={() => onClickValueHandler(4)}/>
            <Star selected={ value > 4 } onClickValueHandler={() => onClickValueHandler(5)}/>

            {/*<Star selected={ value > 0 } onClickValueHandler={onClickValueHandler}/>*/}
            {/*<button className={value > 0 ? styles.btnStyleCool : styles.btnStyle} onClick={() => onClickValueHandler(1)}>1</button>*/}
            {/*<Star selected={ value > 1 } onClickValueHandler={onClickValueHandler}/>*/}
            {/*<button className={value > 1 ? styles.btnStyleCool : styles.btnStyle} onClick={() => onClickValueHandler(2)}>2</button>*/}
            {/*<Star selected={ value > 2 } onClickValueHandler={onClickValueHandler}/>*/}
            {/*<button className={value > 2 ? styles.btnStyleCool : styles.btnStyle} onClick={() => onClickValueHandler(3)}>3</button>*/}
            {/*<Star selected={ value > 3 } onClickValueHandler={onClickValueHandler}/>*/}
            {/*<button className={value > 3 ? styles.btnStyleCool : styles.btnStyle} onClick={() => onClickValueHandler(4)}>4</button>*/}
            {/*<Star selected={ value > 4 } onClickValueHandler={onClickValueHandler}/>*/}
            {/*<button className={value > 4 ? styles.btnStyleCool : styles.btnStyle} onClick={() => onClickValueHandler(5)}>5</button>*/}

            {/*<Star selected={ value > 0 } /><button>1</button>*/}
            {/*<Star selected={ value > 1 } /><button>2</button>*/}
            {/*<Star selected={ value > 2 } /><button>3</button>*/}
            {/*<Star selected={ value > 3 } /><button>4</button>*/}
            {/*<Star selected={ value > 4 } /><button>5</button>*/}
        </div>
    )
}

type StarPropType = {
    selected: boolean
    onClickValueHandler: () => void
}

function Star(props: StarPropType) {
    // console.log('Star rendering')
    if (props.selected) {
        return <span onClick={props.onClickValueHandler}><b> Star </b> </span>
    } else {
        return <span  onClick={props.onClickValueHandler}> Star </span>
    }
}