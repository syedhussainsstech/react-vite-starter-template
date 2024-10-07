import { Button } from 'reactstrap';
import AppModals from '../Modals';
import AppButton from '../Buttons';

const ConfirmDialog = ({ open, close, btnLoading, btnText, submitTimeSheet, variant, heading, text }) => {
    return (
        <AppModals
            open={open}
            close={close}
            headerClass="bg-white"
            center
            backdrop="static"
            keyboard={false}
        >
            <div className="p-2 py-2 pb-2 pt-0">
                <div>
                    <div className="text-center mb-2">
                        <h2 className="mb-1 fw-bolder">{heading}</h2>
                        <small>{text}</small>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className="d-flex justify-content-evenly">
                            <Button.Ripple
                                color="flat-secondary"
                                className="me-1"
                                onClick={close}
                                disabled={btnLoading}
                            >
                                <span>Cancel</span>
                            </Button.Ripple>
                            <AppButton
                                color={variant}
                                isSubmit
                                type="fill"
                                disabled={btnLoading}
                                spinner={btnLoading}
                                spinnerType="border"
                                id="update-timesheet-button"
                                icon={false}
                                handleClick={submitTimeSheet}
                            >
                                <span className="align-middle">{btnText}</span>
                            </AppButton>
                        </div>
                    </div>
                </div>
            </div>
        </AppModals>
    );
};

export default ConfirmDialog;