import { useState } from "react";

import { Modal } from "../../components/index";
import { SignupForm } from "./signupForm";

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

    const views = [<SignupForm setShow={setShow} nextView={nextView} />, <div>setp2</div>, <div>setp3</div>];

    return (
        <Modal>
            <div className='flex justify-end'>
                {currentStepIndex + 1}/ {views.length}
            </div>
            <div className='h-full w-full'>{views[currentStepIndex]}</div>
        </Modal>
    );
}
