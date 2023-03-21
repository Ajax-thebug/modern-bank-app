import React from 'react';
import {arrowUp} from "../assets/index.js";
import styles from "../style.js";


const GetStarted = () =>
     (
        <div className={`${styles.flexCenter} cursor-pointer 
        w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px]`}>
            <div className={`${styles.flexCenter} flex-col w-[100%] h-[100%] bg-primary rounded-full`}>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
                        <span className="text-gradient">Get</span>
                    </p>
                    <img src={arrowUp} className="w-[23px] h-[23px] object-contain"/>

            </div>
                <p className="text-gradient font-poppins font-medium text-[18px]">Started</p>

            </div>

        </div>
    )


export default GetStarted