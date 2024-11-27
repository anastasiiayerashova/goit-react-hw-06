import s from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useId } from 'react';
import { FaRegAddressBook } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

const FeedbackScheme = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
})

export default function ContactForm() {
    const nameId = useId()
    const numberId = useId()
    return (
        <div className={s.formDiv}>
            <h1 className={s.title}>Phonebook<FaRegAddressBook /></h1>
            <Formik validationSchema={FeedbackScheme}>
                <Form className={s.form}>
                    <label htmlFor={nameId}>Name</label>
                    <Field type='text' id={nameId} name='name' className={s.inputs} />
                    <ErrorMessage name='name' component='span' className={s.error}></ErrorMessage>
                    <label htmlFor={numberId}>Number</label>
                    <Field type='number' id={numberId} name='number' className={s.inputs} />
                    <ErrorMessage name='number' component='span' className={s.error}></ErrorMessage>
                    <button type='submit' className={s.addBtn}>Add contact<MdAdd /></button>
                </Form>
            </Formik>
        </div>
    )
}