import {Button, Modal, ModalActions, ModalContent, ModalDescription, ModalHeader} from "semantic-ui-react";
import BudgetForm from "./budget-form";

export default function EditModal({isOpen, setIsOpen, desc, value, isExpensive, setDesc, setValue, setIsExpensive}) {

    return (
        <Modal open={isOpen}>
            <ModalHeader>Edit Budget</ModalHeader>
            <ModalContent>
                <ModalDescription>
                    <BudgetForm
                        desc={desc}
                        value={value}
                        isExpensive={isExpensive}
                        setDesc={setDesc}
                        setValue={setValue}
                        setIsExpensive={setIsExpensive}>
                    </BudgetForm>
                </ModalDescription>
            </ModalContent>
            <ModalActions>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
                <Button primary onClick={() => setIsOpen(false)}>Save</Button>
            </ModalActions>
        </Modal>
    )
}
