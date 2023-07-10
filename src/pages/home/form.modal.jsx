import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { Modal } from "../../components/index";
import { SignupForm } from "./signupForm";
import { DetailForm } from "./detailForm";
import { ConfirmStep } from "./confirmStep";

export function FormModal({ setShow }) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const nextView = () => {
        setCurrentStepIndex((currentStep) => {
            if (currentStep >= views.length - 1) return currentStep;
            return currentStep + 1;
        });
    };

    const previousView = () => {
        setCurrentStepIndex((currentStep) => {
            if (currentStep <= 0) return currentStep;
            return currentStep - 1;
        });
    };

    const views = [
        <SignupForm setShow={setShow} nextView={nextView} />,
        <DetailForm nextView={nextView} previousView={previousView} />,
        <ConfirmStep setShow={setShow} previousView={previousView} />,
    ];

    return (
        <Modal>
            <div className='flex justify-between'>
                {currentStepIndex + 1}/ {views.length}
                <div className=' '>
                    <AiOutlineClose onClick={() => setShow(false)} className='cursor-pointer' size={25} />
                </div>
            </div>
            <div className='h-full w-full'>{views[currentStepIndex]}</div>
        </Modal>
    );
}
